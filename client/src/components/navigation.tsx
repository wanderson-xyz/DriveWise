import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Car, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary flex items-center">
                <Car className="mr-2" />
                AutoEscola Prime
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-testimonials"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium w-full text-left"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium w-full text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium w-full text-left"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium w-full text-left"
                data-testid="mobile-nav-testimonials"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium w-full text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
                  data-testid="mobile-button-get-started"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
