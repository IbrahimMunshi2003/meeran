import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Bride",
    content: "Kanishka Beauty Parlour made my wedding day absolutely magical! The bridal makeup was flawless and lasted the entire day. The team understood exactly what I wanted and exceeded all expectations.",
    rating: 5,
    service: "Bridal Makeup",
  },
  {
    id: 2,
    name: "Ananya Gupta",
    role: "Regular Client",
    content: "I've been coming here for over 3 years and the service quality has been consistently excellent. The hair treatments have completely transformed my damaged hair. Highly recommend!",
    rating: 5,
    service: "Hair Styling",
  },
  {
    id: 3,
    name: "Meera Patel",
    role: "Corporate Professional",
    content: "The spa treatments here are truly rejuvenating. After a stressful week, the aromatherapy massage is exactly what I need. The ambiance is so relaxing and the staff is incredibly professional.",
    rating: 5,
    service: "Spa Treatments",
  },
  {
    id: 4,
    name: "Kavita Reddy",
    role: "Influencer",
    content: "Best skincare treatments in the city! The gold facial gave my skin an amazing glow. Perfect for special occasions. The products they use are top-notch quality.",
    rating: 5,
    service: "Skin Care",
  },
  {
    id: 5,
    name: "Sneha Iyer",
    role: "Fitness Instructor",
    content: "Love the nail art designs here! So creative and long-lasting. The hygiene standards are impeccable, which is very important to me. Will definitely keep coming back!",
    rating: 5,
    service: "Nail Art",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Decorative Quote */}
      <div className="absolute top-20 left-10 opacity-5">
        <Quote className="w-40 h-40 text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 rotate-180">
        <Quote className="w-40 h-40 text-primary" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            What Our Clients Say
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
            Client <span className="text-gradient-gold italic">Testimonials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our valued clients about their experiences at Kanishka Beauty Parlour.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-border p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8">
              <div className="w-8 h-8 bg-primary flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-6 pt-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="font-heading text-xl md:text-2xl font-light leading-relaxed mb-8 text-foreground/90">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-heading text-lg text-foreground">
                  {currentTestimonial.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {currentTestimonial.role} • {currentTestimonial.service}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="border-primary/30 hover:border-primary hover:bg-primary/10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <span className="text-muted-foreground text-sm">
                  {currentIndex + 1} / {testimonials.length}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="border-primary/30 hover:border-primary hover:bg-primary/10"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Decorative Corner */}
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-primary/20" />
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default TestimonialsSection;
