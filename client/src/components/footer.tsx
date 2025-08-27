import { Car, Facebook, Instagram, Youtube } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Car className="mr-2" />
              AutoEscola Prime
            </h3>
            <p className="text-background/80 mb-6 max-w-md">
              Your trusted partner in driving education. We've been helping students achieve their driving goals with confidence and safety for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                data-testid="link-facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                data-testid="link-instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp size={16} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                data-testid="link-youtube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-background/80 hover:text-background transition-colors duration-200"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-background/80 hover:text-background transition-colors duration-200"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-background/80 hover:text-background transition-colors duration-200"
                  data-testid="footer-link-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("testimonials")}
                  className="text-background/80 hover:text-background transition-colors duration-200"
                  data-testid="footer-link-testimonials"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-background/80 hover:text-background transition-colors duration-200"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">License Types</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors duration-200">Category A (Motorcycle)</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors duration-200">Category B (Car)</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors duration-200">Category C (Truck)</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors duration-200">Defensive Driving</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors duration-200">License Renewal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/60 mb-4 md:mb-0">
              © 2024 AutoEscola Prime. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-background/60 hover:text-background transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
