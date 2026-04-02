import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

type WaitlistEntry = {
  full_name?: string | null;
  email: string;
  company?: string | null;
  interest?: string | null;
  source?: string | null;
  metadata?: Record<string, unknown> | null;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<WaitlistEntry>;

    const payload: WaitlistEntry = {
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
