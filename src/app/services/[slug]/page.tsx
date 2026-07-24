import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faArrowRight,
  faSwimmingPool,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services, siteConfig } from "@/lib/data";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div>
      {/* ── Hero Banner ── */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-6 backdrop-blur">
              <FontAwesomeIcon
                icon={service.icon}
                className="size-7 text-white"
              />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 gradient-divider" />
      </section>

      {/* ── Content ── */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                About This Service
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {service.longDescription}
              </p>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  What&apos;s Included
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="size-4 text-secondary mt-0.5 shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex">
                  <Button size="lg" className="gap-2">
                    <FontAwesomeIcon icon={faPhone} className="size-4" />
                    Get a Free Quote
                  </Button>
                </Link>
                <Link href="/services" className="inline-flex">
                  <Button variant="outline" size="lg" className="gap-2">
                    All Services
                    <FontAwesomeIcon icon={faArrowRight} className="size-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar — Related */}
            <div>
              <div className="glass-card p-6 sticky top-24">
                <h3 className="font-bold text-foreground mb-4">
                  Related Services
                </h3>
                <div className="space-y-4">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/services/${rel.slug}`}
                      className="block group"
                    >
                      <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <FontAwesomeIcon
                            icon={rel.icon}
                            className="size-4 text-primary"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                            {rel.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                            {rel.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    Ready to get started?
                  </p>
                  <Link href="/contact" className="inline-flex w-full">
                    <Button className="w-full gap-2">
                      <FontAwesomeIcon icon={faPhone} className="size-3" />
                      Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
