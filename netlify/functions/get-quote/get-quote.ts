// Quote form endpoint: emails the request to the business, then a confirmation to the customer
import type { Config } from "@netlify/functions";
import nodemailer from "nodemailer";
import { confirmationEmail } from "./confirmation-email";

const MAX_LENGTH = { name: 100, email: 254, phone: 30, message: 5000, website: 200 };
type Field = keyof typeof MAX_LENGTH;

// A single address only, since commas, semicolons, or angle brackets would let one request mail several people
const EMAIL_PATTERN = /^[^\s@,;<>"()]+@[^\s@,;<>"()]+\.[^\s@,;<>"()]+$/;

const SUCCESS = "Your quote request has been received. We will contact you shortly.";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASS,
  },
});

const readFields = (body: Record<string, unknown>) =>
  Object.fromEntries(
    Object.keys(MAX_LENGTH).map((key) => [key, typeof body[key] === "string" ? body[key].trim() : ""]),
  ) as Record<Field, string>;

const isValid = (fields: Record<Field, string>) =>
  fields.name !== "" &&
  EMAIL_PATTERN.test(fields.email) &&
  fields.phone.replace(/\D/g, "").length >= 10 &&
  (Object.keys(MAX_LENGTH) as Field[]).every((key) => fields[key].length <= MAX_LENGTH[key]);

export default async (req: Request) => {
  const body: unknown = await req.json().catch(() => null);
  if (typeof body !== "object" || body === null) {
    return new Response("Invalid request.", { status: 400 });
  }

  const fields = readFields(body as Record<string, unknown>);

  // People never see the website field, so a filled-in one means a bot. Answer as if it worked
  if (fields.website) {
    return new Response(SUCCESS, { status: 201 });
  }

  if (!isValid(fields)) {
    return new Response("Missing or invalid fields: name, email, and phone are required.", { status: 400 });
  }

  const { name, email, phone, message } = fields;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: "New Message Received",
      text: `You have received a new message request:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message || "N/A"}`,
    });
  } catch (error) {
    console.error("Error sending email to owner:", error);
    return new Response("An error occurred while processing your request.", { status: 500 });
  }

  // The business already has the request, so a failed confirmation shouldn't fail the form
  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank you for reaching out!",
      html: confirmationEmail(name),
    });
  } catch (error) {
    console.error("Error sending confirmation email to customer:", error);
  }

  return new Response(SUCCESS, { status: 201 });
};

export const config: Config = {
  path: "/api/get-quote",
  method: "POST",
  // Per visitor IP; Netlify answers anything past this with a 429
  rateLimit: { windowLimit: 5, windowSize: 180, aggregateBy: ["ip", "domain"] },
};
