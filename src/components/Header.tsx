import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100' 
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Institution Name */}
          <a 
            href="#inicio" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0b1d3a] rounded-lg p-1"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#0b1d3a] p-0.5 bg-white shadow-sm flex items-center justify-center shrink-0">
              <img 
                src="/assets/logo.jpg" 
                alt="Logo Fundación Pablo Tobón Uribe" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-base sm:text-lg text-[#0b1d3a] tracking-tight leading-snug group-hover:text-[#c5a059] transition-colors">
                Fundación Pablo Tobón Uribe
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-wide uppercase">
                Organización Sin Ánimo de Lucro
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {SITE_DATA.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#0b1d3a] hover:bg-slate-50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#sobre-nosotros"
              className="inline-flex items-center gap-2 bg-[#0b1d3a] hover:bg-[#071326] text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-sm hover:shadow transition-all border border-[#c5a059]/40 group"
            >
              <span>Conoce nuestra Fundación</span>
              <ArrowUpRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#0b1d3a] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0b1d3a]"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-1">
            {SITE_DATA.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg hover:text-[#0b1d3a]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100">
              <a
                href="#sobre-nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0b1d3a] text-white font-semibold px-5 py-3 rounded-xl shadow border border-[#c5a059]/40"
              >
                <span>Conoce nuestra Fundación</span>
                <ArrowUpRight className="w-4 h-4 text-[#c5a059]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
