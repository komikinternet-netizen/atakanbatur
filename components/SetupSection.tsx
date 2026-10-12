import { Cpu, Gauge, Monitor, RadioTower, Settings2 } from "lucide-react";

const equipment = [
  { icon: Gauge, title: "Wheel Base", detail: "Simucube 2 Pro", tag: "DIRECT DRIVE" },
  { icon: Settings2, title: "Steering Wheel", detail: "Cube Controls CSX-3", tag: "FORMULA" },
  { icon: RadioTower, title: "Pedals", detail: "Heusinkveld Ultimate+", tag: "LOADCELL" },
  { icon: Settings2, title: "Rig", detail: "Sim-Lab P1-X", tag: "SIM-LAB" },
  { icon: Monitor, title: "Monitors", detail: "Triple 32\" LG UltraGear 1440p", tag: "TRIPLE SCREEN" },
  { icon: Cpu, title: "PC Specs", detail: "RTX 4090 · i9-13900K · 64GB DDR5", tag: "64 GB DDR5" },
];

export default function SetupSection() {
  return (
    <section id="setup" className="section-pad carbon-surface scroll-mt-20">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><span className="section-kicker eyebrow-line">Race engineer approved</span><h2 className="section-title">Kokpitin<br />kontrolü.</h2></div><p className="section-copy mb-1">Her milimetresi tur zamanına, her sinyali doğru duyuma ayarlı. Yarış ve stüdyo aynı kokpitte buluşuyor.</p></div>
        <div className="mt-12 grid gap-px border border-white/[.08] bg-white/[.08] sm:grid-cols-2 lg:grid-cols-3">{equipment.map(({ icon: Icon, title, detail, tag }, index) => <article key={title} className="group relative min-h-[200px] bg-[#151619] p-6 transition-colors hover:bg-[#1b1d21]"><span className="absolute right-5 top-5 font-display text-xs font-bold text-zinc-700">0{index + 1}</span><Icon className="text-orange" size={23} strokeWidth={1.7} /><h3 className="mt-7 font-display text-2xl font-bold uppercase">{title}</h3><p className="mt-2 max-w-xs text-sm leading-6 text-zinc-500">{detail}</p><span className="absolute bottom-6 right-6 text-[9px] font-bold tracking-[1.4px] text-zinc-600">{tag}</span></article>)}</div>
      </div>
    </section>
  );
}