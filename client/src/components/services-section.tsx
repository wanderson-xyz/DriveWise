import { Button } from "@/components/ui/button";
import { Car, Bike, Truck, Shield, RotateCcw, User, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Category B License",
      icon: Car,
      description: "Complete course for passenger cars including theory classes, simulator training, and practical lessons.",
      features: ["30 hours theory classes", "10 hours simulator", "20 hours practical lessons"],
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      title: "Category A License",
      icon: Bike,
      description: "Motorcycle license training with specialized instructors and modern bikes for all skill levels.",
      features: ["20 hours theory classes", "5 hours simulator", "15 hours practical lessons"],
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary"
    },
    {
      title: "Category C License",
      icon: Truck,
      description: "Professional truck driving course for commercial vehicle operation and career opportunities.",
      features: ["40 hours theory classes", "15 hours simulator", "30 hours practical lessons"],
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    },
    {
      title: "Defensive Driving",
      icon: Shield,
      description: "Advanced safety course for experienced drivers to improve skills and reduce accident risk.",
      features: ["8 hours theory classes", "4 hours practical training", "Certificate included"],
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      title: "License Renewal",
      icon: RotateCcw,
      description: "Quick and convenient license renewal service with refresher classes and updated regulations.",
      features: ["4 hours refresher course", "Updated regulations", "Documentation support"],
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary"
    },
    {
      title: "Private Lessons",
      icon: User,
      description: "Personalized one-on-one instruction tailored to your specific needs and learning pace.",
      features: ["Flexible scheduling", "Customized curriculum", "Expert instructor"],
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive driving education for all license categories and experience levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg hover-lift border border-border"
              data-testid={`service-card-${index}`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <div className={`w-12 h-12 ${service.bgColor} rounded-full flex items-center justify-center`}>
                  <service.icon className={service.iconColor} size={20} />
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <Check className="text-secondary mr-2" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={scrollToContact}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                data-testid={`button-pricing-${index}`}
              >
                View Pricing
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
