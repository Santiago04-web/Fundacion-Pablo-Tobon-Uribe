import React from 'react';
import { Target, Check, Layers } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export const Impact: React.FC = () => {
  return (
    <section id="impacto" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#0b1d3a]">
            <Target className="w-4 h-4 text-[#c5a059]" />
            <span>Dimensión Social</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1d3a] tracking-tight">
            {SITE_DATA.impact.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            {SITE_DATA.impact.subtitle}
          </p>
        </div>

        {/* 4 Conceptual Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_DATA.impact.blocks.map((block, idx) => (
            <div 
              key={idx}
              className="relative p-8 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Tag */}
                <div className="inline-block px-3 py-1 rounded-md bg-[#0b1d3a] text-white text-[11px] font-semibold tracking-wider uppercase">
                  {block.tag}
                </div>

                {/* Main Concept Title */}
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-[#0b1d3a] tracking-tight">
                    {block.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-[#c5a059] mt-0.5">
                    {block.subtitle}
                  </h4>
                </div>

                {/* Conceptual Description */}
                <p className="text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {block.description}
                </p>

              </div>

              {/* Status Indicator */}
              <div className="mt-8 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Eje Institucional Activo</span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0b1d3a] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#c5a059]/30">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="p-3 bg-white/10 rounded-xl hidden sm:flex shrink-0">
              <Layers className="w-6 h-6 text-[#c5a059]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Transparencia y Orientación Institucional</h4>
              <p className="text-xs text-slate-300 mt-1">
                La Fundación evalúa continuamente la gestión de sus procesos para garantizar la sostenibilidad y el beneficio social en Colombia.
              </p>
            </div>
          </div>
          
          <a 
            href="#contacto"
            className="shrink-0 bg-[#c5a059] hover:bg-[#b38f46] text-[#0b1d3a] font-bold text-xs px-5 py-3 rounded-full transition-colors uppercase tracking-wider"
          >
            Ponte en Contacto
          </a>
        </div>

      </div>
    </section>
  );
};
