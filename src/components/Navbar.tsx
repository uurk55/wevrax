import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Monitor, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const services = [
  { name: 'Kurumsal Web Sitesi', path: '/hizmet/kurumsal' },
  { name: 'Kişisel Portfolyo', path: '/hizmet/portfolyo' },
  { name: 'Landing Page', path: '/hizmet/landing-page' },
  { name: 'Modernizasyon', path: '/hizmet/modernizasyon' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 z-50 group">
          <div className="w-10 h-10 rounded-xl bg-cyan-500 overflow-hidden shadow-lg shadow-cyan-500/20 group-hover:rotate-12 transition-transform duration-500">
            <img 
              src={logo}
              alt="Wevrax Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-display font-bold text-white tracking-tight">
            WEVRAX<span className="text-cyan-500">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Anasayfa</Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link to="/#services" className="flex items-center gap-1 text-sm font-bold text-slate-300 hover:text-white transition-colors">
              Hizmetler <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </Link>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/5 rounded-2xl p-2 shadow-2xl"
                >
                  {services.map((service) => (
                    <Link 
                      key={service.path} 
                      to={service.path}
                      className="block px-4 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/referanslar" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Referanslar</Link>
          <Link to="/nasil-calisir" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Nasıl Çalışır?</Link>
          <Link to="/sss" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">SSS</Link>
          <Link to="/iletisim" className="text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-2.5 rounded-xl transition-all hover:scale-105 shimmer-button">
            İletişim
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full bg-[#0a0a0a] flex flex-col items-center justify-center gap-8 pt-20 overflow-hidden"
          >
            <Link to="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">Anasayfa</Link>
            <div className="flex flex-col items-center gap-4">
              <Link to="/#services" className="text-sm font-bold text-slate-500 uppercase tracking-widest">Hizmetler</Link>
              {services.map((service) => (
                <Link key={service.path} to={service.path} className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">{service.name}</Link>
              ))}
            </div>
            <Link to="/referanslar" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">Referanslar</Link>
            <Link to="/nasil-calisir" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">Nasıl Çalışır?</Link>
            <Link to="/sss" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">SSS</Link>
            <Link to="/iletisim" className="text-2xl font-bold text-cyan-400 mt-4 border border-cyan-500/30 px-10 py-4 rounded-xl">İletişim</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
