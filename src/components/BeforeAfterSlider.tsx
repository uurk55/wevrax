import React, { useState, useEffect, useRef } from 'react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const onMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-[2.5rem] overflow-hidden cursor-ew-resize select-none shadow-[0_0_60px_rgba(6,182,212,0.15)] border border-white/5"
      onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
      onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
    >
      {/* Modern Image (Bottom) - Representing the new design */}
      <div className="absolute inset-0 w-full h-full bg-[#0d0d0d] flex items-center justify-center">
         <img src="https://picsum.photos/seed/modern_web_dark/1200/800" alt="Modern Tasarım" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
         <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="absolute top-8 right-8 bg-cyan-500/20 backdrop-blur-xl px-6 py-3 rounded-2xl border border-cyan-500/30 z-0 max-w-[240px] md:max-w-sm text-right">
        <span className="text-sm md:text-base font-display font-bold text-cyan-50 block mb-1">Modern & Otoriter</span>
        <span className="text-xs text-cyan-200/70 block">Cam efekti, koyu tema ve yüksek dönüşüm odaklı arayüz.</span>
      </div>

      {/* Old Image (Top, Clipped) - Representing the 2000s design */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden z-10"
        style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
      >
        <div className="absolute inset-0 w-full h-full bg-white flex items-center justify-center">
           <img src="https://picsum.photos/seed/old_web_white/1200/800" alt="Eski Tasarım" className="w-full h-full object-cover grayscale opacity-60" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute top-8 left-8 bg-black/70 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/10 max-w-[240px] md:max-w-sm">
          <span className="text-sm md:text-base font-display font-bold text-gray-300 block mb-1">2000'ler (Eski Nesil)</span>
          <span className="text-xs text-gray-400 block">Beyaz arka plan, karmaşık menüler ve amatör görünüm.</span>
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 z-20"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center justify-center border-4 border-[#0d0d0d]">
          <div className="flex gap-1.5">
            <div className="w-1 h-5 bg-cyan-500 rounded-full"></div>
            <div className="w-1 h-5 bg-cyan-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
