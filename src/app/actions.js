// File: src/app/actions.js
"use server"; // This marks it as a secure, server-only file

import { createClient } from "@supabase/supabase-js";

export async function saveBooking(formData) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
  );

  // Extract data from the form
  const rawFormData = {
    trek: formData.get("trek"),
    pickup: formData.get("pickup"),
    addons: JSON.parse(formData.get("addons")),
    date: formData.get("date"),
    people: parseInt(formData.get("people"), 10),
    group_type: formData.get("group"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    total_cost: formData.get("totalCost"),
  };

  // Save to the 'bookings' table in Supabase
  const { error } = await supabase.from("bookings").insert(rawFormData);

  if (error) {
    console.error("Supabase Insert Error:", error);
    return { success: false, message: "Database error. Could not save booking." };
  }

  return { success: true };
}