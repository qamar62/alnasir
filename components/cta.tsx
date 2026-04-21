"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1974&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-foreground/20 via-primary-foreground/5 to-primary-foreground/20" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary-foreground/20 via-primary-foreground/5 to-primary-foreground/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-primary-foreground/80 font-semibold text-sm tracking-wider uppercase mb-3">
            Ready for an Adventure?
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Start Planning Your Dream UAE Journey Today
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-10 max-w-2xl mx-auto text-pretty">
            Let our expert travel consultants create a personalized itinerary 
            just for you. Special offers available for early bookings!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-6 text-lg group"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-lg"
            >
              Call Us: +971 50 123 4567
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-12 border-t border-primary-foreground/20">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-foreground">100%</p>
              <p className="text-primary-foreground/70 text-sm">Satisfaction Guaranteed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-foreground">24/7</p>
              <p className="text-primary-foreground/70 text-sm">Customer Support</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-foreground">Free</p>
              <p className="text-primary-foreground/70 text-sm">Cancellation Policy</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-foreground">Best</p>
              <p className="text-primary-foreground/70 text-sm">Price Match</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
