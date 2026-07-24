"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export function ServicesClient() {
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
            Services
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Complete Pool Solutions
          </h1>
          <p className="mt-4 text-lg text-white/80">
            From initial design to ongoing maintenance — everything you need for
            the perfect pool experience.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 gradient-divider" />
      </section>

      {/* ── Grid ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <motion.div
                key={service.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: idx * 0.1,
                      ease: "easeOut" as const,
                    },
                  },
                }}
              >
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <Card className="glass-card h-full">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <FontAwesomeIcon
                          icon={service.icon}
                          className="size-6 text-primary"
                        />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                        View details
                        <FontAwesomeIcon icon={faArrowRight} className="size-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
