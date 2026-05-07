import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Package, Plus, Trash2, Edit3, Save, X, LogOut, Image, Tag, Briefcase } from 'lucide-react';
import { Product, Brand, Category } from '../../types';

export const AdminDashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [activeTab, setActiveTab] = useState<'products' | 'brands' | 'categories'>('products');
  const [products, setProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const [p, b, c] = await Promise.all([
      supabase.from('products').select('*').order('created_at', { ascending: false }),
      supabase.from('brands').select('*'),
      supabase.from('categories').select('*')
    ]);

    if (p.data) setProducts(p.data);
    if (b.data) setBrands(b.data);
    if (c.data) setCategories(c.data);
    setLoading(false);
  };

  const handleSaveProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      brand: formData.get('brand') as string,
      category: formData.get('category') as string,
      image: formData.get('image') as string,
      description: formData.get('description') as string,
      price: parseFloat(formData.get('price') as string),
      promo: formData.get('promo') === 'on'
    };

    if (editingItem) {
      await supabase.from('products').update(data).eq('id', editingItem.id);
    } else {
      await supabase.from('products').insert([data]);
    }
    
    setIsModalOpen(false);
    setEditingItem(null);
    fetchData();
  };

  const handleDelete = async (id: string, table: string) => {
    if (confirm('Tem certeza que deseja excluir?')) {
      await supabase.from(table).delete().eq('id', id);
      fetchData();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-dark text-white p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center font-bold italic">A</div>
          <span className="font-black tracking-tight">PAINEL ADM</span>
        </div>

        <nav className="flex-1 space-y-2">
          <button 
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'products' ? 'bg-brand-blue' : 'hover:bg-white/5'}`}
          >
            <Package size={20} /> Produtos
          </button>
          <button 
            onClick={() => setActiveTab('brands')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'brands' ? 'bg-brand-blue' : 'hover:bg-white/5'}`}
          >
            <Briefcase size={20} /> Marcas
          </button>
          <button 
            onClick={() => setActiveTab('categories')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'categories' ? 'bg-brand-blue' : 'hover:bg-white/5'}`}
          >
            <Tag size={20} /> Categorias
          </button>
        </nav>

        <button 
          onClick={onLogout}
          className="mt-auto flex items-center gap-3 px-4 py-3 text-brand-white/50 hover:text-white transition-all"
        >
          <LogOut size={20} /> Sair
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 capitalize">Gerenciar {activeTab === 'products' ? 'Produtos' : activeTab === 'brands' ? 'Marcas' : 'Categorias'}</h1>
            <p className="text-gray-500 text-sm">Controle total sobre o catálogo do site.</p>
          </div>
          <button 
            onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
            className="bg-brand-blue text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-brand-blue/20"
          >
            <Plus size={20} /> Adicionar Novo
          </button>
        </header>

        {loading ? (
          <div className="grid grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-48 bg-gray-200 rounded-3xl"></div>)}
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 text-xs font-black uppercase text-gray-400 tracking-widest">Informações</th>
                  <th className="px-6 py-4 text-xs font-black uppercase text-gray-400 tracking-widest">Categoria/Marca</th>
                  <th className="px-6 py-4 text-xs font-black uppercase text-gray-400 tracking-widest">Status</th>
                  <th className="px-6 py-4 text-xs font-black uppercase text-gray-400 tracking-widest text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {activeTab === 'products' && products.map(p => (
                  <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img src={p.image} className="w-12 h-12 rounded-lg object-cover" />
                        <div>
                          <div className="font-bold text-gray-900">{p.name}</div>
                          <div className="text-xs text-gray-500">ID: #{p.id.slice(0, 8)}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 capitalize text-sm text-gray-600">
                      {p.category} | {p.brand}
                    </td>
                    <td className="px-6 py-4">
                      {p.promo ? (
                        <span className="bg-red-50 text-brand-red px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Oferta</span>
                      ) : (
                        <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Normal</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => { setEditingItem(p); setIsModalOpen(true); }} className="p-2 text-brand-blue hover:bg-brand-blue/5 rounded-lg transition-all"><Edit3 size={18} /></button>
                        <button onClick={() => handleDelete(p.id, 'products')} className="p-2 text-brand-red hover:bg-brand-red/5 rounded-lg transition-all"><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* Modal CRUD */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-brand-dark/20 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden">
            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="text-xl font-bold text-gray-900">{editingItem ? 'Editar' : 'Adicionar'} Produto</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-200 rounded-full transition-all"><X size={20} /></button>
            </div>
            <form onSubmit={handleSaveProduct} className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Nome do Produto</label>
                  <input name="name" defaultValue={editingItem?.name} required className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-brand-blue/20 outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Marca</label>
                  <input name="brand" defaultValue={editingItem?.brand} required className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-brand-blue/20 outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Categoria</label>
                  <select name="category" defaultValue={editingItem?.category} className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 outline-none">
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Preço Sugerido (R$)</label>
                  <input name="price" type="number" step="0.01" defaultValue={editingItem?.price} className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 outline-none" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">URL da Imagem</label>
                <div className="flex gap-4">
                  <input name="image" defaultValue={editingItem?.image} required className="flex-1 bg-gray-50 border border-gray-100 rounded-xl p-3 outline-none" placeholder="https://..." />
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400"><Image size={24} /></div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Descrição Curta</label>
                <textarea name="description" defaultValue={editingItem?.description} rows={3} className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 outline-none resize-none"></textarea>
              </div>

              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" name="promo" defaultChecked={editingItem?.promo} className="w-5 h-5 rounded border-gray-300 text-brand-red focus:ring-brand-red" />
                <span className="text-sm font-bold text-gray-600 group-hover:text-brand-red transition-all">Produto em Oferta Especial</span>
              </label>

              <button className="w-full bg-brand-blue text-white py-4 rounded-2xl font-black shadow-xl shadow-brand-blue/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                <Save size={20} /> Salvar Alterações
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
