"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function GarageDoorIntro() {
  const [entered, setEntered] = useState(false);
  const [muted, setMuted] = useState(false);
  const [doorsOpen, setDoorsOpen] = useState(false);
  const engineAudioRef = useRef<HTMLAudioElement>(null);
  const guitarAudioRef = useRef<HTMLAudioElement>(null);
  const garageDoorAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    [engineAudioRef.current, guitarAudioRef.current, garageDoorAudioRef.current].forEach((audio) => {
      if (audio) audio.muted = muted;
    });
  }, [muted]);

  useEffect(() => () => {
    [engineAudioRef.current, guitarAudioRef.current, garageDoorAudioRef.current].forEach((audio) => audio?.pause());
  }, []);

  const playSound = (audio: HTMLAudioElement | null) => {
    if (!audio || muted) return;
    audio.currentTime = 0;
    void audio.play().catch(() => {});
  };

  const startEngine = () => {
    playSound(engineAudioRef.current);
    playSound(guitarAudioRef.current);
    setEntered(true);
    window.setTimeout(() => {
      playSound(garageDoorAudioRef.current);
      setDoorsOpen(true);
    }, 100);
  };

  return (
    <>
      <AnimatePresence>
        {!entered && (
          <motion.div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#101114]" exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,87,34,0.13),_transparent_56%)]" />
            <div className="relative z-30 px-6 text-center">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                <span className="section-kicker">Push N Box Racing · Antalya</span>
                <h1 className="mt-4 font-display text-6xl font-black uppercase leading-[.86] sm:text-8xl">Garaj<br /><span className="text-orange">açılıyor.</span></h1>
                <p className="mx-auto mt-6 max-w-sm text-sm leading-6 text-zinc-400">Motorlar soğumadan ve amfiler kapanmadan önce kemerini bağla.</p>
                <button onClick={startEngine} className="mt-9 inline-flex min-h-14 items-center gap-3 bg-orange px-7 font-display text-lg font-bold uppercase tracking-[1px] transition hover:bg-[#ff7043] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white" /> Start Engine / Pite Gir
                </button>
                <p className="mt-4 text-[10px] uppercase tracking-[2px] text-zinc-600">Motor sesi için tıkla · Ses tercihi sana ait</p>
              </motion.div>
            </div>
            <motion.div aria-hidden className="carbon-surface absolute inset-y-0 left-0 z-20 w-1/2 border-r border-white/10" animate={doorsOpen ? { x: "-100%" } : { x: 0 }} transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}>
              <div className="absolute right-5 top-0 h-full w-3 bg-white/[.025]" />
            </motion.div>
            <motion.div aria-hidden className="carbon-surface absolute inset-y-0 right-0 z-20 w-1/2 border-l border-white/10" animate={doorsOpen ? { x: "100%" } : { x: 0 }} transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}>
              <div className="absolute left-5 top-0 h-full w-3 bg-white/[.025]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <audio ref={engineAudioRef} src="/audio/-car-engine-372477.mp3" preload="auto" />
      <audio ref={guitarAudioRef} src="/audio/electric-guitar-riff-jingle-83860.mp3" preload="auto" />
      <audio ref={garageDoorAudioRef} src="/audio/opening-old-garage-door-80337.mp3" preload="auto" />
      {entered && <button onClick={() => setMuted(!muted)} aria-label={muted ? "Sesi aç" : "Sesi kapat"} title={muted ? "Sesi aç" : "Sesi kapat"} className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center border border-white/15 bg-[#17181b]/95 text-white shadow-lg transition hover:border-orange hover:text-orange">{muted ? <VolumeX size={19} /> : <Volume2 size={19} />}</button>}
    </>
  );
}