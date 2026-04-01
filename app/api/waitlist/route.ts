import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import type { Database } from "@/types/database";

type WaitlistEntry = Database["zaeux"]["Tables"]["waitlist"]["Insert"];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.email?.trim()) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Please provide your email address",
          code: "MISSING_EMAIL"
        },
        { status: 400 }
      );
    }
    
    if (!body.full_name?.trim()) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Please provide your full name",
          code: "MISSING_NAME"
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email.trim())) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Please enter a valid email address",
          code: "INVALID_EMAIL"
        },
        { status: 400 }
      );
    }

    // Prepare clean data with explicit types
    const waitlistData: WaitlistEntry = {
      full_name: body.full_name.trim(),
      email: body.email.trim().toLowerCase(),
      company: body.company?.trim() || null,
      source: "web",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // Insert into Supabase
    const { data, error } = await supabase
      .from("waitlist")
      .insert(waitlistData)
      .select()
      .single();

    if (error) {
      console.error("Waitlist insert error:", error);
      return NextResponse.json(
        { 
          success: false, 
          error: error.code === "23505" 
            ? "This email is already on the waitlist" 
            : "Failed to join waitlist",
          code: error.code || "INSERT_ERROR"
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      data: {
        id: data.id,
        email: data.email,
        created_at: data.created_at
      }
    });

  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "An unexpected error occurred",
        code: "UNKNOWN_ERROR"
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("waitlist")
      .select("id,email,full_name,company,created_at")
      .order("created_at", { ascending: false })
      .limit(100);

    if (error) {
      console.error("Waitlist fetch error:", error);
      throw error;
    }

    return NextResponse.json({ 
      success: true, 
      data,
      count: data?.length || 0
    });

  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to fetch waitlist",
        code: "FETCH_ERROR"
      },
      { status: 500 }
    );
  }
}
