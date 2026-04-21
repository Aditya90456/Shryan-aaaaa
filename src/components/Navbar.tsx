import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden">
          <img 
            src="https://www.sheryians.com/images/logo.png" 
            alt="Sheryians" 
            className="w-full h-full object-contain"
            onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/s/100/100" }}
          />
        </div>
        <div className="flex flex-col">
          <span className="font-display text-lg font-bold leading-none tracking-tight">SHERYIANS</span>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">Coding School</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl backdrop-blur-md">
        {['Home', 'Courses', 'Bootcamp', 'Request Callback'].map((item, i) => (
          <button 
            key={i} 
            className={cn(
              "px-4 py-1.5 text-sm font-medium rounded-xl transition-all duration-200",
              item === 'Home' ? "bg-white text-black" : "text-gray-400 hover:text-white"
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <button className="px-6 py-2 bg-white/5 hover:bg-white text-white hover:text-black rounded-xl font-bold transition-all duration-300 border border-white/10 hover:border-white">
        Sign In
      </button>
    </nav>
  );
}
