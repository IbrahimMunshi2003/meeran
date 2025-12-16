import { Sparkles, Scissors, Heart, Flower2 } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Skin Care",
    description: "Rejuvenating facials and treatments for radiant, youthful skin.",
    price: "From ₹2,500",
  },
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Expert cuts, coloring, and styling for your perfect look.",
    price: "From ₹1,500",
  },
  {
    icon: Heart,
    title: "Makeup Artistry",
    description: "Professional makeup for any occasion, from bridal to editorial.",
    price: "From ₹3,000",
  },
  {
    icon: Flower2,
    title: "Spa Treatments",
    description: "Luxurious body treatments for complete relaxation and renewal.",
    price: "From ₹4,000",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
            Our <span className="text-gradient-gold italic">Signature</span> Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Indulge in our curated collection of premium beauty services, 
            each designed to enhance your natural beauty.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-background border border-border hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-primary font-body text-sm tracking-wider">
                {service.price}
              </p>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-primary/20 group-hover:border-primary/50 transition-colors" />
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default ServicesSection;
