"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

const LEAD_EMAIL = "palys.bruno@gmail.com";

const FIELDS = [
  { name: "name", label: "Imię i nazwisko", type: "text", autoComplete: "name", required: true },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
  {
    name: "company",
    label: "Nazwa firmy / agencji",
    type: "text",
    autoComplete: "organization",
    required: false,
    hint: "Opcjonalnie — może być też po prostu nazwa branży, w której działasz.",
  },
  { name: "phone", label: "Numer telefonu", type: "tel", autoComplete: "tel", required: true },
] as const;

type FormState = Record<(typeof FIELDS)[number]["name"], string>;

export function LeadForm() {
  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-bg-soft p-10 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-accent" />
        <h2 className="text-display text-2xl">Dzięki, mam to!</h2>
        <p className="max-w-sm text-sm text-muted">
          Twoje dane właśnie do mnie dotarły. Odezwę się w ciągu 24h,
          żeby ustalić szczegóły współpracy.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {FIELDS.map((field) => (
        <div key={field.name} className="flex flex-col gap-2">
          <label htmlFor={field.name} className="text-sm font-semibold text-ink/90">
            {field.label}
            {!field.required && (
              <span className="font-normal text-muted"> (opcjonalnie)</span>
            )}
          </label>
          {"hint" in field && (
            <p className="-mt-1 text-xs text-muted">{field.hint}</p>
          )}
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            autoComplete={field.autoComplete}
            required={field.required}
            value={values[field.name]}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, [field.name]: e.target.value }))
            }
            className="rounded-xl border border-white/10 bg-bg px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted focus:border-accent"
          />
        </div>
      ))}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-4 flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-accent-ink transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "loading" ? "Wysyłam..." : "Zapisz i wyślij"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Coś poszło nie tak. Spróbuj ponownie albo napisz bezpośrednio na{" "}
          <a href={`mailto:${LEAD_EMAIL}`} className="underline">
            {LEAD_EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  );
}
