import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Input } from "../../components/ui/input";
import { 
  Search, 
  Filter, 
  BookOpen, 
  Download, 
  Eye,
  Clock,
  FileText,
  Star,
  Users,
  Bookmark
} from "lucide-react";
import { Link } from "react-router-dom";

const studyGuides = [
  {
    id: '1',
    title: "Complete AP Biology Study Guide",
    description: "Comprehensive guide covering all AP Biology topics with detailed explanations, diagrams, and practice questions.",
    subject: "Biology",
    pages: 127,
    readTime: 45,
    difficulty: "Advanced",
    downloads: 15420,
    rating: 4.8,
    creator: {
      name: "Dr. Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    topics: ["Cell Biology", "Genetics", "Evolution", "Ecology"],
    lastUpdated: "2 weeks ago",
    premium: false
  },
  {
    id: '2',
    title: "Spanish Grammar Essentials",
    description: "Master Spanish grammar with this concise guide featuring rules, examples, and common mistakes to avoid.",
    subject: "Spanish",
    pages: 89,
    readTime: 30,
    difficulty: "Intermediate",
    downloads: 8934,
    rating: 4.9,
    creator: {
      name: "Carlos Martinez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    topics: ["Verb Conjugation", "Grammar Rules", "Common Phrases"],
    lastUpdated: "1 week ago",
    premium: false
  },
  {
    id: '3',
    title: "Organic Chemistry Reactions Guide",
    description: "Essential organic chemistry reactions with mechanisms, reagents, and synthetic applications for advanced students.",
    subject: "Chemistry",
    pages: 156,
    readTime: 60,
    difficulty: "Advanced",
    downloads: 12678,
    rating: 4.7,
    creator: {
      name: "Prof. Lisa Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    topics: ["Reaction Mechanisms", "Synthesis", "Spectroscopy"],
    lastUpdated: "3 days ago",
    premium: true
  },
  {
    id: '4',
    title: "Psychology Research Methods",
    description: "Understanding psychological research methods, statistical analysis, and experimental design principles.",
    subject: "Psychology", 
    pages: 95,
    readTime: 35,
    difficulty: "Intermediate",
    downloads: 6789,
    rating: 4.6,
    creator: {
      name: "Dr. Michael Brown",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    topics: ["Research Design", "Statistics", "Ethics"],
    lastUpdated: "1 week ago",
    premium: false
  },
  {
    id: '5',
    title: "World War II Comprehensive Timeline",
    description: "Detailed timeline of World War II events with key battles, political decisions, and their global impact.",
    subject: "History",
    pages: 234,
    readTime: 90,
    difficulty: "Intermediate",
    downloads: 9876,
    rating: 4.8,
    creator: {
      name: "Prof. James Wilson",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    },
    topics: ["Major Battles", "Political Events", "Holocaust", "Pacific War"],
    lastUpdated: "5 days ago",
    premium: false
  },
  {
    id: '6',
    title: "Calculus Concepts and Applications",
    description: "Master calculus with clear explanations of limits, derivatives, integrals, and real-world applications.",
    subject: "Mathematics",
    pages: 178,
    readTime: 75,
    difficulty: "Advanced",
    downloads: 11234,
    rating: 4.9,
    creator: {
      name: "Dr. Emily Davis",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face"
    },
    topics: ["Limits", "Derivatives", "Integrals", "Applications"],
    lastUpdated: "1 week ago",
    premium: true
  }
];

export default function StudyGuidesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const subjects = ["All", "Biology", "Chemistry", "Mathematics", "Psychology", "Spanish", "History"];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredGuides = studyGuides.filter(guide => 
    (selectedSubject === "All" || guide.subject === selectedSubject) &&
    (selectedDifficulty === "All" || guide.difficulty === selectedDifficulty) &&
    (searchQuery === "" || guide.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/10 text-green-600";
      case "Intermediate": return "bg-yellow-500/10 text-yellow-600"; 
      case "Advanced": return "bg-red-500/10 text-red-600";
      default: return "bg-gray-500/10 text-gray-600";
    }
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl mb-6 tracking-tight">
            Comprehensive <span className="text-primary/70">study guides</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access expertly crafted study guides that break down complex topics into digestible, easy-to-understand content.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search study guides..." 
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
              <FileText className="w-4 h-4 mr-2" />
              Create Guide
            </Link>
          </Button>
        </div>

        {/* Filter Pills */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-muted-foreground">Subject:</span>
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
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-muted-foreground">Difficulty:</span>
            {difficulties.map((difficulty) => (
              <Button
                key={difficulty}
                variant={selectedDifficulty === difficulty ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedDifficulty(difficulty)}
              >
                {difficulty}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            {filteredGuides.length} study guides found
          </p>
        </div>

        {/* Study Guides Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {filteredGuides.map((guide) => (
            <Card key={guide.id} className="group hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{guide.subject}</Badge>
                    <Badge className={getDifficultyColor(guide.difficulty)}>
                      {guide.difficulty}
                    </Badge>
                    {guide.premium && (
                      <Badge className="bg-purple-500/10 text-purple-600">
                        Premium
                      </Badge>
                    )}
                  </div>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {guide.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {guide.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                {/* Guide Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    <span>{guide.pages} pages</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{guide.readTime} min read</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>{guide.rating}</span>
                  </div>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                  {guide.topics.map((topic, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span>{guide.downloads.toLocaleString()} downloads</span>
                  </div>
                  <span>Updated {guide.lastUpdated}</span>
                </div>

                {/* Creator and Actions */}
                <div className="flex items-center justify-between pt-4 border-t mt-auto">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={guide.creator.avatar} alt={guide.creator.name} />
                      <AvatarFallback className="text-xs">
                        {guide.creator.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{guide.creator.name}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/study-guides/${guide.id}/preview`}>
                        <Eye className="w-3 h-3 mr-1" />
                        Preview
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link to={`/study-guides/${guide.id}`}>
                        <BookOpen className="w-3 h-3 mr-1" />
                        {guide.premium ? "Unlock" : "Read"}
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Study Guide Benefits */}
        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle className="text-center">Why Use Study Guides?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium mb-2">Structured Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Information organized in logical progression for better understanding.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium mb-2">Expert Created</h4>
                <p className="text-sm text-muted-foreground">
                  Guides written by subject matter experts and experienced educators.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium mb-2">Offline Access</h4>
                <p className="text-sm text-muted-foreground">
                  Download guides to study anywhere, anytime without internet.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}