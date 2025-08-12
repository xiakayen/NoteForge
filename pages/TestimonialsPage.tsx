import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Medical Student",
    university: "Stanford University",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    quote: "NoteForge completely transformed how I study for med school. The summarization feature helps me distill complex topics, and the quizzes ensure I actually retain what I learn. My exam scores improved by 15% after using it for just one semester.",
    category: "Medical Student"
  },
  {
    name: "Marcus Johnson",
    role: "Law Student",
    university: "Harvard Law School",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    quote: "The organization features are incredible. I can tag cases by legal area, create summaries of complex precedents, and the quiz function helps me memorize important legal principles. It's like having a study assistant that never sleeps.",
    category: "Law Student"
  },
  {
    name: "Emily Rodriguez",
    role: "PhD Candidate",
    university: "MIT",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    quote: "As a PhD student, I deal with massive amounts of research papers. NoteForge helps me organize my literature reviews, create summaries of key findings, and track my research progress. The elaboration feature is perfect for developing my dissertation arguments.",
    category: "PhD Student"
  },
  {
    name: "David Kim",
    role: "Engineering Student",
    university: "UC Berkeley",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    quote: "The technical concepts in my engineering courses are complex, but NoteForge's elaboration feature helps me break them down. I can create detailed explanations with examples, and the quiz system helps me practice problem-solving patterns.",
    category: "Engineering Student"
  },
  {
    name: "Lisa Thompson",
    role: "Psychology Major",
    university: "University of Pennsylvania",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    quote: "I love how I can connect different psychological theories and concepts using the tagging system. The summarization helps me prepare for discussions, and creating quizzes from my notes makes studying for exams so much more effective.",
    category: "Psychology Student"
  },
  {
    name: "James Wright",
    role: "Business Student",
    university: "Wharton School",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    quote: "For case studies and business analysis, NoteForge is invaluable. I can organize cases by industry, create summaries of key learnings, and use the quiz feature to memorize important frameworks and models. It's a game-changer for MBA students.",
    category: "Business Student"
  }
];

const stats = [
  { number: "50K+", label: "Active Students" },
  { number: "95%", label: "Improved Grades" },
  { number: "4.9/5", label: "App Store Rating" },
  { number: "2M+", label: "Notes Created" }
];

export default function TestimonialsPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl mb-6">
            Loved by students <span className="text-primary/70">worldwide</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how NoteForge is helping students across different disciplines achieve better academic results and develop more effective study habits.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-semibold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <Badge variant="secondary" className="text-xs">{testimonial.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.university}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="w-8 h-8 text-muted-foreground/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed pl-6">{testimonial.quote}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted/30 rounded-2xl py-16 px-8">
          <h2 className="text-3xl mb-4">Join the community of successful students</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your free trial today and discover why students from top universities choose NoteForge for their academic success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/get-started">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/features">Explore Features</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}