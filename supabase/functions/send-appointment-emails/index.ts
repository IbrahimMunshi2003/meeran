import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface AppointmentEmailRequest {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  service: string;
  appointmentDate: string;
  appointmentTime: string;
  notes?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      customerName,
      customerEmail,
      customerPhone,
      service,
      appointmentDate,
      appointmentTime,
      notes,
    }: AppointmentEmailRequest = await req.json();

    console.log("Sending appointment emails for:", customerEmail);

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "Kanishka Beauty Parlour <onboarding@resend.dev>",
      to: [customerEmail],
      subject: "Appointment Confirmed - Kanishka Beauty Parlour",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #0a0a0a; }
            .container { max-width: 600px; margin: 0 auto; background-color: #141414; border: 1px solid #333; }
            .header { background: linear-gradient(135deg, #d4a853, #c49a45); padding: 30px; text-align: center; }
            .header h1 { color: #0a0a0a; margin: 0; font-size: 28px; font-weight: 600; }
            .content { padding: 40px 30px; color: #f5f5f0; }
            .content h2 { color: #d4a853; margin-top: 0; font-size: 22px; }
            .details { background-color: #1a1a1a; border: 1px solid #333; padding: 20px; margin: 20px 0; border-radius: 4px; }
            .details-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #2a2a2a; }
            .details-row:last-child { border-bottom: none; }
            .label { color: #888; }
            .value { color: #f5f5f0; font-weight: 500; }
            .footer { background-color: #1a1a1a; padding: 20px 30px; text-align: center; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✨ Kanishka Beauty Parlour</h1>
            </div>
            <div class="content">
              <h2>Appointment Confirmed!</h2>
              <p>Dear ${customerName},</p>
              <p>Thank you for booking with us! Your appointment has been confirmed. Here are your booking details:</p>
              <div class="details">
                <div class="details-row">
                  <span class="label">Service</span>
                  <span class="value">${service}</span>
                </div>
                <div class="details-row">
                  <span class="label">Date</span>
                  <span class="value">${appointmentDate}</span>
                </div>
                <div class="details-row">
                  <span class="label">Time</span>
                  <span class="value">${appointmentTime}</span>
                </div>
                ${notes ? `
                <div class="details-row">
                  <span class="label">Notes</span>
                  <span class="value">${notes}</span>
                </div>
                ` : ''}
              </div>
              <p>We look forward to seeing you!</p>
              <p style="color: #d4a853;">With love,<br>Kanishka Beauty Parlour Team</p>
            </div>
            <div class="footer">
              <p>📍 Premium Beauty & Spa Experience</p>
              <p>Need to reschedule? Please contact us at least 24 hours before your appointment.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Customer email sent:", customerEmailResponse);

    // Send notification email to salon owner (using test email for now)
    const ownerEmailResponse = await resend.emails.send({
      from: "Kanishka Beauty Parlour <onboarding@resend.dev>",
      to: ["delivered@resend.dev"], // This will be replaced with actual salon owner email
      subject: `New Appointment: ${customerName} - ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #0a0a0a; }
            .container { max-width: 600px; margin: 0 auto; background-color: #141414; border: 1px solid #333; }
            .header { background: linear-gradient(135deg, #d4a853, #c49a45); padding: 20px; text-align: center; }
            .header h1 { color: #0a0a0a; margin: 0; font-size: 20px; }
            .content { padding: 30px; color: #f5f5f0; }
            .alert { background-color: #1a1a1a; border-left: 4px solid #d4a853; padding: 15px; margin-bottom: 20px; }
            .details { background-color: #1a1a1a; padding: 20px; border-radius: 4px; }
            .details p { margin: 8px 0; }
            .label { color: #888; display: inline-block; width: 100px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔔 New Appointment Booking</h1>
            </div>
            <div class="content">
              <div class="alert">
                <strong>New booking received!</strong>
              </div>
              <div class="details">
                <p><span class="label">Customer:</span> <strong>${customerName}</strong></p>
                <p><span class="label">Email:</span> ${customerEmail}</p>
                <p><span class="label">Phone:</span> ${customerPhone || 'Not provided'}</p>
                <p><span class="label">Service:</span> <strong>${service}</strong></p>
                <p><span class="label">Date:</span> <strong>${appointmentDate}</strong></p>
                <p><span class="label">Time:</span> <strong>${appointmentTime}</strong></p>
                ${notes ? `<p><span class="label">Notes:</span> ${notes}</p>` : ''}
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Owner notification email sent:", ownerEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        customerEmail: customerEmailResponse, 
        ownerEmail: ownerEmailResponse 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error sending appointment emails:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
