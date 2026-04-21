"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, Award, Users, Globe } from "lucide-react"

const stats = [
  { icon: Users, value: "50K+", label: "Happy Travelers" },
  { icon: Globe, value: "120+", label: "Destinations" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: CheckCircle2, value: "4.9", label: "Customer Rating" },
]

const features = [
  "Licensed and certified UAE tourism operator",
  "24/7 customer support throughout your trip",
  "Best price guarantee on all bookings",
  "Customizable tour packages",
  "Expert local guides and drivers",
  "Safe and comfortable transportation",
]

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=2012&auto=format&fit=crop"
                alt="Dubai Skyline"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:right-6 bg-card rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Award Winning</p>
                  <p className="text-muted-foreground text-sm">Best Tourism Agency 2024</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
              About Alnasir Travel & Tours
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Your Trusted Partner in UAE Adventures
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed text-pretty">
              Alnasir Oasis Tourism has been crafting unforgettable travel experiences 
              across the United Arab Emirates for over 15 years. We believe every 
              journey should be extraordinary, which is why we go above and beyond 
              to create personalized adventures that exceed expectations.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
              From the shimmering skyscrapers of Dubai to the tranquil deserts of 
              Abu Dhabi, we connect travelers with the authentic spirit of the Emirates.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
            >
              Learn More About Us
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-card rounded-xl shadow-lg">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
