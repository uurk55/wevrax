import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, User, Rocket, RefreshCw, ChevronDown, Globe, Zap, Layout, Search, Headset, Smartphone, MapPin, ExternalLink } from 'lucide-react';

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2 });
      return controls.stop;
    }
  }, [isInView, count, value]);

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest));
  }, [rounded]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const services = [
  {
    id: 'kurumsal',
    title: 'Kurumsal',
    desc: 'Şirketinizin dijital dünyadaki en güçlü temsilcisi.',
    icon: <Building2 className="text-cyan-500" size={32} />,
    size: 'md',
    path: '/hizmet/kurumsal'
  },
  {
    id: 'portfolyo',
    title: 'Kişisel',
    desc: 'Yeteneklerinizi global standartlarda sergileyin.',
    icon: <User className="text-cyan-500" size={32} />,
    size: 'sm',
    path: '/hizmet/portfolyo'
  },
  {
    id: 'landing-page',
    title: 'Landing Page',
    desc: 'Yüksek dönüşümlü, satış odaklı tek sayfa çözümleri.',
    icon: <Rocket className="text-cyan-500" size={32} />,
    size: 'sm',
    path: '/hizmet/landing-page'
  },
  {
    id: 'modernizasyon',
    title: 'Modernizasyon',
    desc: 'Eski görünümünüzü modern bir yapıya kavuşturun.',
    icon: <RefreshCw className="text-cyan-500" size={32} />,
    size: 'md',
    path: '/hizmet/modernizasyon'
  }
];

const trustCards = [
  {
    title: "24 Saat Canlı Destek",
    desc: "İhtiyaç duyduğunuz her an bir tık uzağınızdayız.",
    icon: <Headset size={24} className="text-cyan-500" />,
    stat: null
  },
  {
    title: "%100 Mobil Uyum",
    desc: "Tüm cihazlarda kusursuz görünen, akıcı deneyimler.",
    icon: <Smartphone size={24} className="text-cyan-500" />,
    stat: { value: 100, suffix: "%" }
  },
  {
    title: "Hızlı Teslimat",
    desc: "İşletmenizi dijital dünyaya ışınlayan hızlı süreçler.",
    icon: <Zap size={24} className="text-cyan-500" />,
    stat: null
  },
  {
    title: "7/24 Teknik Erişim",
    desc: "Kesintisiz altyapı ve anlık teknik müdahale garantisi.",
    icon: <Globe size={24} className="text-cyan-500" />,
    stat: null
  }
];

const miniFaqs = [
  { q: "Web sitesi mülkiyeti kime ait?", a: "Tüm haklar ve yönetim tamamen size aittir. Kiralama değil, tapulu mülk sahibi olursunuz." },
  { q: "Domain ve Hosting ile ben mi uğraşacağım?", a: "Hayır, tüm teknik kurulum ve yönetim 'Anahtar Teslim' olarak bizim tarafımızdan halledilir." },
  { q: "Sitem ne kadar sürede yayına girer?", a: "İhtiyaçlarınıza göre genellikle 7 ile 14 iş günü içerisinde projenizi canlıya alıyoruz." }
];

export default function Home() {
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section - 85vh */}
      <section className="relative min-h-[85vh] flex items-center px-6 pt-20 overflow-hidden">
        {/* Background Glow for Hero Right */}
        <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/30 blur-[140px] rounded-full pointer-events-none animate-pulse" />
        
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:pr-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Dijital Otoritenizi <br />
              <span className="text-cyan-500 neon-text">Wevrax İle İnşa Edin.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Sadece bir web sitesi değil; hızlı, güvenli ve satış odaklı bir dijital ekosistem kuruyoruz.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/iletisim" className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-cyan-500/20 hover:scale-105 shimmer-button">
                Ücretsiz Web Analizi Al
              </Link>
              <Link to="/referanslar" className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all">
                Projeleri İncele
              </Link>
            </div>
          </motion.div>

          {/* Hero Right - Floating Mockups */}
          <div className="relative h-[650px] hidden lg:flex items-center justify-end lg:w-full">
            <div className="relative w-full max-w-[500px] flex items-center justify-center">
              {/* Phone Mockup */}
              <motion.div
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-[280px] h-[560px] bg-slate-900 rounded-[3.5rem] border-[12px] border-slate-800 shadow-[0_0_60px_rgba(6,182,212,0.2)] overflow-hidden"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-3xl z-20" />
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=800" 
                  alt="Modern Web Dashboard" 
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              </motion.div>

              {/* Card 1: Performance */}
              <motion.div
                animate={{ y: [0, 40, 0], x: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-16 -right-4 z-20 glass-card p-6 rounded-3xl border border-white/10 shadow-2xl w-56 backdrop-blur-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Zap size={20} className="text-emerald-500" />
                  </div>
                  <span className="text-sm font-bold text-white">Lighthouse</span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">100</div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
                  />
                </div>
              </motion.div>
  
              {/* Card 2: UI/UX */}
              <motion.div
                animate={{ y: [0, -50, 0], x: [0, -20, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 -left-12 z-20 glass-card p-6 rounded-3xl border border-white/10 shadow-2xl w-60 backdrop-blur-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <Layout size={20} className="text-cyan-500" />
                  </div>
                  <span className="text-sm font-bold text-white">Modern UI</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-full h-12 bg-white/5 rounded-xl border border-white/5" />
                  ))}
                </div>
              </motion.div>
  
              {/* Card 3: SEO */}
              <motion.div
                animate={{ y: [0, 35, 0], x: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-16 z-20 glass-card p-6 rounded-3xl border border-white/10 shadow-2xl w-52 backdrop-blur-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Search size={20} className="text-purple-500" />
                  </div>
                  <span className="text-sm font-bold text-white">SEO Aktif</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                    <div className="w-full h-2 bg-white/5 rounded-full" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500/50" />
                    <div className="w-full h-2 bg-white/5 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Cards Section - py-12 */}
      <section className="py-12 px-6 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-3xl border border-cyan-500/10 backdrop-blur-md bg-white/5 hover:-translate-y-2 transition-all duration-500 group hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  {card.stat ? (
                    <span className="text-cyan-500">
                      <Counter value={card.stat.value} suffix={card.stat.suffix} />
                    </span>
                  ) : null}
                  {card.title.replace('%100 ', '')}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Services Grid - py-24 */}
      <section id="services" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">Hizmetlerimiz</h2>
            <p className="text-slate-400">Dijital otoritenizi inşa etmek için sunduğumuz çözümler.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card p-8 rounded-[2.5rem] flex flex-col justify-between group ${
                  service.size === 'md' ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-8">{service.desc}</p>
                </div>
                <Link to={service.path} className="flex items-center gap-2 text-cyan-500 font-bold group/link">
                  Detayları Gör <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* References Preview - py-24 */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-4">Seçkin Projelerimiz</h2>
              <p className="text-slate-400">Dijital otoriteyi inşa ettiğimiz bazı çalışmalarımız.</p>
            </div>
            <Link to="/referanslar" className="text-cyan-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Tüm Referansları Gör <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Edu 3D Model Dünyası", cat: "Eğitim", url: "https://edu3dmodel.com", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800&h=600" },
              { title: "Kariyer Rotası", cat: "Portfolyo", url: "https://kariyerrotasi.com", img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=600" }
            ].map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="group">
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-4 border border-white/5 glass-card">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-80" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="px-5 py-2.5 bg-cyan-500 text-white text-sm font-bold rounded-full flex items-center gap-2 shadow-xl shadow-cyan-500/20">
                      Siteyi Ziyaret Et <ExternalLink size={16} />
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8">
                    <p className="text-cyan-500 text-[10px] font-bold uppercase tracking-widest mb-2">{p.cat}</p>
                    <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Mini FAQ Section - py-24 */}
      <section id="faq" className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">Sıkça Sorulanlar</h2>
            <p className="text-slate-400">Aklınıza takılan temel soruları yanıtladık.</p>
          </div>

          <div className="space-y-4">
            {miniFaqs.map((faq, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  {faq.q}
                </h3>
                <p className="text-slate-400 leading-relaxed pl-5 border-l border-white/5">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/sss" className="text-cyan-500 font-bold hover:underline">Tüm Soruları Gör</Link>
          </div>
        </div>
      </section>

      {/* CTA Section - py-24 */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-8">Dijital Otoritenizi Bugün İnşa Edin</h2>
          <p className="text-slate-400 mb-10 text-lg">Markanızı bir üst seviyeye taşımak için sabırsızlanıyoruz.</p>
          <Link to="/iletisim" className="inline-block px-12 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all shadow-xl hover:scale-105 shimmer-button">
            Hemen Başlayalım
          </Link>
        </div>
      </section>
    </div>
  );
}
