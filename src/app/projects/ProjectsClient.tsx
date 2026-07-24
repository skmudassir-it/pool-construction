"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwimmingPool, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/lib/data";

const CATEGORIES = ["All", "Infinity", "Family", "Modern", "Natural"];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export function ProjectsClient() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) =>
          p.tags.some(
            (tag) => tag.toLowerCase() === activeTab.toLowerCase()
          )
        );

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_60%)]" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative mx-auto max-w-3xl px-4 text-center"
        >
          <Badge className="mb-4 bg-white/20 text-white border-white/20">
            Portfolio
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Our Projects
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Explore our portfolio of custom pools — each one a unique
            masterpiece designed for Florida living.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 gradient-divider" />
      </section>

      {/* ── Filter Tabs ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <Tabs
              value={activeTab}
              onValueChange={(v) => setActiveTab(v ?? "All")}
            >
              <TabsList>
                {CATEGORIES.map((cat) => (
                  <TabsTrigger key={cat} value={cat}>
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: idx * 0.08,
                      ease: "easeOut" as const,
                    },
                  }}
                >
                  <Card className="glass-card overflow-hidden h-full flex flex-col">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faSwimmingPool}
                        className="size-14 text-primary/25"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex flex-wrap gap-1.5 mb-1">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="size-3.5 text-secondary"
                        />
                        {project.location}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
