import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Designer",
    company: "Startups Inc.",
    content: "NoteForge has completely transformed how I capture and organize my design thinking. The markdown support and tagging system are exactly what I needed.",
    rating: 5,
    initials: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "Engineering Manager",
    company: "TechFlow",
    content: "Finally, a note-taking app that doesn't get in my way. Lightning fast capture during meetings and perfect sync across all my devices.",
    rating: 5,
    initials: "MR"
  },
  {
    name: "Emma Thompson",
    role: "Content Strategist",
    company: "Creative Agency",
    content: "The distraction-free interface helps me stay in flow state. I can focus on my ideas without getting lost in complicated features.",
    rating: 5,
    initials: "ET"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-muted/20 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl tracking-tight">
            Loved by productive people everywhere
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of users who've transformed their productivity with NoteForge
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}