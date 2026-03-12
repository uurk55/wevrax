import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Rocket, RefreshCw, Building2, User } from 'lucide-react';

const serviceData: Record<string, any> = {
  'kurumsal': {
    title: 'Kurumsal Web Sitesi',
    icon: <Building2 size={40} className="text-cyan-500" />,
    description: 'Şirketinizin dijital dünyadaki en güçlü temsilcisi. Prestij, güven ve profesyonelliği bir araya getiren kurumsal çözümler.',
    features: [
      'Modern ve Profesyonel Tasarım',
      'Kurumsal Kimlik Entegrasyonu',
      'Hızlı ve Güvenli Altyapı',
      'SEO Uyumlu İçerik Yapısı',
      'Mobil Uyumlu (Responsive)',
      'Yönetim Paneli Desteği'
    ],
    img: 'https://picsum.photos/seed/corporate_detail/1200/800'
  },
  'portfolyo': {
    title: 'Kişisel Portfolyo',
    icon: <User size={40} className="text-cyan-500" />,
    description: 'Yeteneklerinizi, projelerinizi ve kariyerinizi global standartlarda sergileyin. Sizi rakiplerinizden ayıran kişisel dijital vitrin.',
    features: [
      'Kişiselleştirilmiş Tasarım',
      'Proje Galerisi ve Detayları',
      'CV ve Deneyim Bölümü',
      'İletişim ve Randevu Formu',
      'Sosyal Medya Entegrasyonu',
      'Yüksek Hızlı Performans'
    ],
    img: 'https://picsum.photos/seed/portfolio_detail/1200/800'
  },
  'landing-page': {
    title: 'Landing Page',
    icon: <Rocket size={40} className="text-cyan-500" />,
    description: 'Reklam trafiğinizi doğrudan satışa veya üyeliğe dönüştüren, dönüşüm oranı (conversion rate) odaklı tek sayfa çözümleri.',
    features: [
      'Dönüşüm Odaklı Arayüz (UI)',
      'A/B Testi Uyumluluğu',
      'Hızlı Yükleme Süreleri',
      'Net Call-to-Action (CTA) Alanları',
      'Mobil Cihaz Optimizasyonu',
      'Analitik İzleme Kurulumu'
    ],
    img: 'https://picsum.photos/seed/landing_detail/1200/800'
  },
  'modernizasyon': {
    title: 'Modernizasyon',
    icon: <RefreshCw size={40} className="text-cyan-500" />,
    description: 'Eski, yavaş ve güncelliğini yitirmiş web sitenizi en güncel teknolojilerle yeniden inşa ediyoruz. 2026 standartlarında performans.',
    features: [
      'Eski Altyapı Analizi',
      'Modern Tasarım Güncellemesi',
      'Teknolojik Stack Yenileme',
      'Veri Kaybı Olmadan Taşıma',
      'Hız ve Güvenlik Artışı',
      'SEO Skor İyileştirmesi'
    ],
    img: 'https://picsum.photos/seed/modern_detail/1200/800'
  }
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceData[id] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Hizmet Bulunamadı</h2>
          <Link to="/" className="text-cyan-500 hover:underline">Anasayfaya Dön</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-8 border border-white/5">
              {service.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              {service.description}
            </p>
            <Link to="/iletisim" className="inline-block px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all shadow-lg hover:scale-105">
              Hemen Başlayalım
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/5 shadow-2xl"
          >
            <img src={service.img} alt={service.title} className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Neler Sunuyoruz?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {service.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <CheckCircle2 size={20} className="text-cyan-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-slate-800/50 rounded-[2.5rem] border border-white/5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold mb-6">
              <ShieldCheck size={14} /> Güvenli & Hızlı
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Dijital Otoritenizi Bugün İnşa Edin</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Sektörünüzde fark yaratmak ve rakiplerinizin önüne geçmek için profesyonel bir dijital kimlik şart.
            </p>
            <Link to="/iletisim" className="text-cyan-500 font-bold flex items-center gap-2 group">
              Ücretsiz Analiz Talebi <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
