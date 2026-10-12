"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const milestones = [
  { year: "2000", title: "Sahne arkası", text: "İstanbul'dan Antalya'ya taşınma, sahne arkası ses/ışık asistanlığı." },
  { year: "2010", title: "Müziğe geçiş", text: "Otel sektöründen profesyonel canlı müziğe ve gitaristliğe geçiş." },
  { year: "2012", title: "Rock'n Dark", text: "Rock'n Dark Akdeniz Bölge Finali, Mor ve Ötesi ile aynı sahne, turneler." },
  { year: "2014", title: "HSS Rock Band", text: "Kendi grubu HSS Rock Band'in kuruluşu ve prova stüdyosunun devralınması (Stüdyo-Home konsepti)." },
  { year: "2016", title: "Sahneden stüdyoya", text: "Zuhal Müzik dönemi; Duman, Pentagram, Yüksek Sadakat, Ogün Sanlısoy gibi dev sanatçılarla sahne paylaşımları; stüdyonun profesyonel kayıt stüdyosuna dönüşmesi." },
  { year: "2019 – 2020", title: "Yeni bir grid", text: "iRacing ile tanışma, stüdyoya kurulan kokpit, Twitch yayıncılığı ve pandemiyle birlikte tam zamanlı simracing yayınlarına geçiş." },
  { year: "2021+", title: "Push N Box", text: "Antalya'da yeni stüdyo kurulumu ve Push N Box Racing Team ile yarışlar." },
];

export default function TimelineSection() {
  const [active, setActive] = useState(6);
  return (
    <section id="about" className="section-pad scroll-mt-20">
      <div className="container-wide grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:h-fit"><span className="section-kicker eyebrow-line">Bir hayat, iki sahne</span><h2 className="section-title">İlk akor.<br /><span className="text-orange">İlk viraj.</span></h2><p className="section-copy mt-6">Mikrofon ve direksiyon arasında; Antalya&apos;dan sahneye, oradan sanal gridin en sıcak rekabetine.</p><div className="mt-9 hidden items-center gap-3 border-t border-white/10 pt-5 text-xs uppercase tracking-[1px] text-zinc-500 sm:flex"><span className="font-display text-3xl font-bold text-white">25<span className="text-orange">+</span></span> yıl sahne ve pistte</div></div>
        <div className="relative">{milestones.map((item, index) => { const isActive = index === active; return <button key={item.year} onClick={() => setActive(index)} className="group relative grid w-full grid-cols-[90px_1fr_20px] gap-4 border-b border-white/[.08] py-5 text-left sm:grid-cols-[112px_1fr_20px]" aria-expanded={isActive}><span className={`pt-1 font-display text-lg font-bold transition-colors ${isActive ? "text-orange" : "text-zinc-600 group-hover:text-zinc-300"}`}>{item.year}</span><span><span className={`block font-display text-xl font-bold uppercase transition-colors ${isActive ? "text-white" : "text-zinc-400"}`}>{item.title}</span><motion.span initial={false} animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }} className="block overflow-hidden"><span className="block max-w-lg pt-2 text-sm leading-6 text-zinc-500">{item.text}</span></motion.span></span><ChevronDown className={`mt-1 text-zinc-600 transition-transform ${isActive ? "rotate-180 text-orange" : ""}`} size={16} /></button>; })}</div>
      </div>
    </section>
  );
}