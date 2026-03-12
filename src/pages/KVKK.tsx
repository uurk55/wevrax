import React from 'react';
import LegalPage from '../components/LegalPage';
import { Shield } from 'lucide-react';

export default function KVKK() {
  const content = [
    "6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, kişisel verilerinizin işlenmesi ve korunması hakkındaki aydınlatma metnidir.",
    "Verileriniz, yalnızca açık rızanız doğrultusunda ve kanuni sınırlar içerisinde işlenir.",
    "Veri sahibi olarak, verilerinizin silinmesini, düzeltilmesini veya işlenip işlenmediğini öğrenme hakkına sahipsiniz.",
    "KVKK uyumlu bir dijital deneyim sunmak için tüm yasal süreçleri titizlikle takip ediyoruz."
  ];

  return <LegalPage title="KVKK Aydınlatma Metni" icon={<Shield className="text-cyan-500" size={32} />} content={content} />;
}
