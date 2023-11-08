import supabase from "./supabase";

export async function getCabins() {
  const {
    data,
    error: cabins,
    error,
  } = await supabase.from("cabins").select("*");
}
