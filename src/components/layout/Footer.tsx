import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwimmingPool, faPhone, faEnvelope, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faYelp } from "@fortawesome/free-brands-svg-icons";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/data";

const footerLinks = {
  Services: [
    { label: "Custom Pool Design", href: "/services/custom-pool-design" },
    { label: "Pool Construction", href: "/services/pool-construction" },
    { label: "Pool Renovation", href: "/services/pool-renovation" },
    { label: "Pool Maintenance", href: "/services/pool-maintenance" },
    { label: "Spa & Hot Tubs", href: "/services/spa-hot-tub" },
    { label: "Water Features", href: "/services/water-features" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <FontAwesomeIcon icon={faSwimmingPool} className="size-5 text-sky-400" />
              <span>CrystalBlue</span>
            </Link>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              {siteConfig.tagline}. Expert pool design, construction, and renovation serving Florida&apos;s coastal communities.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><FontAwesomeIcon icon={faFacebook} className="size-4" /></a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><FontAwesomeIcon icon={faInstagram} className="size-4" /></a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors"><FontAwesomeIcon icon={faYelp} className="size-4" /></a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-3">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-sky-400 transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faPhone} className="size-3.5 mt-0.5 text-sky-400 shrink-0" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="size-3.5 mt-0.5 text-sky-400 shrink-0" />
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="size-3.5 mt-0.5 text-sky-400 shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faClock} className="size-3.5 mt-0.5 text-sky-400 shrink-0" />
                <span>Mon-Fri 8AM-6PM<br />Sat 9AM-2PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-800" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} CrystalBlue Pool Builders. All rights reserved. Licensed & Insured — FL License #CBC-123456.
        </p>
      </div>
    </footer>
  );
}
