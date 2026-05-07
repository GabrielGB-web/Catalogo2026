/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Brands } from './components/Brands';
import { About } from './components/About';
import { Catalog } from './components/Catalog';
import { Differentials } from './components/Differentials';
import { Offers } from './components/Offers';
import { Representatives } from './components/Representatives';
import { Logistics } from './components/Logistics';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Loader } from './components/Loader';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { supabase } from './lib/supabase';

export default function App() {
  const [isAdminView, setIsAdminView] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if we start on the admin path via hash
    if (window.location.hash === '#admin') {
      setIsAdminView(true);
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const toggleAdmin = () => {
    setIsAdminView(!isAdminView);
    window.location.hash = !isAdminView ? 'admin' : '';
  };

  if (isAdminView) {
    if (!user) {
      return <AdminLogin onLogin={setUser} />;
    }
    return <AdminDashboard onLogout={() => supabase.auth.signOut()} />;
  }

  return (
    <div className="min-h-screen">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <About />
        <Catalog />
        <Differentials />
        <Offers />
        <Representatives />
        <Logistics />
        <Testimonials />
        <ContactForm />
      </main>
      <footer className="bg-brand-dark py-4 border-t border-white/5 text-center">
        <button 
          onClick={toggleAdmin}
          className="text-[10px] uppercase font-black tracking-widest text-brand-white/20 hover:text-white transition-all"
        >
          Acesso Restrito Administrador
        </button>
      </footer>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

