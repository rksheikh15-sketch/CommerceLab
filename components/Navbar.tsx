'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#vision", label: "আমাদের ভিশন" },
    { href: "#resources", label: "রিসোর্সসমূহ" },
    { href: "#community", label: "কমিউনিটি" },
    { href: "#stories", label: "সাফল্যের গল্প" },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4"
    >
      <div className="w-full max-w-7xl glass rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm relative">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-slate-900 p-1.5 rounded-lg">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">CommerceLab</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="#join" 
            className="hidden sm:block bg-emerald-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            কমিউনিটিতে যোগ দিন
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 p-4 glass rounded-2xl shadow-xl md:hidden flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors p-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="#join" 
                onClick={() => setIsOpen(false)}
                className="bg-emerald-600 text-white px-5 py-3 rounded-xl text-sm font-semibold text-center hover:bg-emerald-700 transition-all"
              >
                কমিউনিটিতে যোগ দিন
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
