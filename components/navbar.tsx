"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Destinations", href: "#destinations" },
  { name: "Tours", href: "#tours" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-foreground text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+971501234567" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>+971 50 123 4567</span>
            </a>
            <a href="mailto:info@anoasistourism.ae" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span>info@alnasirtravel.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Welcome to Alnasir Travel & Tours - Your Gateway to UAE</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={cn(
          "fixed z-50 transition-all duration-500 ease-out",
          isScrolled
            ? "top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl glass rounded-full"
            : "w-full bg-transparent md:top-10 top-0 left-0 translate-x-0"
        )}
      >
        <div className={cn(
          "mx-auto transition-all duration-500",
          isScrolled ? "px-6" : "container px-4"
        )}>
          <div className={cn(
            "flex items-center justify-between transition-all duration-500",
            isScrolled ? "h-16" : "h-20"
          )}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-xl",
                  isScrolled
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground border border-white/25"
                )}>
                  AN
                </div>
              </div>
              <div className={cn(
                "flex flex-col",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}>
                <span className="font-serif text-xl font-semibold tracking-wide">ALNASIR</span>
                <span className="text-xs tracking-widest uppercase opacity-80">Travel & Tours</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "font-medium transition-colors hover:text-primary relative group",
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  )}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-lg shadow-primary/30"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
              ) : (
                <Menu className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute w-full bg-card/95 backdrop-blur-xl shadow-lg transition-all duration-300 overflow-hidden border border-border/70",
            isScrolled ? "rounded-2xl mt-2" : "",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-foreground hover:text-primary font-medium border-b border-border last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/25">
              Book Now
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}
