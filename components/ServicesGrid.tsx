'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Zap, ShieldCheck, Database, Truck, Landmark } from 'lucide-react';

const services = [
  {
    id: "StoreLab",
    title: "StoreLab",
    subtitle: "স্টোর অপ্টিমাইজেশন সাপোর্ট",
    description: "কমিউনিটির অভিজ্ঞদের সহায়তায় আপনার শপিফাই বা কাস্টম স্টোরকে হাই-কনভার্টিং করে তুলুন। আমরা আপনাকে সঠিক গাইডেন্স দেব।",
    icon: ShoppingBag,
    features: ["ফ্রি অডিট ও ফিডব্যাক", "ইউজার এক্সপেরিয়েন্স গাইড", "স্পিড অপ্টিমাইজেশন টিপস"]
  },
  {
    id: "GrowthLab",
    title: "GrowthLab",
    subtitle: "মার্কেটিং ও গ্রোথ গাইডেন্স",
    description: "সফল ফাউন্ডারদের প্রমাণিত মার্কেটিং স্ট্র্যাটেজি শিখুন এবং আপনার ব্র্যান্ডকে অর্গানিক ও পেইড চ্যানেলে বড় করুন।",
    icon: Zap,
    features: ["মার্কেটিং কেস স্টাডিজ", "অ্যাড স্ট্র্যাটেজি শেয়ারিং", "ফানেল বিল্ডিং সাপোর্ট"]
  },
  {
    id: "BrandLab",
    title: "BrandLab",
    subtitle: "ব্র্যান্ডিং ও পজিশনিং মেন্টরশিপ",
    description: "আপনার ব্র্যান্ডের একটি শক্তিশালী পরিচয় তৈরি করতে আমাদের মেন্টরদের থেকে সরাসরি পরামর্শ ও রিসোর্স নিন।",
    icon: ShieldCheck,
    features: ["ব্র্যান্ডিং গাইডলাইনস", "স্টোরিটেলিং ওয়ার্কশপ", "মার্কেট পজিশনিং হেল্প"]
  },
  {
    id: "DataLab",
    title: "DataLab",
    subtitle: "অ্যানালিটিক্স ও ট্র্যাকিং রিসোর্স",
    description: "সঠিক ডেটা ট্র্যাকিং এর মাধ্যমে ব্যবসার সিদ্ধান্ত নিতে শিখুন। আমরা আপনাকে প্রয়োজনীয় টুলস এবং সেটআপে সাহায্য করব।",
    icon: Database,
    features: ["ট্র্যাকিং সেটআপ গাইড", "ডেটা অ্যানালাইসিস সাপোর্ট", "ফ্রি ড্যাশবোর্ড টেম্পলেট"]
  },
  {
    id: "LogisticsLab",
    title: "LogisticsLab",
    subtitle: "লজিস্টিক ও সাপ্লাই চেইন",
    description: "আপনার পণ্যের ডেলিভারি এবং ইনভেন্টরি ম্যানেজমেন্ট আরও সহজ ও সাশ্রয়ী করতে আমরা লজিস্টিক পার্টনারদের সাথে কানেক্ট করে দেই।",
    icon: Truck,
    features: ["ডেলিভারি পার্টনার কানেকশন", "ইনভেন্টরি ম্যানেজমেন্ট টিপস", "শিপিং কস্ট অপ্টিমাইজেশন"]
  },
  {
    id: "FinanceLab",
    title: "FinanceLab",
    subtitle: "ফাইন্যান্স ও ইনভেস্টমেন্ট",
    description: "ব্যবসার হিসাব-নিকাশ এবং ইনভেস্টমেন্টের জন্য প্রয়োজনীয় গাইডেন্স ও রিসোর্স প্রদান।",
    icon: Landmark,
    features: ["ক্যাশ ফ্লো ম্যানেজমেন্ট", "ইনভেস্টমেন্ট পিচ গাইড", "ট্যাক্স ও ভ্যাট সাপোর্ট"]
  }
];

export const ServicesGrid = () => {
  return (
    <section id="community" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4">৩৬০° সাপোর্ট মডিউল</div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            আমাদের সাপোর্ট ল্যাবসমূহ
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 md:p-12 rounded-[2.5rem] border border-slate-100 bg-slate-50 flex flex-col md:flex-row gap-8 items-start hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <service.icon className="w-10 h-10 text-emerald-600" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display text-3xl font-bold text-slate-900">{service.title}</h3>
                  <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md uppercase tracking-tighter">Active</span>
                </div>
                <div className="text-emerald-600 font-semibold mb-4">{service.subtitle}</div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
