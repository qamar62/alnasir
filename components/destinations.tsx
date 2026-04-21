"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star } from "lucide-react"

const destinations = [
  {
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1974&auto=format&fit=crop",
    tours: 45,
    rating: 4.9,
    description: "City of Gold & Innovation"
  },
  {
    name: "Abu Dhabi",
    image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=2070&auto=format&fit=crop",
    tours: 32,
    rating: 4.8,
    description: "Cultural Capital of UAE"
  },
  {
    name: "Sharjah",
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=2070&auto=format&fit=crop",
    tours: 18,
    rating: 4.7,
    description: "Heritage & Arts Hub"
  },
  {
    name: "Ras Al Khaimah",
    image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1974&auto=format&fit=crop",
    tours: 15,
    rating: 4.8,
    description: "Adventure Paradise"
  },
]

export function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Popular Destinations
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Explore the Emirates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            From the glittering skyline of Dubai to the serene deserts of Abu Dhabi, 
            discover the diverse wonders of the UAE.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.name}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 text-primary fill-primary" />
                    <span className="text-primary-foreground text-sm font-medium">{destination.rating}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-1">
                    {destination.name}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-3">
                    {destination.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{destination.tours} Tours Available</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
