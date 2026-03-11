import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Clock, Sparkles } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const services = [
  { value: "skin-care", label: "Skin Care", price: "From ₹2,500" },
  { value: "hair-styling", label: "Hair Styling", price: "From ₹1,500" },
  { value: "makeup-artistry", label: "Makeup Artistry", price: "From ₹3,000" },
  { value: "spa-treatments", label: "Spa Treatments", price: "From ₹4,000" },
  { value: "bridal-package", label: "Bridal Package", price: "From ₹15,000" },
  { value: "nail-art", label: "Nail Art", price: "From ₹800" },
];

const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
];

const BookingSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !service || !date || !time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const displayDate = format(date, "MMMM dd, yyyy");
    const formattedDate = format(date, "yyyy-MM-dd");
    const serviceName = services.find(s => s.value === service)?.label || service;

    // Build WhatsApp message
    const message = `New Appointment Booking\n\nName: ${name}\nPhone: ${phone || "Not provided"}\nService: ${serviceName}\nDate: ${displayDate}\nTime: ${time}`;
    const whatsappUrl = `https://wa.me/919789107963?text=${encodeURIComponent(message)}`;

    // Open WhatsApp using anchor click (works in iframes and avoids popup blockers)
    const anchor = document.createElement("a");
    anchor.href = whatsappUrl;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    setTimeout(() => document.body.removeChild(anchor), 100);

    // Save to DB and send emails in the background (non-blocking)
    setIsSubmitting(true);
    (async () => {
      try {
        await supabase.from("appointments").insert({
          customer_name: name,
          customer_email: email,
          customer_phone: phone,
          service: serviceName,
          appointment_date: formattedDate,
          appointment_time: time,
          notes: notes,
        });

        await supabase.functions.invoke("send-appointment-emails", {
          body: {
            customerName: name,
            customerEmail: email,
            customerPhone: phone,
            service: serviceName,
            appointmentDate: displayDate,
            appointmentTime: time,
            notes: notes,
          },
        });
      } catch (error) {
        console.error("Background save error:", error);
      } finally {
        setIsSubmitting(false);
      }
    })();

    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setDate(undefined);
    setTime("");
    setNotes("");
  };

  return (
    <section id="booking" className="py-24 bg-card relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
              Schedule Your Visit
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
              Book Your <span className="text-gradient-gold italic">Appointment</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select your preferred service, date, and time. We'll send you a confirmation email with all the details.
            </p>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="bg-background border border-border p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground tracking-wider uppercase">
                  Your Name *
                </label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="bg-card border-border focus:border-primary"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground tracking-wider uppercase">
                  Email Address *
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="bg-card border-border focus:border-primary"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground tracking-wider uppercase">
                  Phone Number
                </label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="bg-card border-border focus:border-primary"
                />
              </div>

              {/* Service */}
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground tracking-wider uppercase">
                  Select Service *
                </label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger className="bg-card border-border focus:border-primary">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        <div className="flex items-center justify-between w-full">
                          <span>{s.label}</span>
                          <span className="text-primary text-sm ml-4">{s.price}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground tracking-wider uppercase">
                  Preferred Date *
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-card border-border hover:bg-card/80",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground tracking-wider uppercase">
                  Preferred Time *
                </label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className="bg-card border-border focus:border-primary">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Notes */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-muted-foreground tracking-wider uppercase">
                  Special Requests (Optional)
                </label>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any special requests or notes for your appointment..."
                  className="bg-card border-border focus:border-primary min-h-[100px]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <Button
                type="submit"
                variant="gold"
                size="xl"
                disabled={isSubmitting}
                className="min-w-[250px]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⏳</span> Booking...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" /> Confirm Booking
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default BookingSection;
