import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
  </svg>
);

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
                <WhatsAppIcon className="w-4 h-4" />
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
                <a 
                  href="mailto:iletisim@wevrax.com" 
                  className="flex items-center gap-3 text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  <Mail size={18} className="text-cyan-500 shrink-0" />
                  <span>iletisim@wevrax.com</span>
                </a>
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
