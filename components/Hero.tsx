'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-1.5 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">অলাভজনক কমিউনিটি প্ল্যাটফর্ম</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-[1.2] mb-8 tracking-tight"
        >
          ই-কমার্স ফাউন্ডারদের <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-slate-800 to-slate-900">
            ৩৬০° সাপোর্ট কমিউনিটি
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mb-12"
        >
          CommerceLab একটি অলাভজনক উদ্যোগ, যেখানে বাংলাদেশের ই-কমার্স উদ্যোক্তারা একে অপরকে সাহায্য করে। 
          ব্র্যান্ড তৈরি থেকে স্কেলিং — সবকিছুতে আমরা আছি আপনার পাশে।
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-emerald-700 transition-all hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center gap-2 group shadow-xl shadow-emerald-600/10">
            কমিউনিটিতে যোগ দিন
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all hover:scale-[1.05] active:scale-[0.95] shadow-sm"
          >
            আমাদের ভিশন জানুন
          </button>
        </motion.div>

        {/* Social Proof / Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-10 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div>
            <div className="text-3xl font-display font-bold text-emerald-600">৫০০+</div>
            <div className="text-sm text-slate-500 font-medium font-bangla">সক্রিয় মেম্বার</div>
          </div>
          <div>
            <div className="text-3xl font-display font-bold text-emerald-600">১০০%</div>
            <div className="text-sm text-slate-500 font-medium font-bangla">অলাভজনক উদ্যোগ</div>
          </div>
          <div>
            <div className="text-3xl font-display font-bold text-emerald-600">৫০+</div>
            <div className="text-sm text-slate-500 font-medium font-bangla">ফ্রি রিসোর্স</div>
          </div>
          <div>
            <div className="text-3xl font-display font-bold text-emerald-600">২৪/৭</div>
            <div className="text-sm text-slate-500 font-medium font-bangla">কমিউনিটি সাপোর্ট</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
