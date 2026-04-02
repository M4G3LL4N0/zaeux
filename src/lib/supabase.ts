import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey, {
  db: { schema: "zaeux" },
});

export async function getUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) throw error;
  return user;
}

export async function ensureProfile(userId: string, email: string) {
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .maybeSingle();

  if (error) throw error;

  if (!profile) {
    const { error: insertError } = await supabase
      .from("profiles")
      .insert([{ id: userId, email }]);
    
    if (insertError) throw insertError;
  }
}

export type Profile = {
  id: string;
  email: string | null;
  display_name: string | null;
};

export type Account = {
  id: string;
  user_id: string;
  account_type: string;
  currency: string;
  balance: number;
  yield_earned: number;
  status: string;
};

export type Transaction = {
  id: string;
  user_id: string;
  account_id: string;
  amount: number;
  currency: string;
  type: 'credit' | 'debit';
  description: string | null;
};

export type WaitlistEntry = {
  id: string;
  email: string;
  full_name: string | null;
  company: string | null;
  created_at: string;
};
