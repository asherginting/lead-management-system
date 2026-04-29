"use client";

import { useEffect, useState } from "react";
import Container from "../components/layout/Container";
import LeadForm from "../components/form/LeadForm";
import LeadList from "../components/lead/LeadList";

type Lead = {
  id: string;
  name: string;
  email: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
};

export default function Home() {
  const [leads, setLeads] = useState<Lead[]>([]);

  const fetchLeads = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leads`);
      const data = await res.json();
      setLeads(data.data || []);
    } catch (err) {
      console.error("Failed to fetch leads:", err);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const loadLeads = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leads`);
        const data = await res.json();

        if (isMounted) {
          setLeads(data.data || []);
        }
      } catch (err) {
        console.error("Error loading leads:", err);
      }
    };
    loadLeads();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container>
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900">
          Lead Management System
        </h1>
        <p className="text-sm text-gray-500">Track and manage your system</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <LeadForm onSuccess={fetchLeads} />
        </div>
        <div>
          <LeadList leads={leads} />
        </div>
      </div>
    </Container>
  );
}
