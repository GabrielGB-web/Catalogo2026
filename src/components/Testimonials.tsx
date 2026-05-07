import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-blue overflow-hidden relative">
      <Quote className="absolute top-10 left-10 text-white/5 w-64 h-64 rotate-12" />
      <Quote className="absolute bottom-10 right-10 text-white/5 w-64 h-64 -rotate-12" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-brand-white/70 font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Depoimentos</span>
          <h2 className="text-4xl font-black text-white tracking-tight">O que dizem nossos <span className="italic text-brand-white/80">parceiros</span> comerciais.</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-white text-brand-dark shadow-2xl relative"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(t.rating)].map((_, idx) => <Star key={idx} size={16} fill="#FFD700" className="text-yellow-400" />)}
              </div>
              <p className="text-xl italic font-medium leading-relaxed text-brand-gray mb-10">
                "{t.comment}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg ring-4 ring-brand-gray-light">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-extrabold text-brand-blue">{t.name}</h4>
                  <p className="text-xs uppercase font-bold text-brand-gray tracking-wider">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
