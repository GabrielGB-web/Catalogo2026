import { motion } from 'motion/react';
import { BRANDS } from '../constants';

export const Brands = () => {
  return (
    <section id="marcas" className="py-20 bg-white border-y border-brand-gray/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-brand-gray font-bold text-sm uppercase tracking-[0.3em]">Nossas Marcas Parceiras</span>
        </div>
        
        <div className="relative overflow-hidden group">
          <div className="flex items-center gap-16 animate-scroll whitespace-nowrap">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div 
                key={`${brand.id}-${i}`}
                className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all cursor-pointer"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          
          {/* Fades for smooth infinite effect */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};
