import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      category: "Category B Graduate",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64",
      rating: 5,
      content: "AutoEscola Prime made learning to drive such a positive experience. My instructor was patient, professional, and really helped build my confidence behind the wheel."
    },
    {
      name: "João Santos",
      category: "Category B Graduate",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64",
      rating: 5,
      content: "Passed my test on the first try thanks to the excellent preparation. The modern cars and professional instructors made all the difference."
    },
    {
      name: "Ana Costa",
      category: "Category A Graduate",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64",
      rating: 5,
      content: "The motorcycle course was fantastic! Great instructors, safety-focused training, and flexible scheduling that worked with my job."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from our successful graduates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg"
              data-testid={`testimonial-card-${index}`}
            >
              <div className="flex items-center mb-6">
                <div className="flex text-accent">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="fill-current" size={16} />
                  ))}
                </div>
              </div>
              <blockquote className="text-muted-foreground mb-6">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar}
                  alt={`${testimonial.name} - satisfied student`} 
                  className="w-12 h-12 rounded-full mr-4"
                  data-testid={`img-testimonial-${index}`}
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
