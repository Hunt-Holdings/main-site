import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono<{ Bindings: Env }>();

app.use("/api/*", cors());

app.get("/api/", (c) => c.json({ name: "Hunt Technology Group" }));

app.post("/api/contact", async (c) => {
  try {
    const body = await c.req.json<{
      name?: string;
      email?: string;
      message?: string;
    }>();

    if (!body.name || !body.email || !body.message) {
      return c.json({ success: false, error: "All fields are required." }, 400);
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return c.json({ success: false, error: "Invalid email address." }, 400);
    }

    // Send email via Resend
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${c.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Hunt Technology Group <lead@resend.hunttg.com>",
        to: [c.env.CONTACT_TO_EMAIL],
        subject: `New Contact Form Submission from ${body.name}`,
        reply_to: body.email,
        html: buildContactEmail(body.name, body.email, body.message),
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error("Resend API error:", resendRes.status, errBody);
      return c.json(
        { success: false, error: "Failed to send message. Please try again later." },
        500,
      );
    }

    return c.json({ success: true, message: "Message received! I'll get back to you soon." });
  } catch {
    return c.json({ success: false, error: "Invalid request." }, 400);
  }
});

export default app;

function buildContactEmail(name: string, email: string, message: string): string {
  const escapedMessage = message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");

  const now = new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Lead</title>
</head>
<body style="margin:0;padding:0;background-color:#0f1419;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f1419;padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#7c3aed 0%,#a78bfa 100%);border-radius:16px 16px 0 0;padding:32px 40px;">
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">
                New Contact Form Submission
              </h1>
              <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.8);">
                ${now} CT
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#1a1f2e;padding:0 40px;">

              <!-- Contact Info Cards -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:32px 0 24px;">
                <tr>
                  <td style="padding:16px 20px;background-color:#242938;border-radius:12px;border-left:4px solid #a78bfa;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:#94a3b8;">
                            Name
                          </p>
                          <p style="margin:0;font-size:18px;font-weight:600;color:#f1f5f9;">
                            ${name}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height:12px;"></td></tr>
                <tr>
                  <td style="padding:16px 20px;background-color:#242938;border-radius:12px;border-left:4px solid #a78bfa;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:#94a3b8;">
                            Email
                          </p>
                          <a href="mailto:${email}" style="font-size:16px;font-weight:600;color:#a78bfa;text-decoration:none;">
                            ${email}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-top:1px solid #334155;padding:0;"></td>
                </tr>
              </table>

              <!-- Message -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0 32px;">
                <tr>
                  <td>
                    <p style="margin:0 0 12px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:#94a3b8;">
                      Message
                    </p>
                    <td>
                </tr>
                <tr>
                  <td style="padding:20px 24px;background-color:#242938;border-radius:12px;">
                    <p style="margin:0;font-size:15px;line-height:1.7;color:#cbd5e1;">
                      ${escapedMessage}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Quick Actions -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td align="center" style="padding:0;">
                    <a href="mailto:${email}?subject=Re: Your inquiry to Hunt Technology Group&body=%0A%0A----%0AOriginal message from ${encodeURIComponent(name)}:%0A${encodeURIComponent(message)}"
                       style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#7c3aed 0%,#a78bfa 100%);color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;border-radius:10px;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#151a24;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
              <p style="margin:0;font-size:13px;color:#64748b;">
                This email was sent from the contact form on
                <a href="https://hunttg.com" style="color:#a78bfa;text-decoration:none;">hunttg.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
}
