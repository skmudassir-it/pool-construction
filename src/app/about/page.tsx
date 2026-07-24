import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSwimmingPool,
  faAward,
  faShield,
  faUsers,
  faBolt,
  faPhone,
  faArrowRight,
  faHardHat,
  faSun,
  faMedal,
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
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "About CrystalBlue Pool Builders",
  description:
    "Learn about CrystalBlue Pool Builders — Florida's trusted custom pool builder with 15+ years of experience, 500+ pools built, and a passion for backyard excellence.",
};

const stats = [
  { number: "15+", label: "Years Experience", icon: faAward },
  { number: "500+", label: "Pools Built", icon: faSwimmingPool },
  { number: "98%", label: "Satisfaction Rate", icon: faSun },
  { number: "10yr", label: "Structural Warranty", icon: faShield },
];

const team = [
  {
    name: "Michael Torres",
    role: "Founder & CEO",
    bio: "With over 20 years in luxury pool construction, Michael founded CrystalBlue to bring resort-quality pools to Florida homeowners.",
  },
  {
    name: "Sarah Chen",
    role: "Lead Designer",
    bio: "Sarah's award-winning designs have been featured in Pool & Spa News. She turns every backyard into a work of art.",
  },
  {
    name: "David Okonkwo",
    role: "Construction Manager",
    bio: "David oversees every build with military precision. His crews are known for clean sites, on-time delivery, and flawless execution.",
  },
];

const values = [
  {
    icon: faAward,
    title: "Craftsmanship",
    description:
      "We use only premium materials and time-tested techniques. Every pool is a reflection of our commitment to quality.",
  },
  {
    icon: faShield,
    title: "Integrity",
    description:
      "Honest pricing, clear communication, and no surprises. We treat every project like it's our own backyard.",
  },
  {
    icon: faUsers,
    title: "Client-Focused",
    description:
      "Your vision is our blueprint. We collaborate closely at every stage to ensure the final result exceeds your expectations.",
  },
  {
    icon: faBolt,
    title: "Innovation",
    description:
      "We embrace the latest in pool technology — smart automation, energy-efficient systems, and cutting-edge design software.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/20">
            About Us
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            CrystalBlue Pool Builders
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Florida&apos;s premier custom pool builder — turning backyards into
            paradise since 2009.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 gradient-divider" />
      </section>

      {/* ── Mission ── */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            At CrystalBlue Pool Builders, we believe every homeowner deserves a
            backyard escape. Our mission is to design and build pools that don&apos;t
            just meet expectations — they transform lifestyles. From the first
            sketch to the final splash, we pour passion, precision, and pride into
            every project. With deep roots in Florida&apos;s coastal communities,
            we understand the unique demands of our climate and deliver pools
            that stand the test of time.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary to-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <FontAwesomeIcon
                  icon={stat.icon}
                  className="size-8 text-accent mb-3"
                />
                <div className="text-4xl font-extrabold">{stat.number}</div>
                <div className="text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20 sm:py-28 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Meet the Experts
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to building the pool of your
              dreams.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="glass-card text-center">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto flex items-center justify-center mb-4">
                    <FontAwesomeIcon
                      icon={faHardHat}
                      className="size-10 text-primary/40"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              What Drives Us
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Four principles that guide every pool we build and every
              relationship we nurture.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="glass-card text-center">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <FontAwesomeIcon
                      icon={value.icon}
                      className="size-6 text-primary"
                    />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-gradient-to-r from-primary via-primary to-secondary text-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let&apos;s Build Something Beautiful Together
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Schedule your free consultation and discover what&apos;s possible for
            your backyard.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex">
              <Button
                size="lg"
                className="gap-2 bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <FontAwesomeIcon icon={faPhone} className="size-4" />
                Get Your Free Estimate
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 gradient-divider" />
      </section>
    </div>
  );
}
