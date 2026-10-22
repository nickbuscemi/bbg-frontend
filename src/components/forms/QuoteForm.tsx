// QuoteForm.tsx
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertCircle, CircleCheck } from "lucide-react";
import { commercialServices, residentialServices, serviceOptionValue } from "@/data/services";
import { site } from "@/data/site";

const formSchema = z.object({
  name: z.string().trim().min(1, { message: "Please enter your name." }),
  phone: z
    .string()
    .refine((value) => value.replace(/\D/g, "").length >= 10, {
      message: "Please enter a phone number with area code, like (631) 555-0123.",
    }),
  email: z.string().trim().email({ message: "Please enter an email address, like name@example.com." }),
  zip: z
    .string()
    .trim()
    .refine((value) => value === "" || /^\d{5}$/.test(value), { message: "ZIP code should be 5 digits." }),
  service: z.string(),
  message: z.string().optional(),
  website: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;
type FieldName = keyof FormValues;

// Same origin by default: Netlify serves the API from netlify/functions
const API_URL = import.meta.env.VITE_API_URL ?? "";

// The API takes name/email/phone/message, so ZIP and service ride along at the top of the message
const toPayload = ({ name, email, phone, zip, service, message, website }: FormValues) => ({
  name,
  email,
  phone,
  message: [
    [service && `Service: ${service}`, zip && `ZIP: ${zip}`].filter(Boolean).join("\n"),
    message?.trim(),
  ]
    .filter(Boolean)
    .join("\n\n"),
  website,
});

interface FieldProps {
  name: FieldName;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: (describedBy: string | undefined) => ReactNode;
}

const Field = ({ name, label, required, error, hint, className, children }: FieldProps) => {
  const hintId = hint ? `${name}-hint` : undefined;
  const errorId = error ? `${name}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={className}>
      <label htmlFor={name} className="field-label">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-red-700"> *</span>
        ) : (
          <span className="font-normal text-stone-600"> (optional)</span>
        )}
      </label>
      {hint && (
        <p id={hintId} className="-mt-0.5 mb-1.5 text-sm text-stone-600">
          {hint}
        </p>
      )}
      {children(describedBy)}
      {error && (
        <p id={errorId} className="mt-1.5 flex items-start gap-1.5 text-sm font-semibold text-red-700">
          <AlertCircle className="mt-px h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
};

export const QuoteForm = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const successRef = useRef<HTMLHeadingElement>(null);

  const zipParam = searchParams.get("zip") ?? "";
  const serviceParam = searchParams.get("service") ?? "";

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      zip: /^\d{5}$/.test(zipParam) ? zipParam : "",
      service: serviceParam,
      message: "",
      website: "",
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = form;

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const onSubmit = async (values: FormValues) => {
    setStatus("idle");
    try {
      const response = await fetch(`${API_URL}/api/get-quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toPayload(values)),
      });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      setStatus("success");
    } catch (error) {
      console.error("Error submitting quote request:", error);
      setStatus("error");
    }
  };

  const handleReset = () => {
    reset();
    setStatus("idle");
  };

  const fieldProps = (name: FieldName) => ({
    id: name,
    "aria-invalid": errors[name] ? true : undefined,
    className: "field",
    ...register(name),
  });

  return (
    <div className="border-t-4 border-fern bg-white p-6 shadow-xl sm:p-10">
      {status === "success" ? (
        <div className="py-8 text-center">
          <CircleCheck className="mx-auto h-14 w-14 text-fern" aria-hidden="true" />
          <h3 ref={successRef} tabIndex={-1} className="mt-4 text-3xl font-extrabold tracking-tight">
            Thank you!
          </h3>
          <p className="mx-auto mt-3 max-w-md text-lg text-stone-700">
            We've received your request and will contact you shortly. Need help sooner? Call{" "}
            <a href={site.phoneHref} className="text-link">
              {site.phone}
            </a>
            .
          </p>
          <button type="button" onClick={handleReset} className="btn-outline mt-8">
            Send another request
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-extrabold tracking-tight">Request your free quote</h3>
          <p className="mt-2 text-stone-700">
            Fields marked with <span className="text-red-700">*</span> are required.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8 grid gap-6 sm:grid-cols-2">
            <Field name="name" label="Full name" required error={errors.name?.message}>
              {(describedBy) => (
                <input type="text" autoComplete="name" aria-required="true" aria-describedby={describedBy} {...fieldProps("name")} />
              )}
            </Field>
            <Field name="phone" label="Phone number" required error={errors.phone?.message}>
              {(describedBy) => (
                <input type="tel" autoComplete="tel" aria-required="true" aria-describedby={describedBy} {...fieldProps("phone")} />
              )}
            </Field>
            <Field name="email" label="Email address" required error={errors.email?.message}>
              {(describedBy) => (
                <input type="email" autoComplete="email" aria-required="true" aria-describedby={describedBy} {...fieldProps("email")} />
              )}
            </Field>
            <Field name="zip" label="ZIP code" error={errors.zip?.message}>
              {(describedBy) => (
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  maxLength={5}
                  aria-describedby={describedBy}
                  {...fieldProps("zip")}
                />
              )}
            </Field>
            <Field name="service" label="What do you need help with?" className="sm:col-span-2">
              {(describedBy) => (
                <select aria-describedby={describedBy} {...fieldProps("service")}>
                  <option value="">Choose a service</option>
                  <optgroup label="Residential">
                    {residentialServices.map(({ slug, title }) => (
                      <option key={slug} value={serviceOptionValue("residential", title)}>
                        {title}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Commercial">
                    {commercialServices.map(({ slug, title }) => (
                      <option key={slug} value={serviceOptionValue("commercial", title)}>
                        {title}
                      </option>
                    ))}
                  </optgroup>
                  <option value="Not sure">Not sure / something else</option>
                </select>
              )}
            </Field>
            <Field
              name="message"
              label="Tell us about the problem"
              hint="What are you seeing, where, and for how long?"
              className="sm:col-span-2"
            >
              {(describedBy) => <textarea rows={4} aria-describedby={describedBy} {...fieldProps("message")} />}
            </Field>

            {/* Honeypot: kept off-screen and out of the tab order, so only bots fill it in */}
            <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
              <label htmlFor="website">Website</label>
              <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
            </div>

            {status === "error" && (
              <div role="alert" className="flex items-start gap-2 border-l-4 border-red-700 bg-red-50 p-4 sm:col-span-2">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-700" aria-hidden="true" />
                <p>
                  <strong>We couldn't send your request.</strong> Please try again, or call us at{" "}
                  <a href={site.phoneHref} className="text-link">
                    {site.phone}
                  </a>
                  .
                </p>
              </div>
            )}

            <div className="sm:col-span-2">
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:cursor-wait disabled:opacity-75 sm:w-auto">
                {isSubmitting ? "Sending…" : "Send my request"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default QuoteForm;
