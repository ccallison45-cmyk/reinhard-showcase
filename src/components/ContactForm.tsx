"use client";

import { useState, FormEvent } from "react";
import { properties } from "@/data/properties";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    if (!FORMSPREE_ID) {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSending(false);
      setSubmitted(true);
      return;
    }

    try {
      const data = new FormData(e.currentTarget);
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }

    setSending(false);
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-stage-complete/10 p-8 text-center">
        <svg
          className="mx-auto h-12 w-12 text-stage-complete"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h3 className="mt-3 font-heading text-xl font-bold text-primary">
          Thank You!
        </h3>
        <p className="mt-2 text-charcoal/60">
          We&apos;ve received your message and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="property" className="block text-sm font-medium text-charcoal">
            Property of Interest
          </label>
          <select
            id="property"
            name="property"
            className="mt-1 w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
          >
            <option value="">General Inquiry</option>
            {properties.map((p) => (
              <option key={p.slug} value={p.address}>
                {p.address}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-md bg-accent px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent-light disabled:opacity-50 sm:w-auto"
      >
        {sending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
