export type Json = 
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Profile {
  id: string;
  email: string | null;
  display_name: string | null;
  updated_at: string;
}

export interface Account {
  id: string;
  user_id: string;
  account_type: string;
  currency: string;
  balance: number;
  yield_earned: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Transaction {
  id: string;
  user_id: string;
  account_id: string;
  amount: number;
  currency: string;
  type: 'credit' | 'debit';
  description: string | null;
  created_at: string;
}

export interface WaitlistEntry {
  id: string;
  email: string;
  full_name: string | null;
  company: string | null;
  created_at: string;
}
