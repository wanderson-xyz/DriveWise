import { Button } from "@/components/ui/button";
import { MessageCircle, Eye } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in getting my driver's license. Can you help?");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="hero-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Learn to Drive with{" "}
              <span className="text-accent">Confidence</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Professional instruction, modern vehicles, and proven results. Start your driving journey with the most trusted driving school in the city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={openWhatsApp}
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-all duration-200 hover-lift"
                data-testid="button-whatsapp-hero"
              >
                <MessageCircle className="mr-2" />
                Chat on WhatsApp
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-200"
                data-testid="button-view-services"
              >
                <Eye className="mr-2" />
                View Our Services
              </Button>
            </div>
          </div>
          
          <div className="lg:block">
            <img 
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Driving instructor teaching student" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-hero-instructor"
            />
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center text-white" data-testid="stat-experience">
            <div className="text-3xl lg:text-4xl font-bold mb-2">15+</div>
            <div className="text-lg opacity-90">Years Experience</div>
          </div>
          <div className="text-center text-white" data-testid="stat-pass-rate">
            <div className="text-3xl lg:text-4xl font-bold mb-2">95%</div>
            <div className="text-lg opacity-90">Pass Rate</div>
          </div>
          <div className="text-center text-white" data-testid="stat-students">
            <div className="text-3xl lg:text-4xl font-bold mb-2">5000+</div>
            <div className="text-lg opacity-90">Students Trained</div>
          </div>
          <div className="text-center text-white" data-testid="stat-support">
            <div className="text-3xl lg:text-4xl font-bold mb-2">24/7</div>
            <div className="text-lg opacity-90">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
