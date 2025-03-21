import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "../(lib)/mongodb";
import Course from "../(model)/Course";
import { uploadToCloudinary } from "../(lib)/cloudinary";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    // Parse form data
    const formData = await req.formData();

    // Extract non-file fields
    const year = formData.get("year") as string;
    const branch = formData.get("branch") as string;
    const subjects = JSON.parse(formData.get("subjects") as string);

    if (!year || !branch || !subjects || !Array.isArray(subjects)) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Process subjects and upload files to Cloudinary
    const processedSubjects = await Promise.all(
      subjects.map(async (subject: any, subjectIndex: number) => {
        if (!subject.name.trim()) {
          return null; // Skip if name is missing
        }

        // Handle subject notes file
        const notesFile = formData.get(`notes-file-${subjectIndex}`) as File | null;
        if (!notesFile) {
          return null; // Skip if file is missing
        }

        // Convert file to buffer for Cloudinary upload
        const notesFileBuffer = Buffer.from(await notesFile.arrayBuffer());
        
        // Create a folder path based on year and branch
        const folderPath = `engineering-notes/${year.replace(/\s+/g, '-').toLowerCase()}/${branch.replace(/\s+/g, '-').toLowerCase()}`;
        
        // Create a unique filename
        const fileName = `${subject.name.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}`;
        
        // Upload file to Cloudinary
        const notesFileUrl = await uploadToCloudinary(
          notesFileBuffer,
          folderPath,
          fileName
        );
        
        // Extract the public ID from the URL
        const publicId = `${folderPath}/${fileName}`;

        return {
          name: subject.name.trim(),
          notesFileUrl,
          publicId
        };
      })
    );

    // Filter out null subjects
    const validSubjects = processedSubjects.filter((subject) => subject !== null);

    if (validSubjects.length === 0) {
      return NextResponse.json(
        { message: "No valid subjects provided" },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const newCourse = new Course({
      year,
      branch,
      subjects: validSubjects,
    });

    await newCourse.save();

    return NextResponse.json(
      {
        message: "Course added successfully!",
        course: newCourse,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving course:", error);
    return NextResponse.json(
      {
        message: "Error saving course",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    
    // Get query parameters
    const url = new URL(req.url);
    const year = url.searchParams.get("year");
    const branch = url.searchParams.get("branch");
    
    // Build query based on provided filters
    const query: any = {};
    if (year) query.year = year;
    if (branch) query.branch = branch;
    
    // Fetch courses matching the query
    const courses = await Course.find(query).select('year branch subjects.name subjects.notesFileUrl');
    
    return NextResponse.json(
      { courses },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      {
        message: "Error fetching courses",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}