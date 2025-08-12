import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}