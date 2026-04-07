import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type WaitlistPayload = {
  full_name?: string | null;
  email?: string | null;
  company?: string | null;
  interest?: string | null;
  source?: string | null;
  metadata?: Record<string, unknown> | null;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getServerSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      "Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in Vercel."
    );
  }

  return createClient(url, key, {
    db: { schema: "zaeux" },
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WaitlistPayload;

    const payload = {
      full_name: body.full_name?.trim() || null,
      email: body.email?.trim() || "",
      company: body.company?.trim() || null,
      interest: body.interest?.trim() || null,
      source: body.source?.trim() || "website",
      metadata: body.metadata ?? {},
    };

    if (!payload.email || !isValidEmail(payload.email)) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const supabase = getServerSupabase();

    const { error } = await supabase.from("waitlist").insert([payload]);

    if (error) {
      return NextResponse.json(
        {
          success: false,
          error: error.message || "Failed to join waitlist.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Unexpected server error.",
      },
      { status: 500 }
    );
  }
}
