"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, GraduationCap, BookOpen, Library } from "lucide-react";

const engineeringYears = [
  "First Year",
  "Second Year",
  "Third Year",
  "Final Year",
];

const branches = [
  "Computer Engineering",
  "Information Technology",
  "Electronics & Telecommunication",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
];

// Restructured subjects object to account for year and branch
const subjects = {
  "First Year": {
    "Computer Engineering": [
      "Engineering Mathematics I",
      "Physics",
      "Chemistry",
      "Basic Electrical Engineering",
      "Programming Fundamentals",
    ],
    "Information Technology": [
      "Engineering Mathematics I",
      "Physics",
      "Chemistry",
      "Basic Electrical Engineering",
      "Introduction to IT Systems",
    ],
    "Electronics & Telecommunication": [
      "Engineering Mathematics I",
      "Physics",
      "Chemistry",
      "Basic Electrical Engineering",
      "Electronic Components",
    ],
    "Mechanical Engineering": [
      "Engineering Mathematics I",
      "Physics",
      "Chemistry",
      "Engineering Graphics",
      "Workshop Practice",
    ],
    "Civil Engineering": [
      "Engineering Mathematics I",
      "Physics",
      "Chemistry",
      "Engineering Graphics",
      "Environmental Studies",
    ],
    "Electrical Engineering": [
      "Engineering Mathematics I",
      "Physics",
      "Chemistry",
      "Basic Electrical Engineering",
      "Electrical Circuits",
    ],
  },
  "Second Year": {
    "Computer Engineering": [
      "Data Structures & Algorithms",
      "Digital Logic Design",
      "Object-Oriented Programming",
      "Computer Organization",
      "Discrete Mathematics",
    ],
    "Information Technology": [
      "Data Structures & Algorithms",
      "Web Development",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks Basics",
    ],
    "Electronics & Telecommunication": [
      "Analog Circuits",
      "Digital Electronics",
      "Signals & Systems",
      "Electrical Networks",
      "Electronic Instruments",
    ],
    "Mechanical Engineering": [
      "Engineering Mechanics",
      "Strength of Materials",
      "Thermodynamics",
      "Manufacturing Processes I",
      "Material Science",
    ],
    "Civil Engineering": [
      "Surveying",
      "Building Materials",
      "Strength of Materials",
      "Fluid Mechanics I",
      "Structural Analysis I",
    ],
    "Electrical Engineering": [
      "Electromagnetic Fields",
      "Electrical Measurements",
      "Electrical Machines I",
      "Analog Electronics",
      "Digital Electronics",
    ],
  },
  "Third Year": {
    "Computer Engineering": [
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Theory of Computation",
      "Software Engineering",
    ],
    "Information Technology": [
      "Operating Systems",
      "Advanced Database Systems",
      "Computer Networks",
      "Information Security",
      "Software Engineering",
    ],
    "Electronics & Telecommunication": [
      "Communication Systems",
      "Microprocessors & Microcontrollers",
      "Digital Signal Processing",
      "Control Systems",
      "Electromagnetic Waves",
    ],
    "Mechanical Engineering": [
      "Heat Transfer",
      "Design of Machine Elements",
      "Fluid Mechanics",
      "Manufacturing Processes II",
      "Industrial Engineering",
    ],
    "Civil Engineering": [
      "Geotechnical Engineering",
      "Transportation Engineering",
      "Structural Analysis II",
      "Hydraulics Engineering",
      "Environmental Engineering",
    ],
    "Electrical Engineering": [
      "Power Systems I",
      "Control Systems",
      "Electrical Machines II",
      "Power Electronics",
      "Signal Processing",
    ],
  },
  "Final Year": {
    "Computer Engineering": [
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "Big Data Analytics",
      "Cybersecurity",
    ],
    "Information Technology": [
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "Mobile Computing",
      "Big Data Technologies",
    ],
    "Electronics & Telecommunication": [
      "Wireless Communication",
      "VLSI Design",
      "Antenna & Wave Propagation",
      "Optical Communication",
      "Embedded Systems",
    ],
    "Mechanical Engineering": [
      "CAD/CAM/CAE",
      "Refrigeration & Air Conditioning",
      "Automobile Engineering",
      "Robotics",
      "Power Plant Engineering",
    ],
    "Civil Engineering": [
      "Design of Structures",
      "Construction Management",
      "Water Resource Engineering",
      "Urban Planning",
      "Remote Sensing & GIS",
    ],
    "Electrical Engineering": [
      "Power Systems II",
      "High Voltage Engineering",
      "Renewable Energy Systems",
      "Electrical Drives",
      "Smart Grids",
    ],
  },
};

export default function Courses() {
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [selectedSubject, setSelectedSubject] = useState<string>("");

  const handleYearChange = (value: string) => {
    setSelectedYear(value);
    setSelectedBranch("");
    setSelectedSubject("");
  };

  const handleBranchChange = (value: string) => {
    setSelectedBranch(value);
    setSelectedSubject("");
  };

  const handleSubjectChange = (value: string) => {
    setSelectedSubject(value);
  };

  const handleProceed = () => {
    // Navigate to assessment page with selected options
    window.location.href = `/assessment?year=${encodeURIComponent(
      selectedYear
    )}&branch=${encodeURIComponent(
      selectedBranch
    )}&subject=${encodeURIComponent(selectedSubject)}`;
  };

  return (
    <div className="min-h-screen  py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Course Selection
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Select Year</h2>
            </div>
            <Select value={selectedYear} onValueChange={handleYearChange}>
              <SelectTrigger>
                <SelectValue placeholder="Choose your year" />
              </SelectTrigger>
              <SelectContent>
                {engineeringYears.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Card>

          <Card className={`p-6 ${!selectedYear ? "opacity-50" : ""}`}>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Select Branch</h2>
            </div>
            <Select
              value={selectedBranch}
              onValueChange={handleBranchChange}
              disabled={!selectedYear}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose your branch" />
              </SelectTrigger>
              <SelectContent>
                {branches.map((branch) => (
                  <SelectItem key={branch} value={branch}>
                    {branch}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Card>

          <Card className={`p-6 ${!selectedBranch ? "opacity-50" : ""}`}>
            <div className="flex items-center gap-3 mb-4">
              <Library className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Select Subject</h2>
            </div>
            <Select
              value={selectedSubject}
              onValueChange={handleSubjectChange}
              disabled={!selectedBranch}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose your subject" />
              </SelectTrigger>
              <SelectContent>
                {selectedYear &&
                  selectedBranch &&
                  subjects[selectedYear as keyof typeof subjects]?.[
                    selectedBranch as keyof (typeof subjects)[keyof typeof subjects]
                  ]?.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </Card>
        </div>

        {selectedSubject && (
          <Button className="w-full mt-8 py-6 text-lg" onClick={handleProceed}>
            Proceed to Learn & Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  );
}
