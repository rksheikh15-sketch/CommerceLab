'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  TrendingUp, 
  Target, 
  Palette, 
  BarChart3, 
  Users,
  Video,
  LayoutGrid,
  Scale
} from 'lucide-react';

const solutions = [
  {
    title: "ওয়েবসাইট ডেভেলপমেন্ট গাইড",
    description: "কিভাবে একটি হাই-কনভার্টিং শপিফাই বা কাস্টম স্টোর তৈরি করবেন তার পূর্ণাঙ্গ গাইডলাইন ও সাপোর্ট।",
    icon: Globe,
    color: "bg-blue-500"
  },
  {
    title: "কনভার্সন অপ্টিমাইজেশন সাপোর্ট",
    description: "আপনার বর্তমান ট্রাফিককে কাস্টমারে রূপান্তর করার জন্য প্রয়োজনীয় টিপস ও অডিট সাপোর্ট।",
    icon: TrendingUp,
    color: "bg-emerald-500"
  },
  {
    title: "অ্যাডভার্টাইজিং নলেজ শেয়ারিং",
    description: "মেটা এবং গুগল অ্যাডস এর সঠিক স্ট্র্যাটেজি যা সফল ফাউন্ডাররা ব্যবহার করছেন।",
    icon: Target,
    color: "bg-indigo-500"
  },
  {
    title: "ব্র্যান্ডিং মেন্টরশিপ",
    description: "আপনার ব্র্যান্ডকে প্রতিযোগিতামূলক বাজারে আলাদাভাবে তুলে ধরার জন্য মেন্টরদের পরামর্শ।",
    icon: Palette,
    color: "bg-orange-500"
  },
  {
    title: "ডেটা ট্র্যাকিং রিসোর্স",
    description: "আপনার ব্যবসার সঠিক হিসাব রাখতে প্রয়োজনীয় ট্র্যাকিং টুলস এবং সেটআপ গাইড।",
    icon: BarChart3,
    color: "bg-purple-500"
  },
  {
    title: "কমিউনিটি মেন্টরশিপ",
    description: "সফল ই-কমার্স ফাউন্ডারদের কাছ থেকে সরাসরি দিকনির্দেশনা এবং অভিজ্ঞতা বিনিময়।",
    icon: Users,
    color: "bg-rose-500"
  },
  {
    title: "কনটেন্ট ক্রিয়েশন সাপোর্ট",
    description: "প্রোডাক্ট ফটোগ্রাফি এবং ভিডিওগ্রাফির জন্য প্রয়োজনীয় গাইডলাইন ও স্টুডিও সাপোর্ট।",
    icon: Video,
    color: "bg-cyan-500"
  },
  {
    title: "মার্কেটপ্লেস ইন্টিগ্রেশন",
    description: "দারাজ, পান্ডামার্ট এবং অন্যান্য লোকাল মার্কেটপ্লেসে সফল হওয়ার স্ট্র্যাটেজি।",
    icon: LayoutGrid,
    color: "bg-amber-500"
  },
  {
    title: "লিগ্যাল ও কমপ্লায়েন্স",
    description: "ট্রেড লাইসেন্স, ই-ক্যাব মেম্বারশিপ এবং অন্যান্য আইনি বিষয়ে সঠিক দিকনির্দেশনা।",
    icon: Scale,
    color: "bg-slate-700"
  }
];

export const SolutionsSection = () => {
  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            কমিউনিটি রিসোর্স ও ৩৬০° সাপোর্ট
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg text-slate-600"
          >
            আমরা ফাউন্ডারদের এমন সব রিসোর্স এবং সাপোর্ট প্রদান করি যা সাধারণত অনেক ব্যয়বহুল, কিন্তু আমাদের কমিউনিটিতে আপনি পাবেন একদম ফ্রিতে।
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
            >
              <div className={`w-12 h-12 ${solution.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-current/20`}>
                <solution.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {solution.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
