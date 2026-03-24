import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  return (
    <section id="contact" className="py-24 bg-card relative">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
              Book Your
              <span className="block text-gradient-gold italic">Appointment</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Ready to experience luxury beauty? Contact us to schedule your 
              personalized consultation or treatment.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg mb-1">Visit Us</h4>
                  <p className="text-muted-foreground text-sm">
                    339/ Thamarai street, Gomathipuram,<br />
                    Madurai-625020
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg mb-1">Call Us</h4>
                  <p className="text-muted-foreground text-sm">
                    <br />
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg mb-1">Email Us</h4>
                  <p className="text-muted-foreground text-sm">
                    hello@luxebeauty.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg mb-1">Opening Hours</h4>
                  <p className="text-muted-foreground text-sm">
                    Mon - Sat: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map / Additional Info */}
          <div className="bg-background p-8 md:p-12 border border-border flex flex-col justify-center">
            <h3 className="font-heading text-2xl mb-6">Find Us</h3>
            <div className="w-full h-64 bg-muted mb-6 flex items-center justify-center border border-border">
              <iframe
                title="Salon Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.40853!3d34.06907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA0JzA4LjciTiAxMTjCsDI0JzMwLjciVw!5e0!3m2!1sen!2sus!4v1234567890"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Located in the heart of Beverly Hills, our salon offers a serene escape 
              from the everyday. Visit us for a complimentary consultation.
            </p>
            <a href="#booking" className="mt-6 inline-block">
              <Button variant="gold" size="lg">
                Book an Appointment
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
