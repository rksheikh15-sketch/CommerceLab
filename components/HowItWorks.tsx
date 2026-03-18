'use client';

import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    number: "০১",
    title: "কমার্সল্যাবে যোগ দিন",
    description: "আমাদের হাই-গ্রোথ ই-কমার্স ফাউন্ডারদের ইকোসিস্টেমে যোগ দেওয়ার জন্য আবেদন করুন।"
  },
  {
    number: "০২",
    title: "এক্সপার্ট গাইডেন্স নিন",
    description: "আমাদের ল্যাব এক্সপার্টদের সাথে কাজ করে প্রমাণিত গ্রোথ সিস্টেমগুলো ইমপ্লিমেন্ট করুন।"
  },
  {
    number: "০৩",
    title: "ব্র্যান্ড স্কেল করুন",
    description: "স্কেলেবল ইনফ্রাস্ট্রাকচার এবং সাপোর্টের মাধ্যমে আপনার ব্যবসার প্রবৃদ্ধি দেখুন।"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-3xl rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-6"
          >
            সাফল্যের <span className="text-emerald-400">পথ</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-xl"
          >
            আপনার ব্যবসাকে একটি সাধারণ পর্যায় থেকে হাই-গ্রোথ পর্যায়ে নিয়ে যাওয়ার ৩টি সহজ ধাপ।
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="font-display text-8xl font-black text-white/5 absolute -top-10 -left-4 select-none">
                {step.number}
              </div>
              <div className="relative">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center font-bold text-slate-900 mb-6">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-emerald-500/50 to-transparent -translate-x-6 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
