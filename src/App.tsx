/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Users, Briefcase, ChevronRight, Play } from 'lucide-react';
import Navbar from './components/Navbar';
import { CourseCard } from './components/CourseCard';
import { cn } from './lib/utils';

const courses = [
  {
    title: "3.0 Job Ready AI Powered Cohort",
    price: "Rs.6999",
    oldPrice: "Rs.14999",
    discount: "53%",
    image: "https://picsum.photos/seed/coding1/600/400",
    tags: ["Product Building", "Community Access", "Gamified Learning"],
    isLive: true
  },
  {
    title: "Data Science and Analytics with GenAI",
    price: "Rs.6999",
    oldPrice: "Rs.14991",
    discount: "53%",
    image: "https://picsum.photos/seed/coding2/600/400",
    tags: ["Machine Learning", "Deep Learning", "GenAI"],
    isLive: false
  },
  {
    title: "2.0 Job Ready AI Powered Cohort",
    price: "Rs.5999",
    oldPrice: "Rs.11998",
    discount: "50%",
    image: "https://picsum.photos/seed/coding3/600/400",
    tags: ["Job Ready", "MERN Stack", "DSA With JS"],
    isLive: true
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/30 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-light/20 blur-[100px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
          >
            <span className="text-xs font-black text-brand uppercase tracking-widest">Learn. Build. Get Placed.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black font-display leading-[0.9] tracking-tighter max-w-5xl mx-auto"
          >
            Become The Software Engineer <br className="hidden md:block" /> 
            That <span className="text-brand">Companies</span> Want To Hire!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            Join a growing community of students preparing for real-world tech careers at Sheryians.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-black overflow-hidden bg-gray-800">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-xl font-black text-white leading-none">1 Million+</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Students learning in our programs</p>
              </div>
            </div>

            <button className="px-12 py-5 bg-brand hover:bg-brand-light text-white text-lg font-black rounded-3xl transition-all duration-300 shadow-[0_20px_50px_rgba(194,65,12,0.3)] hover:scale-105 flex items-center gap-3 active:scale-95 group">
              Start Journey
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'Courses', value: '50+', icon: Play },
            { label: 'Rating', value: '4.9/5', icon: Star },
            { label: 'Community', value: '1M+', icon: Users },
            { label: 'Placements', value: '5000+', icon: Briefcase },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-brand">
                 <stat.icon size={20} />
                 <span className="text-3xl font-black text-white tabular-nums">{stat.value}</span>
              </div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4">
              <h2 className="text-5xl font-black font-display tracking-tight text-white leading-none">Our Master <span className="text-brand">Programs</span></h2>
              <p className="text-gray-500 max-w-xl font-medium">Choose from our wide range of courses designed to take you from a absolute beginner to a industry-ready professional.</p>
            </div>
            <button className="text-brand font-black flex items-center gap-2 hover:translate-x-2 transition-transform duration-300 uppercase tracking-widest text-xs">
              View All Courses <ChevronRight size={16} strokeWidth={3} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => {
              const { title, price, oldPrice, discount, image, tags, isLive } = course;
              return (
                <CourseCard 
                  key={i} 
                  title={title} 
                  price={price} 
                  oldPrice={oldPrice} 
                  discount={discount} 
                  image={image} 
                  tags={tags} 
                  isLive={isLive} 
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-12 md:p-24 bg-gradient-to-br from-brand to-brand-light rounded-[4rem] overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-10 blur-[100px] rounded-full group-hover:scale-110 transition-transform duration-1000" />
            
            <div className="relative z-10 text-center space-y-8">
              <h2 className="text-4xl md:text-6xl font-black font-display text-white tracking-tighter">Ready to start your <br /> coding career?</h2>
              <p className="text-white/80 text-lg md:text-xl font-medium max-w-xl mx-auto">Join thousands of students who have already transformed their lives through Sheryians.</p>
              <button className="bg-white text-brand px-12 py-5 rounded-3xl font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-xl">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto space-y-6">
           <div className="flex items-center justify-center gap-2 grayscale group hover:grayscale-0 transition-all duration-500">
             <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
               <img src="https://www.sheryians.com/images/logo.png" alt="Logo" className="w-full h-full object-contain" onError={(e) => { e.currentTarget.src = "https://picsum.photos/seed/s/100/100" }} />
             </div>
             <span className="font-display font-black tracking-tight text-white">SHERYIANS</span>
           </div>
           <p className="text-gray-600 text-sm font-medium">© 2024 Sheryians Coding School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
