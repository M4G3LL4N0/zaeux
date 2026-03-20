import { NextResponse } from "next/server";

type WaitlistEntry = {
  name: string;
  email: string;
  company: string;
  timestamp: number;
};

let waitlistData: WaitlistEntry[] = [];

export async function POST(request: Request) {
  const { name, email, company } = await request.json();

  // Simple validation
  if (!name || !email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const newEntry: WaitlistEntry = {
    name,
    email,
    company: company || "",
    timestamp: Date.now()
  };

  waitlistData.push(newEntry);

  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json(waitlistData);
}
