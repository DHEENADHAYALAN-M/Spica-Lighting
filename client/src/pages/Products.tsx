import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Product data - 15 products per category
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
    {
      id: 7,
      name: "Track Mounted LED Spotlight",
      description: "Professional directional lighting for retail and gallery applications",
      imageUrl: "/assets/track_mounted_led_spotlight.png",
    },
    {
      id: 8,
      name: "Smart LED Panel Light",
      description: "Ultra-modern flat geometric design with WiFi control capabilities",
      imageUrl: "/assets/smart_led_panel_light.png",
    },
    {
      id: 9,
      name: "Adjustable Downlight Fixture",
      description: "Recessed installation with precision beam angle adjustment",
      imageUrl: "/assets/adjustable_downlight_fixture.png",
    },
    {
      id: 10,
      name: "LED Wall Washer Light",
      description: "Architectural accent lighting for dramatic wall illumination effects",
      imageUrl: "/assets/led_wall_washer_light.png",
    },
    {
      id: 11,
      name: "Dimmable LED Strip Lighting",
      description: "Architectural linear light with premium aluminum profile construction",
      imageUrl: "/assets/dimmable_led_strip_lighting.png",
    },
    {
      id: 12,
      name: "Adjustable Track Light Head",
      description: "Commercial-grade fixture with sleek black and metallic design",
      imageUrl: "/assets/adjustable_track_light_head.png",
    },
    {
      id: 13,
      name: "Dimmable Ceiling Light Fixture",
      description: "Circular modern design with adjustable brightness control",
      imageUrl: "/assets/dimmable_ceiling_light_fixture.png",
    },
    {
      id: 14,
      name: "Premium Recessed Accent Light",
      description: "High-precision lighting with variable color temperature options",
      imageUrl: "/assets/premium_led_recessed_light_fixture.png",
    },
    {
      id: 15,
      name: "Ultra-Bright Commercial LED",
      description: "Heavy-duty lighting solution for warehouses and industrial facilities",
      imageUrl: "/assets/industrial_high-bay_led_luminaire.png",
    },
    {
      id: 16,
      name: "Designer Wall Mount Sconce",
      description: "Contemporary wall-mounted lighting with premium finish options",
      imageUrl: "/assets/modern_pendant_lighting_fixture.png",
    },
    {
      id: 17,
      name: "Architectural Corner Light",
      description: "Innovative corner-mounted fixture for modern architectural designs",
      imageUrl: "/assets/smart_led_panel_light.png",
    },
    {
      id: 18,
      name: "Premium Installation Kit",
      description: "Complete lighting system with professional installation accessories",
      imageUrl: "/assets/track_mounted_led_spotlight.png",
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
    {
      id: 19,
      name: "Smart Motion Sensor Switch",
      description: "Black glass finish with automatic motion detection and WiFi control",
      imageUrl: "/assets/smart_motion_sensor_switch.png",
    },
    {
      id: 20,
      name: "Smart Energy Monitoring Switch",
      description: "Real-time power consumption tracking with intelligent automation",
      imageUrl: "/assets/smart_energy_monitoring_switch.png",
    },
    {
      id: 21,
      name: "Smart Voice Controlled Switch",
      description: "Elegant touch surface with voice assistant integration",
      imageUrl: "/assets/smart_voice_controlled_switch.png",
    },
    {
      id: 22,
      name: "Smart Control Panel Display",
      description: "Large touchscreen display for multi-device smart home management",
      imageUrl: "/assets/smart_control_panel_display.png",
    },
    {
      id: 23,
      name: "Premium WiFi Switch Module",
      description: "High-capacity switching module with advanced automation routines",
      imageUrl: "/assets/smart_wifi_dimmer_control_panel.png",
    },
    {
      id: 24,
      name: "Glass Touch Dimmer Switch",
      description: "Luxury glass finish with smooth dimming and scheduling capabilities",
      imageUrl: "/assets/smart_touch_switch_panel.png",
    },
    {
      id: 25,
      name: "Smart Relay Control Unit",
      description: "Professional-grade switching for large-scale automation systems",
      imageUrl: "/assets/smart_motion_sensor_switch.png",
    },
    {
      id: 26,
      name: "Advanced Automation Hub",
      description: "Central control system for coordinated smart home environments",
      imageUrl: "/assets/smart_home_automation_hub.png",
    },
    {
      id: 27,
      name: "Smart Scene Controller",
      description: "Pre-programmed scenes for lighting and device coordination",
      imageUrl: "/assets/smart_control_panel_display.png",
    },
    {
      id: 28,
      name: "Wireless Smart Switch Set",
      description: "Battery-free wireless switching with instant response times",
      imageUrl: "/assets/smart_voice_controlled_switch.png",
    },
    {
      id: 29,
      name: "Smart Temperature & Light Control",
      description: "Integrated climate and lighting management in one device",
      imageUrl: "/assets/smart_energy_monitoring_switch.png",
    },
    {
      id: 30,
      name: "Premium Smart Lighting System",
      description: "Complete ecosystem of smart switches and dimmer controls",
      imageUrl: "/assets/smart_wifi_dimmer_control_panel.png",
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

        {/* Carousel Container - LARGER */}
        <div className="relative flex items-center justify-center gap-12 py-16">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrevious}
            className="clickable absolute left-0 z-20 p-4 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-colors group"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-8 h-8" />
          </motion.button>

          {/* Products Carousel */}
          <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden px-40">
            <div ref={carouselRef} className="relative w-full h-full flex items-center justify-center">
              {/* Side Images */}
              {[
                { index: visibleIndices[0], position: "left" },
                { index: visibleIndices[1], position: "center" },
                { index: visibleIndices[2], position: "right" },
              ].map(({ index, position }) => {
                const product = products[index];
                const isCenter = position === "center";
                const scale = isCenter ? 1 : 0.7;
                const opacity = isCenter ? 1 : 0.5;
                const zIndex = isCenter ? 10 : 1;
                const translateX =
                  position === "left" ? "-140%" : position === "right" ? "140%" : "0%";

                return (
                  <motion.div
                    key={`${activeCategory}-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity, scale, x: translateX, zIndex }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute w-80 h-96"
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
            className="clickable absolute right-0 z-20 p-4 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-colors group"
            aria-label="Next product"
          >
            <ChevronRight className="w-8 h-8" />
          </motion.button>
        </div>

        {/* Product Details */}
        {products[visibleIndices[1]] && (
          <motion.div
            key={`details-${activeCategory}-${visibleIndices[1]}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <div className="inline-block px-4 py-1 bg-primary/20 border border-primary/50 rounded-full mb-4">
              <span className="text-primary text-xs uppercase tracking-widest font-bold">
                {activeCategory}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">
              {products[visibleIndices[1]].name}
            </h2>
            <p className="text-zinc-400 text-xl leading-relaxed">
              {products[visibleIndices[1]].description}
            </p>
          </motion.div>
        )}

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-16 flex-wrap">
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
