import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Badge } from "../../components/ui/badge";
import { Plus, Upload, FileText, Brain, Target, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

interface StudyItem {
  id: string;
  front: string;
  back: string;
}

export default function CreatePage() {
  const [studySet, setStudySet] = useState({
    title: "",
    description: "",
    subject: "",
    visibility: "public"
  });

  const [items, setItems] = useState<StudyItem[]>([
    { id: '1', front: '', back: '' },
    { id: '2', front: '', back: '' }
  ]);

  const addItem = () => {
    setItems([...items, { id: Date.now().toString(), front: '', back: '' }]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id: string, field: 'front' | 'back', value: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4 tracking-tight">
            Create a new <span className="text-primary/70">study set</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build flashcards, practice tests, and study guides to master any subject.
          </p>
        </div>

        <div className="space-y-8">
          {/* Study Set Info */}
          <Card>
            <CardHeader>
              <CardTitle>Study Set Information</CardTitle>
              <CardDescription>
                Give your study set a title and description to help others find it.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input 
                    id="title"
                    placeholder="e.g., Biology Chapter 1: Introduction"
                    value={studySet.title}
                    onChange={(e) => setStudySet({...studySet, title: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select onValueChange={(value) => setStudySet({...studySet, subject: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="biology">Biology</SelectItem>
                      <SelectItem value="chemistry">Chemistry</SelectItem>
                      <SelectItem value="mathematics">Mathematics</SelectItem>
                      <SelectItem value="history">History</SelectItem>
                      <SelectItem value="psychology">Psychology</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description"
                  placeholder="Describe what this study set covers..."
                  value={studySet.description}
                  onChange={(e) => setStudySet({...studySet, description: e.target.value})}
                />
              </div>
            </CardContent>
          </Card>

          {/* Content Creation */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Create Content</CardTitle>
                  <CardDescription>
                    Add flashcards, questions, or import from existing materials.
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Import
                  </Button>
                  <Button variant="outline" size="sm">
                    <Brain className="w-4 h-4 mr-2" />
                    AI Generate
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="flashcards" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
                  <TabsTrigger value="quiz">Quiz Questions</TabsTrigger>
                  <TabsTrigger value="notes">Study Notes</TabsTrigger>
                </TabsList>

                <TabsContent value="flashcards" className="space-y-4">
                  {items.map((item, index) => (
                    <div key={item.id} className="grid md:grid-cols-2 gap-4 p-4 border rounded-lg">
                      <div className="space-y-2">
                        <Label htmlFor={`front-${item.id}`}>
                          Front (Term/Question) {index + 1}
                        </Label>
                        <Textarea
                          id={`front-${item.id}`}
                          placeholder="Enter the term or question..."
                          value={item.front}
                          onChange={(e) => updateItem(item.id, 'front', e.target.value)}
                          className="min-h-20"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Label htmlFor={`back-${item.id}`}>
                            Back (Definition/Answer) {index + 1}
                          </Label>
                          {items.length > 2 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                        <Textarea
                          id={`back-${item.id}`}
                          placeholder="Enter the definition or answer..."
                          value={item.back}
                          onChange={(e) => updateItem(item.id, 'back', e.target.value)}
                          className="min-h-20"
                        />
                      </div>
                    </div>
                  ))}
                  
                  <Button 
                    variant="outline" 
                    onClick={addItem}
                    className="w-full border-dashed"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add More Cards
                  </Button>
                </TabsContent>

                <TabsContent value="quiz" className="space-y-4">
                  <div className="text-center py-12">
                    <Target className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Quiz Builder</h3>
                    <p className="text-muted-foreground mb-4">
                      Create multiple choice, true/false, or short answer questions.
                    </p>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Quiz Question
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="notes" className="space-y-4">
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Study Notes</h3>
                    <p className="text-muted-foreground mb-4">
                      Write comprehensive notes that can be converted to flashcards and quizzes.
                    </p>
                    <Button asChild>
                      <Link to="/editor">
                        <Plus className="w-4 h-4 mr-2" />
                        Open Note Editor
                      </Link>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Settings & Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="space-y-2">
              <Label>Visibility</Label>
              <Select defaultValue="public">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Public - Anyone can find
                    </div>
                  </SelectItem>
                  <SelectItem value="unlisted">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      Unlisted - Only with link
                    </div>
                  </SelectItem>
                  <SelectItem value="private">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      Private - Only you
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-3">
              <Button variant="outline">Save Draft</Button>
              <Button>Publish Study Set</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}