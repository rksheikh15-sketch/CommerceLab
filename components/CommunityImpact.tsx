'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Users, Globe, BookOpen, ShieldCheck } from 'lucide-react';

const impactData = [
  {
    icon: Users,
    title: "কমিউনিটি ইভেন্টস",
    description: "প্রতি মাসে আমরা ফাউন্ডারদের জন্য নেটওয়ার্কিং এবং নলেজ শেয়ারিং ইভেন্ট আয়োজন করি।",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Globe,
    title: "গ্লোবাল কানেকশন",
    description: "আন্তর্জাতিক ই-কমার্স প্ল্যাটফর্মগুলোর সাথে আমাদের মেম্বারদের কানেক্ট করে দেওয়া হয়।",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: BookOpen,
    title: "ফ্রি লার্নিং রিসোর্স",
    description: "৫০০+ এর বেশি ফ্রি গাইডলাইন, ভিডিও টিউটোরিয়াল এবং কেস স্টাডি এক্সেস করার সুযোগ।",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: ShieldCheck,
    title: "লিগ্যাল সাপোর্ট",
    description: "ট্রেড লাইসেন্স থেকে শুরু করে ই-কমার্স পলিসি পর্যন্ত সব ধরণের আইনি সহায়তা।",
    color: "bg-orange-500/10 text-orange-600",
  },
];

export const CommunityImpact = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            আমাদের বিস্তৃত <span className="text-emerald-600">কমিউনিটি ইমপ্যাক্ট</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg text-slate-600"
          >
            কমার্সল্যাব শুধুমাত্র একটি প্ল্যাটফর্ম নয়, এটি একটি আন্দোলন। আমরা ই-কমার্স ফাউন্ডারদের জন্য একটি পূর্ণাঙ্গ ইকোসিস্টেম তৈরি করছি।
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group"
            >
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Stats / Roadmap */}
        <div className="mt-24 p-6 md:p-12 bg-slate-50 rounded-[40px] border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-6">আমাদের ভবিষ্যৎ পরিকল্পনা</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold">১</div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">ডিস্ট্রিক্ট-ভিত্তিক হাব তৈরি</h4>
                    <p className="text-slate-600">সারা বাংলাদেশের ৬৪টি জেলায় ফাউন্ডারদের জন্য ফিজিক্যাল হাব তৈরি করা।</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold">২</div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">ফ্রি লজিস্টিক নেটওয়ার্ক</h4>
                    <p className="text-slate-600">মেম্বারদের জন্য সাশ্রয়ী এবং দ্রুত লজিস্টিক সলিউশন নিশ্চিত করা।</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold">৩</div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">ই-কমার্স ইনকিউবেশন সেন্টার</h4>
                    <p className="text-slate-600">নতুন আইডিয়াগুলোকে বাস্তব রূপ দিতে ইনকিউবেশন এবং ফান্ডিং সাপোর্ট।</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 flex flex-col justify-center">
                <div className="text-center">
                  <p className="text-slate-500 font-medium mb-2 uppercase tracking-widest text-xs">আমাদের ইমপ্যাক্ট গোল ২০২৬</p>
                  <div className="text-6xl font-display font-bold text-emerald-600 mb-4">১০,০০০+</div>
                  <p className="text-xl font-bold text-slate-900">সফল উদ্যোক্তা তৈরির লক্ষ্য</p>
                </div>
                <div className="mt-8 w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '65%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-emerald-600"
                  />
                </div>
                <p className="mt-4 text-sm text-slate-500 text-center font-medium">বর্তমানে আমরা আমাদের লক্ষ্যের ৬৫% অর্জন করেছি</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
