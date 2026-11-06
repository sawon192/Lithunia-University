import { NextResponse } from "next/server";

function disabled() {
  return NextResponse.json(
    { error: "Server-side bookmarks are disabled. The website saves your shortlist in this browser." },
    { status: 410 }
  );
}

export async function GET() { return disabled(); }
export async function POST() { return disabled(); }
export async function DELETE() { return disabled(); }
