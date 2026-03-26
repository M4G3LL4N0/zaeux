export interface WaitlistEntry {
  full_name?: string | null;
  email: string;
  company?: string | null;
  interest?: string | null;
  source?: string | null;
  metadata?: Record<string, unknown>;
};

export type Profile = {
  id: string;
  email?: string | null;
  display_name?: string | null;
  avatar_url?: string | null;
  role?: string;
  created_at?: string;
  updated_at?: string;
};

export type Account = {
  id: string;
  user_id: string;
  account_type?: string;
  currency?: string;
  balance?: string | number;
  yield_earned?: string | number;
  status?: string;
  created_at?: string;
  updated_at?: string;
};

export type Transaction = {
  id: string;
  user_id: string;
  account_id?: string | null;
  amount: string | number;
  currency?: string;
  type: string;
  status?: string;
  description?: string | null;
  metadata?: Record<string, unknown>;
  created_at?: string;
};
