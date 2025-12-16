import { Button } from "@/components/ui/button";
import salonImage from "@/assets/salon-interior.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-[4/5] bg-charcoal-light overflow-hidden">
                <img 
                  src={salonImage}
                  alt="Kanishka Beauty Parlour luxury interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/30 z-0" />
            {/* Accent */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-primary/50" />
          </div>

          {/* Content Side */}
          <div>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
              Where Beauty Meets
              <span className="block text-gradient-gold italic">Sophistication</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Founded with a passion for beauty and excellence, Kanishka Beauty Parlour 
                has been at the forefront of the luxury beauty industry. Our philosophy 
                centers on enhancing your natural beauty while providing an unparalleled 
                experience of relaxation and rejuvenation.
              </p>
              <p>
                Our team of professionally trained experts combines cutting-edge techniques 
                with time-honored traditions, using only the finest products to deliver 
                results that exceed expectations.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-heading text-lg mb-1">Premium Products</h4>
                <p className="text-muted-foreground text-sm">
                  Exclusively curated luxury brands
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-heading text-lg mb-1">Expert Team</h4>
                <p className="text-muted-foreground text-sm">
                  Internationally certified professionals
                </p>
              </div>
            </div>

            <Button variant="outline" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
