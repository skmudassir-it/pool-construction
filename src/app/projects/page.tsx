import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Pool Projects",
  description:
    "Browse our portfolio of custom pool projects — infinity pools, family pools, lap pools, lagoons, and more across Florida.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
