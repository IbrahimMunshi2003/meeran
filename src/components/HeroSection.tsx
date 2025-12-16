import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beauty.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful woman with glowing skin and styled hair - Luxe Beauty"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p 
            className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Luxury Beauty Experience
          </p>

          {/* Main Heading */}
          <h1 
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Reveal Your
            <span className="block text-gradient-gold font-semibold italic">
              Inner Radiance
            </span>
          </h1>

          {/* Description */}
          <p 
            className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Where artistry meets elegance. Experience transformative beauty treatments 
            in an atmosphere of pure luxury and sophistication.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button variant="gold" size="xl">
              Book Appointment
            </Button>
            <Button variant="elegant" size="xl">
              Explore Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div 
            className="mt-16 flex items-center gap-8 animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            <div className="text-center">
              <p className="font-heading text-3xl text-primary font-semibold">15+</p>
              <p className="text-muted-foreground text-xs tracking-widest uppercase">Years Excellence</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="font-heading text-3xl text-primary font-semibold">5K+</p>
              <p className="text-muted-foreground text-xs tracking-widest uppercase">Happy Clients</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="font-heading text-3xl text-primary font-semibold">50+</p>
              <p className="text-muted-foreground text-xs tracking-widest uppercase">Expert Stylists</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-float">
        <div className="w-24 h-24 border border-primary/30 rounded-full" />
      </div>
      <div className="absolute top-1/3 right-1/4 hidden lg:block">
        <div className="w-2 h-2 bg-primary rounded-full animate-glow" />
      </div>
    </section>
  );
};

export default HeroSection;
