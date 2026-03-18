'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Eye, Target, Compass } from 'lucide-react';

export const VisionSection = () => {
  return (
    <section id="vision" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full mb-6">
              <Eye className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">আমাদের ভিশন</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              বাংলাদেশের ই-কমার্স ইকোসিস্টেমকে <span className="text-emerald-400">বিশ্বমানের</span> করে তোলা
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              আমাদের স্বপ্ন হলো এমন একটি বাংলাদেশ গড়ে তোলা যেখানে প্রতিটি ই-কমার্স উদ্যোক্তা প্রয়োজনীয় জ্ঞান, প্রযুক্তি এবং কমিউনিটি সাপোর্টের অভাবে পিছিয়ে পড়বে না। আমরা একটি স্বনির্ভর এবং শক্তিশালী ডিজিটাল কমার্স ইকোসিস্টেম তৈরি করতে চাই।
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">লক্ষ্য-ভিত্তিক উন্নয়ন</h4>
                  <p className="text-slate-400">আমরা শুধুমাত্র ব্যবসা নয়, বরং টেকসই ব্র্যান্ড তৈরির ওপর গুরুত্ব দেই যা দীর্ঘমেয়াদী প্রভাব ফেলবে।</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <Compass className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">সঠিক দিকনির্দেশনা</h4>
                  <p className="text-slate-400">অভিজ্ঞ মেন্টরদের মাধ্যমে আমরা নতুন উদ্যোক্তাদের সঠিক পথে পরিচালিত করি যাতে তারা ভুল থেকে শিখতে পারে।</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center p-4 sm:p-12">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full h-full">
                <div className="bg-emerald-500/20 rounded-2xl flex flex-col items-center justify-center p-3 sm:p-6 text-center">
                  <span className="text-xl sm:text-4xl font-display font-bold text-emerald-400 mb-1 sm:mb-2">১০X</span>
                  <span className="text-[10px] sm:text-sm text-slate-400">ইকোসিস্টেম গ্রোথ</span>
                </div>
                <div className="bg-blue-500/20 rounded-2xl flex flex-col items-center justify-center p-3 sm:p-6 text-center translate-y-3 sm:translate-y-8">
                  <span className="text-xl sm:text-4xl font-display font-bold text-blue-400 mb-1 sm:mb-2">১০০%</span>
                  <span className="text-[10px] sm:text-sm text-slate-400">ফ্রি এক্সেস</span>
                </div>
                <div className="bg-purple-500/20 rounded-2xl flex flex-col items-center justify-center p-3 sm:p-6 text-center -translate-y-3 sm:-translate-y-8">
                  <span className="text-xl sm:text-4xl font-display font-bold text-purple-400 mb-1 sm:mb-2">৫কে+</span>
                  <span className="text-[10px] sm:text-sm text-slate-400">ভবিষ্যৎ লিডার</span>
                </div>
                <div className="bg-orange-500/20 rounded-2xl flex flex-col items-center justify-center p-3 sm:p-6 text-center">
                  <span className="text-xl sm:text-4xl font-display font-bold text-orange-400 mb-1 sm:mb-2">২৪/৭</span>
                  <span className="text-[10px] sm:text-sm text-slate-400">গ্লোবাল কানেক্টিভিটি</span>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white text-slate-900 p-3 sm:p-6 rounded-2xl shadow-2xl max-w-[130px] sm:max-w-[200px] z-20">
              <p className="text-[10px] sm:text-sm font-bold leading-tight">&quot;আমরা বিশ্বাস করি সম্মিলিত প্রচেষ্টাই বড় পরিবর্তনের চাবিকাঠি।&quot;</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
