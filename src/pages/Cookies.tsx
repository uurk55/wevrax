import React from 'react';
import LegalPage from '../components/LegalPage';
import { Lock } from 'lucide-react';

export default function Cookies() {
  const content = [
    "Web sitemizde, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek için çerezler kullanılmaktadır.",
    "Çerezler, tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır.",
    "Tarayıcı ayarlarınızdan çerez kullanımını kısıtlayabilir veya tamamen engelleyebilirsiniz.",
    "Çerezlerin engellenmesi, sitemizdeki bazı özelliklerin düzgün çalışmamasına neden olabilir."
  ];

  return <LegalPage title="Çerez Politikası" icon={<Lock className="text-cyan-500" size={32} />} content={content} />;
}
