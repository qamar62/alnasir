"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Plane, Hotel, Car, Ship, Mountain, Camera, Utensils, Shield } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Best deals on domestic and international flights with flexible booking options."
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Handpicked hotels from luxury resorts to budget-friendly stays across UAE."
  },
  {
    icon: Car,
    title: "Car Rentals",
    description: "Premium vehicles for city tours or desert adventures with experienced drivers."
  },
  {
    icon: Ship,
    title: "Yacht & Cruise",
    description: "Luxury yacht charters and romantic dinner cruises along Dubai Marina."
  },
  {
    icon: Mountain,
    title: "Adventure Tours",
    description: "Thrilling desert safaris, dune bashing, and mountain trekking experiences."
  },
  {
    icon: Camera,
    title: "Photography Tours",
    description: "Capture stunning moments at iconic locations with professional guides."
  },
  {
    icon: Utensils,
    title: "Culinary Experiences",
    description: "Authentic Emirati cuisine and world-class dining experiences."
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive coverage for worry-free travel throughout your journey."
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Everything You Need
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            From planning to execution, we handle every aspect of your journey 
            to ensure a seamless travel experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 bg-card"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
