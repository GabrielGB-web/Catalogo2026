import { motion } from 'motion/react';
import { Clock, TrendingDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PRODUCTS } from '../constants';

export const Offers = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 12, m: 34, s: 56 });
  const promoProducts = PRODUCTS.filter(p => p.promo);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else if (m > 0) { s = 59; m--; }
        else if (h > 0) { s = 59; m = 59; h--; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="ofertas" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-brand-red rounded-[3rem] p-8 md:p-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
          {/* Patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="grid grid-cols-12 gap-4 h-full">
               {Array.from({length: 48}).map((_, i) => (
                 <div key={i} className="aspect-square bg-white rounded-full"></div>
               ))}
            </div>
          </div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center space-y-6 relative z-10"
          >
            <div className="bg-white text-brand-red px-6 py-2 rounded-full font-black uppercase text-sm tracking-widest flex items-center gap-2">
              <TrendingDown size={18} />
              Preços de Fábrica
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">OFERTAS DA SEMANA <span className="italic">TERMINAM EM:</span></h2>
            
            <div className="flex gap-4 md:gap-8">
              {[
                { label: 'Horas', val: timeLeft.h },
                { label: 'Minutos', val: timeLeft.m },
                { label: 'Segundos', val: timeLeft.s }
              ].map((t, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl w-20 h-20 md:w-32 md:h-32 flex items-center justify-center text-3xl md:text-5xl font-black text-white shadow-xl">
                    {t.val.toString().padStart(2, '0')}
                  </div>
                  <span className="text-xs uppercase font-bold text-white/70 mt-3 tracking-widest">{t.label}</span>
                </div>
              ))}
            </div>

            <p className="max-w-xl text-brand-white/90 font-medium pt-8 leading-relaxed">
              Aproveite descontos especiais de até 30% em itens selecionados para completar seu estoque antes que os preços subam.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {promoProducts.map((p) => (
            <div key={p.id} className="relative group p-4 border border-brand-gray/10 rounded-3xl hover:border-brand-red transition-all cursor-pointer">
              <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="text-[10px] font-black text-brand-red uppercase tracking-widest">Até -30% OFF</span>
              <h4 className="text-lg font-bold text-brand-dark mt-1">{p.name}</h4>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-brand-red font-black text-xl">R$ {p.price?.toFixed(2)}</span>
                <span className="text-brand-gray text-sm line-through">R$ {(p.price! * 1.3).toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
