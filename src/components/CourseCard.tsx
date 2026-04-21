import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { cn } from '../lib/utils';

export interface CourseCardProps {
  title: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  image: string;
  tags: string[];
  isLive?: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({ title, price, oldPrice, discount, image, tags, isLive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#0D0D0D] border border-white/5 rounded-[2rem] overflow-hidden hover:border-brand/30 transition-all duration-500 shadow-2xl"
    >
      {/* Browser Bar Decoration */}
      <div className="flex gap-1.5 p-4 border-b border-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/30 group-hover:bg-red-500 transition-colors" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 group-hover:bg-yellow-500 transition-colors" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/30 group-hover:bg-green-500 transition-colors" />
      </div>

      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-60" />
        
        {isLive && (
          <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-black uppercase px-2 py-1 rounded flex items-center gap-1.5 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            LIVE
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
             <Play className="text-white fill-white ml-1" size={24} />
           </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 space-y-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider group-hover:text-white transition-colors">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold font-display leading-tight group-hover:text-brand transition-colors">
          {title}
        </h3>

        <div className="flex items-end justify-between pt-4 border-t border-white/5">
          <div className="space-y-1">
            <p className="text-xs text-gray-500 font-medium">Price</p>
            <div className="flex items-center gap-2">
               <span className="text-2xl font-black text-white">{price}</span>
               {oldPrice && <span className="text-sm text-gray-600 line-through">{oldPrice}</span>}
            </div>
          </div>
          {discount && (
            <div className="bg-brand/10 text-brand text-[10px] font-black px-2 py-1 rounded border border-brand/20">
              {discount} OFF
            </div>
          )}
        </div>

        <button className="w-full py-4 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white transition-all duration-300 rounded-2xl font-black flex items-center justify-center gap-2 group/btn">
          Check Course
          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
