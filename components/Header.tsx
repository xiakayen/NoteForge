import { Link, useLocation } from 'react-router-dom';
import { Button } from "./ui/button";
import Logo from "./Logo";

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <Logo size="default" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/features" 
              className={`text-sm transition-colors ${
                isActive('/features') 
                  ? 'text-foreground font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Features
            </Link>
            <Link 
              to="/testimonials" 
              className={`text-sm transition-colors ${
                isActive('/testimonials') 
                  ? 'text-foreground font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Testimonials
            </Link>
            <Link 
              to="/pricing" 
              className={`text-sm transition-colors ${
                isActive('/pricing') 
                  ? 'text-foreground font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/help" 
              className={`text-sm transition-colors ${
                isActive('/help') 
                  ? 'text-foreground font-medium' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Help
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}