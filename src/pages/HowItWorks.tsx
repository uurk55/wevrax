import React from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, Code, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    id: 1,
    title: 'Analiz & Strateji',
    desc: 'Markanızı, rakiplerinizi ve hedef kitlenizi derinlemesine analiz ediyoruz. İhtiyaçlarınıza en uygun dijital yol haritasını çıkarıyoruz.',
    icon: <Search size={32} className="text-cyan-500" />,
    color: 'bg-cyan-500/10'
  },
  {
    id: 2,
    title: 'Kusursuz Tasarım',
    desc: 'Kullanıcı deneyimini (UX) ön planda tutarak, markanızın ruhunu yansıtan modern ve estetik arayüzler (UI) tasarlıyoruz.',
    icon: <PenTool size={32} className="text-cyan-500" />,
    color: 'bg-blue-500/10'
  },
  {
    id: 3,
    title: 'Geliştirme & Kodlama',
    desc: 'Tasarımları en güncel teknolojilerle, hız ve performans odaklı bir şekilde hayata geçiriyoruz. SEO uyumlu temiz kod yazıyoruz.',
    icon: <Code size={32} className="text-cyan-500" />,
    color: 'bg-indigo-500/10'
  },
  {
    id: 4,
    title: 'Test & Yayın',
    desc: 'Tüm cihazlarda ve tarayıcılarda testlerimizi tamamladıktan sonra projenizi yayına alıyoruz. Dijital otoriteniz artık hazır!',
    icon: <Rocket size={32} className="text-cyan-500" />,
    color: 'bg-purple-500/10'
  }
];

export default function HowItWorks() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Nasıl Çalışıyoruz?</h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Fikirlerinizi gerçeğe dönüştürürken izlediğimiz şeffaf ve profesyonel süreçlerimiz.
            </p>
          </motion.div>
        </header>

        <div className="space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 w-full">
                <div className={`w-20 h-20 rounded-3xl ${step.color} flex items-center justify-center mb-8 border border-white/5`}>
                  {step.icon}
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-display font-black text-white/10">0{step.id}</span>
                  <h2 className="text-4xl font-bold text-white">{step.title}</h2>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {step.desc}
                </p>
                <ul className="space-y-3">
                  {['Detaylı Analiz', 'Hızlı Geri Bildirim', 'Profesyonel Yaklaşım'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 size={18} className="text-cyan-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video glass-card rounded-[3rem] border border-white/5 overflow-hidden relative group">
                  <img 
                    src={`https://picsum.photos/seed/step${step.id}/800/600`} 
                    alt={step.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 glass-card rounded-[3rem] text-center border border-cyan-500/10"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Süreci Başlatmaya Hazır Mısınız?</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Markanız için en doğru stratejiyi belirlemek ve dijital dünyada fark yaratmak için bir adım atın.
          </p>
          <Link to="/iletisim" className="inline-block px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all shadow-xl hover:scale-105 shimmer-button">
            Ücretsiz Analiz Al <ArrowRight size={20} className="inline ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
