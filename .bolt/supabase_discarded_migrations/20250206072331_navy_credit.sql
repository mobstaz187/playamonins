/*
  # Create profiles table for Solana wallet integration

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key)
      - `wallet_address` (text, unique)
      - `unlocked_characters` (text array)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS on `profiles` table
    - Add policy for public reads
    - Add policy for updates by wallet address
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  wallet_address text UNIQUE NOT NULL,
  unlocked_characters text[] DEFAULT ARRAY[]::text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Profiles are publicly readable"
  ON profiles
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO public
  USING (wallet_address = current_user);

-- Create index
CREATE INDEX IF NOT EXISTS profiles_wallet_address_idx ON profiles(wallet_address);