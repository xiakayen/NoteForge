import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { 
  Users, 
  BookOpen, 
  Target, 
  BarChart3, 
  Gamepad2, 
  Shield, 
  Star,
  CheckCircle,
  Play,
  Award,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Users,
    title: "Class Management",
    description: "Organize your students into classes and track their progress individually and collectively.",
    benefits: ["Create unlimited classes", "Invite students easily", "Monitor engagement"]
  },
  {
    icon: BookOpen,
    title: "Study Set Creation",
    description: "Build comprehensive study materials with our advanced creation tools.",
    benefits: ["Bulk import from files", "AI-powered generation", "Rich media support"]
  },
  {
    icon: Target,
    title: "Assessment Tools",
    description: "Create quizzes and tests to evaluate student understanding effectively.",
    benefits: ["Multiple question types", "Auto-grading", "Detailed analytics"]
  },
  {
    icon: Gamepad2,
    title: "Interactive Games",
    description: "Engage students with fun, competitive learning games and activities.",
    benefits: ["Live classroom games", "Team competitions", "Reward systems"]
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Get detailed insights into student performance and learning patterns.",
    benefits: ["Individual progress reports", "Class performance overview", "Learning analytics"]
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "COPPA and FERPA compliant platform with enterprise-grade security.",
    benefits: ["Student data protection", "Secure access controls", "Privacy compliance"]
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "High School Biology Teacher",
    school: "Lincoln High School",
    quote: "NoteForge has transformed how I create and share study materials. My students are more engaged and their test scores have improved by 20%.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "College Chemistry Professor", 
    school: "State University",
    quote: "The analytics help me identify which concepts students struggle with most. I can adjust my teaching accordingly and provide targeted support.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Middle School Math Teacher",
    school: "Roosevelt Middle School",
    quote: "The interactive games make learning fun! My students actually ask to play the math review games during break time.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

const stats = [
  { number: "50K+", label: "Teachers" },
  { number: "2M+", label: "Students" },
  { number: "95%", label: "Improved Engagement" },
  { number: "4.9/5", label: "Teacher Rating" }
];

export default function TeacherPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-primary/10 text-primary">Free for Verified Teachers</Badge>
          <h1 className="text-5xl lg:text-6xl mb-6 tracking-tight">
            Empower your teaching with <span className="text-primary/70">NoteForge</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Create engaging study materials, track student progress, and bring interactive learning to your classroom with our comprehensive teacher tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-semibold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 tracking-tight">Everything you need to teach effectively</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed specifically for educators to enhance teaching and improve student outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 tracking-tight">Get started in 3 simple steps</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-xl font-semibold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Verify Your Status</h3>
                <p className="text-muted-foreground">
                  Confirm your teacher status with your school email or teaching credentials to unlock free premium features.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-xl font-semibold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Your Classroom</h3>
                <p className="text-muted-foreground">
                  Set up your virtual classroom, add your courses, and invite students to join your learning community.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-xl font-semibold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Start Teaching</h3>
                <p className="text-muted-foreground">
                  Create study materials, assign practice tests, and track student progress with our powerful tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Teacher Verification Form */}
        <Card className="mb-20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Get Your Free Teacher Account</CardTitle>
            <CardDescription>
              Verify your teacher status to unlock premium features at no cost
            </CardDescription>
          </CardHeader>
          <CardContent className="max-w-md mx-auto space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Smith" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="schoolEmail">School Email</Label>
              <Input id="schoolEmail" type="email" placeholder="john.smith@school.edu" />
              <p className="text-xs text-muted-foreground">
                Use your official school email address for automatic verification
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="school">School/Institution</Label>
              <Input id="school" placeholder="Lincoln High School" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject(s) You Teach</Label>
              <Input id="subject" placeholder="Biology, Chemistry" />
            </div>
            <Button className="w-full">
              Create Teacher Account
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              By signing up, you agree to our Terms of Service and Privacy Policy
            </p>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 tracking-tight">Loved by educators worldwide</h2>
            <p className="text-xl text-muted-foreground">
              See how teachers are transforming their classrooms with NoteForge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.school}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-muted/30 rounded-2xl py-16 px-8">
          <h2 className="text-3xl mb-4">Ready to transform your teaching?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of educators who are already using NoteForge to create more engaging and effective learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Award className="w-4 h-4 mr-2" />
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/help">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}