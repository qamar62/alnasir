"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Office 1234, Business Bay", "Dubai, United Arab Emirates"]
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+971 50 123 4567", "+971 4 123 4567"]
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@anoasistourism.ae", "booking@anoasistourism.ae"]
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"]
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/60">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Let&apos;s Plan Your Trip
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            Have questions or ready to book? Reach out to our friendly team 
            and we&apos;ll help you create the perfect UAE experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info) => (
              <Card key={info.title} className="border border-white/40 shadow-md bg-card/80 backdrop-blur-sm">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    {info.details.map((detail) => (
                      <p key={detail} className="text-muted-foreground text-sm">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 border border-white/40 shadow-xl bg-card/85 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input 
                      placeholder="John Doe" 
                      className="bg-background/70 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-background/70 border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input 
                      placeholder="+971 50 XXX XXXX" 
                      className="bg-background/70 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Interested In
                    </label>
                    <select className="w-full h-10 px-3 rounded-md bg-background/70 border border-border text-foreground focus:border-primary focus:outline-none">
                      <option value="">Select a service</option>
                      <option value="desert-safari">Desert Safari</option>
                      <option value="city-tour">City Tour</option>
                      <option value="yacht-cruise">Yacht Cruise</option>
                      <option value="custom-package">Custom Package</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea
                    rows={4}
                    placeholder="Tell us about your travel plans..."
                    className="bg-background/70 border-border focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg shadow-primary/30"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
