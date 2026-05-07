import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ShoppingCart, ChevronRight, Tag, Loader2 } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { supabase } from '../lib/supabase';
import { Product } from '../types';

export const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (!error && data && data.length > 0) {
        setDbProducts(data);
      } else {
        // Fallback to local constants if DB is empty or credentials not set
        setDbProducts(PRODUCTS);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return dbProducts.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm, dbProducts]);

  return (
    <section id="produtos" className="py-24 bg-brand-gray-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="section-subtitle">Nosso Mix</span>
            <h2 className="section-title">Explore nosso <span className="text-brand-blue">Catálogo Premium</span></h2>
            <p className="mt-4 text-brand-gray text-lg">
              Encontre tudo o que sua loja precisa em um só lugar. Qualidade certificada e as melhores marcas nacionais.
            </p>
          </div>
          
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray group-focus-within:text-brand-blue transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Buscar marcas ou produtos..." 
              className="w-full bg-white border border-brand-gray/20 rounded-full py-4 pl-12 pr-6 outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 no-scrollbar -mx-6 px-6">
          {CATEGORIES.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold text-sm transition-all border ${
                activeCategory === cat.id 
                ? 'bg-brand-blue border-brand-blue text-white shadow-lg shadow-brand-blue/20' 
                : 'bg-white border-brand-gray/10 text-brand-gray hover:border-brand-blue/50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-brand-gray/10 hover:border-brand-blue/30 hover:shadow-2xl transition-all"
              >
                <div className="relative aspect-square overflow-hidden bg-brand-gray-light">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {product.promo && (
                    <div className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest animate-pulse flex items-center gap-1">
                      <Tag size={12} />
                      Oferta
                    </div>
                  )}
                  <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button className="bg-white text-brand-blue p-3 rounded-full shadow-lg hover:bg-brand-blue hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-1">{product.brand}</div>
                  <h3 className="font-bold text-brand-dark text-lg group-hover:text-brand-blue transition-colors line-clamp-1">{product.name}</h3>
                  <p className="text-brand-gray text-xs mt-2 line-clamp-2 min-h-[2rem] leading-relaxed italic">{product.description}</p>
                  
                  <div className="mt-6 flex items-center justify-between border-t border-brand-gray/5 pt-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-brand-gray uppercase font-bold tracking-wider">Ref: #{product.id.padStart(4, '0')}</span>
                    </div>
                    <button className="bg-brand-gray-light text-brand-blue px-4 py-2 rounded-lg text-xs font-bold hover:bg-brand-blue hover:text-white transition-all">
                      Solicitar
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-brand-gray text-lg italic">Nenhum produto encontrado para sua busca.</p>
          </div>
        )}

        <div className="mt-20 text-center">
          <button className="bg-white border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-10 py-4 rounded-full font-bold transition-all shadow-md">
            Ver Todo o Catálogo em PDF
          </button>
        </div>
      </div>
    </section>
  );
};
