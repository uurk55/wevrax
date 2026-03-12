import React from 'react';
import LegalPage from '../components/LegalPage';
import { FileText } from 'lucide-react';

export default function Terms() {
  const content = [
    "Web sitemizi kullanarak, bu kullanım şartlarını kabul etmiş sayılırsınız.",
    "Web sitemizdeki tüm içerikler, tasarımlar ve logolar telif hakkı ile korunmaktadır.",
    "Web sitemizin kötüye kullanımı, yasal işlemlere tabi tutulabilir.",
    "Hizmetlerimizin kullanımıyla ilgili tüm sorumluluk kullanıcıya aittir."
  ];

  return <LegalPage title="Kullanım Şartları" icon={<FileText className="text-cyan-500" size={32} />} content={content} />;
}
