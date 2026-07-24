"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faPaperPlane,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { siteConfig, services } from "@/lib/data";

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z
    .string()
    .min(10, "Please tell us a bit more (at least 10 characters)"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const serviceValue = watch("service");

  const onSubmit = async (data: QuoteFormData) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        setServerMessage(json.message || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setServerMessage(json.message);
      setStatus("success");
      reset();
    } catch {
      setServerMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/20">
            Contact
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let&apos;s Talk About Your Pool
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Ready to get started? Fill out the form and our team will reach out
            within 24 hours.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 gradient-divider" />
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              {status === "success" ? (
                <div className="glass-card p-12 text-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="size-16 text-secondary mb-6"
                  />
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    Thank You!
                  </h2>
                  <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                    {serverMessage}
                  </p>
                  <Button
                    className="mt-8"
                    variant="outline"
                    onClick={() => setStatus("idle")}
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="glass-card p-8 space-y-6"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Request a Free Quote
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Tell us about your project and we&apos;ll get back to you
                    with a personalized consultation.
                  </p>

                  {status === "error" && (
                    <div className="rounded-lg bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive">
                      {serverMessage}
                    </div>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        {...register("name")}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        {...register("email")}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        {...register("phone")}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Service Interested In
                      </label>
                      <Select
                        value={serviceValue}
                        onValueChange={(v) =>
                          setValue("service", v ?? "", { shouldValidate: true })
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s.slug} value={s.slug}>
                              {s.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Tell Us About Your Project *
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Describe your dream pool — size, style, features you'd like, timeline, budget range..."
                      {...register("message")}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2"
                    disabled={status === "submitting"}
                  >
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="size-4"
                    />
                    {status === "submitting"
                      ? "Sending..."
                      : "Send Inquiry"}
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="glass-card p-6">
                <h3 className="font-bold text-foreground text-lg mb-4">
                  Contact Info
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="size-4 text-primary"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Phone
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {siteConfig.phone}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="size-4 text-primary"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Email
                      </p>
                      <p className="text-sm text-muted-foreground break-all">
                        {siteConfig.email}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="size-4 text-primary"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Address
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {siteConfig.address}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="size-4 text-primary"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Hours
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Mon-Fri 8AM-6PM
                        <br />
                        Sat 9AM-2PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                <h3 className="font-bold text-foreground text-lg mb-3">
                  Why Choose Us?
                </h3>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="size-4 text-secondary shrink-0"
                    />
                    Free design consultation
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="size-4 text-secondary shrink-0"
                    />
                    10-year structural warranty
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="size-4 text-secondary shrink-0"
                    />
                    Licensed &amp; insured
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="size-4 text-secondary shrink-0"
                    />
                    500+ pools built
                  </li>
                  <li className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="size-4 text-secondary shrink-0"
                    />
                    24-hour response time
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
