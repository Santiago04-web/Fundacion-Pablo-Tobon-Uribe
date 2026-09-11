import React from 'react';
import { Sparkles, Users, Heart, TrendingUp, Compass } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6 text-[#c5a059]" />,
  Users: <Users className="w-6 h-6 text-[#c5a059]" />,
  Heart: <Heart className="w-6 h-6 text-[#c5a059]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#c5a059]" />
};

export const Purpose: React.FC = () => {
  return (
    <section id="proposito" className="py-20 bg-slate-50 border-y border-slate-100 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#0b1d3a] shadow-xs">
            <Compass className="w-4 h-4 text-[#c5a059]" />
            <span>Ejes Fundamentales</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1d3a] tracking-tight">
            {SITE_DATA.purpose.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            {SITE_DATA.purpose.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SITE_DATA.purpose.cards.map((card) => (
            <div 
              key={card.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-[#0b1d3a] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  {iconMap[card.iconName] || <Sparkles className="w-6 h-6 text-[#c5a059]" />}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0b1d3a] tracking-tight group-hover:text-[#c5a059] transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>

              </div>

              {/* Decorative Accent Line */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold uppercase tracking-wider text-[10px] text-[#0b1d3a]">Fundación PTO</span>
                <div className="w-6 h-1 rounded-full bg-[#c5a059]/40 group-hover:w-10 group-hover:bg-[#c5a059] transition-all" />
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
