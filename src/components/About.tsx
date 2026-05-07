import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Users, Briefcase, Award, Clock } from 'lucide-react';

export const About = () => {
  const stats = [
    { value: '25+', label: 'Anos de Mercado' },
    { value: '15k+', label: 'Clientes Atendidos' },
    { value: '5k+', label: 'Produtos' },
    { value: '200+', label: 'Entregas Diárias' },
  ];

  const values = [
    {
      icon: <Target className="text-brand-red" />,
      title: 'Missão',
      desc: 'Prover soluções em distribuição com agilidade, honestidade e foco no crescimento do comércio local.'
    },
    {
      icon: <Eye className="text-brand-blue" />,
      title: 'Visão',
      desc: 'Ser a distribuidora referência em tecnologia logística e variedade de mix no território nacional.'
    },
    {
      icon: <ShieldCheck className="text-green-500" />,
      title: 'Valores',
      desc: 'Integridade, compromisso com o prazo, qualidade operacional e valorização das pessoas.'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="section-subtitle">Nossa História</span>
            <h2 className="section-title">Construindo Parcerias <span className="text-brand-blue">Sólidas</span> e Duradouras no Atacado.</h2>
            <p className="text-brand-gray text-lg leading-relaxed">
              Fundada em 1999, a Aliança Distribuidora nasceu com o propósito de conectar grandes indústrias aos pequenos e médios varejistas. Hoje, somos um dos maiores hubs logísticos do setor alimentício, operando com tecnologia de ponta para garantir que seu estoque nunca fique vazio.
            </p>
            <p className="text-brand-gray text-lg leading-relaxed">
              Nosso compromisso vai além da entrega: oferecemos suporte comercial consultivo para ajudar você a escolher o melhor mix de produtos para o seu público.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              {values.map((v, i) => (
                <div key={i} className="p-4 bg-brand-gray-light rounded-xl border border-brand-gray/10">
                  <div className="mb-3">{v.icon}</div>
                  <h4 className="font-bold text-brand-dark mb-1">{v.title}</h4>
                  <p className="text-xs text-brand-gray leading-tight">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800" 
                alt="Equipe Profissional" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -left-10 bg-brand-blue p-8 rounded-3xl shadow-xl border-4 border-white hidden md:block">
              <div className="text-white text-center">
                <span className="block text-4xl font-black italic">25</span>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-white/70">Anos de Sucesso</span>
              </div>
            </div>

            {/* Float Element */}
            <div className="absolute -top-6 -right-6 bg-brand-red p-4 rounded-2xl shadow-xl animate-bounce hidden sm:block">
              <Briefcase className="text-white" />
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-32 p-12 bg-brand-blue rounded-[3rem] shadow-2xl shadow-brand-blue/20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center text-white"
            >
              <h3 className="text-4xl md:text-5xl font-black mb-2">{stat.value}</h3>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
