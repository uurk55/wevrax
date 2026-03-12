import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Edu 3D Model Dünyası',
    category: 'Eğitim / Teknoloji',
    desc: '3D Modelleme ve Eğitim Platformu. edu3dmodel.com için geliştirilen interaktif öğrenme arayüzü.',
    result: 'Öğrenci katılımında %150 artış.',
    img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800&h=600',
    color: 'from-cyan-500/20',
    url: 'https://edu3dmodel.com'
  },
  {
    id: 2,
    title: 'Kariyer Rotası',
    category: 'Kariyer / Portfolyo',
    desc: 'Dijital Kariyer Rehberi ve Portfolyo. kariyerrotasi.com için tasarlanan modern iş arama ve profil platformu.',
    result: 'İş başvurusu dönüşümlerinde %80 iyileşme.',
    img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=600',
    color: 'from-orange-500/20',
    url: 'https://kariyerrotasi.com'
  }
];

export default function References() {
  const [filter, setFilter] = React.useState('Tümü');
  const categories = ['Tümü', 'Eğitim', 'Kariyer', 'Portfolyo'];

  const filteredProjects = filter === 'Tümü' 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Referanslarımız</h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Dijital dünyada otorite kurduğumuz, başarı hikayesine dönüştürdüğümüz seçkin projeler.
            </p>
          </motion.div>
        </header>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                filter === cat 
                  ? 'bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/20' 
                  : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {filteredProjects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative block"
            >
              <div className="glass-card rounded-[3rem] overflow-hidden border border-white/5 h-full flex flex-col hover:border-cyan-500/30 transition-all duration-500">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="px-6 py-3 bg-cyan-500 text-white font-bold rounded-full flex items-center gap-2 shadow-xl shadow-cyan-500/20">
                      Siteyi Ziyaret Et <ExternalLink size={18} />
                    </div>
                  </div>
                </div>
                
                <div className="p-10 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-cyan-500 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
                      <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    {project.desc}
                  </p>
                  
                  <div className="mt-auto pt-8 border-t border-white/5">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Başarı Metriği</p>
                    <p className="text-lg text-cyan-400/90 font-medium italic">"{project.result}"</p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}

          {/* Coming Soon Card - Minimalist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="glass-card rounded-[3rem] overflow-hidden border border-dashed border-white/10 h-full flex flex-col items-center justify-center p-12 text-center bg-white/[0.01] min-h-[400px]">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:border-cyan-500/20 transition-colors">
                <Rocket size={24} className="text-slate-600 group-hover:text-cyan-500/50 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-400 mb-2">Çok Yakında</h3>
              <p className="text-slate-600 text-sm max-w-[200px]">Yeni Başarı Hikayeleri Yolda...</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 glass-card rounded-[3rem] text-center border border-cyan-500/10"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Sizin Başarı Hikayeniz Burada Başlasın</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Dijital otoritenizi inşa etmek ve markanızı bir üst seviyeye taşımak için hazırız.
          </p>
          <Link to="/iletisim" className="inline-block px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all shadow-xl hover:scale-105 shimmer-button">
            Projenizi Konuşalım
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
