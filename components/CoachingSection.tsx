"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Check, Gauge, MessageCircle, Music2, Users } from "lucide-react";

const discordFallback = "#discord";

const courses = [
  {
    key: "simracing",
    icon: Gauge,
    accent: "orange",
    title: "iRacing & Simracing Pilot Koçluğu",
    description: "Tur zamanını tesadüfe bırakma. Telemetri, teknik ve yarış stratejini birlikte geliştirelim.",
    topics: [
      "Garage61 / MoTeC Telemetri Analizi (Gaz, fren baskısı ve apex noktaları)",
      "İdeal Yarış Çizgisi, Trail Braking ve Ağırlık Transferi Teknikleri",
      "Pist ve Araç Setup Mantığı, Lastik Aşınması ve Yakıt Yönetimi",
      "Çok Sınıflı (Multiclass) ve 24 Saatlik Dayanıklılık Yarış Stratejileri",
    ],
    format: "Discord üzerinden canlı ekran paylaşımı, telemetri incelemesi ve pratik seansı.",
    level: "Başlangıç seviyesinden rekabetçi lig yarışçılarına kadar.",
    action: "Discord'dan Simracing Koçluğu Başvurusu Yap",
  },
  {
    key: "music",
    icon: Music2,
    accent: "cyan",
    title: "Elektro Gitar & Sahne/Stüdyo Koçluğu",
    description: "Teknik, ton ve sahne deneyimini kişisel hedeflerine göre birebir çalışalım.",
    topics: [
      "Başlangıç ve İleri Düzey Elektro / Akustik Gitar Teknikleri (Solo, Ritim, Gamlar)",
      "Amfi, Pedal ve Tonlama Sırları (Sahneye ve stüdyoya hazır analog/dijital tonlar)",
      "Home Stüdyo Kurulumu, Ses Kartı ve DAW Kayıt Temelleri",
      "15+ Yıllık Canlı Sahne Tecrübesi ile Performans ve Doğaçlama Eğitimi",
    ],
    format: "Discord 1-e-1 görüntülü ses ve enstrüman seansı.",
    level: "Sıfırdan başlayanlar veya sahneye çıkmak isteyen müzisyenler.",
    action: "Discord'dan Müzik Eğitimi Başvurusu Yap",
  },
];

const steps = [
  { icon: Users, title: "Discord Sunucumuza Katıl", detail: "Davet linki" },
  { icon: MessageCircle, title: "#egitim-talep Kanalından Bilet (Ticket) Aç", detail: "Hedefini ve mevcut seviyeni yaz" },
  { icon: CalendarDays, title: "Seviyeni Belirleyip Seans Saatini Planlayalım", detail: "Sana uygun birebir program" },
];

export default function CoachingSection() {
  return (
    <section id="coaching" className="section-pad relative scroll-mt-20 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_30%,rgba(255,87,34,.09),transparent_36%),radial-gradient(ellipse_at_88%_57%,rgba(61,214,208,.07),transparent_34%)]" />
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="bg-gradient-to-r from-orange via-racing to-cyan bg-clip-text font-display text-sm font-extrabold uppercase tracking-[2px] text-transparent sm:text-base">
            ATAKAN BATUR AKADEMİ
          </p>
          <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[.98] sm:text-5xl lg:text-6xl">
            Direksiyon Başında Hız,<br className="hidden sm:block" /> Sahnede Ritim:
            <span className="block text-orange">1-e-1 Bireysel Eğitimler</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            15 yılı aşkın sahne ve stüdyo tecrübesi ile iRacing&apos;deki podyum ve telemetri birikimimi birebir Discord seanslarıyla paylaşıyorum.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {courses.map(({ key, icon: Icon, accent, title, description, topics, format, level, action }, index) => {
            const isRacing = accent === "orange";
            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`relative flex h-full flex-col border bg-[#151619]/95 p-6 sm:p-8 ${isRacing ? "border-orange/25 hover:border-orange/55" : "border-cyan/25 hover:border-cyan/55"} transition-colors`}
              >
                <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-px ${isRacing ? "bg-gradient-to-r from-transparent via-orange to-transparent" : "bg-gradient-to-r from-transparent via-cyan to-transparent"}`} />
                <div className="flex items-start gap-4">
                  <span className={`grid h-12 w-12 shrink-0 place-items-center border ${isRacing ? "border-orange/30 bg-orange/10 text-orange" : "border-cyan/30 bg-cyan/10 text-cyan"}`}>
                    <Icon size={23} strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <span className={`text-[9px] font-bold uppercase tracking-[1.5px] ${isRacing ? "text-orange" : "text-cyan"}`}>
                      {isRacing ? "01 / TRACK ACADEMY" : "02 / MUSIC ACADEMY"}
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-bold uppercase leading-tight sm:text-3xl">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
                  </div>
                </div>

                <ul className="mt-7 space-y-3 border-t border-white/[.08] pt-6">
                  {topics.map((topic) => (
                    <li key={topic} className="flex gap-3 text-sm leading-6 text-zinc-300">
                      <Check size={15} className={`mt-1 shrink-0 ${isRacing ? "text-orange" : "text-cyan"}`} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid gap-3 border-t border-white/[.08] pt-5 sm:grid-cols-2">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[1.3px] text-zinc-600">Seans formatı</span>
                    <p className="mt-1 text-xs leading-5 text-zinc-400">{format}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[1.3px] text-zinc-600">Kimler için?</span>
                    <p className="mt-1 text-xs leading-5 text-zinc-400">{level}</p>
                  </div>
                </div>

                <a
                  href={discordFallback}
                  className={`mt-7 inline-flex min-h-12 items-center justify-center gap-2 px-4 py-3 text-center text-[10px] font-extrabold uppercase tracking-[.7px] text-white transition sm:text-xs ${isRacing ? "bg-orange hover:bg-[#ff7043]" : "bg-cyan/90 text-[#101114] hover:bg-cyan"}`}
                >
                  <MessageCircle size={17} />
                  <span>{action}</span>
                  <ArrowRight size={15} className="shrink-0" />
                </a>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="text-center">
            <span className="section-kicker eyebrow-line">İlk adımını at</span>
            <h3 className="mt-3 font-display text-3xl font-bold uppercase sm:text-4xl">Nasıl Başvurulur? <span className="text-orange">3 Adımda Eğitim Süreci</span></h3>
          </div>
          <div className="mt-8 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, detail }, index) => (
              <motion.a
                key={title}
                href={discordFallback}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative min-h-40 bg-[#151619] p-6 transition-colors hover:bg-[#1b1d21] sm:p-7"
              >
                <span className="absolute right-5 top-5 font-display text-xs font-bold text-zinc-700">0{index + 1}</span>
                <Icon size={21} className="text-cyan" strokeWidth={1.8} />
                <h4 className="mt-5 max-w-[18rem] font-display text-xl font-bold uppercase leading-tight">{title}</h4>
                <p className="mt-2 text-xs text-zinc-500">{detail}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}