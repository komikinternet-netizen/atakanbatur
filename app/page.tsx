import { ArrowDown, ArrowUpRight, Instagram, Youtube } from "lucide-react";
import GarageDoorIntro from "@/components/GarageDoorIntro";
import CoachingSection from "@/components/CoachingSection";
import MerchStore from "@/components/MerchStore";
import MusicSection from "@/components/MusicSection";
import Navbar from "@/components/Navbar";
import RacingSection from "@/components/RacingSection";
import SetupSection from "@/components/SetupSection";
import TimelineSection from "@/components/TimelineSection";

export default function Home() {
  return (
    <main id="home">
      <GarageDoorIntro />
      <Navbar />
      <section className="relative flex min-h-[760px] items-center overflow-hidden pt-[76px] sm:min-h-[820px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_74%_43%,rgba(255,87,34,.14),transparent_30%),linear-gradient(105deg,#101114_8%,rgba(16,17,20,.94)_42%,rgba(16,17,20,.52)_100%)]" />
        <div aria-hidden="true" className="absolute inset-0 opacity-45" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85')", backgroundPosition: "center 58%", backgroundSize: "cover", maskImage: "linear-gradient(90deg,transparent 26%,black 100%)" }} />
        <div className="absolute inset-0 opacity-[.14]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)", backgroundSize: "54px 54px", maskImage: "linear-gradient(90deg,black,transparent 80%)" }} />
        <div className="absolute right-[-12%] top-[24%] hidden h-[500px] w-[75%] skew-x-[-14deg] border-y border-white/[.06] bg-gradient-to-r from-white/[.025] to-transparent lg:block" />
        <div className="container-wide relative grid items-center gap-10 lg:grid-cols-[1fr_.7fr]">
          <div className="py-20"><span className="section-kicker eyebrow-line">Antalya, TR · Push N Box Racing</span><h1 className="mt-5 font-display text-[clamp(4.5rem,12vw,9.5rem)] font-black uppercase leading-[.78]">Atakan<br /><span className="text-orange">Batur</span><span className="text-white">.</span></h1><p className="mt-8 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">Pistte yarışçı. Sahne ışığında gitarist. Her yerde sonuna kadar ses açık.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#racing" className="bg-orange px-6 py-4 text-[11px] font-extrabold uppercase tracking-[1px] transition hover:bg-[#ff7043]">Yarış dünyasına gir <ArrowUpRight size={15} className="ml-2 inline" /></a><a href="#music" className="border border-white/20 px-6 py-4 text-[11px] font-extrabold uppercase tracking-[1px] transition hover:border-white/60">Müziği keşfet</a></div><div className="mt-12 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[1.4px] text-zinc-600"><span className="h-px w-10 bg-orange" /> Sim racing · Live music · Antalya</div></div>
          <div className="relative hidden aspect-[.87] max-h-[570px] overflow-hidden border border-white/10 bg-[#151619] lg:block"><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_56%_40%,rgba(229,9,20,.17),transparent_55%)]" /><div className="absolute inset-x-0 bottom-0 h-[57%] bg-gradient-to-t from-orange/10 to-transparent" /><div className="absolute right-[-8%] top-[13%] h-[70%] w-[66%] rotate-[12deg] border border-white/[.08] bg-gradient-to-br from-[#292a2d] to-[#101114]" /><div className="absolute bottom-[17%] left-[14%] h-[39%] w-[56%] -rotate-6 border border-white/10 bg-[#1b1c20] shadow-2xl"><div className="absolute inset-x-[10%] top-[12%] h-[56%] border border-white/10 bg-[#111215]" /><div className="absolute bottom-0 left-[9%] h-[35%] w-[5%] bg-[#323338]" /><div className="absolute bottom-0 right-[9%] h-[35%] w-[5%] bg-[#323338]" /><div className="absolute bottom-[20%] left-[33%] h-5 w-[34%] bg-orange/80" /></div><span className="absolute left-6 top-6 text-[9px] font-bold uppercase tracking-[2px] text-zinc-500">#PUSHNBOX · PIT 01</span><span className="absolute bottom-6 right-6 font-display text-6xl font-black text-white/[.08]">AB</span></div>
        </div>
        <a href="#about" aria-label="Hikâyeyi keşfet" className="absolute bottom-7 left-1/2 grid h-10 w-10 -translate-x-1/2 place-items-center border border-white/15 text-zinc-400 transition hover:border-orange hover:text-orange"><ArrowDown size={16} /></a>
      </section>
      <div className="overflow-hidden border-y border-white/[.07] bg-[#151619] py-3"><div className="flex w-max animate-ticker gap-8 text-[10px] font-bold uppercase tracking-[1.8px] text-zinc-500"><span>Sim Racing <i className="ml-8 not-italic text-orange">✳</i></span><span>Rock & Roll <i className="ml-8 not-italic text-orange">✳</i></span><span>Push N Box Racing <i className="ml-8 not-italic text-orange">✳</i></span><span>Antalya <i className="ml-8 not-italic text-orange">✳</i></span><span>Sim Racing <i className="ml-8 not-italic text-orange">✳</i></span><span>Rock & Roll <i className="ml-8 not-italic text-orange">✳</i></span><span>Push N Box Racing <i className="ml-8 not-italic text-orange">✳</i></span><span>Antalya <i className="ml-8 not-italic text-orange">✳</i></span></div></div>
      <TimelineSection />
      <RacingSection />
      <SetupSection />
      <MusicSection />
      <CoachingSection />
      <MerchStore />
      <footer id="contact" className="scroll-mt-20 border-t border-white/10 py-12"><div className="container-wide flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"><div><span className="section-kicker">Bir sonraki stintte görüşürüz.</span><p className="mt-3 font-display text-3xl font-black uppercase">Garaj her zaman açık.</p><a href="mailto:hello@atakanbatur.com" className="mt-3 inline-block text-sm text-zinc-500 transition hover:text-white">hello@atakanbatur.com</a></div><div className="flex items-center gap-4"><a aria-label="YouTube" href="https://www.youtube.com/" className="text-zinc-500 transition hover:text-white"><Youtube size={19} /></a><a aria-label="Instagram" href="https://www.instagram.com/" className="text-zinc-500 transition hover:text-white"><Instagram size={18} /></a><a id="discord" href="https://discord.com/" className="border border-white/15 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[1px] text-zinc-300 transition hover:border-orange hover:text-white">Discord topluluğu <ArrowUpRight className="ml-1 inline" size={13} /></a></div></div><div className="container-wide mt-9 border-t border-white/[.06] pt-5 text-[9px] uppercase tracking-[1px] text-zinc-700">© {new Date().getFullYear()} Atakan Batur · Antalya, Türkiye</div></footer>
    </main>
  );
}