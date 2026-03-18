'use client';

import React from 'react';
import { motion } from 'motion/react';
import { XCircle, AlertCircle } from 'lucide-react';

const problems = [
  {
    title: "সঠিক সিস্টেমের অভাব",
    description: "স্কেলেবল ওয়ার্কফ্লো বা অটোমেশন ছাড়াই ম্যানুয়ালি ব্যবসা পরিচালনা করা।"
  },
  {
    title: "দুর্বল ওয়েবসাইট",
    description: "ধীরগতির এবং নন-কনভার্টিং স্টোর যা কাস্টমারদের ফিরিয়ে দেয়।"
  },
  {
    title: "অলাভজনক বিজ্ঞাপন",
    description: "সঠিক স্ট্র্যাটেজি ছাড়াই মেটা বিজ্ঞাপনে টাকা নষ্ট করা।"
  },
  {
    title: "পরিকল্পনার অভাব",
    description: "ব্র্যান্ড পজিশনিং বা গ্রোথের জন্য কোনো পরিষ্কার রোডম্যাপ না থাকা।"
  },
  {
    title: "এক্সপার্ট সাপোর্টের অভাব",
    description: "সঠিক দিকনির্দেশনা ছাড়াই একা একা সংগ্রাম করা।"
  }
];

export const ProblemSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4">
              <AlertCircle className="w-4 h-4" />
              কেন আমাদের এই উদ্যোগ?
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              একা বড় হওয়া কঠিন, কিন্তু <span className="text-emerald-600 underline decoration-emerald-200 underline-offset-8">একসাথে</span> অসম্ভব নয়।
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              ই-কমার্স ব্যবসায় অনেক চড়াই-উতরাই থাকে। অধিকাংশ ফাউন্ডার সঠিক সাপোর্টের অভাবে মাঝপথে থেমে যান। 
              CommerceLab তৈরি হয়েছে যাতে কেউ একা না থাকে।
            </p>
          </motion.div>

          <div className="grid gap-4">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-2xl border border-slate-200 flex gap-4 items-start shadow-sm hover:shadow-md transition-all"
              >
                <div className="bg-red-50 p-2 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{problem.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
