import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { WaitlistEntry } from "@/types/database";

export async function POST(request: Request) {
  const { name, email, company } = await request.json();

  // Simple validation
  if (!name || !email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const { error } = await supabase
    .from('waitlist')
    .insert({
      name,
      email,
      company: company || null
    });

  if (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export async function GET() {
  const { data, error } = await supabase
    .from('waitlist')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }

  return NextResponse.json(data);
}
