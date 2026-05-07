import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { KeyRound, Mail, AlertCircle, Loader2 } from 'lucide-react';

export const AdminLogin = ({ onLogin }: { onLogin: (user: any) => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError('Credenciais inválidas ou erro no servidor.');
      setLoading(false);
    } else {
      onLogin(data.user);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center p-6 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/20 via-brand-dark to-brand-dark">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl rotate-3">
            <span className="text-white font-black text-3xl italic">A</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tighter">ACESSO <span className="text-brand-blue">RESTRITO</span></h1>
          <p className="text-brand-white/40 text-sm mt-2 italic">Gerenciamento Aliança Distribuidora</p>
        </div>

        <form onSubmit={handleLogin} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl space-y-6">
          {error && (
            <div className="bg-brand-red/10 border border-brand-red/20 p-4 rounded-xl flex items-center gap-3 text-brand-red text-sm font-bold">
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-brand-white/40 tracking-widest ml-1">E-mail Administrativo</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-white/20" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@alianca.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 text-white outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-brand-white/40 tracking-widest ml-1">Senha de Acesso</label>
              <div className="relative">
                <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-white/20" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pl-12 text-white outline-none focus:ring-2 focus:ring-brand-blue transition-all"
                  required
                />
              </div>
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-brand-blue hover:bg-blue-600 disabled:bg-brand-blue/50 text-white py-5 rounded-2xl font-black shadow-xl shadow-brand-blue/20 transition-all flex items-center justify-center gap-3 group"
          >
            {loading ? <Loader2 className="animate-spin" /> : 'Entrar no Painel'}
          </button>
        </form>

        <p className="text-center mt-8 text-brand-white/20 text-[10px] uppercase font-black tracking-widest">
          Sessão monitorada por segurança corporativa.
        </p>
      </div>
    </div>
  );
};
