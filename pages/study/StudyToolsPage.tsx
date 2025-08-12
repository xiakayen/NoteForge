import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Brain, Target, BookOpen, Users, Zap, TrendingUp } from "lucide-react";

const studyTools = [
  {
    icon: Brain,
    title: "Flashcards",
    description: "Create and study with interactive flashcards",
    features: ["Spaced repetition", "Progress tracking", "Multiple study modes"],
    path: "/flashcards",
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    icon: Target,
    title: "Practice Tests",
    description: "Test your knowledge with adaptive quizzes",
    features: ["Instant feedback", "Performance analytics", "Custom question types"],
    path: "/practice-tests",
    color: "bg-green-500/10 text-green-600"
  },
  {
    icon: BookOpen,
    title: "Study Guides",
    description: "Comprehensive study materials and summaries",
    features: ["AI-generated summaries", "Key concept extraction", "Export options"],
    path: "/study-guides",
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    icon: Users,
    title: "Collaborative Study",
    description: "Study with friends and classmates",
    features: ["Shared study sets", "Group challenges", "Real-time collaboration"],
    path: "/collaborate",
    color: "bg-orange-500/10 text-orange-600"
  }
];

const quickStats = [
  { label: "Study Sessions", value: "2.5M+", icon: Zap },
  { label: "Active Students", value: "500K+", icon: Users },
  { label: "Success Rate", value: "89%", icon: TrendingUp },
];

export default function StudyToolsPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl mb-6 tracking-tight">
            Choose your <span className="text-primary/70">study method</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the perfect study tools to match your learning style and boost your academic performance.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {quickStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-semibold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Study Tools Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {studyTools.map((tool, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${tool.color}`}>
                  <tool.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {tool.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full" asChild>
                  <Link to={tool.path}>Start Studying</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Study Sets Preview */}
        <Card className="mb-16">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl">Trending Study Sets</CardTitle>
                <CardDescription>
                  Most popular study materials this week
                </CardDescription>
              </div>
              <Button variant="outline" asChild>
                <Link to="/subjects">View All</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Biology: Cell Structure", subject: "Biology", users: "12.5K" },
                { title: "Spanish Vocabulary", subject: "Language", users: "8.2K" },
                { title: "World History Timeline", subject: "History", users: "6.7K" }
              ].map((set, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-medium mb-2">{set.title}</h4>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{set.subject}</Badge>
                    <span className="text-sm text-muted-foreground">{set.users} students</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center bg-muted/30 rounded-2xl py-16 px-8">
          <h2 className="text-3xl mb-4">Ready to boost your grades?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join millions of students who have improved their learning outcomes with NoteForge's proven study methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/get-started">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/create">Create Study Set</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}