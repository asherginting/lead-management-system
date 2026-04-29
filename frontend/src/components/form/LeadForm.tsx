"use client";

import { useState } from "react";
import Field from "./Field";

export default function LeadForm({ onSuccess }: { onSuccess: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    status: "New",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.name.length < 3) {
      return setError("Name must be at least 3 characters");
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      return setError("Invalid email");
    }

    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.message);
        return;
      }

      setForm({ name: "", email: "", status: "New" });
      onSuccess();
    } catch {
      setError("Failed to add lead");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-5">
      <Field label="Name">
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition"
        />
      </Field>
      <Field label="Email">
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border-b border-gray-300 py-2 outline-none focus:border-black transition"
        />
      </Field>
      <Field label="Status">
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          className="w-full border-b border-gray-300 py-2 outline-none focus:border-black"
        >
          <option>New</option>
          <option>Engaged</option>
          <option>Proposal Sent</option>
          <option>Closed-Won</option>
          <option>Closed-Lost</option>
        </select>
      </Field>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <button className="w-full bg-black text-white py-2.5 rounded-md hover:opacity-90 transition cursor-pointer">
        {loading ? "Saving..." : "Create Lead"}
      </button>
    </form>
  );
}
