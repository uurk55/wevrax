import React from 'react';
import LegalPage from '../components/LegalPage';
import { Eye } from 'lucide-react';

export default function PrivacyPolicy() {
  const content = [
    "Gizliliğiniz bizim için önemlidir. Bu politika, web sitemizi kullandığınızda topladığımız bilgileri nasıl kullandığımızı açıklar.",
    "Kişisel verileriniz, yalnızca size daha iyi hizmet verebilmek ve taleplerinizi karşılayabilmek amacıyla toplanır.",
    "Toplanan veriler, yasal zorunluluklar dışında üçüncü şahıslarla paylaşılmaz.",
    "Veri güvenliğiniz için en güncel teknolojileri ve güvenlik protokollerini kullanıyoruz."
  ];

  return <LegalPage title="Gizlilik Politikası" icon={<Eye className="text-cyan-500" size={32} />} content={content} />;
}
