import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Input } from "../../components/ui/input";
import { 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  RotateCcw, 
  Brain,
  Play,
  BookOpen 
} from "lucide-react";
import { Link } from "react-router-dom";

const flashcardSets = [
  {
    id: '1',
    title: "Biology: Cell Structure",
    description: "Essential organelles and their functions",
    terms: 45,
    creator: {
      name: "Dr. Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    subject: "Biology",
    rating: 4.8,
    studyCount: 12543,
    difficulty: "Intermediate"
  },
  {
    id: '2',
    title: "Spanish Vocabulary - Level 1",
    description: "Common words and phrases for beginners",
    terms: 78,
    creator: {
      name: "Carlos Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    subject: "Spanish",
    rating: 4.9,
    studyCount: 8934,
    difficulty: "Beginner"
  },
  {
    id: '3',
    title: "Chemistry: Periodic Table",
    description: "Elements, symbols, and properties",
    terms: 118,
    creator: {
      name: "Prof. Lisa Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    subject: "Chemistry",
    rating: 4.7,
    studyCount: 15672,
    difficulty: "Advanced"
  },
  {
    id: '4',
    title: "Psychology: Key Terms",
    description: "Important concepts and definitions",
    terms: 156,
    creator: {
      name: "Dr. Michael Brown",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    subject: "Psychology",
    rating: 4.8,
    studyCount: 9876,
    difficulty: "Intermediate"
  }
];

const categories = [
  "All", "Biology", "Chemistry", "Mathematics", "History", "Psychology", "Spanish", "Physics"
];

export default function FlashcardsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const setsPerPage = 6;
  const filteredSets = flashcardSets.filter(set => 
    (selectedCategory === "All" || set.subject === selectedCategory) &&
    (searchQuery === "" || set.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  const totalPages = Math.ceil(filteredSets.length / setsPerPage);
  const currentSets = filteredSets.slice(currentPage * setsPerPage, (currentPage + 1) * setsPerPage);

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
            Master concepts with <span className="text-primary/70">flashcards</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Study efficiently with interactive flashcards. Choose from millions of study sets or create your own.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search flashcard sets..." 
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
              <Brain className="w-4 h-4 mr-2" />
              Create Flashcards
            </Link>
          </Button>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(0);
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            {filteredSets.length} flashcard sets found
          </p>
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-sm text-muted-foreground px-3">
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
          )}
        </div>

        {/* Flashcard Sets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {currentSets.map((set) => (
            <Card key={set.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="secondary">{set.subject}</Badge>
                  <Badge className={getDifficultyColor(set.difficulty)}>
                    {set.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {set.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {set.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{set.terms} terms</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>{set.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={set.creator.avatar} alt={set.creator.name} />
                      <AvatarFallback className="text-xs">
                        {set.creator.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{set.creator.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {set.studyCount.toLocaleString()} students
                  </span>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" size="sm" asChild>
                    <Link to={`/flashcards/${set.id}/study`}>
                      <Play className="w-3 h-3 mr-1" />
                      Study
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/flashcards/${set.id}`}>
                      <BookOpen className="w-3 h-3 mr-1" />
                      View
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Study Tips */}
        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Flashcard Study Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <RotateCcw className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium mb-2">Use Spaced Repetition</h4>
                <p className="text-sm text-muted-foreground">
                  Review cards at increasing intervals to improve long-term retention.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium mb-2">Active Recall</h4>
                <p className="text-sm text-muted-foreground">
                  Try to recall the answer before flipping the card for better learning.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium mb-2">Focus on Difficult Cards</h4>
                <p className="text-sm text-muted-foreground">
                  Spend more time on cards you find challenging to maximize efficiency.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}