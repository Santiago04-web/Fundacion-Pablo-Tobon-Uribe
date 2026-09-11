import React from 'react';
import { Building2, Award, FileText, CheckCircle2 } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export const About: React.FC = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with Logo & Graphic Badge */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              
              {/* Decorative Frame Accent */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#c5a059]/30 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-slate-100 rounded-2xl -z-20" />

              {/* Main Card with Logo */}
              <div className="bg-[#0b1d3a] rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-40 h-40 bg-[#c5a059]/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex flex-col items-center text-center space-y-6">
                  
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#c5a059] shadow-md bg-white p-1">
                    <img 
                      src="/assets/logo.jpg" 
                      alt="Logo Fundación Pablo Tobón Uribe" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {SITE_DATA.institution.legalName}
                    </h3>
                    <p className="text-xs text-[#c5a059] font-medium mt-1">
                      NIT: {SITE_DATA.institution.nit}
                    </p>
                  </div>

                  <div className="w-full pt-4 border-t border-slate-700/60 space-y-2.5 text-left text-xs text-slate-300">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                      <span>Inscripción en Cámara de Comercio</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                      <span>Domicilio Principal en Medellín, Colombia</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                      <span>Enfoque en desarrollo social y bienestar</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Institutional Text Content */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#0b1d3a]">
              <Building2 className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{SITE_DATA.about.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1d3a] tracking-tight">
              {SITE_DATA.about.title}
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed font-normal">
              <p className="p-4 bg-slate-50 border-l-4 border-[#0b1d3a] rounded-r-lg font-medium text-slate-800">
                "{SITE_DATA.about.paragraph1}"
              </p>
              <p>
                {SITE_DATA.about.paragraph2}
              </p>
              <p>
                {SITE_DATA.about.paragraph3}
              </p>
            </div>

            {/* Key Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
                <div className="p-2 bg-[#0b1d3a] text-[#c5a059] rounded-lg shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0b1d3a]">Compromiso Ético</h4>
                  <p className="text-xs text-slate-500">Transparencia y vocación de servicio permanente.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex items-start gap-3">
                <div className="p-2 bg-[#0b1d3a] text-[#c5a059] rounded-lg shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0b1d3a]">Marco Legal Oficial</h4>
                  <p className="text-xs text-slate-500">Organización formalmente constituida.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
