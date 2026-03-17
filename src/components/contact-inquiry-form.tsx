"use client";

import emailjs from "@emailjs/browser";
import { type FormEvent, useState } from "react";

const label = "text-[0.72rem] uppercase tracking-[0.2em] leading-[1.3]";
const inputBase =
  "w-full rounded-[0.9rem] border border-ink/12 bg-[#fcfaf6] px-4 py-[0.95rem] text-ink transition duration-200 focus:border-[rgba(101,68,33,0.42)] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[rgba(167,123,74,0.12)]";
const submitButton =
  "inline-flex min-w-48 justify-center justify-self-start rounded-full border border-ink/14 bg-ink px-[1.45rem] py-4 text-[0.8rem] uppercase tracking-[0.18em] text-paper transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:bg-[#211b16] hover:shadow-[0_16px_34px_rgba(23,20,17,0.18)] focus:outline-none focus:ring-4 focus:ring-[rgba(167,123,74,0.18)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-ink max-md:w-full max-md:justify-self-stretch";

const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  contactTemplateId: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID ?? "",
  autoReplyTemplateId: process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
  companyName: process.env.NEXT_PUBLIC_EMAILJS_COMPANY_NAME ?? "VKR Ventures",
  companyEmail: process.env.NEXT_PUBLIC_EMAILJS_COMPANY_EMAIL ?? "",
};

const serviceLabels = {
  listings: "Listing optimization and pricing",
  management: "Short-term property management",
  operations: "Guest operations and turnover",
} as const;

type StatusTone = "error" | "idle" | "success";

type FormStatus = {
  message: string;
  tone: StatusTone;
};

const initialStatus: FormStatus = {
  message: "",
  tone: "idle",
};

function getRequiredConfigKeys() {
  return [
    ["NEXT_PUBLIC_EMAILJS_SERVICE_ID", emailJsConfig.serviceId],
    ["NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID", emailJsConfig.contactTemplateId],
    ["NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID", emailJsConfig.autoReplyTemplateId],
    ["NEXT_PUBLIC_EMAILJS_PUBLIC_KEY", emailJsConfig.publicKey],
    ["NEXT_PUBLIC_EMAILJS_COMPANY_EMAIL", emailJsConfig.companyEmail],
  ] as const;
}

function readField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function ContactInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(initialStatus);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const missingConfig = getRequiredConfigKeys()
      .filter(([, value]) => !value)
      .map(([key]) => key);

    if (missingConfig.length > 0) {
      setStatus({
        message: `Email sending is not configured yet. Missing: ${missingConfig.join(", ")}`,
        tone: "error",
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const userName = readField(formData, "name");
    const userEmail = readField(formData, "email");
    const userPhone = readField(formData, "phone") || "Not provided";
    const serviceValue = readField(formData, "service");
    const propertyLocation = readField(formData, "location") || "Not provided";
    const inquiryMessage = readField(formData, "message");

    if (!userName || !userEmail || !serviceValue || !inquiryMessage) {
      setStatus({
        message: "Please complete the required fields before submitting the form.",
        tone: "error",
      });
      return;
    }

    const serviceNeeded =
      serviceLabels[serviceValue as keyof typeof serviceLabels] ?? serviceValue;
    const submittedAt = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(new Date());

    const templateParams = {
      company_email: emailJsConfig.companyEmail,
      company_name: emailJsConfig.companyName,
      inquiry_message: inquiryMessage,
      page_url: window.location.href,
      property_location: propertyLocation,
      reply_to: userEmail,
      service_needed: serviceNeeded,
      submitted_at: submittedAt,
      to_email: emailJsConfig.companyEmail,
      to_name: emailJsConfig.companyName,
      user_email: userEmail,
      user_name: userName,
      user_phone: userPhone,
    };

    setIsSubmitting(true);
    setStatus(initialStatus);

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.contactTemplateId,
        {
          ...templateParams,
          email_subject: `New website inquiry from ${userName}`,
        },
        {
          publicKey: emailJsConfig.publicKey,
        },
      );

      try {
        await emailjs.send(
          emailJsConfig.serviceId,
          emailJsConfig.autoReplyTemplateId,
          {
            ...templateParams,
            email_subject: `We received your inquiry | ${emailJsConfig.companyName}`,
            reply_to: emailJsConfig.companyEmail,
            to_email: userEmail,
            to_name: userName,
          },
          {
            publicKey: emailJsConfig.publicKey,
          },
        );
      } catch (autoReplyError) {
        console.error("EmailJS auto-reply failed", autoReplyError);
      }

      form.reset();
      setStatus({
        message: `Thanks, ${userName}. Your inquiry has been sent.`,
        tone: "success",
      });
    } catch (error) {
      console.error("EmailJS contact form send failed", error);
      setStatus({
        message:
          "We could not send your inquiry right now. Please try again in a moment or email us directly.",
        tone: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const statusClassName =
    status.tone === "error"
      ? "border-[#e7c3b7] bg-[#fbf1ed] text-[#7f3424]"
      : "border-[#cddfce] bg-[#eef6ef] text-[#275638]";

  return (
    <form className="mt-2 grid gap-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <label className="grid gap-[0.6rem]">
          <span className={`${label} text-ink/54`}>Full name</span>
          <input
            autoComplete="name"
            className={`${inputBase} min-h-[3.25rem]`}
            name="name"
            placeholder="Your name"
            required
            type="text"
          />
        </label>

        <label className="grid gap-[0.6rem]">
          <span className={`${label} text-ink/54`}>Email</span>
          <input
            autoComplete="email"
            className={`${inputBase} min-h-[3.25rem]`}
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <label className="grid gap-[0.6rem]">
          <span className={`${label} text-ink/54`}>Phone</span>
          <input
            autoComplete="tel"
            className={`${inputBase} min-h-[3.25rem]`}
            name="phone"
            placeholder="Optional"
            type="tel"
          />
        </label>

        <label className="grid gap-[0.6rem]">
          <span className={`${label} text-ink/54`}>Service needed</span>
          <div className="relative">
            <select
              className={`${inputBase} min-h-[3.25rem] appearance-none pr-12`}
              defaultValue=""
              name="service"
              required
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="management">Short-term property management</option>
              <option value="listings">Listing optimization and pricing</option>
              <option value="operations">Guest operations and turnover</option>
            </select>
            <span className="pointer-events-none absolute right-5 top-1/2 h-[0.55rem] w-[0.55rem] -translate-y-[60%] rotate-45 border-b-[1.5px] border-r-[1.5px] border-ink/54" />
          </div>
        </label>
      </div>

      <label className="grid gap-[0.6rem]">
        <span className={`${label} text-ink/54`}>Property location</span>
        <input
          autoComplete="address-level2"
          className={`${inputBase} min-h-[3.25rem]`}
          name="location"
          placeholder="City, area, or property address"
          type="text"
        />
      </label>

      <label className="grid gap-[0.6rem]">
        <span className={`${label} text-ink/54`}>Message</span>
        <textarea
          className={`${inputBase} min-h-40 resize-y`}
          name="message"
          placeholder="Tell us about the stay, the property, and what kind of short-term rental help you need."
          required
          rows={7}
        />
      </label>

      <div className="mt-1 grid gap-3">
        <button className={submitButton} disabled={isSubmitting} type="submit">
          {isSubmitting ? "Sending inquiry..." : "Submit inquiry"}
        </button>

        {status.message ? (
          <p
            aria-live="polite"
            className={`rounded-[0.95rem] border px-4 py-3 text-sm leading-[1.7] ${statusClassName}`}
            role={status.tone === "error" ? "alert" : "status"}
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
