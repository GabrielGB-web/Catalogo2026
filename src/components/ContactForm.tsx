import { motion } from 'motion/react';
import { Send, FileText, Building, MapPin, Phone, Mail } from 'lucide-react';

export const ContactForm = () => {
  return (
    <section id="contato" className="py-24 bg-brand-gray-light">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-2">
          <div className="p-10 md:p-16 space-y-8">
            <div>
              <span className="section-subtitle">Vamos conversar</span>
              <h2 className="section-title">Impulsione seu <span className="text-brand-blue">Estoque</span> hoje mesmo.</h2>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-brand-gray tracking-widest pl-2">Seu Nome</label>
                  <input type="text" placeholder="Ex: Rodrigo Silva" className="w-full bg-brand-gray-light border-0 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-brand-gray tracking-widest pl-2">Empresa / CNPJ</label>
                  <input type="text" placeholder="Nome da sua loja" className="w-full bg-brand-gray-light border-0 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-brand-gray tracking-widest pl-2">Telefone</label>
                  <input type="tel" placeholder="(11) 99999-9999" className="w-full bg-brand-gray-light border-0 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-brand-gray tracking-widest pl-2">E-mail Corporativo</label>
                  <input type="email" placeholder="contato@empresa.com.br" className="w-full bg-brand-gray-light border-0 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-brand-gray tracking-widest pl-2">Mensagem / Interessado em quais marcas?</label>
                <textarea rows={4} placeholder="Conte um pouco sobre sua necessidade..." className="w-full bg-brand-gray-light border-0 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium resize-none"></textarea>
              </div>

              <button className="w-full bg-brand-blue hover:bg-brand-dark text-white py-5 rounded-2xl font-black shadow-xl shadow-brand-blue/20 transition-all flex items-center justify-center gap-3">
                Enviar Solicitação
                <Send size={20} />
              </button>
            </form>
          </div>

          <div className="bg-brand-blue p-10 md:p-16 flex flex-col justify-between relative">
            {/* Patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="space-y-10 relative z-10 text-white">
              <h3 className="text-3xl font-black tracking-tight">Canais de <span className="text-brand-white/60 italic">Atendimento Especializado</span></h3>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="p-4 bg-white/10 rounded-2xl h-fit border border-white/20"><Building size={24} /></div>
                  <div>
                    <h4 className="font-bold">Sede Administrativa</h4>
                    <p className="text-brand-white/60 text-sm italic">Av. das Indústrias, 1000 - Setor Logístico, São Paulo - SP</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="p-4 bg-white/10 rounded-2xl h-fit border border-white/20"><Mail size={24} /></div>
                  <div>
                    <h4 className="font-bold">Portal do Cliente</h4>
                    <p className="text-brand-white/60 text-sm italic">comercial@aliancadistribuidora.com.br</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="p-4 bg-white/10 rounded-2xl h-fit border border-white/20"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold">Televendas Interno</h4>
                    <p className="text-brand-white/60 text-sm italic">0800 777 9000 (Seg à Sex das 07h às 18h)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] uppercase font-black tracking-widest text-white/70">Status da Central</span>
              </div>
              <p className="text-sm font-bold text-white">Estamos prontos para atender sua empresa agora.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
