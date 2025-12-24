import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Product data - structured for easy expansion
const productData = {
  "Lighting Solutions": [
    {
      id: 1,
      name: "Architectural Recessed Light",
      description: "Seamless integration into modern ceiling designs with adjustable beam angles",
      imageUrl: "/assets/premium_led_recessed_light_fixture.png",
    },
    {
      id: 2,
      name: "High-Bay LED Luminaire",
      description: "Optimized for large industrial and commercial spaces with superior efficiency",
      imageUrl: "/assets/industrial_high-bay_led_luminaire.png",
    },
    {
      id: 3,
      name: "Modern Pendant Fixture",
      description: "Elegant suspended lighting solution for contemporary architectural spaces",
      imageUrl: "/assets/modern_pendant_lighting_fixture.png",
    },
  ],
  "Switches & Smart Switches": [
    {
      id: 4,
      name: "Smart WiFi Dimmer",
      description: "Glass finish touch controls with WiFi connectivity and app integration",
      imageUrl: "/assets/smart_wifi_dimmer_control_panel.png",
    },
    {
      id: 5,
      name: "Smart Touch Panel",
      description: "Modern glass surface with intuitive touch controls and automation features",
      imageUrl: "/assets/smart_touch_switch_panel.png",
    },
    {
      id: 6,
      name: "Home Automation Hub",
      description: "Advanced control system for comprehensive smart home integration",
      imageUrl: "/assets/smart_home_automation_hub.png",
    },
  ],
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<"Lighting Solutions" | "Switches & Smart Switches">("Lighting Solutions");
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const products = productData[activeCategory];
  const totalProducts = products.length;

  // Handle infinite carousel
  const getDisplayIndex = (index: number) => {
    return ((index % totalProducts) + totalProducts) % totalProducts;
  };

  const visibleIndices = [
    getDisplayIndex(currentIndex - 1),
    getDisplayIndex(currentIndex),
    getDisplayIndex(currentIndex + 1),
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // Reset carousel when switching categories
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Product Catalogue" subtitle="Curated Excellence" />

        {/* Category Tabs */}
        <div className="flex gap-4 mb-16 justify-center md:justify-start">
          {(Object.keys(productData) as Array<"Lighting Solutions" | "Switches & Smart Switches">).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`clickable px-8 py-3 rounded-full border transition-all text-sm uppercase tracking-wider font-bold ${
                activeCategory === cat
                  ? "bg-primary border-primary text-black"
                  : "bg-transparent border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center gap-8 py-12">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrevious}
            className="clickable absolute left-0 z-20 p-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-colors group"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Products Carousel */}
          <div className="relative w-full h-96 flex items-center justify-center overflow-hidden px-32">
            <div ref={carouselRef} className="relative w-full h-full flex items-center justify-center">
              {/* Side Images */}
              {[
                { index: visibleIndices[0], position: "left" },
                { index: visibleIndices[1], position: "center" },
                { index: visibleIndices[2], position: "right" },
              ].map(({ index, position }) => {
                const product = products[index];
                const isCenter = position === "center";
                const scale = isCenter ? 1 : 0.75;
                const opacity = isCenter ? 1 : 0.6;
                const zIndex = isCenter ? 10 : 1;
                const translateX =
                  position === "left" ? "-120%" : position === "right" ? "120%" : "0%";

                return (
                  <motion.div
                    key={`${activeCategory}-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity, scale, x: translateX, zIndex }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute w-64 h-80"
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      {isCenter && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="clickable absolute right-0 z-20 p-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-colors group"
            aria-label="Next product"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Product Details */}
        {products[visibleIndices[1]] && (
          <motion.div
            key={`details-${activeCategory}-${visibleIndices[1]}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center max-w-2xl mx-auto"
          >
            <div className="inline-block px-4 py-1 bg-primary/20 border border-primary/50 rounded-full mb-4">
              <span className="text-primary text-xs uppercase tracking-widest font-bold">
                {activeCategory}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
              {products[visibleIndices[1]].name}
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              {products[visibleIndices[1]].description}
            </p>
          </motion.div>
        )}

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {products.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`clickable h-2 rounded-full transition-all ${
                getDisplayIndex(currentIndex) === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-zinc-700 hover:bg-zinc-600"
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
