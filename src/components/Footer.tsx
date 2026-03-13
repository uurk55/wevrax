import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
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
            <p className="text-slate-400 text-sm leading-relaxed">
              Wevrax ile dijital otoritenizi 2026 standartlarında inşa ediyoruz. Modern, hızlı ve dönüşüm odaklı web siteleri tasarlıyoruz.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/905304690295"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="mailto:iletisim@wevrax.com"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Hızlı Menü</h4>
            <ul className="space-y-4">
              {[
                { name: 'Anasayfa', path: '/' },
                { name: 'Hizmetler', path: '/#services' },
                { name: 'Referanslar', path: '/referanslar' },
                { name: 'Nasıl Çalışır?', path: '/nasil-calisir' },
                { name: 'SSS', path: '/sss' },
                { name: 'İletişim', path: '/iletisim' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Yasal</h4>
            <ul className="space-y-4">
              {[
                { name: 'Gizlilik Politikası', path: '/privacy' },
                { name: 'Kullanım Şartları', path: '/terms' },
                { name: 'KVKK Aydınlatma Metni', path: '/kvkk' },
                { name: 'Çerez Politikası', path: '/cookies' }
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin size={18} className="text-cyan-500 shrink-0" />
                <span>Esenyurt, İstanbul</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone size={18} className="text-cyan-500 shrink-0" />
                <span>+90 530 469 02 95</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={18} className="text-cyan-500 shrink-0" />
                <span>iletisim@wevrax.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © 2026 Wevrax. Tüm haklar saklıdır. Tüm dijital dokunuşlarda yanınızdayız.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <span>Bu site</span>
            <div className="w-5 h-5 rounded-full overflow-hidden border border-cyan-500/40 bg-cyan-500/10">
              <img src={logo} alt="Wevrax" className="w-full h-full object-cover" />
            </div>
            <span>Wevrax ile tasarlandı.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
