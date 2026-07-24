import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
  title: "CrystalBlue Pool Builders — Custom Pool Design & Construction",
  description:
    "Expert custom pool design, construction, and renovation services. Transform your backyard into a luxury resort-style oasis with CrystalBlue Pool Builders.",
};

export default function HomePage() {
  return <HomeClient />;
}
