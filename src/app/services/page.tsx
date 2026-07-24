import type { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Pool & Spa Services",
  description:
    "Comprehensive pool services including custom design, construction, renovation, maintenance, spa installation, and water features.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
