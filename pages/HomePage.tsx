import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { BookOpen, Brain, Target, Users, ChevronLeft, ChevronRight, Play, Star } from "lucide-react";
import { useState } from "react";
import { Zap, Tags, RefreshCw, FileText } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Quick Capture",
    description: "Capture thoughts instantly with our minimal interface. No distractions, just pure focus on your ideas."
  },
  {
    icon: FileText,
    title: "Markdown Support",
    description: "Write with the power of Markdown. Format text, create lists, and structure your notes effortlessly."
  },
  {
    icon: Tags,
    title: "Smart Organization",
    description: "Tag, categorize, and find anything instantly. Your notes stay organized automatically as you write."
  },
  {
    icon: RefreshCw,
    title: "Seamless Sync",
    description: "Access your notes anywhere, anytime. Real-time sync across all your devices keeps you in flow."
  }
];

const studyModes = [
  {
    icon: BookOpen,
    title: "Study Guides",
    description: "Comprehensive guides for any subject",
    path: "/study-guides",
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    icon: Brain,
    title: "Flashcards", 
    description: "Learn with interactive flashcards",
    path: "/flashcards",
    color: "bg-green-500/10 text-green-600"
  },
  {
    icon: Target,
    title: "Practice Tests",
    description: "Test your knowledge with quizzes",
    path: "/practice-tests", 
    color: "bg-purple-500/10 text-purple-600"
  }
];

const popularSets = [
  {
    title: "Introduction to Psychology",
    terms: 156,
    creator: {
      name: "Dr. Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    rating: 4.9,
    subject: "Psychology"
  },
  {
    title: "Spanish Vocabulary - Beginner",
    terms: 89,
    creator: {
      name: "Carlos Martinez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    rating: 4.8,
    subject: "Spanish"
  },
  {
    title: "Chemistry: Periodic Table",
    terms: 118,
    creator: {
      name: "Prof. Lisa Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    rating: 4.9,
    subject: "Chemistry"
  },
  {
    title: "World History Timeline",
    terms: 245,
    creator: {
      name: "Michael Roberts",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    rating: 4.7,
    subject: "History"
  }
];

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(0);
  const setsPerPage = 2;
  const totalPages = Math.ceil(popularSets.length / setsPerPage);

  const getCurrentSets = () => {
    const start = currentPage * setsPerPage;
    return popularSets.slice(start, start + setsPerPage);
  };

  return (
    <>

    <section className="px-4 py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl tracking-tight lg:text-6xl">
                Capture ideas.
                <br />
                <span className="text-primary/70">Stay organized.</span>
              </h1>
              <p className="max-w-lg mx-auto text-xl text-muted-foreground lg:mx-0">
                NoteForge is the distraction-free workspace where your thoughts become actionable. 
                Quick capture, smart organization, seamless sync across all your devices.
              </p>
            </div>
            
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg" className="px-8 py-6 text-lg">
                Start Writing Free
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                See How It Works
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground lg:justify-start">
              <span>✓ No credit card required</span>
              <span>✓ Sync across devices</span>
              <span>✓ 14-day free trial</span>
            </div>
          </div>

          {/* Right Column - App Preview */}
          <div className="relative">
            <div className="overflow-hidden border shadow-2xl bg-card rounded-2xl">
              <div className="px-4 py-3 border-b bg-muted/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 text-sm text-muted-foreground">NoteForge</div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground"># Project Ideas</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Mobile app redesign concepts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 border-2 rounded-full border-muted-foreground"></div>
                      <span>User research findings summary</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 border-2 rounded-full border-muted-foreground"></div>
                      <span>Q4 feature roadmap</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground"># Meeting Notes</div>
                  <div className="p-3 rounded-lg bg-muted/30">
                    <div className="text-sm">
                      **Action Items from Design Review**
                      <br />
                      - [ ] Update color palette
                      <br />
                      - [x] Create responsive mockups
                      <br />
                      - [ ] Schedule user testing
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <span className="px-2 py-1 text-xs rounded bg-accent">#design</span>
                  <span className="px-2 py-1 text-xs rounded bg-accent">#urgent</span>
                  <span className="px-2 py-1 text-xs rounded bg-accent">#team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Hero Section */}

      

      {/* Study Mode Links */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            {studyModes.map((mode, index) => (
              <Card key={index} className="transition-all duration-300 cursor-pointer group hover:shadow-lg">
                <CardHeader className="pb-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${mode.color}`}>
                    <mode.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl transition-colors group-hover:text-primary">
                    {mode.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {mode.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <Button className="w-full" asChild>
                    <Link to={mode.path}>Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      
    <section className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl tracking-tight">
            Everything you need to stay productive
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
            NoteForge combines simplicity with powerful features to help you capture, organize, and act on your ideas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-none">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl">{feature.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>

      {/* Value Propositions */}
      <section className="px-4 py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Every class, every test */}
            <div>
              <h2 className="mb-6 text-4xl tracking-tight">
                Every class, every test, one ultimate study app
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
                Create or find study sets for any subject. With millions of study materials at your fingertips, you're always ready to learn.
              </p>
              <Button size="lg" asChild>
                <Link to="/subjects">Browse subjects</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="p-8 shadow-xl bg-card rounded-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span>Biology midterm prep</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span>Spanish vocabulary quiz</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span>Chemistry practice test</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid items-center gap-16 mt-20 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="p-8 shadow-xl bg-card rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Play className="w-4 h-4" />
                    <span>Converting lecture slides...</span>
                  </div>
                  <div className="space-y-3">
                    <div className="w-full h-4 rounded bg-muted/50"></div>
                    <div className="w-3/4 h-4 rounded bg-muted/50"></div>
                    <div className="w-1/2 h-4 rounded bg-primary/20"></div>
                  </div>
                  <Badge className="text-green-600 bg-green-500/10">
                    ✓ 45 flashcards created
                  </Badge>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-4xl tracking-tight">
                Make class material instantly studiable
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
                Transform your slides, videos, and notes into flashcards, quizzes, and study guides in seconds.
              </p>
              <Button size="lg" asChild>
                <Link to="/create">Try it out</Link>
              </Button>
            </div>
          </div>

          <div className="grid items-center gap-16 mt-20 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl tracking-tight">
                Test prep for any subject
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
                Practice with millions of questions and get personalized feedback to improve your knowledge and performance.
              </p>
              <Button size="lg" asChild>
                <Link to="/get-started">Get started</Link>
              </Button>
            </div>
            <div>
              <div className="p-8 shadow-xl bg-card rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Practice Test Results</h4>
                    <Badge className="text-green-600 bg-green-500/10">85%</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Correct answers</span>
                      <span className="text-sm font-medium">17/20</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-muted">
                      <div className="h-2 bg-green-500 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Great progress! Focus on chapters 3-5 for improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="mb-6 text-4xl tracking-tight">
              Empower your teaching with <span className="text-primary/70">NoteForge</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-muted-foreground">
              Create engaging study materials, track student progress, and bring interactive learning to your classroom.
            </p>
          </div>

          <div className="grid gap-8 mb-12 md:grid-cols-2">
            <Card className="text-left">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Free for teachers</CardTitle>
                <CardDescription>
                  Access premium features at no cost with verified teacher accounts
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-left">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Classroom games</CardTitle>
                <CardDescription>
                  Engage students with interactive study games and competitions
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link to="/teacher">Sign up as a teacher</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/teacher/demo">See how teachers use NoteForge</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Study Sets */}
      <section className="px-4 py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl tracking-tight">Popular Study Sets</h2>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="px-3 text-sm text-muted-foreground">
                {currentPage + 1} of {totalPages}
              </span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {getCurrentSets().map((set, index) => (
              <Card key={index} className="transition-shadow cursor-pointer group hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="mb-2 text-xl transition-colors group-hover:text-primary">
                        {set.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{set.terms} terms</span>
                        <Badge variant="secondary">{set.subject}</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span>{set.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={set.creator.avatar} alt={set.creator.name} />
                        <AvatarFallback>{set.creator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">{set.creator.name}</span>
                    </div>
                    <Button size="sm" asChild>
                      <Link to={`/flashcards/${index}`}>Study</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}