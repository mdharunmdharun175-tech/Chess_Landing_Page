"use client";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Class Types", href: "#class-types" },
  { label: "About Us", href: "#why-choose-us" },
  { label: "Demo Classes", href: "#demo" },
  { label: "Contact", href: "#contact" },
];

const programs = [
  { label: "Beginner Level", href: "#programs" },
  { label: "Intermediate Level", href: "#programs" },
  { label: "Advanced Level", href: "#programs" },
  { label: "Sunday Training", href: "#sunday-training" },
];

const contactEmail = "nexachessacademy@gmail.com";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0f172a] text-white">
      {/* Top gold border line */}
      <div className="h-[3px] bg-[#d4a843] w-full" />

      {/* Background pattern */}
      <div className="absolute inset-0 chess-pattern opacity-5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1 reveal reveal-up flex flex-col items-center text-center md:items-start md:text-left" style={{ transitionDelay: '0s' }}>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/nexa_logo.png" 
                alt="NEXA Chess Academy" 
                className="w-24 h-24 md:w-12 md:h-12 drop-shadow-lg object-contain"
              />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Professional online chess training for students of all levels. Building champions since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div className="reveal reveal-up" style={{ transitionDelay: '0.1s' }}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="text-amber-400/60 text-xs transition-transform duration-300 group-hover:translate-x-1">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="reveal reveal-up" style={{ transitionDelay: '0.2s' }}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Programs
            </h4>
            <ul className="space-y-2.5">
              {programs.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="text-amber-400/60 text-xs transition-transform duration-300 group-hover:translate-x-1">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="reveal reveal-up" style={{ transitionDelay: '0.3s' }}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <span className="text-amber-400 mt-0.5">📞</span>
                +91 7010854643
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <span className="text-amber-400 mt-0.5">✉️</span>
                <a href={`mailto:${contactEmail}`} className="hover:text-amber-400 transition-colors">
                  {contactEmail}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <span className="text-amber-400 mt-0.5">🌐</span>
                Available Worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 reveal reveal-up" style={{ transitionDelay: '0.4s' }}>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Nexa Chess Academy. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-amber-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-slate-400 hover:text-amber-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
