import React from 'react';
import { ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      
      {/* Decorative Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50/40 rounded-full blur-3xl -z-10 pointer-events-none transform -translate-x-1/3 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-semibold text-[#0b1d3a]">
              <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
              <span>NIT {SITE_DATA.institution.nit} • Entidad Sin Ánimo de Lucro</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1d3a] tracking-tight leading-[1.15]">
              Construyendo oportunidades, <span className="text-[#c5a059] block sm:inline">transformando vidas</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {SITE_DATA.hero.subtitle}
            </p>

            {/* Call to Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#sobre-nosotros"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0b1d3a] hover:bg-[#071326] text-white text-base font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-[#0b1d3a]/10 hover:shadow-xl transition-all border border-[#c5a059]/40 group"
              >
                <span>{SITE_DATA.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0b1d3a] text-base font-semibold px-7 py-3.5 rounded-full shadow-sm border border-slate-200 hover:border-slate-300 transition-all"
              >
                <HeartHandshake className="w-5 h-5 text-[#c5a059]" />
                <span>{SITE_DATA.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-slate-200/60 grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#c5a059] mt-2 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#0b1d3a] uppercase tracking-wider">Enfoque Social</h4>
                  <p className="text-xs text-slate-500">Bienestar y equidad comunitaria</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0b1d3a] mt-2 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#0b1d3a] uppercase tracking-wider">Medellín, Colombia</h4>
                  <p className="text-xs text-slate-500">Trabajo institucional continuo</p>
                </div>
              </div>
            </div>

          </div>

          {/* Graphic / Image Composition Column */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer frame glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0b1d3a] to-[#c5a059] rounded-2xl blur-md opacity-25 group-hover:opacity-100 transition duration-1000" />
              
              {/* Main Card Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
                <img
                  src="/assets/hero-banner.jpg"
                  alt="Fundación Pablo Tobón Uribe - Construyendo oportunidades, transformando vidas"
                  className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-500"
                />
                
                {/* Floating Info Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#0b1d3a] block">Fundación Pablo Tobón Uribe</span>
                    <span className="text-[11px] text-slate-500">Compromiso ético y desarrollo humano</span>
                  </div>
                  <span className="text-xs font-bold text-[#c5a059] bg-[#0b1d3a] px-3 py-1 rounded-full">
                    2026
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
