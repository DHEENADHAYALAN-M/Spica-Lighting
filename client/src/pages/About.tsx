import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Who We Are" subtitle="About Spica" />

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              At Spica Lighting, we believe that light is more than just utility—it is an architectural element that shapes mood, enhances texture, and defines space.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              With over 8 years of dedicated experience in the industry, we have established ourselves as a premier provider of sophisticated lighting solutions and intelligent switchgear.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              As an authorized dealer for Wipro Lighting, we bring world-class quality and innovation to every project, whether it's a luxury residence, a corporate office, or a hospitality venue.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl" />
            <img 
              src="/assets/about-image.jpg" 
              alt="Interior Lighting Design"
              className="relative rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-zinc-900/30 p-12 rounded-3xl border border-white/5">
          <h3 className="text-3xl font-display text-white text-center mb-12">Why Choose Spica?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Authorized Wipro Lighting Partner",
              "End-to-end Lighting Design Consultation",
              "Expertise in Home Automation & Smart Switches",
              "After-sales Support & Warranty",
              "Custom Solutions for Unique Spaces",
              "Competitive Pricing for Premium Products"
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="text-zinc-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
