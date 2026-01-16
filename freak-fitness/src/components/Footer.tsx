import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="text-3xl font-black tracking-tighter text-white">
              FREAK<span className="text-[#FFBF00]">.</span>
            </div>
            <p className="text-zinc-500 font-medium leading-relaxed max-w-xs">
             {` Transformation-focused, no-nonsense training in Honnavar. Build the elite physique and mindset you deserve.`}
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/Freaks_gym_honnavar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-[#FFBF00] text-zinc-400 hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-[#FFBF00] text-zinc-400 hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-[#FFBF00] text-zinc-400 hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="font-black text-xs uppercase tracking-[0.2em] text-[#FFBF00] mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["Programs", "Results", "Process", "Apply"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-zinc-400 hover:text-white font-bold transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-[#FFBF00] mr-0 group-hover:mr-2 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-black text-xs uppercase tracking-[0.2em] text-[#FFBF00] mb-6">Combat Protocols</h3>
            <ul className="space-y-4">
              {[
                "Fat Loss",
                "Strength Building",
                "Athletic Performance",
                "Body Recomposition",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#programs"
                    className="text-zinc-400 hover:text-white font-bold transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-[#FFBF00] mr-0 group-hover:mr-2 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-black text-xs uppercase tracking-[0.2em] text-[#FFBF00] mb-6">Headquarters</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-500 font-medium">
                <MapPin className="w-5 h-5 shrink-0 text-[#FFBF00]" />
                <span className="text-sm">Honnavar, Karnataka 581334</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-500 font-medium">
                <Phone className="w-5 h-5 shrink-0 text-[#FFBF00]" />
                <a href="tel:+919910938414" className="text-sm hover:text-white transition-colors">
                  +91 99109 38516
                </a>
              </li>
              <li className="flex items-center gap-3 text-zinc-500 font-medium">
                <Mail className="w-5 h-5 shrink-0 text-[#FFBF00]" />
                <a
                  href="mailto:freaksgym6@gmail.com"
                  className="text-sm hover:text-white transition-colors"
                >
                  freaksgym6@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-10 bg-white/5" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-zinc-600">
          <p>© {currentYear} FREAK'S GYM HONNAVAR. DESIGNED FOR PERFORMANCE.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
