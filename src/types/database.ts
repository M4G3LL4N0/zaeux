export interface WaitlistEntry {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company: string | null;
}

export interface Profile {
  id: string;
  created_at: string;
  user_id: string;
  full_name: string | null;
  avatar_url: string | null;
}

export interface Account {
  id: string;
  created_at: string;
  user_id: string;
  balance: number;
  currency: string;
}

export interface Transaction {
  id: string;
  created_at: string;
  account_id: string;
  amount: number;
  type: 'credit' | 'debit';
  description: string | null;
}
