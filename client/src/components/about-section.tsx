export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              About AutoEscola Prime
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Since 2008, AutoEscola Prime has been the leading driving school in our city, helping thousands of students achieve their driving dreams. Our commitment to excellence and safety has earned us a reputation as the most trusted driving school in the region.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We believe that learning to drive should be an empowering and confident experience. That's why we've invested in the best instructors, modern facilities, and a comprehensive curriculum that prepares you for real-world driving situations.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center" data-testid="stat-vehicles">
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Modern Vehicles</div>
              </div>
              <div className="text-center" data-testid="stat-instructors">
                <div className="text-2xl font-bold text-secondary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Expert Instructors</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Modern driving school building" 
              className="rounded-lg shadow-lg hover-lift"
              data-testid="img-facility"
            />
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Driving instructor teaching" 
              className="rounded-lg shadow-lg hover-lift mt-8"
              data-testid="img-instructor"
            />
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Student learning to drive" 
              className="rounded-lg shadow-lg hover-lift -mt-8"
              data-testid="img-student"
            />
            <img 
              src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Fleet of driving school vehicles" 
              className="rounded-lg shadow-lg hover-lift"
              data-testid="img-fleet"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
