import { motion } from 'motion/react';
import { Truck, ShieldCheck, TrendingUp, Headphones, PackageCheck, Zap } from 'lucide-react';

export const Differentials = () => {
  const cards = [
    {
      icon: <Zap className="text-brand-red" size={32} />,
      title: 'Entrega Rápida',
      desc: 'Logística ultra-eficiente com entrega garantida em até 24h para capitais.'
    },
    {
      icon: <TrendingUp className="text-brand-blue" size={32} />,
      title: 'Preço Competitivo',
      desc: 'Parcerias diretas com a indústria para garantir as melhores margens para você.'
    },
    {
      icon: <Headphones className="text-brand-blue" size={32} />,
      title: 'Suporte Consultivo',
      desc: 'Nossos representantes analisam seu mix e sugerem os melhores produtos.'
    },
    {
      icon: <PackageCheck className="text-brand-red" size={32} />,
      title: 'Estoque Vasto',
      desc: 'Centro de distribuição automatizado com mais de 5.000 SKUs disponíveis.'
    },
    {
      icon: <ShieldCheck className="text-brand-blue" size={32} />,
      title: 'Qualidade Garantida',
      desc: 'Rigoroso controle de validade e armazenamento térmico de alto padrão.'
    },
    {
      icon: <Truck className="text-brand-blue" size={32} />,
      title: 'Frota Própria',
      desc: 'Caminhões modernos e rastreados para garantir a integridade da sua carga.'
    }
  ];

  return (
    <section className="py-24 bg-brand-dark overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-blue font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Por que nos escolher</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Diferenciais que <span className="text-brand-red italic">impulsionam</span> seu lucro.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
            >
              <div className="mb-6 p-4 bg-white/10 rounded-2xl inline-block group-hover:scale-110 group-hover:bg-brand-blue transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-brand-white/60 leading-relaxed italic">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
