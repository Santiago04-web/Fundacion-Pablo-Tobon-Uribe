import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071326] text-slate-300 pt-16 pb-12 border-t-4 border-[#c5a059]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Institution Brand & Legal */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#c5a059] bg-white p-0.5 shrink-0">
                <img 
                  src="/assets/logo.jpg" 
                  alt="Logo Fundación Pablo Tobón Uribe" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {SITE_DATA.institution.displayName}
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Organización institucional sin ánimo de lucro orientada al bienestar, la equidad y el desarrollo integral de las personas y comunidades en Colombia.
            </p>

            <div className="inline-block px-3 py-1 rounded bg-slate-800/80 border border-slate-700 text-[11px] font-medium text-[#c5a059]">
              NIT: {SITE_DATA.institution.nit}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#c5a059]">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {SITE_DATA.navigation.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    className="hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#c5a059]">
              Sede Principal
            </h4>
            
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>{SITE_DATA.institution.address.full}</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={`tel:${SITE_DATA.institution.contact.phoneClean}`} className="hover:text-white transition-colors">
                  {SITE_DATA.institution.contact.phone}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={`mailto:${SITE_DATA.institution.contact.email}`} className="hover:text-white transition-colors break-all">
                  {SITE_DATA.institution.contact.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © 2026 Fundación Pablo Tobón Uribe. Todos los derechos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-[11px] focus:outline-none"
            aria-label="Volver arriba"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#c5a059]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
