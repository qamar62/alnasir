"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, Heart } from "lucide-react"

const tours = [
  {
    title: "Desert Safari Adventure",
    image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1974&auto=format&fit=crop",
    duration: "6 Hours",
    groupSize: "Up to 10",
    rating: 4.9,
    reviews: 324,
    price: 299,
    originalPrice: 399,
    tag: "Best Seller"
  },
  {
    title: "Dubai City Tour",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    duration: "8 Hours",
    groupSize: "Up to 15",
    rating: 4.8,
    reviews: 256,
    price: 199,
    originalPrice: 249,
    tag: "Popular"
  },
  {
    title: "Luxury Yacht Cruise",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2074&auto=format&fit=crop",
    duration: "4 Hours",
    groupSize: "Up to 20",
    rating: 4.9,
    reviews: 189,
    price: 499,
    originalPrice: 599,
    tag: "Premium"
  },
  {
    title: "Abu Dhabi Day Trip",
    image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=2070&auto=format&fit=crop",
    duration: "10 Hours",
    groupSize: "Up to 12",
    rating: 4.7,
    reviews: 198,
    price: 249,
    originalPrice: 299,
    tag: null
  },
  {
    title: "Burj Khalifa Experience",
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=1935&auto=format&fit=crop",
    duration: "3 Hours",
    groupSize: "Flexible",
    rating: 4.9,
    reviews: 512,
    price: 179,
    originalPrice: 229,
    tag: "Must Do"
  },
  {
    title: "Traditional Dhow Dinner Cruise",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1974&auto=format&fit=crop",
    duration: "2.5 Hours",
    groupSize: "Up to 30",
    rating: 4.6,
    reviews: 278,
    price: 149,
    originalPrice: 189,
    tag: null
  },
]

export function Tours() {
  return (
    <section id="tours" className="py-20 bg-secondary/70">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Featured Tours
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Handpicked Experiences
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Curated tours designed to give you the best of UAE. 
            Each experience is crafted with attention to detail.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <Card 
              key={tour.title}
              className="group overflow-hidden border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-sm hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Tag */}
                  {tour.tag && (
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-md shadow-primary/35">
                      {tour.tag}
                    </span>
                  )}
                  
                  {/* Wishlist */}
                  <button className="absolute top-4 right-4 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-foreground" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <span className="font-semibold text-foreground">{tour.rating}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">({tour.reviews} reviews)</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {tour.title}
                  </h3>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-muted-foreground line-through text-sm">AED {tour.originalPrice}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-primary">AED {tour.price}</span>
                        <span className="text-muted-foreground text-sm">/ person</span>
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/30">
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
          >
            View All Tours
          </Button>
        </div>
      </div>
    </section>
  )
}
