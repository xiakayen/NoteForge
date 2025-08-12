import { Search, Filter } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Link } from "react-router-dom";

const subjects = [
  {
    name: "Biology",
    description: "Cell structure, genetics, evolution, and more",
    studySets: 12543,
    students: 85672,
    color: "bg-green-500/10 text-green-600 border-green-200"
  },
  {
    name: "Mathematics",
    description: "Algebra, calculus, geometry, statistics",
    studySets: 9876,
    students: 72341,
    color: "bg-blue-500/10 text-blue-600 border-blue-200"
  },
  {
    name: "Chemistry",
    description: "Organic, inorganic, physical chemistry",
    studySets: 8234,
    students: 54123,
    color: "bg-purple-500/10 text-purple-600 border-purple-200"
  },
  {
    name: "History",
    description: "World history, US history, ancient civilizations",
    studySets: 7456,
    students: 45678,
    color: "bg-orange-500/10 text-orange-600 border-orange-200"
  },
  {
    name: "Psychology",
    description: "Cognitive, social, developmental psychology",
    studySets: 6789,
    students: 38947,
    color: "bg-pink-500/10 text-pink-600 border-pink-200"
  },
  {
    name: "Spanish",
    description: "Vocabulary, grammar, conversation practice",
    studySets: 5432,
    students: 67234,
    color: "bg-red-500/10 text-red-600 border-red-200"
  }
];

export default function SubjectsPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl mb-6 tracking-tight">
            Explore study materials by <span className="text-primary/70">subject</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find expertly created study sets and flashcards for any subject you're learning.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Search subjects or study sets..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Subjects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <Card key={index} className={`group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 ${subject.color}`}>
              <CardHeader>
                <CardTitle className="text-xl group-hover:scale-105 transition-transform">
                  {subject.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {subject.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {subject.studySets.toLocaleString()} study sets
                  </span>
                  <span className="text-muted-foreground">
                    {subject.students.toLocaleString()} students
                  </span>
                </div>
                
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary" className="text-xs">Popular</Badge>
                  <Badge variant="outline" className="text-xs">Updated</Badge>
                </div>

                <Button className="w-full" variant="outline" asChild>
                  <Link to={`/subjects/${subject.name.toLowerCase()}`}>
                    Browse {subject.name}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Study Sets */}
        <div className="mt-20">
          <h2 className="text-3xl tracking-tight mb-8">Trending This Week</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AP Biology: Cell Biology", subject: "Biology", terms: 127 },
              { title: "Calculus AB: Derivatives", subject: "Mathematics", terms: 89 },
              { title: "Organic Chemistry Reactions", subject: "Chemistry", terms: 156 },
              { title: "World War II Timeline", subject: "History", terms: 234 },
              { title: "Spanish Vocabulary Level 1", subject: "Spanish", terms: 78 },
              { title: "Introduction to Psychology", subject: "Psychology", terms: 145 }
            ].map((set, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-medium mb-2">{set.title}</h4>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <Badge variant="secondary">{set.subject}</Badge>
                    <span>{set.terms} terms</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}