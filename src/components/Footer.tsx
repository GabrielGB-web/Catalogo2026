import { Facebook, Instagram, Linkedin, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-extrabold text-xl italic">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl leading-none tracking-tighter">ALIANÇA</span>
                <span className="text-[10px] font-bold tracking-[0.2em] leading-none text-brand-white/60">DISTRIBUIDORA</span>
              </div>
            </div>
            <p className="text-brand-white/50 text-sm leading-relaxed italic">
              Excelência em distribuição alimentar e logística integrada. Atendemos comércios de todos os portes com compromisso e inovação.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-white/5 hover:bg-brand-blue rounded-xl transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-brand-blue">Links Rápidos</h4>
            <ul className="space-y-4 text-sm font-medium text-brand-white/60">
              <li><a href="#home" className="hover:text-brand-red transition-colors">Página Inicial</a></li>
              <li><a href="#sobre" className="hover:text-brand-red transition-colors">Quem Somos</a></li>
              <li><a href="#produtos" className="hover:text-brand-red transition-colors">Nosso Mix</a></li>
              <li><a href="#ofertas" className="hover:text-brand-red transition-colors">Ofertas da Semana</a></li>
              <li><a href="#representantes" className="hover:text-brand-red transition-colors">Representantes</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-brand-blue">Atendimento</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone size={18} className="text-brand-red shrink-0" />
                <div className="text-sm">
                  <p className="text-brand-white/40 mb-1 text-[10px] uppercase font-black">Televendas</p>
                  <p className="font-bold">0800 777 9000</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageCircle size={18} className="text-brand-red shrink-0" />
                <div className="text-sm">
                  <p className="text-brand-white/40 mb-1 text-[10px] uppercase font-black">WhatsApp Comercial</p>
                  <p className="font-bold">(11) 99999-8888</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail size={18} className="text-brand-red shrink-0" />
                <div className="text-sm">
                  <p className="text-brand-white/40 mb-1 text-[10px] uppercase font-black">Email</p>
                  <p className="font-bold">sac@aliancadistribuidora.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-brand-blue">Newsletter</h4>
            <p className="text-sm text-brand-white/60 mb-6 italic">Receba periodicamente nossas ofertas e novidades por email.</p>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="Seu melhor e-mail" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-brand-blue text-sm" />
              <button className="bg-brand-blue hover:bg-brand-red py-3 rounded-xl font-bold transition-all shadow-lg shadow-brand-blue/10">Inscrever</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-brand-white/30 uppercase tracking-widest">
            © 2026 Aliança Distribuidora S.A. Todos os direitos reservados. CNPJ: 00.123 456/0001-99
          </p>
          <div className="flex items-center gap-6 text-[10px] font-bold text-brand-white/30 uppercase tracking-widest">
            <span>Desenvolvido com excelência</span>
            <div className="h-4 w-[1px] bg-white/10"></div>
            <a href="#" className="hover:text-white">Portal de Governança</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
