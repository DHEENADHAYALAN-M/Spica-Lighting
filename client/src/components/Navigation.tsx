import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { QuoteModal } from "./QuoteModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer clickable">
              <img 
                src="/favicon.png" 
                alt="Spica Lighting Logo" 
                className="h-12 w-auto object-contain drop-shadow-[0_0_6px_rgba(212,175,55,0.25)]"
              />
              <div className="text-lg font-bold tracking-widest uppercase">
                <span className="text-primary">SPICA</span> LIGHTING
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <div
                  className={`relative text-sm uppercase tracking-widest cursor-pointer clickable hover:text-primary transition-colors ${
                    location === link.href ? "text-primary" : "text-white/70"
                  }`}
                >
                  {link.name}
                  {location === link.href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-2 left-0 w-full h-px bg-primary"
                    />
                  )}
                </div>
              </Link>
            ))}
            <button
              onClick={() => setShowQuote(true)}
              className="clickable px-6 py-2 border border-primary/50 text-primary hover:bg-primary hover:text-black transition-all duration-300 text-sm uppercase tracking-widest"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white clickable"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-4 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <div
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl uppercase tracking-widest cursor-pointer ${
                      location === link.href ? "text-primary" : "text-white/70"
                    }`}
                  >
                    {link.name}
                  </div>
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowQuote(true);
                }}
                className="mt-4 px-8 py-3 bg-primary text-black text-lg uppercase tracking-widest font-bold"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <QuoteModal isOpen={showQuote} onClose={() => setShowQuote(false)} />
    </>
  );
}
