import { motion } from 'motion/react';
import { Truck, Map, Navigation, ShieldCheck } from 'lucide-react';

export const Logistics = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="section-subtitle">Nossa Presença</span>
              <h2 className="section-title">Cobertura Nacional com <span className="text-brand-blue">Precisão</span> Local.</h2>
            </div>
            
            <p className="text-lg text-brand-gray leading-relaxed">
              Operamos com rotas inteligentes e monitoramento em tempo real. Nossa frota equipada garante a integridade de produtos secos, refrigerados e congelados do carregamento à prateleira.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Map className="text-brand-red" />, title: '22 Filiais', desc: 'Pontos estratégicos em todo o Brasil' },
                { icon: <Navigation className="text-brand-blue" />, title: 'Rutas Otimizadas', desc: 'Menos emissões e entregas mais ágeis' },
                { icon: <Truck className="text-brand-blue" />, title: 'Frota Diversificada', desc: 'Veículos para todos os tipos de carga' },
                { icon: <ShieldCheck className="text-brand-red" />, title: 'Segurança Total', desc: 'Rastreamento 24h por central própria' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="p-3 bg-brand-gray-light rounded-xl h-fit">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-brand-dark leading-tight">{item.title}</h4>
                    <p className="text-xs text-brand-gray mt-1 leading-tight">{item.desc}</p>
                  </div>
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
            {/* Background image map simulation */}
            <div className="bg-brand-gray-light rounded-[3rem] p-4 shadow-2xl relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1590496794008-383c8070bb25?auto=format&fit=crop&q=80&w=800" 
                alt="Logistics Map" 
                className="w-full h-auto rounded-[2.5rem] opacity-70 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-blue/30 mix-blend-overlay"></div>
              
              {/* Dynamic Points for "map" effect */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-1/4 left-1/2 w-4 h-4 bg-brand-red rounded-full shadow-[0_0_20px_rgba(227,28,35,0.8)]"
              ></motion.div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                className="absolute top-1/2 left-1/3 w-3 h-3 bg-brand-blue rounded-full shadow-[0_0_20px_rgba(0,51,153,0.8)]"
              ></motion.div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-brand-red rounded-full shadow-[0_0_20px_rgba(227,28,35,0.8)]"
              ></motion.div>
            </div>

            {/* Truck Overlay Card */}
            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl border border-brand-gray/10 max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-brand-blue rounded-2xl text-white">
                  <Truck />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-gray uppercase">Status da Entrega</div>
                  <div className="text-brand-blue font-black font-mono">ID: AL-88229</div>
                </div>
              </div>
              <div className="w-full bg-brand-gray-light h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  className="bg-brand-red h-full"
                ></motion.div>
              </div>
              <div className="mt-2 text-right text-[10px] font-black text-brand-red uppercase tracking-widest">Em trânsito (85%)</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
