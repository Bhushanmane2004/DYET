import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        hello: "Geeks For Geeks",
    });
}

export async function POST(req:NextRequest) {
    try {
        const body = await req.json(); // Parse JSON request body
        console.log(body);
        return NextResponse.json({
            message: "Data received successfully",
            data: body,
        });
    } catch (error) {
        return NextResponse.json(
            { error: "Invalid request body" },
            { status: 400 }
        );
    }
}
