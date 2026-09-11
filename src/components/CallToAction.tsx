import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-[#0b1d3a] text-white relative overflow-hidden">
      
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#c5a059]/40 text-xs font-semibold text-[#c5a059]">
          <Sparkles className="w-4 h-4 text-[#c5a059]" />
          <span>Compromiso Institucional Continuo</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          "{SITE_DATA.ctaSection.title}"
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          {SITE_DATA.ctaSection.description}
        </p>

        {/* Action Button */}
        <div className="pt-4">
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 bg-[#c5a059] hover:bg-[#b38f46] text-[#0b1d3a] font-bold text-base px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 group"
          >
            <span>{SITE_DATA.ctaSection.buttonText}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>

    </section>
  );
};
