"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Our Tours", href: "#tours" },
  { name: "Destinations", href: "#destinations" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
]

const tourLinks = [
  { name: "Desert Safari", href: "#" },
  { name: "City Tours", href: "#" },
  { name: "Yacht Cruises", href: "#" },
  { name: "Adventure Tours", href: "#" },
  { name: "Custom Packages", href: "#" },
]

const supportLinks = [
  { name: "FAQs", href: "#" },
  { name: "Travel Insurance", href: "#" },
  { name: "Booking Policy", href: "#" },
  { name: "Cancellation Policy", href: "#" },
  { name: "Privacy Policy", href: "#" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-serif font-bold text-xl text-primary-foreground">
                AN
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold text-primary-foreground">ALNASIR</span>
                <span className="text-xs tracking-widest uppercase text-primary-foreground/60">Travel & Tours</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Your trusted partner for unforgettable UAE travel experiences. 
              Discover the magic of the Emirates with us.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-primary-foreground mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-primary-foreground mb-5">Popular Tours</h3>
            <ul className="space-y-3">
              {tourLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-primary-foreground mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Office 1234, Business Bay<br />
                  Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+971501234567" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  +971 50 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@anoasistourism.ae" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  info@anoasistourism.ae
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AN Oasis Tourism (Alnasir Oasis Tourism). All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {supportLinks.slice(2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary-foreground/60 text-sm hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
