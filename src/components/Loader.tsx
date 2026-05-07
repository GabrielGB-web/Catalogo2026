import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-brand-blue flex flex-col items-center justify-center p-6"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex flex-col items-center"
      >
        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-2xl">
          <span className="text-brand-blue font-black text-4xl italic">A</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-black text-3xl leading-none tracking-tighter text-white">ALIANÇA</span>
          <span className="text-xs font-bold tracking-[0.3em] leading-none text-brand-white/60 mt-1">DISTRIBUIDORA</span>
        </div>
        
        <div className="mt-12 w-48 bg-white/10 h-1.5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="bg-brand-red h-full"
          ></motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
