import { motion } from 'motion/react';
import { ChevronRight, ArrowDown, Package, Truck, Utensils } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background with Parallax effect simulation */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920" 
          alt="Distribution Center"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="glass-pill mb-6">Logística de Excelência no Brasil</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tighter">
              Distribuindo <span className="text-brand-red">Qualidade</span> para o seu negócio.
            </h1>
            <p className="text-lg md:text-xl text-brand-white/90 mb-10 leading-relaxed font-medium">
              Abastecemos supermercados, restaurantes e comércios de todo o Brasil com as melhores marcas do mercado e entrega expressa garantida.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-brand-red/30 transition-all flex items-center justify-center gap-2 group">
                Ver Catálogo Completo
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
                Falar no WhatsApp
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 flex items-center gap-12 text-white/70"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Truck size={24} className="text-brand-red" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider">Entrega 24h</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Package size={24} className="text-brand-red" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider">Apoio Comercial</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Utensils size={24} className="text-brand-red" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider">+5000 Produtos</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
      >
        <ArrowDown size={30} />
      </motion.div>
    </section>
  );
};
