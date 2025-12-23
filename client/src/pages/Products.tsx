import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useProducts } from "@/hooks/use-products";
import { Download, Loader2 } from "lucide-react";
import { QuoteModal } from "@/components/QuoteModal";

// Since backend might be empty initially, we can use these as fallback or seed data visually
const staticCategories = ["All", "Lighting Solutions", "Switches & Smart Switches"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data: products, isLoading } = useProducts();
  const [showQuote, setShowQuote] = useState(false);

  // In a real scenario, this would filter the products array
  // If products is empty, we show a sleek empty state
  const filteredProducts = activeCategory === "All" 
    ? (products || []) 
    : (products || []).filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Product Catalogue" subtitle="Curated Excellence" />

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-16">
          {staticCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`clickable px-6 py-2 rounded-full border transition-all text-sm uppercase tracking-wider ${
                activeCategory === cat
                  ? "bg-primary border-primary text-black font-bold"
                  : "bg-transparent border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Brochure Downloads */}
        <div className="grid md:grid-cols-2 gap-6 mb-20 p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-bold mb-1">Lighting Brochure</h4>
              <p className="text-zinc-500 text-sm">Full specifications and styles</p>
            </div>
            <a href="/brochures/Wipro_Lighting_Catalogue_24042025.pdf" download className="clickable flex items-center gap-2 text-primary hover:text-white transition-colors">
              <Download className="w-5 h-5" />
              <span className="uppercase text-xs tracking-widest font-bold">PDF</span>
            </a>
          </div>
          <div className="flex items-center justify-between border-t md:border-t-0 md:border-l border-zinc-800 pt-6 md:pt-0 md:pl-6">
            <div>
              <h4 className="text-white font-bold mb-1">Switches Catalogue</h4>
              <p className="text-zinc-500 text-sm">Smart systems & finishes</p>
            </div>
            <a href="/brochures/Wipro_Smart_Switch_Brochure.pdf" download className="clickable flex items-center gap-2 text-primary hover:text-white transition-colors">
              <Download className="w-5 h-5" />
              <span className="uppercase text-xs tracking-widest font-bold">PDF</span>
            </a>
          </div>
        </div>

        {/* Product Grid */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-zinc-900/20 border border-white/5 rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      onClick={() => setShowQuote(true)}
                      className="clickable px-6 py-2 bg-primary text-black text-sm uppercase font-bold tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-primary mb-2 uppercase tracking-widest">{product.category}</div>
                  <h3 className="text-xl text-white font-display mb-2">{product.name}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-zinc-800 rounded-2xl">
            <h3 className="text-zinc-500 text-lg mb-4">Our catalogue is being updated.</h3>
            <p className="text-zinc-600 max-w-md mx-auto mb-8">
              New premium collections are arriving shortly. Please download our brochure or contact us directly.
            </p>
            <button 
              onClick={() => setShowQuote(true)}
              className="clickable px-8 py-3 bg-white/5 text-white border border-white/10 hover:bg-primary hover:text-black transition-colors uppercase tracking-widest text-sm font-bold"
            >
              Contact Sales
            </button>
          </div>
        )}
      </div>

      <QuoteModal isOpen={showQuote} onClose={() => setShowQuote(false)} />
    </div>
  );
}
