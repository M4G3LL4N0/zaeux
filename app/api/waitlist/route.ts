import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import type { Database } from "@/types/database";

type WaitlistEntry = Database["zaeux"]["Tables"]["waitlist"]["Insert"];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.email || !body.full_name) {
      return NextResponse.json(
        { success: false, error: "Email and full name are required" },
        { status: 400 }
      );
    }

    // Prepare clean data
    const waitlistData: WaitlistEntry = {
      full_name: body.full_name?.trim() || null,
      email: body.email.trim(),
      company: body.company?.trim() || null,
      interest: body.interest || null,
      source: "web",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      metadata: body.metadata || null
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
            : "Failed to join waitlist" 
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
      { success: false, error: "An unexpected error occurred" },
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
      { success: false, error: "Failed to fetch waitlist" },
      { status: 500 }
    );
  }
}
