import { Link } from "wouter";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/">
              <div className="text-2xl font-bold tracking-widest uppercase cursor-pointer clickable">
                <span className="text-primary">SPICA</span> LIGHTING
              </div>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Illuminating spaces with premium lighting solutions and intelligent switchgear. Authorized Wipro Lighting Dealer.
            </p>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'Products', 'Projects', 'About'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                    <span className="text-zinc-500 hover:text-primary transition-colors cursor-pointer clickable text-sm">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6 text-sm md:text-base">
              Contact
            </h4>

            <ul className="space-y-5">
              {/* Address */}
              <li>
                <a
                  href="https://maps.google.com/?q=123+Lighting+Avenue+Design+District+Chennai+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-zinc-400 text-sm leading-relaxed hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    123 Lighting Avenue, Design District, Chennai, India
                  </span>
                </a>
              </li>

              {/* Phone */}
              <li>
                <a
                  href="tel:+918754635942"
                  className="flex items-center gap-4 text-zinc-400 text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+91 87546 35942</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:spicalighting@gmail.com"
                  className="flex items-center gap-4 text-zinc-400 text-sm break-all sm:break-normal hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span>spicalighting@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all clickable">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} Spica Lighting. All rights reserved. Built by{" "}
            <a
              href="https://www.linkedin.com/in/dheenadhayalan-muruganantham/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline transition-all duration-300"
            >
              Damnex
            </a>
          </p>
          <div className="flex gap-6">
            <span className="hover:text-zinc-400 cursor-pointer clickable">Privacy Policy</span>
            <span className="hover:text-zinc-400 cursor-pointer clickable">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
