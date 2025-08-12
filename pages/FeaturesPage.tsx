import { CheckCircle, FileText, Brain, Target, RefreshCw, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: FileText,
    title: "Smart Note Organization",
    description: "Create, organize, and manage your notes with folders, tags, and powerful search capabilities.",
    details: ["Hierarchical folder structure", "Custom tagging system", "Full-text search", "Rich text formatting"]
  },
  {
    icon: Brain,
    title: "Intelligent Summarization",
    description: "Transform lengthy notes into concise summaries to help you grasp key concepts quickly.",
    details: ["Manual summary creation", "Key point extraction", "Structured overview", "Future AI integration"]
  },
  {
    icon: Target,
    title: "Knowledge Elaboration",
    description: "Expand on your notes with detailed explanations and examples to deepen understanding.",
    details: ["Concept expansion", "Example generation", "Context building", "Learning reinforcement"]
  },
  {
    icon: CheckCircle,
    title: "Interactive Quizzes",
    description: "Test your knowledge with quizzes automatically generated from your notes and summaries.",
    details: ["Note-based questions", "Progress tracking", "Performance analytics", "Spaced repetition"]
  },
  {
    icon: RefreshCw,
    title: "Cross-Platform Sync",
    description: "Access your notes and study materials seamlessly across all your devices.",
    details: ["Real-time synchronization", "Offline access", "Multi-device support", "Data backup"]
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your study materials are kept safe with enterprise-grade security and privacy protection.",
    details: ["End-to-end encryption", "Local storage options", "Privacy-first design", "GDPR compliant"]
  }
];

export default function FeaturesPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl mb-6">
            Everything you need to <span className="text-primary/70">study smarter</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            NoteForge combines powerful note-taking with intelligent study tools to help you learn more effectively and retain information longer.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted/30 rounded-2xl py-16 px-8">
          <h2 className="text-3xl mb-4">Ready to transform your study routine?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using NoteForge to improve their learning outcomes and academic performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/get-started">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/dashboard">View Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}