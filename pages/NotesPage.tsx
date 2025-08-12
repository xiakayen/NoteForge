import { Search, Plus, Filter, Grid, List } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router-dom";

const notes = [
  {
    title: "Introduction to Machine Learning",
    subject: "Computer Science",
    tags: ["AI", "algorithms", "python"],
    lastModified: "2 hours ago",
    progress: 85
  },
  {
    title: "Organic Chemistry Reactions",
    subject: "Chemistry", 
    tags: ["reactions", "mechanisms", "lab"],
    lastModified: "1 day ago",
    progress: 60
  },
  {
    title: "Renaissance Art History",
    subject: "Art History",
    tags: ["renaissance", "italy", "paintings"],
    lastModified: "3 days ago",
    progress: 90
  },
  {
    title: "Statistics and Probability",
    subject: "Mathematics",
    tags: ["statistics", "probability", "formulas"],
    lastModified: "1 week ago",
    progress: 45
  }
];

export default function NotesPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl mb-2">My Notes</h1>
            <p className="text-muted-foreground">Organize and manage your study materials</p>
          </div>
          <Button asChild>
            <Link to="/notes/new">
              <Plus className="w-4 h-4 mr-2" />
              New Note
            </Link>
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Search notes..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <div className="flex border rounded-lg">
            <Button variant="ghost" size="sm" className="rounded-r-none">
              <Grid className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-l-none border-l">
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {note.title}
                    </CardTitle>
                    <CardDescription className="mt-1">{note.subject}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {note.progress}%
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {note.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Modified {note.lastModified}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State for New Users */}
        <div className="text-center py-16 hidden">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No notes yet</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Create your first note to start organizing your study materials and improving your learning.
          </p>
          <Button asChild>
            <Link to="/notes/new">
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Note
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}