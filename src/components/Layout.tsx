import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import { MessageCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f8fafc] font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      {/* Floating Background Shapes */}
      <motion.div
        animate={{ 
          y: [0, -40, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-[15%] left-[10%] w-96 h-96 bg-blue-600/5 rounded-[40%] blur-[80px] pointer-events-none z-0"
      />
      <motion.div
        animate={{ 
          y: [0, 60, 0],
          rotate: [0, -15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="fixed bottom-[20%] right-[15%] w-[500px] h-[500px] bg-cyan-600/5 rounded-[30%] blur-[100px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="fixed top-[40%] right-[30%] w-64 h-64 bg-indigo-600/5 rounded-full blur-[70px] pointer-events-none z-0"
      />

      {/* Mouse Tracking Background Glow */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.07), transparent 40%)`
        }}
      />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/905304690295" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full pulse-whatsapp flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        aria-label="WhatsApp İletişim"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>

      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
