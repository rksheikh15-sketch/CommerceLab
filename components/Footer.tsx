import React from 'react';
import Link from 'next/link';
import { Rocket, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-slate-900 p-1.5 rounded-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900">CommerceLab</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              বাংলাদেশের ই-কমার্স ফাউন্ডারদের জন্য একটি অলাভজনক এবং কমিউনিটি-চালিত প্ল্যাটফর্ম। 
              আমরা ৩৬০° সাপোর্ট এবং রিসোর্স শেয়ারিংয়ের মাধ্যমে ফাউন্ডারদের ক্ষমতায়ন করি।
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Facebook className="w-5 h-5" /></Link>
              <Link href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Linkedin className="w-5 h-5" /></Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">সমাধান</h4>
            <ul className="space-y-4">
              <li><Link href="#community" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">স্টোরল্যাব</Link></li>
              <li><Link href="#community" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">গ্রোথল্যাব</Link></li>
              <li><Link href="#community" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">ব্র্যান্ডল্যাব</Link></li>
              <li><Link href="#community" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">লজিস্টিকল্যাব</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">কোম্পানি</h4>
            <ul className="space-y-4">
              <li><Link href="#vision" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">আমাদের ভিশন</Link></li>
              <li><Link href="#stories" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">সাফল্যের গল্প</Link></li>
              <li><Link href="#resources" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">রিসোর্সসমূহ</Link></li>
              <li><Link href="#join" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">কমিউনিটি</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">যোগাযোগ</h4>
            <ul className="space-y-4">
              <li className="text-slate-500 text-sm">গুলশান-১, ঢাকা, বাংলাদেশ</li>
              <li><Link href="mailto:hello@commercelab.com" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">hello@commercelab.com</Link></li>
              <li className="text-slate-500 text-sm">+৮৮০ ১৭০০ ০০০০০০</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-xs">
            © ২০২৬ কমার্সল্যাব। সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-slate-400 hover:text-slate-900 text-xs transition-colors">প্রাইভেসি পলিসি</Link>
            <Link href="#" className="text-slate-400 hover:text-slate-900 text-xs transition-colors">টার্মস অফ সার্ভিস</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
