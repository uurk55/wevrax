import React from 'react';
import { motion } from 'motion/react';
import { Shield, FileText, Lock, Eye } from 'lucide-react';

interface LegalPageProps {
  title: string;
  icon: React.ReactNode;
  content: string[];
}

export default function LegalPage({ title, icon, content }: LegalPageProps) {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-6 border border-cyan-500/20">
              {icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{title}</h1>
            <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
          </motion.div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-10 md:p-16 rounded-[3rem] border border-white/5 space-y-8"
        >
          {content.map((paragraph, i) => (
            <p key={i} className="text-slate-400 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
          
          <div className="pt-12 border-t border-white/5 text-slate-500 text-sm italic">
            Son güncelleme: 2 Mart 2026
          </div>
        </motion.div>
      </div>
    </div>
  );
}
