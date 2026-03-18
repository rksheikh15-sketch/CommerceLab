'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Rocket } from 'lucide-react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4"
    >
      <div className="w-full max-w-7xl glass rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-slate-900 p-1.5 rounded-lg">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">CommerceLab</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#vision" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">আমাদের ভিশন</Link>
          <Link href="#resources" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">রিসোর্সসমূহ</Link>
          <Link href="#community" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">কমিউনিটি</Link>
          <Link href="#stories" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">সাফল্যের গল্প</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="#join" 
            className="bg-emerald-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            কমিউনিটিতে যোগ দিন
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};
