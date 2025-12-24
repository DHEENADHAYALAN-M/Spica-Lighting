import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, Award, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { SectionHeading } from "@/components/SectionHeading";
import { useState } from "react";
import { QuoteModal } from "@/components/QuoteModal";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const [showQuote, setShowQuote] = useState(false);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/assets/hero-bg.png')"}}>
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        
        {/* Animated Light Beams */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[1px] top-1/2 -translate-y-1/2" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary to-transparent w-[1px] left-1/2 -translate-x-1/2" />
        </motion.div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 border border-primary/30 rounded-full text-primary text-xs tracking-[0.3em] uppercase mb-8 backdrop-blur-sm mt-16">
              Authorized Wipro Dealer
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-light text-white mb-8 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary bg-[length:200%_auto] animate-gradient">
                SPICA
              </span> <br />
              LIGHTING
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
              Architectural lighting solutions and premium switchgear that transform spaces into experiences.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link href="/products">
                <button className="clickable px-8 py-4 bg-primary text-black font-bold tracking-widest uppercase hover:bg-white transition-colors">
                  Explore Products
                </button>
              </Link>
              <Link href="/projects">
                <button className="clickable px-8 py-4 border border-white/20 text-white font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-colors">
                  View Gallery
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Expertise" 
            subtitle="Premium Solutions"
            center
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Lighting Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative h-[600px] rounded-2xl overflow-hidden cursor-pointer clickable"
            >
              {/* Lighting Solutions Image */}
              <div className="absolute inset-0">
                <img 
                  src="/assets/smart_led_panel_light.png" 
                  alt="Lighting Solutions"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <h3 className="text-3xl font-display text-white mb-4">Lighting Solutions</h3>
                <p className="text-zinc-400 mb-8 max-w-sm">
                  Cutting-edge LED fixtures and architectural lighting designs for modern spaces.
                </p>
                <Link href="/products?category=Lighting Solutions">
                  <span className="inline-flex items-center gap-2 text-primary uppercase tracking-widest text-sm font-bold group-hover:gap-4 transition-all">
                    View Collection <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Switches Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative h-[600px] rounded-2xl overflow-hidden cursor-pointer clickable"
            >
              {/* Switches and automation */}
              <div className="absolute inset-0">
                <img 
                  src="/assets/smart_home_automation_hub.png" 
                  alt="Switches & Automation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <h3 className="text-3xl font-display text-white mb-4">Switches & Automation</h3>
                <p className="text-zinc-400 mb-8 max-w-sm">
                  Intelligent control systems and premium switchgear for the connected home.
                </p>
                <Link href="/products?category=Switches & Smart Switches">
                  <span className="inline-flex items-center gap-2 text-primary uppercase tracking-widest text-sm font-bold group-hover:gap-4 transition-all">
                    View Collection <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="py-32 border-y border-white/5 bg-zinc-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 border border-white/5 rounded-2xl hover:border-primary/30 transition-colors"
            >
              <Star className="w-12 h-12 text-primary mx-auto mb-6" />
              <h4 className="text-4xl font-display font-bold text-white mb-2">8+</h4>
              <p className="text-zinc-500 uppercase tracking-widest text-sm">Years Experience</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 border border-white/5 rounded-2xl hover:border-primary/30 transition-colors"
            >
              <Award className="w-12 h-12 text-primary mx-auto mb-6" />
              <h4 className="text-4xl font-display font-bold text-white mb-2">50+</h4>
              <p className="text-zinc-500 uppercase tracking-widest text-sm">Projects Completed</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 border border-white/5 rounded-2xl hover:border-primary/30 transition-colors"
            >
              <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
              <h4 className="text-4xl font-display font-bold text-white mb-2">100%</h4>
              <p className="text-zinc-500 uppercase tracking-widest text-sm">Authorized Dealer</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display text-white mb-8">Ready to transform your space?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-12 text-lg">
            Let's discuss your lighting needs. Our experts are ready to provide a custom solution.
          </p>
          <button 
            onClick={() => setShowQuote(true)}
            className="clickable px-12 py-5 bg-primary text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            Get a Quote Now
          </button>
        </div>
      </section>

      <QuoteModal isOpen={showQuote} onClose={() => setShowQuote(false)} />
    </div>
  );
}
