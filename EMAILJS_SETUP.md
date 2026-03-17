# EmailJS Setup

This project sends two emails from the contact form:

1. An internal notification to your business inbox.
2. An automatic confirmation email back to the person who submitted the form.

## 1. Environment Variables

Create a local `.env.local` file and copy these values from `.env.example`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=template_contact_xxxxxxx
NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_autoreply_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_EMAILJS_COMPANY_NAME=VKR Ventures
NEXT_PUBLIC_EMAILJS_COMPANY_EMAIL=hello@example.com
```

## 2. EmailJS Template Variables Used by the Frontend

The frontend sends these variables to EmailJS:

- `company_email`
- `company_name`
- `email_subject`
- `inquiry_message`
- `page_url`
- `property_location`
- `reply_to`
- `service_needed`
- `submitted_at`
- `to_email`
- `to_name`
- `user_email`
- `user_name`
- `user_phone`

## 3. Internal Notification Template

Suggested EmailJS subject:

```text
{{email_subject}}
```

Suggested EmailJS "To Email":

```text
{{to_email}}
```

Suggested EmailJS HTML content:

```html
<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:#f4efe6;font-family:Arial,sans-serif;color:#171411;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4efe6;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background-color:#ffffff;border:1px solid #e6ddd1;">
            <tr>
              <td style="padding:28px 32px;background-color:#171411;color:#f4efe6;">
                <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;opacity:0.72;">{{company_name}}</div>
                <h1 style="margin:14px 0 0;font-size:28px;line-height:1.2;font-weight:600;color:#f4efe6;">New Contact Form Inquiry</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 20px;font-size:15px;line-height:1.8;color:#4d433b;">
                  A new inquiry was submitted through the website contact form.
                </p>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;width:180px;font-weight:700;color:#171411;">Full name</td>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;color:#4d433b;">{{user_name}}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;width:180px;font-weight:700;color:#171411;">Email</td>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;color:#4d433b;">{{user_email}}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;width:180px;font-weight:700;color:#171411;">Phone</td>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;color:#4d433b;">{{user_phone}}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;width:180px;font-weight:700;color:#171411;">Service needed</td>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;color:#4d433b;">{{service_needed}}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;width:180px;font-weight:700;color:#171411;">Property location</td>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;color:#4d433b;">{{property_location}}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;width:180px;font-weight:700;color:#171411;">Submitted</td>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;color:#4d433b;">{{submitted_at}}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;border-bottom:1px solid #ece3d8;width:180px;font-weight:700;color:#171411;">Page URL</td>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;border-bottom:1px solid #ece3d8;color:#4d433b;">{{page_url}}</td>
                  </tr>
                </table>

                <div style="margin-top:24px;padding:20px;background-color:#faf6f0;border:1px solid #ece3d8;">
                  <div style="margin:0 0 10px;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#8a776a;">Message</div>
                  <div style="font-size:15px;line-height:1.8;color:#2a241f;white-space:pre-line;">{{inquiry_message}}</div>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
```

## 4. Auto-Reply Template

Suggested EmailJS subject:

```text
{{email_subject}}
```

Suggested EmailJS "To Email":

```text
{{to_email}}
```

Suggested EmailJS HTML content:

```html
<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:#f4efe6;font-family:Arial,sans-serif;color:#171411;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4efe6;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background-color:#ffffff;border:1px solid #e6ddd1;">
            <tr>
              <td style="padding:28px 32px;background-color:#171411;color:#f4efe6;">
                <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;opacity:0.72;">{{company_name}}</div>
                <h1 style="margin:14px 0 0;font-size:28px;line-height:1.2;font-weight:600;color:#f4efe6;">We Received Your Inquiry</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 16px;font-size:15px;line-height:1.8;color:#4d433b;">Hi {{to_name}},</p>
                <p style="margin:0 0 16px;font-size:15px;line-height:1.8;color:#4d433b;">
                  Thanks for reaching out to {{company_name}}. We received your inquiry and will review the details shortly.
                </p>
                <p style="margin:0 0 24px;font-size:15px;line-height:1.8;color:#4d433b;">
                  Here is a copy of what you sent us:
                </p>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;width:180px;font-weight:700;color:#171411;">Service needed</td>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;color:#4d433b;">{{service_needed}}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;width:180px;font-weight:700;color:#171411;">Property location</td>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;color:#4d433b;">{{property_location}}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;border-bottom:1px solid #ece3d8;width:180px;font-weight:700;color:#171411;">Submitted</td>
                    <td style="padding:12px 0;border-top:1px solid #ece3d8;border-bottom:1px solid #ece3d8;color:#4d433b;">{{submitted_at}}</td>
                  </tr>
                </table>

                <div style="margin-top:24px;padding:20px;background-color:#faf6f0;border:1px solid #ece3d8;">
                  <div style="margin:0 0 10px;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#8a776a;">Your message</div>
                  <div style="font-size:15px;line-height:1.8;color:#2a241f;white-space:pre-line;">{{inquiry_message}}</div>
                </div>

                <p style="margin:24px 0 0;font-size:15px;line-height:1.8;color:#4d433b;">
                  If you need to add anything else, simply reply to this email or contact us at {{company_email}}.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
```

## 5. Important EmailJS Template Settings

- In the internal notification template, set `Reply To` to `{{reply_to}}`.
- In the auto-reply template, set `Reply To` to `{{company_email}}`.
- Make sure both templates use the same EmailJS service ID as the frontend env file.
- Restart the Next.js dev server after creating or changing `.env.local`.
