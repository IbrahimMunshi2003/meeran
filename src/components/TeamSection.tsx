import stylist1 from "@/assets/stylist-1.jpg";
import stylist2 from "@/assets/stylist-2.jpg";
import stylist3 from "@/assets/stylist-3.jpg";
import stylist4 from "@/assets/stylist-4.jpg";
import stylist5 from "@/assets/stylist-5.jpg";
import stylist6 from "@/assets/stylist-6.jpg";

const team = [
  {
    name: "Kavitha Nair",
    role: "Lead Stylist & Founder",
    specialty: "Bridal Makeup & Hair",
    experience: "15+ Years",
    image: stylist1,
  },
  {
    name: "Rahul Menon",
    role: "Senior Hair Stylist",
    specialty: "Hair Coloring & Cutting",
    experience: "10+ Years",
    image: stylist2,
  },
  {
    name: "Deepika Singh",
    role: "Makeup Artist",
    specialty: "Editorial & Party Makeup",
    experience: "8+ Years",
    image: stylist3,
  },
  {
    name: "Sunita Devi",
    role: "Spa Therapist",
    specialty: "Aromatherapy & Wellness",
    experience: "12+ Years",
    image: stylist4,
  },
  {
    name: "Arjun Kumar",
    role: "Skincare Specialist",
    specialty: "Facials & Treatments",
    experience: "7+ Years",
    image: stylist5,
  },
  {
    name: "Neha Sharma",
    role: "Nail Artist",
    specialty: "Nail Art & Extensions",
    experience: "5+ Years",
    image: stylist6,
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-card relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Meet Our Experts
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
            Our <span className="text-gradient-gold italic">Talented</span> Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team of skilled professionals brings years of experience and passion 
            to deliver the best beauty services for you.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group relative bg-background border border-border overflow-hidden transition-all duration-500 hover:border-primary/50"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl mb-1 text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary text-sm tracking-wider uppercase mb-2">
                  {member.role}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-muted-foreground text-sm">
                    {member.specialty}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    <span className="text-primary">{member.experience}</span> Experience
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default TeamSection;
