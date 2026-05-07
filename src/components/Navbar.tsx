import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Search, Menu, X, ChevronDown, User, ShoppingCart, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Marcas', href: '#marcas' },
    { label: 'Ofertas', href: '#ofertas' },
    { label: 'Representantes', href: '#representantes' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        {/* Top Bar - Hidden on scroll or small screens */}
        {!isScrolled && (
          <div className="hidden lg:block bg-brand-blue/5 border-b border-white/10 py-2 mb-2">
            <div className="container mx-auto px-6 flex justify-between items-center text-xs font-medium text-brand-blue">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-1.5"><Phone size={14} /> (11) 4004-9000</span>
                <span className="flex items-center gap-1.5"><MessageCircle size={14} /> (11) 99999-8888</span>
                <span className="flex items-center gap-1.5"><Mail size={14} /> contato@aliancadistribuidora.com.br</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5"><MapPin size={14} /> São Paulo, SP</span>
                <div className="h-3 w-[1px] bg-brand-blue/20"></div>
                <a href="#" className="hover:text-brand-red transition-colors uppercase tracking-widest font-bold">Trabalhe Conosco</a>
              </div>
            </div>
          </div>
        )}

        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-extrabold text-xl italic">A</span>
              </div>
              <div className="flex flex-col">
                <span className={`font-black text-xl leading-none tracking-tighter ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>ALIANÇA</span>
                <span className={`text-[10px] font-bold tracking-[0.2em] leading-none ${isScrolled ? 'text-brand-red' : 'text-brand-white/80'}`}>DISTRIBUIDORA</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className={`text-sm font-semibold transition-all hover:text-brand-red relative group ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-brand-gray-light text-brand-dark' : 'hover:bg-white/10 text-white'}`}>
                <Search size={20} />
              </button>
              <button className="bg-brand-red hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-brand-red/20 transition-all flex items-center gap-2">
                Solicitar Orçamento
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={28} className={isScrolled ? 'text-brand-dark' : 'text-white'} />
              ) : (
                <Menu size={28} className={isScrolled ? 'text-brand-dark' : 'text-white'} />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <motion.div 
          initial={false}
          animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="lg:hidden bg-white overflow-hidden shadow-2xl"
        >
          <ul className="py-6 px-6 space-y-6">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className="text-lg font-bold text-brand-dark hover:text-brand-blue flex items-center justify-between"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                  <ChevronDown size={16} />
                </a>
              </li>
            ))}
            <li className="pt-4">
              <button className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                Falar com Vendedor
              </button>
            </li>
          </ul>
        </motion.div>
      </header>
    </>
  );
};
