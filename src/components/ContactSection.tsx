import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactSection = () => {
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
                    123 Luxury Lane, Beverly Hills<br />
                    CA 90210, United States
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
                    +1 (310) 555-0123
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

          {/* Contact Form */}
          <div className="bg-background p-8 md:p-12 border border-border">
            <h3 className="font-heading text-2xl mb-6">Request an Appointment</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                  Service Interested In
                </label>
                <select className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors appearance-none">
                  <option value="">Select a service</option>
                  <option value="skincare">Skin Care</option>
                  <option value="hair">Hair Styling</option>
                  <option value="makeup">Makeup Artistry</option>
                  <option value="spa">Spa Treatments</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your beauty goals..."
                />
              </div>

              <Button variant="gold" size="lg" className="w-full">
                Send Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
