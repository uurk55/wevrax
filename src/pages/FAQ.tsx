import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Cpu, Settings, CreditCard, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqCategories = [
  {
    id: 'technical',
    title: 'Teknik Sorular',
    icon: <Cpu size={20} className="text-cyan-500" />,
    questions: [
      { q: "Web sitesi mülkiyeti kime ait?", a: "Tüm haklar ve yönetim tamamen size aittir. Kiralama değil, tapulu mülk sahibi olursunuz." },
      { q: "Domain ve Hosting ile ben mi uğraşacağım?", a: "Hayır. Domain alımı, hosting kurulumu ve tüm teknik yapılandırma tarafımızdan yönetilir. Siz hiçbir şeyle uğraşmazsınız." },
      { q: "Mevcut sitem varsa modernize edebilir misiniz?", a: "Evet, mevcut sitenizi günümüz standartlarına taşıyabiliyoruz. Hız, tasarım ve mobil uyum konularında tam dönüşüm sağlıyoruz." },
      { q: "Web sitem Google'da ne zaman görünür?", a: "Siteyi yayına aldıktan sonra temel SEO ayarlarını ve Search Console kurulumunu yapıyoruz. Organik arama sonuçlarında görünürlük; sektör, rekabet ve içerik sıklığına göre birkaç hafta içinde kademeli olarak artar." },
      { q: "Sitem mobilde yavaş açılır mı?", a: "Proje başlangıcından itibaren performans odaklı ilerliyoruz. Görselleri optimize ediyor, gereksiz kod şişkinliğinden kaçınıyor ve modern altyapılar kullanıyoruz. Bu sayede özellikle mobilde hızlı ve akıcı bir deneyim hedefliyoruz." }
    ]
  },
  {
    id: 'process',
    title: 'Süreç ve İletişim',
    icon: <Settings size={20} className="text-cyan-500" />,
    questions: [
      { q: "Site içeriklerini ben mi hazırlamalıyım?", a: "Evet. Metin ve görselleri siz hazırlıyorsunuz; biz yapıyı ve yönlendirmeyi sunuyoruz." },
      { q: "Sitem ne kadar sürede yayına girer?", a: "Proje başlangıcından itibaren 10 iş günü içinde siteniz yayına alınır." },
      { q: "Teslim sonrası destek var mı?", a: "Evet. Teslim sonrası 30 gün ücretsiz teknik destek sunuyoruz. Uzun vadeli bakım paketlerimiz de mevcuttur." },
      { q: "Çalışma süreciniz nasıl ilerliyor?", a: "Önce ihtiyaçlarınızı dinleyip kapsamı netleştiriyoruz. Ardından tasarım taslağı, geliştirme ve test aşamalarını şeffaf bir şekilde sizinle paylaşarak ilerliyoruz. Her kritik aşamada onayınızı alıyoruz." },
      { q: "Revizyon hakkım var mı?", a: "Evet. Proje sürecinde tasarım ve içerik yerleşimi için belirli sayıda revizyon hakkınız bulunur. Amacımız, markanızı doğru yansıtan sonuca birlikte ulaşmak." }
    ]
  },
  {
    id: 'pricing',
    title: 'Fiyatlandırma ve Ödeme',
    icon: <CreditCard size={20} className="text-cyan-500" />,
    questions: [
      { q: "Fiyatlar ne kadar?", a: "Her proje ihtiyaca göre şekillendiğinden fiyatlarımız proje bazlı belirlenmektedir. Ücretsiz analiz görüşmemizde size net bir teklif sunuyoruz." },
      { q: "Ödeme yapısı nasıl oluyor?", a: "Genellikle proje başlangıcında kapora, teslim öncesinde ise kalan tutar şeklinde çalışıyoruz. Detaylı ödeme planını teklif aşamasında şeffaf şekilde paylaşıyoruz." },
      { q: "Sonradan gizli ek ücret çıkar mı?", a: "Hazırladığımız teklif, kapsamı net bir şekilde içerir. Siz ekstra bir talepte bulunmadığınız sürece sonradan sürpriz veya gizli ek ücret çıkarmıyoruz." }
    ]
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('technical');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Sıkça Sorulan Sorular</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Aklınıza takılan tüm soruların yanıtlarını burada bulabilirsiniz.
            </p>
          </motion.div>
        </header>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(null);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                activeCategory === cat.id 
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/20' 
                  : 'bg-white/5 text-slate-400 hover:bg-white/10'
              }`}
            >
              {cat.icon}
              {cat.title}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-4"
            >
              {faqCategories.find(c => c.id === activeCategory)?.questions.map((faq, i) => (
                <div 
                  key={i} 
                  className={`glass-card rounded-2xl border transition-all duration-300 ${
                    openIndex === i ? 'border-cyan-500/30' : 'border-white/5'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                    <span className={`text-lg font-bold transition-colors ${openIndex === i ? 'text-cyan-400' : 'text-white'}`}>
                      {faq.q}
                    </span>
                    <ChevronDown 
                      className={`text-slate-500 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-cyan-500' : ''}`} 
                      size={20} 
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-20 p-12 glass-card rounded-[3rem] text-center border border-white/5">
          <HelpCircle className="text-cyan-500 mx-auto mb-6" size={48} />
          <h2 className="text-2xl font-bold text-white mb-4">Başka bir sorunuz mu var?</h2>
          <p className="text-slate-400 mb-8">
            Aradığınız cevabı bulamadıysanız bize her zaman ulaşabilirsiniz.
          </p>
          <Link to="/iletisim" className="inline-block px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all shadow-xl hover:scale-105 shimmer-button">
            Bizimle İletişime Geçin
          </Link>
        </div>
      </div>
    </div>
  );
}
