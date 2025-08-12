import { useState, useRef } from 'react';
import { Button } from "../../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Badge } from "../../components/ui/badge";
import { Progress } from "../../components/ui/progress";
import { 
  Save, 
  Plus, 
  Brain, 
  Target, 
  BookOpen, 
  RotateCcw, 
  Check, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Eye,
  Edit
} from "lucide-react";
import { Separator } from "../../components/ui/separator";
import { ScrollArea } from "../../components/ui/scroll-area";

interface Flashcard {
  id: string;
  front: string;
  back: string;
  difficulty: 'easy' | 'medium' | 'hard';
  mastered: boolean;
}

interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  options?: string[];
  correctAnswer: string;
  explanation?: string;
}

export default function NoteEditorPage() {
  const [noteTitle, setNoteTitle] = useState("Introduction to Psychology");
  const [noteContent, setNoteContent] = useState(`# Chapter 1: Introduction to Psychology

## What is Psychology?
Psychology is the scientific study of mind and behavior. It encompasses the biological influences, social pressures, and environmental factors that affect how people think, act, and feel.

### Key Areas of Psychology:
- **Cognitive Psychology**: Studies mental processes like thinking, memory, and problem-solving
- **Social Psychology**: Examines how people influence each other
- **Developmental Psychology**: Focuses on human growth and change throughout life
- **Clinical Psychology**: Deals with diagnosing and treating mental health disorders

## Research Methods
Psychologists use various research methods to study behavior:
1. Experimental research
2. Observational studies  
3. Case studies
4. Surveys and questionnaires

### Important Terms:
- **Hypothesis**: A testable prediction
- **Variable**: Factors that can change in an experiment
- **Control group**: Group that doesn't receive the treatment`);

  const [selectedText, setSelectedText] = useState("");
  const [flashcards, setFlashcards] = useState<Flashcard[]>([
    {
      id: '1',
      front: 'What is Psychology?',
      back: 'Psychology is the scientific study of mind and behavior.',
      difficulty: 'easy',
      mastered: true
    },
    {
      id: '2', 
      front: 'What does Cognitive Psychology study?',
      back: 'Mental processes like thinking, memory, and problem-solving.',
      difficulty: 'medium',
      mastered: false
    }
  ]);

  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([
    {
      id: '1',
      question: 'Psychology is the scientific study of what?',
      type: 'multiple-choice',
      options: ['Mind and behavior', 'Only the mind', 'Only behavior', 'Brain anatomy'],
      correctAnswer: 'Mind and behavior',
      explanation: 'Psychology encompasses both mental processes and observable behaviors.'
    }
  ]);

  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const [showFlashcardAnswer, setShowFlashcardAnswer] = useState(false);
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showQuizResult, setShowQuizResult] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextSelection = () => {
    if (textareaRef.current) {
      const start = textareaRef.current.selectionStart;
      const end = textareaRef.current.selectionEnd;
      const selected = noteContent.substring(start, end);
      if (selected.trim()) {
        setSelectedText(selected);
      }
    }
  };

  const createFlashcardFromSelection = () => {
    if (selectedText.trim()) {
      const newFlashcard: Flashcard = {
        id: Date.now().toString(),
        front: selectedText,
        back: '',
        difficulty: 'medium',
        mastered: false
      };
      setFlashcards([...flashcards, newFlashcard]);
      setSelectedText("");
    }
  };

  const createQuizFromSelection = () => {
    if (selectedText.trim()) {
      const newQuestion: QuizQuestion = {
        id: Date.now().toString(),
        question: `What is ${selectedText}?`,
        type: 'short-answer',
        correctAnswer: '',
        explanation: ''
      };
      setQuizQuestions([...quizQuestions, newQuestion]);
      setSelectedText("");
    }
  };

  const flipFlashcard = () => {
    setShowFlashcardAnswer(!showFlashcardAnswer);
  };

  const nextFlashcard = () => {
    setCurrentFlashcard((prev) => (prev + 1) % flashcards.length);
    setShowFlashcardAnswer(false);
  };

  const prevFlashcard = () => {
    setCurrentFlashcard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    setShowFlashcardAnswer(false);
  };

  const markFlashcardMastery = (mastered: boolean) => {
    setFlashcards(prev => prev.map((card, index) => 
      index === currentFlashcard ? { ...card, mastered } : card
    ));
    nextFlashcard();
  };

  const masteredCount = flashcards.filter(card => card.mastered).length;
  const masteryProgress = flashcards.length > 0 ? (masteredCount / flashcards.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-background/80 backdrop-blur-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Input
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
                className="text-lg font-medium bg-transparent border-none px-0 focus-visible:ring-0"
                placeholder="Note title..."
              />
              <Badge variant="secondary">Psychology</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <Tabs defaultValue="editor" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="editor" className="flex items-center gap-2">
              <Edit className="w-4 h-4" />
              Editor
            </TabsTrigger>
            <TabsTrigger value="flashcards" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Flashcards ({flashcards.length})
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Quiz ({quizQuestions.length})
            </TabsTrigger>
            <TabsTrigger value="summary" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Summary
            </TabsTrigger>
          </TabsList>

          {/* Note Editor Tab */}
          <TabsContent value="editor" className="space-y-6">
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Note Editor</CardTitle>
                    <CardDescription>
                      Write your notes and highlight text to create flashcards or quiz questions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      ref={textareaRef}
                      value={noteContent}
                      onChange={(e) => setNoteContent(e.target.value)}
                      onMouseUp={handleTextSelection}
                      onKeyUp={handleTextSelection}
                      placeholder="Start writing your notes..."
                      className="min-h-[500px] font-mono text-sm resize-none"
                    />
                    
                    {selectedText && (
                      <div className="mt-4 p-4 bg-muted/50 rounded-lg border-dashed border-2">
                        <p className="text-sm mb-3">
                          <strong>Selected text:</strong> "{selectedText}"
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" onClick={createFlashcardFromSelection}>
                            <Brain className="w-4 h-4 mr-1" />
                            Create Flashcard
                          </Button>
                          <Button size="sm" variant="outline" onClick={createQuizFromSelection}>
                            <Target className="w-4 h-4 mr-1" />
                            Create Quiz Question
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions Sidebar */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" size="sm">
                      <Sparkles className="w-4 h-4 mr-2" />
                      AI Summarize
                    </Button>
                    <Button className="w-full justify-start" size="sm" variant="outline">
                      <Brain className="w-4 h-4 mr-2" />
                      Generate Flashcards
                    </Button>
                    <Button className="w-full justify-start" size="sm" variant="outline">
                      <Target className="w-4 h-4 mr-2" />
                      Create Quiz
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Study Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Flashcards Mastered</span>
                        <span>{masteredCount}/{flashcards.length}</span>
                      </div>
                      <Progress value={masteryProgress} />
                    </div>
                    <div className="pt-2">
                      <p className="text-xs text-muted-foreground">
                        Keep studying to improve your mastery!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Flashcards Tab */}
          <TabsContent value="flashcards" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                {flashcards.length > 0 ? (
                  <Card className="h-96">
                    <CardContent className="flex items-center justify-center h-full p-8">
                      <div 
                        className="w-full h-full bg-card border-2 rounded-lg flex items-center justify-center cursor-pointer transition-transform hover:scale-105 relative"
                        onClick={flipFlashcard}
                      >
                        <div className="text-center p-6">
                          {!showFlashcardAnswer ? (
                            <>
                              <h3 className="text-xl mb-4">Question</h3>
                              <p className="text-lg">{flashcards[currentFlashcard]?.front}</p>
                            </>
                          ) : (
                            <>
                              <h3 className="text-xl mb-4">Answer</h3>
                              <p className="text-lg">{flashcards[currentFlashcard]?.back || "No answer provided"}</p>
                            </>
                          )}
                        </div>
                        <Badge 
                          className="absolute top-4 right-4"
                          variant={flashcards[currentFlashcard]?.mastered ? "default" : "secondary"}
                        >
                          {flashcards[currentFlashcard]?.mastered ? "Mastered" : "Learning"}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="h-96">
                    <CardContent className="flex items-center justify-center h-full text-center p-8">
                      <div>
                        <Brain className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">No flashcards yet</h3>
                        <p className="text-muted-foreground">
                          Select text in the editor to create your first flashcard
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {flashcards.length > 0 && (
                  <div className="flex justify-between items-center mt-4">
                    <Button variant="outline" onClick={prevFlashcard}>
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Previous
                    </Button>
                    
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        {currentFlashcard + 1} of {flashcards.length}
                      </span>
                      {showFlashcardAnswer && (
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => markFlashcardMastery(false)}
                          >
                            <X className="w-4 h-4 mr-1" />
                            Hard
                          </Button>
                          <Button 
                            size="sm"
                            onClick={() => markFlashcardMastery(true)}
                          >
                            <Check className="w-4 h-4 mr-1" />
                            Easy
                          </Button>
                        </div>
                      )}
                    </div>

                    <Button variant="outline" onClick={nextFlashcard}>
                      Next
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Flashcard Management */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Add New Flashcard</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label htmlFor="front">Front (Question)</Label>
                      <Input id="front" placeholder="Enter question..." />
                    </div>
                    <div>
                      <Label htmlFor="back">Back (Answer)</Label>
                      <Textarea id="back" placeholder="Enter answer..." className="min-h-20" />
                    </div>
                    <Button className="w-full" size="sm">
                      <Plus className="w-4 h-4 mr-1" />
                      Add Flashcard
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Study Options</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" size="sm" variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Shuffle Cards
                    </Button>
                    <Button className="w-full justify-start" size="sm" variant="outline">
                      <Target className="w-4 h-4 mr-2" />
                      Study Unmastered
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Quiz Tab */}
          <TabsContent value="quiz" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                {quizQuestions.length > 0 ? (
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>Quiz Question {currentQuestion + 1}</CardTitle>
                        <Badge variant="outline">
                          {currentQuestion + 1} of {quizQuestions.length}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg mb-4">{quizQuestions[currentQuestion]?.question}</h3>
                        
                        {quizQuestions[currentQuestion]?.type === 'multiple-choice' && (
                          <div className="space-y-2">
                            {quizQuestions[currentQuestion]?.options?.map((option, index) => (
                              <label key={index} className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
                                <input 
                                  type="radio" 
                                  name="answer" 
                                  value={option}
                                  checked={selectedAnswer === option}
                                  onChange={(e) => setSelectedAnswer(e.target.value)}
                                />
                                <span>{option}</span>
                              </label>
                            ))}
                          </div>
                        )}

                        {quizQuestions[currentQuestion]?.type === 'short-answer' && (
                          <Textarea 
                            placeholder="Enter your answer..."
                            value={selectedAnswer}
                            onChange={(e) => setSelectedAnswer(e.target.value)}
                          />
                        )}
                      </div>

                      {showQuizResult && (
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            {selectedAnswer === quizQuestions[currentQuestion]?.correctAnswer ? (
                              <Check className="w-5 h-5 text-green-500" />
                            ) : (
                              <X className="w-5 h-5 text-red-500" />
                            )}
                            <span className="font-medium">
                              {selectedAnswer === quizQuestions[currentQuestion]?.correctAnswer ? 'Correct!' : 'Incorrect'}
                            </span>
                          </div>
                          <p className="text-sm">
                            <strong>Correct answer:</strong> {quizQuestions[currentQuestion]?.correctAnswer}
                          </p>
                          {quizQuestions[currentQuestion]?.explanation && (
                            <p className="text-sm text-muted-foreground mt-2">
                              {quizQuestions[currentQuestion]?.explanation}
                            </p>
                          )}
                        </div>
                      )}

                      <div className="flex justify-between">
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            setCurrentQuestion(Math.max(0, currentQuestion - 1));
                            setSelectedAnswer("");
                            setShowQuizResult(false);
                          }}
                          disabled={currentQuestion === 0}
                        >
                          <ChevronLeft className="w-4 h-4 mr-1" />
                          Previous
                        </Button>
                        
                        {!showQuizResult ? (
                          <Button 
                            onClick={() => setShowQuizResult(true)}
                            disabled={!selectedAnswer}
                          >
                            Check Answer
                          </Button>
                        ) : (
                          <Button 
                            onClick={() => {
                              if (currentQuestion < quizQuestions.length - 1) {
                                setCurrentQuestion(currentQuestion + 1);
                                setSelectedAnswer("");
                                setShowQuizResult(false);
                              }
                            }}
                            disabled={currentQuestion === quizQuestions.length - 1}
                          >
                            Next
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="flex items-center justify-center h-64 text-center p-8">
                      <div>
                        <Target className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">No quiz questions yet</h3>
                        <p className="text-muted-foreground">
                          Select text in the editor to create your first quiz question
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Quiz Management */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Add Quiz Question</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label htmlFor="question">Question</Label>
                      <Textarea id="question" placeholder="Enter question..." className="min-h-20" />
                    </div>
                    <div>
                      <Label htmlFor="type">Question Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                          <SelectItem value="true-false">True/False</SelectItem>
                          <SelectItem value="short-answer">Short Answer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full" size="sm">
                      <Plus className="w-4 h-4 mr-1" />
                      Add Question
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Quiz Options</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" size="sm" variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Shuffle Questions
                    </Button>
                    <Button className="w-full justify-start" size="sm" variant="outline">
                      <Target className="w-4 h-4 mr-2" />
                      Practice Mode
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Summary Tab */}
          <TabsContent value="summary" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Generated Summary</CardTitle>
                <CardDescription>
                  Automatically generated summary of your notes with key concepts highlighted
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-medium mb-2">Key Concepts:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Psychology</Badge>
                      <Badge variant="secondary">Scientific Study</Badge>
                      <Badge variant="secondary">Mind and Behavior</Badge>
                      <Badge variant="secondary">Research Methods</Badge>
                      <Badge variant="secondary">Cognitive Psychology</Badge>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="prose max-w-none">
                    <p className="leading-relaxed">
                      This chapter introduces psychology as the scientific study of mind and behavior, 
                      covering various subfields including cognitive, social, developmental, and clinical psychology. 
                      The text emphasizes different research methods used by psychologists such as experimental research, 
                      observational studies, case studies, and surveys.
                    </p>
                    <p className="leading-relaxed">
                      Key terms defined include hypothesis (testable prediction), variables (factors that can change), 
                      and control groups (groups that don't receive treatment). Understanding these foundational 
                      concepts is essential for further study in psychology.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Regenerate Summary
                    </Button>
                    <Button variant="outline">
                      Export Summary
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}