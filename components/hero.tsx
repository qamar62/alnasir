"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium">Discover the Magic of UAE</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            Your Gateway to{" "}
            <span className="text-primary drop-shadow-[0_2px_10px_rgba(255,180,50,0.45)]">Unforgettable</span>{" "}
            Adventures
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
            Experience the wonders of the United Arab Emirates with AN Oasis Tourism. 
            From majestic desert safaris to stunning city tours, we craft memories that last a lifetime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-2xl shadow-primary/40"
            >
              Explore Tours
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/35 bg-white/5 text-white hover:bg-white/15 font-semibold px-8 py-6 text-lg backdrop-blur-sm"
            >
              Watch Video
            </Button>
          </div>

          {/* Search Box */}
          <div className="glass rounded-3xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded-xl border border-white/40">
                <MapPin className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Destination</p>
                  <p className="font-medium text-foreground">Dubai, UAE</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded-xl border border-white/40">
                <Calendar className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Travel Date</p>
                  <p className="font-medium text-foreground">Select Date</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/70 rounded-xl border border-white/40">
                <Users className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Guests</p>
                  <p className="font-medium text-foreground">2 Adults</p>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-full min-h-14 text-lg">
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#destinations" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  )
}
