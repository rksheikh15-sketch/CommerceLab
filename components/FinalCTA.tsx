'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section id="join" className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-emerald-900/20">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            আপনি কি এই অলাভজনক <br className="hidden md:block" /> মুভমেন্টের অংশ হতে চান?
          </h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            CommerceLab-এ যোগ দিন এবং বাংলাদেশের ই-কমার্স ইকোসিস্টেমকে একসাথে শক্তিশালী করুন। আমাদের মেম্বারশিপ একদম ফ্রি।
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button className="w-full sm:w-auto bg-emerald-500 text-slate-900 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-emerald-400 transition-all hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center gap-2 group shadow-2xl shadow-emerald-500/20">
              কমিউনিটিতে যোগ দিন
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              ১০০% ফ্রি ও অলাভজনক
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              ৩৬০° ফাউন্ডার সাপোর্ট
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              নলেজ শেয়ারিং কমিউনিটি
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
