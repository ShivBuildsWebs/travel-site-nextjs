// File: supabase/functions/send-booking-email/index.ts

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

console.log("Edge Function 'send-booking-email' is up and running!");

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const { record } = await req.json();
    const { name, email, trek, date, people, total_cost } = record;
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
          <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
              .header { background-color: #f7b731; color: #fff; padding: 10px; text-align: center; border-radius: 5px 5px 0 0; }
              .content { padding: 20px; }
              .footer { text-align: center; font-size: 0.8em; color: #888; margin-top: 20px; }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>Booking Request Received!</h1>
              </div>
              <div class="content">
                  <h2>Hello ${name},</h2>
                  <p>Thank you for your booking request with <strong>Himalyan Trails</strong>. We are thrilled to have you join us for an adventure!</p>
                  <p>Our team will review your submission and contact you shortly to confirm all the details and process the payment.</p>
                  <h3>Your Booking Summary:</h3>
                  <ul>
                      <li><strong>Trek:</strong> ${trek}</li>
                      <li><strong>Start Date:</strong> ${new Date(date).toLocaleDateString('en-GB')}</li>
                      <li><strong>Number of People:</strong> ${people}</li>
                      <li><strong>Estimated Total:</strong> ${total_cost}</li>
                  </ul>
                  <p>If you have any immediate questions, feel free to reply to this email.</p>
                  <p>Happy trekking!</p>
                  <p><strong>The Himalyan Trails Team</strong></p>
              </div>
              <div class="footer">
                  <p>&copy; ${new Date().getFullYear()} Himalyan Trails. All rights reserved.</p>
                  <p>Village Ontar, Uttarkashi, Uttarakhand, India</p>
              </div>
          </div>
      </body>
      </html>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        // ✅ UPDATED LINE
        from: "Himalyan Trails <booking@himalyantrails.com>", // Replace yourdomain.com with your actual domain
        to: [email],
        subject: `Your Himalyan Trails Booking Request for ${trek}`,
        html: emailHtml,
      }),
    });

    if (!resendResponse.ok) {
      console.error("Resend API Error:", await resendResponse.text());
      throw new Error("Failed to send email via Resend.");
    }

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Function Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
});