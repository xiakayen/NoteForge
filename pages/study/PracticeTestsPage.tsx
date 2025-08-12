import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Input } from "../../components/ui/input";
import { Progress } from "../../components/ui/progress";
import { 
  Search, 
  Filter, 
  Clock, 
  CheckCircle, 
  Target, 
  TrendingUp,
  Play,
  BarChart3,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const practiceTests = [
  {
    id: '1',
    title: "AP Biology Practice Exam",
    description: "Comprehensive practice test covering all AP Biology topics",
    questions: 60,
    duration: 90,
    difficulty: "Advanced",
    subject: "Biology",
    attempts: 15420,
    avgScore: 78,
    creator: {
      name: "Dr. Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    tags: ["AP Exam", "Biology", "Practice Test"]
  },
  {
    id: '2',
    title: "Spanish Grammar Quiz",
    description: "Test your knowledge of Spanish verb conjugations and grammar rules",
    questions: 25,
    duration: 30,
    difficulty: "Intermediate",
    subject: "Spanish",
    attempts: 8934,
    avgScore: 82,
    creator: {
      name: "Carlos Martinez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    tags: ["Grammar", "Spanish", "Conjugation"]
  },
  {
    id: '3',
    title: "Chemistry Midterm Review",
    description: "Practice questions for general chemistry midterm exam",
    questions: 40,
    duration: 60,
    difficulty: "Intermediate",
    subject: "Chemistry",
    attempts: 12678,
    avgScore: 75,
    creator: {
      name: "Prof. Lisa Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    tags: ["Midterm", "Chemistry", "Review"]
  },
  {
    id: '4',
    title: "Psychology Research Methods",
    description: "Test your understanding of psychological research methods and statistics",
    questions: 35,
    duration: 45,
    difficulty: "Advanced",
    subject: "Psychology",
    attempts: 6789,
    avgScore: 71,
    creator: {
      name: "Dr. Michael Brown",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    tags: ["Research", "Psychology", "Statistics"]
  }
];

const recentScores = [
  { test: "Biology Quiz #3", score: 85, date: "2 days ago" },
  { test: "Spanish Vocabulary", score: 92, date: "1 week ago" },
  { test: "Chemistry Practice", score: 78, date: "1 week ago" }
];

export default function PracticeTestsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");

  const subjects = ["All", "Biology", "Chemistry", "Mathematics", "Psychology", "Spanish", "History"];

  const filteredTests = practiceTests.filter(test => 
    (selectedSubject === "All" || test.subject === selectedSubject) &&
    (searchQuery === "" || test.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/10 text-green-600";
      case "Intermediate": return "bg-yellow-500/10 text-yellow-600"; 
      case "Advanced": return "bg-red-500/10 text-red-600";
      default: return "bg-gray-500/10 text-gray-600";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-blue-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl mb-6 tracking-tight">
            Test your knowledge with <span className="text-primary/70">practice tests</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Challenge yourself with comprehensive practice tests and track your progress over time.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search practice tests..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button asChild>
                <Link to="/create">
                  <Target className="w-4 h-4 mr-2" />
                  Create Test
                </Link>
              </Button>
            </div>

            {/* Subject Filter */}
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject) => (
                <Button
                  key={subject}
                  variant={selectedSubject === subject ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSubject(subject)}
                >
                  {subject}
                </Button>
              ))}
            </div>

            {/* Practice Tests Grid */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl tracking-tight">Available Practice Tests</h2>
                <span className="text-muted-foreground">{filteredTests.length} tests found</span>
              </div>

              <div className="grid gap-6">
                {filteredTests.map((test) => (
                  <Card key={test.id} className="group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">{test.subject}</Badge>
                            <Badge className={getDifficultyColor(test.difficulty)}>
                              {test.difficulty}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {test.title}
                          </CardTitle>
                          <CardDescription className="text-base mt-2">
                            {test.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Test Info */}
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          <span>{test.questions} questions</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{test.duration} minutes</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>Avg: {test.avgScore}%</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>{test.attempts.toLocaleString()} attempts</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {test.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Creator and Actions */}
                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-6 h-6">
                            <AvatarImage src={test.creator.avatar} alt={test.creator.name} />
                            <AvatarFallback className="text-xs">
                              {test.creator.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground">{test.creator.name}</span>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/practice-tests/${test.id}/preview`}>
                              Preview
                            </Link>
                          </Button>
                          <Button size="sm" asChild>
                            <Link to={`/practice-tests/${test.id}/start`}>
                              <Play className="w-3 h-3 mr-1" />
                              Start Test
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Scores */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Recent Scores
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentScores.map((score, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{score.test}</p>
                      <p className="text-xs text-muted-foreground">{score.date}</p>
                    </div>
                    <div className={`font-semibold ${getScoreColor(score.score)}`}>
                      {score.score}%
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full" size="sm">
                  View All Results
                </Button>
              </CardContent>
            </Card>

            {/* Progress Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Progress Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Tests Completed</span>
                    <span>24/30</span>
                  </div>
                  <Progress value={80} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Average Score</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Study Streak</span>
                    <span>7 days</span>
                  </div>
                  <Progress value={70} />
                </div>
              </CardContent>
            </Card>

            {/* Test Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Test-Taking Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Read questions carefully</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Manage your time wisely</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Review your answers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Stay calm and focused</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}