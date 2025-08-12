import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Page Components
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import PricingPage from "./pages/PricingPage";
import HelpPage from "./pages/HelpPage";
import DashboardPage from "./pages/DashboardPage";
import NotesPage from "./pages/NotesPage";
import SignInPage from "./pages/auth/SignInPage";
import GetStartedPage from "./pages/auth/GetStartedPage";

// New Study Platform Pages
import StudyToolsPage from "./pages/study/StudyToolsPage";
import SubjectsPage from "./pages/study/SubjectsPage";
import CreatePage from "./pages/study/CreatePage";
import FlashcardsPage from "./pages/study/FlashcardsPage";
import PracticeTestsPage from "./pages/study/PracticeTestsPage";
import StudyGuidesPage from "./pages/study/StudyGuidesPage";
import NoteEditorPage from "./pages/editor/NoteEditorPage";
import TeacherPage from "./pages/TeacherPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="/teacher" element={<TeacherPage />} />
            
            {/* Study Platform Routes */}
            <Route path="/study-tools" element={<StudyToolsPage />} />
            <Route path="/subjects" element={<SubjectsPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/flashcards" element={<FlashcardsPage />} />
            <Route path="/practice-tests" element={<PracticeTestsPage />} />
            <Route path="/study-guides" element={<StudyGuidesPage />} />
            <Route path="/editor" element={<NoteEditorPage />} />
            <Route path="/editor/:id" element={<NoteEditorPage />} />
            
            {/* Handle the specific preview_page.html route */}
            <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
            {/* Catch-all route for any unmatched paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}