import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import logo from "../assets/logo.webp";

const quickLinks = [
  { name: "Home", hash: "top" },
  { name: "About", hash: "about" },
  { name: "Programs", hash: "programs" },
  { name: "Why Us", hash: "why-choose-us" },
  { name: "Membership", hash: "membership" },
  { name: "Gallery", hash: "gallery" },
  { name: "Contact", hash: "location" },
];

const WHATSAPP_URL =
  "https://wa.me/919101376268?text=" +
  encodeURIComponent("Hi Sky Lifting Club, I'd like to know more about joining the club.");

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Sky Lifting Club logo"
              className="h-12 w-12 rounded-full border border-white/20 object-cover"
            />
            <span className="font-display text-2xl tracking-wide">SKY LIFTING CLUB</span>
          </a>
          <p className="mt-4 max-w-xs text-sm text-white/60">
            A weightlifting community built on honor, discipline, and respect. Train harder, lift
            heavier, rise together.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/80">
            Quick Links
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/80">Contact</h2>
          <address className="mt-4 space-y-3 text-sm not-italic text-white/60">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                Sky Lifting Club
                <br />
                Barnarddi, Nalbari, Assam 781303
              </span>
            </p>
            <p>
              <a
                href="tel:+919101376268"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                091013 76268
              </a>
            </p>
            <p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} Sky Lifting Club. All rights reserved.</p>
          <p>Honor • Discipline • Respect</p>
        </div>
      </div>
    </footer>
  );
}
