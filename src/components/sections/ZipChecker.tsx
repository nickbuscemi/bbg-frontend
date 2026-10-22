import { useId, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { AlertCircle, ArrowRight, CircleCheck, MapPin } from "lucide-react";
import { checkZip, type ZipResult } from "@/lib/service-area";
import { site } from "@/data/site";

// ZIP lookup with the result announced politely to screen readers
export const ZipChecker = () => {
  const inputId = useId();
  const statusId = useId();
  const [zip, setZip] = useState("");
  const [result, setResult] = useState<ZipResult | null>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setResult(checkZip(zip));
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor={inputId} className="field-label">
        Enter your ZIP code
      </label>
      <div className="flex">
        <input
          id={inputId}
          name="zip"
          value={zip}
          onChange={(event) => setZip(event.target.value.replace(/\D/g, "").slice(0, 5))}
          inputMode="numeric"
          autoComplete="postal-code"
          placeholder="e.g. 11784"
          aria-invalid={result?.status === "invalid" || undefined}
          aria-describedby={statusId}
          className="field min-w-0 flex-1 border-r-0"
        />
        <button type="submit" className="btn-primary shrink-0">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          Check area
        </button>
      </div>

      <div id={statusId} role="status" className="mt-4 min-h-[1.75rem]">
        {result?.status === "invalid" && (
          <p className="flex items-start gap-2 font-semibold text-red-700">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            Please enter a 5-digit ZIP code.
          </p>
        )}
        {result?.status === "served" && (
          <div className="flex items-start gap-2">
            <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-fern" aria-hidden="true" />
            <p>
              <strong>Good news: we serve {result.zip}</strong> {result.area}.{" "}
              <Link to={`/contact?zip=${result.zip}`} className="text-link inline-flex items-center gap-1">
                Get your free quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </p>
          </div>
        )}
        {result?.status === "outside" && (
          <p className="flex items-start gap-2">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-hunter" aria-hidden="true" />
            <span>
              <strong>{result.zip} is outside our regular service area.</strong> Call us at{" "}
              <a href={site.phoneHref} className="text-link">
                {site.phone}
              </a>{" "}
              to ask about service near you.
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export const ZipBand = () => (
  <section aria-labelledby="zip-title" className="bg-stone-100 pb-16 lg:pb-20">
    <div className="container">
      <div className="relative -mt-16 grid gap-8 border-t-4 border-fern bg-white p-6 shadow-xl sm:p-10 lg:-mt-20 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 id="zip-title" className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
            Local pest control across Long Island and all five boroughs.
          </h2>
          <p className="mt-3 text-stone-700">
            Check your ZIP code to confirm we service your area, or call{" "}
            <a href={site.phoneHref} className="text-link">
              {site.phone}
            </a>
            .
          </p>
        </div>
        <ZipChecker />
      </div>
    </div>
  </section>
);
