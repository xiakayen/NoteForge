import { Plus, FileText, Brain, Target, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router-dom";

const recentNotes = [
  { title: "Biology: Cell Structure", updated: "2 hours ago", tags: ["biology", "exam"] },
  { title: "History: World War II", updated: "1 day ago", tags: ["history", "essay"] },
  { title: "Math: Calculus Derivatives", updated: "3 days ago", tags: ["math", "homework"] }
];

const stats = [
  { label: "Total Notes", value: "47", icon: FileText },
  { label: "Summaries Created", value: "23", icon: Brain },
  { label: "Quizzes Completed", value: "15", icon: Target },
  { label: "Study Streak", value: "7 days", icon: TrendingUp }
];

export default function DashboardPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl mb-2">Welcome back!</h1>
            <p className="text-muted-foreground">Ready to continue your learning journey?</p>
          </div>
          <Button asChild>
            <Link to="/notes">
              <Plus className="w-4 h-4 mr-2" />
              New Note
            </Link>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                  </div>
                  <stat.icon className="w-8 h-8 text-primary/70" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Notes */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Notes</CardTitle>
                <CardDescription>Your latest study materials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentNotes.map((note, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{note.title}</h4>
                        <p className="text-sm text-muted-foreground">{note.updated}</p>
                        <div className="flex gap-2 mt-2">
                          {note.tags.map((tag, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Open
                      </Button>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/notes">View All Notes</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Study Progress */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Study Progress</CardTitle>
                <CardDescription>This week's activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Notes Created</span>
                      <span>5/7</span>
                    </div>
                    <Progress value={70} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Quizzes Completed</span>
                      <span>3/5</span>
                    </div>
                    <Progress value={60} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Study Time</span>
                      <span>12h/15h</span>
                    </div>
                    <Progress value={80} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Note
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Brain className="w-4 h-4 mr-2" />
                  Generate Summary
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Target className="w-4 h-4 mr-2" />
                  Take Quiz
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}