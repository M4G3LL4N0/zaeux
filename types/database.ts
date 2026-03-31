export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type WaitlistEntry = {
  full_name?: string | null;
  email: string;
  company?: string | null;
  interest?: string | null;
  source?: string | null;
  metadata?: Record<string, unknown>;
};

export type Database = {
  zaeux: {
    Tables: {
      waitlist: {
        Row: {
          id: string;
          full_name: string | null;
          email: string;
          company: string | null;
          interest: string | null;
          source: string | null;
          metadata: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          full_name?: string | null;
          email: string;
          company?: string | null;
          interest?: string | null;
          source?: string | null;
          metadata?: Json;
          created_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          email?: string;
          company?: string | null;
          interest?: string | null;
          source?: string | null;
          metadata?: Json;
          created_at?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          email: string | null;
          display_name: string | null;
          avatar_url: string | null;
          role: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email?: string | null;
          display_name?: string | null;
          avatar_url?: string | null;
          role?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string | null;
          display_name?: string | null;
          avatar_url?: string | null;
          role?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      accounts: {
        Row: {
          id: string;
          user_id: string;
          account_type: string | null;
          currency: string | null;
          balance: string | number | null;
          yield_earned: string | number | null;
          status: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          account_type?: string | null;
          currency?: string | null;
          balance?: string | number | null;
          yield_earned?: string | number | null;
          status?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          account_type?: string | null;
          currency?: string | null;
          balance?: string | number | null;
          yield_earned?: string | number | null;
          status?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
      transactions: {
        Row: {
          id: string;
          user_id: string;
          account_id: string | null;
          amount: string | number;
          currency: string | null;
          type: string;
          status: string | null;
          description: string | null;
          metadata: Json | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          account_id?: string | null;
          amount: string | number;
          currency?: string | null;
          type: string;
          status?: string | null;
          description?: string | null;
          metadata?: Json | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          account_id?: string | null;
          amount?: string | number;
          currency?: string | null;
          type?: string;
          status?: string | null;
          description?: string | null;
          metadata?: Json | null;
          created_at?: string | null;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
    CompositeTypes: {};
  };
};
