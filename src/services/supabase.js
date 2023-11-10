import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ndgvhiuzotggwqcubpkl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kZ3ZoaXV6b3RnZ3dxY3VicGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzNzc1MDIsImV4cCI6MjAxNDk1MzUwMn0.VVgmQOtP_uQfilp_HZsZ-1oxBNwAQCKFM-Oyg-715fk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
