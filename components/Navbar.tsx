"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Youtube, Twitch, Radio } from "lucide-react";

const links = [
  ["Hakkımda", "#about"], ["Yarış", "#racing"], ["Setup", "#setup"],
  ["Müzik", "#music"], ["Eğitim & Akademi", "#coaching"], ["Mağaza", "#merch"], ["İletişim", "#contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [live] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[.08] bg-[#101114]/90 backdrop-blur-xl">
      <div className="container-wide flex h-[76px] items-center justify-between gap-5">
        <a href="#home" className="flex shrink-0 items-center gap-3" aria-label="Atakan Batur ana sayfa">
          <Image src="/images/atakan-batur-logo.png" alt="Atakan Batur logosu" width={40} height={40} priority className="h-10 w-10 rounded-full object-cover" />
          <span className="leading-none"><span className="block font-display text-lg font-extrabold uppercase">Atakan Batur</span><span className="mt-1 block text-[9px] uppercase tracking-[1.7px] text-zinc-500">Sim Racing · Rock & Roll</span></span>
        </a>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Ana menü">{links.map(([label, href]) => <a key={href} href={href} className="text-[11px] font-semibold uppercase tracking-[.6px] text-zinc-400 transition hover:text-white">{label}</a>)}</nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="https://www.twitch.tv/" aria-label="Twitch" className="text-zinc-400 transition hover:text-white"><Twitch size={17} /></a>
          <a href="https://kick.com/" aria-label="Kick" className="font-display text-sm font-black text-zinc-400 transition hover:text-white">K</a>
          <a href="https://www.youtube.com/" aria-label="YouTube" className="text-zinc-400 transition hover:text-white"><Youtube size={18} /></a>
          <span className="flex items-center gap-1.5 border-l border-white/10 pl-3 text-[9px] font-bold uppercase tracking-[1px] text-zinc-500"><span className={`h-1.5 w-1.5 rounded-full ${live ? "animate-live bg-emerald-400" : "bg-zinc-600"}`} />{live ? "Canlı" : "Offline"}</span>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="ml-1 bg-gradient-to-r from-amber-500 to-racing px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.5px] text-white transition hover:brightness-110">YouTube Katıl</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center border border-white/10 xl:hidden" aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
      </div>
      {menuOpen && <nav className="border-t border-white/10 bg-[#101114] px-5 py-4 xl:hidden" aria-label="Mobil menü">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-white/[.06] py-3 text-xs font-semibold uppercase tracking-[1px] text-zinc-300">{label}</a>)}<a href="https://www.youtube.com/" className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-racing px-4 py-3 text-xs font-bold uppercase"><Radio size={14} /> YouTube Katıl · {live ? "Canlı" : "Offline"}</a></nav>}
    </header>
  );
}