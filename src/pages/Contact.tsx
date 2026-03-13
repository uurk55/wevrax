import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, ArrowRight, ArrowLeft, Globe, Target, Rocket, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xkoqbddd', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          service: '',
          budget: '',
          message: '',
        });
      } else {
        setSubmitError('Şu anda gönderilemiyor, lütfen biraz sonra tekrar deneyin.');
      }
    } catch {
      setSubmitError('Şu anda gönderilemiyor, lütfen internet bağlantınızı kontrol edin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24 px-6 flex items-center justify-center min-h-[80vh]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full glass-card p-12 rounded-[3rem] text-center border border-cyan-500/20"
        >
          <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-cyan-500" size={40} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Analiz Talebiniz Alındı</h2>
          <p className="text-slate-400 mb-8">
            Dijital otorite uzmanlarımız markanızı incelemeye başladı. 24 saat içinde sizinle iletişime geçeceğiz.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-cyan-500 font-bold hover:underline"
          >
            Yeni bir talep oluştur
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                Dijital Otoritenizi <br />
                <span className="text-cyan-500 neon-text">Birlikte Kuralım</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-12">
                Sıradan bir web sitesi değil, markanızın dijital dünyadaki kalesi için ilk adımı atın. 3 adımda markanızı analiz edelim.
              </p>

              <div className="space-y-8 mb-12">
                {[
                  { icon: <Globe className="text-cyan-500" />, title: "Global Standartlar", desc: "Dünya çapında kabul görmüş tasarım ve performans kriterleri." },
                  { icon: <Target className="text-cyan-500" />, title: "Hedef Odaklı", desc: "Sadece görsel değil, sonuç odaklı stratejik yaklaşımlar." },
                  { icon: <Rocket className="text-cyan-500" />, title: "Hızlı Teslimat", desc: "Kaliteden ödün vermeden, belirlenen takvime sadık süreçler." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="text-cyan-500" size={20} />
                  <span className="text-white font-bold text-sm">Verileriniz Güvende</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">Paylaştığınız tüm bilgiler gizlilik politikamız kapsamında korunmaktadır ve sadece analiz amacıyla kullanılacaktır.</p>
              </div>

            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 relative z-10"
            >
              {/* Progress Bar */}
              <div className="flex gap-2 mb-12">
                {[1, 2, 3].map((s) => (
                  <div 
                    key={s} 
                    className={`h-1.5 flex-grow rounded-full transition-all duration-500 ${
                      s <= step ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'bg-white/5'
                    }`} 
                  />
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold text-white mb-8">Temel Bilgiler</h3>
                      <div>
                        <label className="block text-sm font-bold text-slate-400 mb-2">Adınız Soyadınız</label>
                        <input 
                          type="text" 
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan-500 outline-none transition-all"
                          placeholder="Örn: Ahmet Yılmaz"
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-400 mb-2">E-posta Adresiniz</label>
                        <input 
                          type="email" 
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan-500 outline-none transition-all"
                          placeholder="iletisim@wevrax.com"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <button 
                        type="button"
                        onClick={handleNext}
                        className="w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
                      >
                        Sonraki Adım <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold text-white mb-8">Proje Detayları</h3>
                      <div>
                        <label className="block text-sm font-bold text-slate-400 mb-2">Hangi Hizmetle İlgileniyorsunuz?</label>
                        <select 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan-500 outline-none transition-all appearance-none"
                          value={formData.service}
                          onChange={e => setFormData({...formData, service: e.target.value})}
                        >
                          <option value="" className="bg-[#0a0a0a]">Seçiniz</option>
                          <option value="kurumsal" className="bg-[#0a0a0a]">Kurumsal Web Sitesi</option>
                          <option value="portfolyo" className="bg-[#0a0a0a]">Kişisel Portfolyo</option>
                          <option value="landing" className="bg-[#0a0a0a]">Landing Page</option>
                          <option value="modernizasyon" className="bg-[#0a0a0a]">Modernizasyon</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-400 mb-2">Tahmini Bütçe Aralığı</label>
                        <div className="grid grid-cols-2 gap-4">
                          {['10k - 30k', '30k - 60k', '60k - 100k', '100k+'].map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setFormData({...formData, budget: b})}
                              className={`py-3 rounded-xl border transition-all text-sm font-bold ${
                                formData.budget === b 
                                  ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' 
                                  : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/30'
                              }`}
                            >
                              {b} ₺
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button 
                          type="button"
                          onClick={handleBack}
                          className="w-1/3 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                        >
                          <ArrowLeft size={20} /> Geri
                        </button>
                        <button 
                          type="button"
                          onClick={handleNext}
                          className="w-2/3 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
                        >
                          Sonraki Adım <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold text-white mb-8">Son Adım</h3>
                      <div>
                        <label className="block text-sm font-bold text-slate-400 mb-2">Eklemek İstediğiniz Notlar</label>
                        <textarea 
                          rows={4}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan-500 outline-none transition-all resize-none"
                          placeholder="Projeniz hakkında kısa bir özet..."
                          value={formData.message}
                          onChange={e => setFormData({...formData, message: e.target.value})}
                        />
                      </div>
                      <div className="flex gap-4">
                        <button 
                          type="button"
                          onClick={handleBack}
                          className="w-1/3 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                        >
                          <ArrowLeft size={20} /> Geri
                        </button>
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-2/3 py-5 bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-800 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group shimmer-button"
                        >
                          {isSubmitting ? 'Gönderiliyor...' : 'Analizi Gönder'}
                          <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                      </div>
                      {submitError && (
                        <p className="text-red-400 text-sm mt-4 text-center">{submitError}</p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
