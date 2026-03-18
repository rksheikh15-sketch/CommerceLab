'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "রাহাত আহমেদ",
    role: "ফাউন্ডার, UrbanDrip",
    content: "কমার্সল্যাব কমিউনিটির সাপোর্ট আমার অগোছালো ব্যবসাকে একটি সিস্টেমে রূপান্তর করতে সাহায্য করেছে। এখানে আমি এমন সব মেন্টর পেয়েছি যারা নিঃস্বার্থভাবে সাহায্য করেন।",
    image: "https://picsum.photos/seed/founder1/100/100"
  },
  {
    name: "সারা ইসলাম",
    role: "সিইও, GlowBD",
    content: "স্টোরল্যাব মডিউলের ফ্রি রিসোর্সগুলো ব্যবহার করে আমি নিজেই আমার স্টোর অপ্টিমাইজ করেছি। কমিউনিটির ফিডব্যাক আমার কনভার্সন রেট বাড়াতে দারুণ ভূমিকা রেখেছে।",
    image: "https://picsum.photos/seed/founder2/100/100"
  },
  {
    name: "তানভীর হোসেন",
    role: "ফাউন্ডার, TechGear",
    content: "গ্রোথল্যাবের নলেজ শেয়ারিং সেশনগুলো থেকে আমি মেটা অ্যাডস এর সঠিক স্ট্র্যাটেজি শিখেছি। ফাউন্ডারদের সাথে অভিজ্ঞতা বিনিময় আমার ব্র্যান্ডের জন্য সেরা সমাধান ছিল।",
    image: "https://picsum.photos/seed/founder3/100/100"
  }
];

export const Testimonials = () => {
  return (
    <section id="stories" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            কমিউনিটির কিছু <br /> সফলতার গল্প
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative"
            >
              <Quote className="w-10 h-10 text-emerald-100 absolute top-6 right-8" />
              <p className="text-slate-600 mb-8 relative z-10 italic">
                &quot;{t.content}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-100">
                  <Image 
                    src={t.image} 
                    alt={t.name} 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500 font-medium">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
