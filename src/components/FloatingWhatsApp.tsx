import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/5511999998888"
      target="_blank"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      drag
      dragConstraints={{ left: -100, right: 0, top: -500, bottom: 0 }}
      className="fixed bottom-6 right-6 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
    >
      <div className="absolute -top-12 right-0 bg-white text-brand-dark px-4 py-2 rounded-xl border border-brand-gray/10 shadow-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco agora! 🚀
      </div>
      <MessageCircle size={32} />
    </motion.a>
  );
};
