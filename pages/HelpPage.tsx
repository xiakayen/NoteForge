import { Search, BookOpen, MessageCircle, Mail, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router-dom";

const helpCategories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn the basics of NoteForge",
    articles: [
      "Creating your first note",
      "Organizing with folders and tags",
      "Setting up sync across devices",
      "Understanding the dashboard"
    ]
  },
  {
    icon: Search,
    title: "Features & How-Tos",
    description: "Make the most of NoteForge features",
    articles: [
      "Creating effective summaries",
      "Using the quiz system",
      "Advanced search techniques",
      "Collaboration best practices"
    ]
  },
  {
    icon: MessageCircle,
    title: "Troubleshooting",
    description: "Common issues and solutions",
    articles: [
      "Sync issues between devices",
      "Import/export problems",
      "Performance optimization",
      "Account and billing questions"
    ]
  }
];

const contactOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "Mon-Fri, 9am-6pm EST",
    action: "Start Chat",
    popular: true
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message",
    availability: "Response within 24 hours",
    action: "Send Email"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Talk to our support specialists",
    availability: "Pro plan subscribers only",
    action: "Schedule Call"
  }
];

const faqs = [
  {
    question: "How do I sync my notes across devices?",
    answer: "Sign in to your account on each device and enable sync in Settings. Your notes will automatically sync when connected to the internet."
  },
  {
    question: "Can I import notes from other apps?",
    answer: "Yes! NoteForge supports imports from popular apps like Notion, Evernote, OneNote, and more. Go to Settings > Import to get started."
  },
  {
    question: "How does the quiz feature work?",
    answer: "Our quiz system analyzes your notes and summaries to generate relevant questions. You can customize question types and difficulty levels."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use end-to-end encryption and never access your personal notes. Your data is stored securely and backed up regularly."
  },
  {
    question: "Can I use NoteForge offline?",
    answer: "Yes, with a paid plan you can access and edit your notes offline. Changes will sync when you reconnect to the internet."
  }
];

export default function HelpPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl mb-6">
            How can we <span className="text-primary/70">help you?</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find answers to common questions, explore our documentation, or get in touch with our support team.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search help articles..." 
              className="pl-10 py-3"
            />
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {helpCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.articles.map((article, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  View All Articles
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Options */}
        <div className="mb-16">
          <h2 className="text-3xl text-center mb-12">Need more help?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <Card key={index} className={`relative ${option.popular ? 'border-primary' : ''}`}>
                {option.popular && (
                  <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{option.availability}</span>
                  </div>
                  <Button className="w-full">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted/30 rounded-2xl py-16 px-8">
          <h2 className="text-3xl mb-4">Still need help?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our support team is here to help you get the most out of NoteForge. Don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Contact Support
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/get-started">Try NoteForge Free</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}