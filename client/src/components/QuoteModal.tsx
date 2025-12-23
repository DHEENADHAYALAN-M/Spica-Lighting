import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Zap } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState<"Lighting" | "Switches" | "Both">("Lighting");

  const handleWhatsAppRedirect = () => {
    if (!name) return;

    const message = `Hi, I'm ${name}. I'm interested in ${interest} solutions from Spica Lighting.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918754635942?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-950 border-zinc-800 text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-center mb-2">Request a Quote</DialogTitle>
          <p className="text-center text-zinc-400 text-sm font-sans">
            Tell us what you need and we'll connect instantly via WhatsApp.
          </p>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder:text-zinc-600"
              autoFocus
            />
          </div>

          <div className="space-y-3">
            <label className="text-xs uppercase tracking-widest text-zinc-500">I'm Interested In</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setInterest("Lighting")}
                className={`flex flex-col items-center p-3 rounded-lg border transition-all clickable ${
                  interest === "Lighting"
                    ? "bg-primary/10 border-primary text-primary"
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                }`}
              >
                <Lightbulb className="w-6 h-6 mb-2" />
                <span className="text-xs font-bold">Lighting</span>
              </button>
              
              <button
                onClick={() => setInterest("Switches")}
                className={`flex flex-col items-center p-3 rounded-lg border transition-all clickable ${
                  interest === "Switches"
                    ? "bg-primary/10 border-primary text-primary"
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                }`}
              >
                <Zap className="w-6 h-6 mb-2" />
                <span className="text-xs font-bold">Switches</span>
              </button>
            </div>
            
            <button
              onClick={() => setInterest("Both")}
              className={`w-full py-2 text-xs font-bold rounded-lg border transition-all clickable ${
                interest === "Both"
                  ? "bg-primary/10 border-primary text-primary"
                  : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700"
              }`}
            >
              I need Both Solutions
            </button>
          </div>

          <button
            onClick={handleWhatsAppRedirect}
            disabled={!name}
            className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all clickable ${
              name
                ? "bg-primary text-black hover:bg-yellow-400 shadow-lg shadow-primary/20"
                : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
            }`}
          >
            Start Chat <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
