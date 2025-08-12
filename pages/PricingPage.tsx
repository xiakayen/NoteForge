import { Check, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out NoteForge",
    features: [
      "Up to 50 notes",
      "Basic organization",
      "Manual summaries",
      "Simple quizzes",
      "Mobile app access"
    ],
    limitations: [
      "Limited storage",
      "No sync across devices",
      "Basic support"
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Student",
    price: "$9",
    period: "per month",
    description: "Everything you need for academic success",
    features: [
      "Unlimited notes",
      "Advanced organization",
      "Smart summaries",
      "Interactive quizzes",
      "Cross-device sync",
      "Offline access",
      "Priority support",
      "Study analytics",
      "Export options"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For power users and graduate students",
    features: [
      "Everything in Student",
      "AI-powered summaries",
      "Advanced quiz generation",
      "Collaboration tools",
      "API access",
      "Custom integrations",
      "Premium support",
      "Advanced analytics",
      "Team features"
    ],
    cta: "Start Free Trial",
    popular: false
  }
];

const faqs = [
  {
    question: "Can I change plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate the billing."
  },
  {
    question: "Is there a student discount?",
    answer: "Students with a valid .edu email address get 50% off any paid plan. Verify your student status during signup."
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "Your data remains accessible for 30 days after cancellation. You can export all your notes and summaries before the account is deleted."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. Contact support for a full refund within 30 days."
  }
];

export default function PricingPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl mb-6">
            Simple, transparent <span className="text-primary/70">pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. Start with our free tier and upgrade as you grow.
          </p>
          <div className="mt-8">
            <Badge variant="secondary" className="px-4 py-2">
              🎓 50% off for students with .edu email
            </Badge>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative h-full ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="px-3 py-1 bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
                <CardDescription className="mt-4">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations?.map((limitation, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-4 h-4 border border-muted-foreground rounded-full flex-shrink-0" />
                      <span className="text-sm">{limitation}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/get-started">{plan.cta}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
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
        <div className="text-center bg-muted/30 rounded-2xl py-16 px-8 mt-16">
          <h2 className="text-3xl mb-4">Ready to start studying smarter?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who have improved their grades with NoteForge. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/get-started">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/help">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}