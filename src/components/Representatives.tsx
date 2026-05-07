import { motion } from 'motion/react';
import { REPRESENTATIVES } from '../constants';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

export const Representatives = () => {
  return (
    <section id="representantes" className="py-24 bg-brand-gray-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="section-subtitle">Apoio Comercial</span>
          <h2 className="section-title">Encontre seu <span className="text-brand-blue">Representante</span></h2>
          <p className="mt-4 text-brand-gray text-lg max-w-2xl italic leading-relaxed">
            Contamos com uma equipe altamente treinada para orientar suas compras e oferecer as melhores condições para o seu estabelecimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {REPRESENTATIVES.map((rep, i) => (
            <motion.div 
              key={rep.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-blue/5 border border-brand-gray/10 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={rep.image} 
                  alt={rep.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-black text-white">{rep.name}</h3>
                  <div className="flex items-center gap-2 text-brand-white/80 text-sm font-bold mt-1">
                    <MapPin size={14} className="text-brand-red" />
                    {rep.region}
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between p-4 bg-brand-gray-light rounded-2xl border border-brand-gray/5">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-black text-brand-gray tracking-wider">Telefone Principal</span>
                    <span className="font-bold text-brand-dark">{rep.phone}</span>
                  </div>
                  <div className="p-2 bg-brand-blue/10 rounded-full text-brand-blue">
                    <Phone size={20} />
                  </div>
                </div>

                <div className="flex gap-3">
                  <a 
                    href={`https://wa.me/${rep.whatsapp}`}
                    target="_blank"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-500/20"
                  >
                    <MessageCircle size={20} />
                    WhatsApp
                  </a>
                  <button className="p-4 bg-brand-blue/5 hover:bg-brand-blue text-brand-blue hover:text-white rounded-2xl transition-all border border-brand-blue/10">
                    <Mail size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
