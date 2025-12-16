import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryItems = [
  { image: gallery1, title: "Bridal Makeup", category: "Makeup" },
  { image: gallery2, title: "Elegant Updo", category: "Hair Styling" },
  { image: gallery3, title: "Facial Treatment", category: "Skin Care" },
  { image: gallery4, title: "Nail Art", category: "Nail Care" },
  { image: gallery5, title: "Party Makeup", category: "Makeup" },
  { image: gallery6, title: "Hair Coloring", category: "Hair Styling" },
];

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Our Work
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
            Beauty <span className="text-gradient-gold italic">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of stunning transformations and see the artistry 
            that awaits you at Kanishka Beauty Parlour.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-90" : "opacity-0"
                }`}
              />

              {/* Content */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
                  hoveredIndex === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <p className="text-primary font-body text-xs tracking-[0.2em] uppercase mb-2">
                  {item.category}
                </p>
                <h3 className="font-heading text-xl text-foreground">
                  {item.title}
                </h3>
              </div>

              {/* Border Frame */}
              <div
                className={`absolute inset-4 border border-primary/50 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default GallerySection;
