"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSwimmingPool,
  faPhone,
  faArrowRight,
  faStar,
  faQuoteLeft,
  faCheck,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { siteConfig, services, projects, testimonials } from "@/lib/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export function HomeClient() {
  const [autoplayPlugin] = useState(() =>
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur mb-6">
              <FontAwesomeIcon icon={faSwimmingPool} className="size-3.5" />
              <span>Florida&apos;s Premier Pool Builder</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex">
                <Button
                  size="lg"
                  className="gap-2 bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  <FontAwesomeIcon icon={faPhone} className="size-4" />
                  Free Consultation
                </Button>
              </Link>
              <Link href="/projects" className="inline-flex">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-white/40 text-white hover:bg-white/10"
                >
                  View Our Work
                  <FontAwesomeIcon icon={faArrowRight} className="size-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 gradient-divider" />
      </section>

      {/* ── Services ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Complete Pool Solutions
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we offer everything you need to create
              and maintain the pool of your dreams.
            </p>
          </motion.div>

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
                  <Card className="glass-card h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                        <FontAwesomeIcon
                          icon={service.icon}
                          className="size-5 text-primary"
                        />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Learn more
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

      {/* ── Projects Showcase ── */}
      <section className="py-20 sm:py-28 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <Badge variant="secondary" className="mb-4">
              Portfolio
            </Badge>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Explore some of our favorite transformations — each one uniquely
              designed and expertly built.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, idx) => (
              <motion.div
                key={project.title}
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
                      delay: idx * 0.15,
                      ease: "easeOut" as const,
                    },
                  },
                }}
              >
                <Card className="glass-card overflow-hidden h-full">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faSwimmingPool}
                      className="size-12 text-primary/30"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-1">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {project.location}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-10"
          >
            <Link href="/projects" className="inline-flex">
              <Button variant="outline" size="lg" className="gap-2">
                View All Projects
                <FontAwesomeIcon icon={faArrowRight} className="size-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <Badge variant="secondary" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Real stories from homeowners who trusted us with their backyard
              transformations.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[autoplayPlugin]}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((item) => (
                  <CarouselItem
                    key={item.name}
                    className="sm:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="glass-card h-full flex flex-col">
                      <CardHeader>
                        <FontAwesomeIcon
                          icon={faQuoteLeft}
                          className="size-6 text-secondary/40"
                        />
                        <div className="flex gap-0.5 mt-2">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <FontAwesomeIcon
                              key={i}
                              icon={faStar}
                              className="size-4 text-accent"
                            />
                          ))}
                        </div>
                        <CardTitle className="text-base mt-1">
                          {item.name}
                        </CardTitle>
                        <CardDescription>{item.role}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          &ldquo;{item.content}&rdquo;
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center gap-2 mt-8">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-gradient-to-r from-primary via-primary to-secondary text-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)]" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative mx-auto max-w-3xl px-4 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Build Your Dream Pool?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Schedule your free design consultation today and take the first step
            toward your backyard paradise.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex">
              <Button
                size="lg"
                className="gap-2 bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <FontAwesomeIcon icon={faPhone} className="size-4" />
                Get Your Free Estimate
              </Button>
            </Link>
            <Link href="/services" className="inline-flex">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white/40 text-white hover:bg-white/10"
              >
                Explore Services
                <FontAwesomeIcon icon={faArrowRight} className="size-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
        <div className="absolute top-0 left-0 right-0 gradient-divider" />
      </section>
    </div>
  );
}
