import { GraduationCap, Car, Clock } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Instructors",
      description: "Our certified instructors have years of experience and a passion for teaching safe driving practices.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Car,
      title: "Modern Vehicles",
      description: "Learn in our fleet of modern, well-maintained vehicles equipped with the latest safety features.",
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Choose from morning, afternoon, or evening lessons that fit your busy lifestyle.",
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose AutoEscola Prime?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine traditional teaching methods with modern technology to provide the best learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg hover-lift text-center"
              data-testid={`feature-card-${index}`}
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className={`text-2xl ${feature.iconColor}`} size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
