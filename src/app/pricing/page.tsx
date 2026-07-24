import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faArrowRight,
  faPhone,
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
import { pricingPlans, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pool Construction Pricing",
  description:
    "Transparent pricing for custom pool design, construction, and maintenance. From initial consultation to premium builds — find your plan.",
};

export default function PricingPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/20">
            Pricing
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Clear, upfront pricing for every stage of your pool journey — no
            hidden fees, no surprises.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 gradient-divider" />
      </section>

      {/* ── Plans Grid ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`glass-card relative h-full flex flex-col ${
                  plan.popular
                    ? "ring-2 ring-accent shadow-lg shadow-accent/20"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground font-semibold px-3">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-extrabold text-primary">
                      {plan.price}
                    </span>
                  </div>
                  <CardDescription className="mt-1">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="size-3.5 text-secondary mt-0.5 shrink-0"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex w-full mt-6">
                    <Button
                      className="w-full gap-2"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      <FontAwesomeIcon icon={faPhone} className="size-3" />
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 sm:py-28 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about building your dream pool.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="glass-card group"
              >
                <summary className="cursor-pointer px-6 py-5 font-semibold text-foreground list-none flex items-center justify-between">
                  <span>{faq.q}</span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="size-3.5 text-muted-foreground transition-transform group-open:rotate-90 shrink-0 ml-4"
                  />
                </summary>
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We&apos;re here to help.
            </p>
            <Link href="/contact" className="inline-flex">
              <Button size="lg" className="gap-2">
                <FontAwesomeIcon icon={faPhone} className="size-4" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
