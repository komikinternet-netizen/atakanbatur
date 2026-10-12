"use client";

import { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { ArrowRight, Check, ShoppingBag, X } from "lucide-react";
import productCatalog from "@/data/products.json";

type Category = "Tümü" | "T-Shirt" | "Kupa & Bardak" | "Şapka" | "Mousepad / Deskmat";
type Product = (typeof productCatalog)[number];
const categories: Category[] = ["Tümü", "T-Shirt", "Kupa & Bardak", "Şapka", "Mousepad / Deskmat"];
const products: Product[] = productCatalog;

function formatPrice(product: Product) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: product.currency,
    maximumFractionDigits: 0,
  }).format(product.price);
}

function displayCategory(category: string) {
  return category === "Mousepad" ? "Mousepad / Deskmat" : category;
}

export default function MerchStore() {
  const [filter, setFilter] = useState<Category>("Tümü");
  const [selected, setSelected] = useState<Product | null>(null);
  const [size, setSize] = useState("M");
  const [cart, setCart] = useState(0);
  const categoryFilter = filter === "Mousepad / Deskmat" ? "Mousepad" : filter;
  const visible = filter === "Tümü" ? products : products.filter((product) => product.category === categoryFilter);
  const addToCart = () => {
    setCart((current) => current + 1);
    setSelected(null);
    confetti({ particleCount: 55, spread: 50, origin: { y: 0.74 }, colors: ["#ff5722", "#e50914", "#f6f4f0"] });
  };

  return (
    <section id="merch" className="section-pad carbon-surface scroll-mt-20">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><span className="section-kicker eyebrow-line">Resmî pit ekipmanı</span><h2 className="section-title">Garaj mağazası.</h2></div><div className="flex items-center gap-2 border border-white/10 px-3 py-2 text-xs text-zinc-400"><ShoppingBag size={15} className="text-orange" /> Sepet <span className="font-bold text-white">{cart}</span></div></div>
        <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">{categories.map((category) => <button key={category} onClick={() => setFilter(category)} className={`shrink-0 border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[.7px] transition ${filter === category ? "border-orange bg-orange text-white" : "border-white/10 text-zinc-500 hover:border-white/30 hover:text-white"}`}>{category}</button>)}</div>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{visible.map((product) => <article key={product.id} className="group min-w-0"><button onClick={() => { setSelected(product); setSize(product.sizes[0] ?? "Standart"); }} className="block w-full text-left" aria-label={`${product.name} ürün detaylarını aç`}><span className="relative block aspect-[16/9] overflow-hidden border border-white/10 bg-[#151619]"><Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain transition-transform duration-300 group-hover:scale-[1.025]" /><span className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-8"><span className="text-[9px] font-bold uppercase tracking-[1px] text-white/80">{displayCategory(product.category)}</span><span className="bg-orange px-2 py-1 text-[8px] font-bold uppercase tracking-[.7px] text-white">{product.badge}</span></span><span className="absolute right-3 top-3 grid h-8 w-8 place-items-center border border-white/20 bg-black/50 text-white opacity-0 transition group-hover:opacity-100"><ArrowRight size={15} /></span></span><span className="mt-3 flex items-start justify-between gap-3"><span className="min-w-0"><span className="block font-display text-base font-bold uppercase leading-tight">{product.name}</span><span className="mt-1 line-clamp-2 block text-xs leading-5 text-zinc-500">{product.shortDesc}</span></span><span className="shrink-0 pt-0.5 text-sm font-bold">{formatPrice(product)}</span></span></button></article>)}</div>
        <p className="mt-7 text-[10px] leading-5 text-zinc-600">Satın alma altyapısı Shopier / Shopify entegrasyonuna hazırdır.</p>
      </div>
      {selected && <div className="fixed inset-0 z-[90] grid place-items-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm" onClick={() => setSelected(null)}><div role="dialog" aria-modal="true" aria-label={`${selected.name} ürün detayları`} className="relative my-auto w-full max-w-xl border border-white/15 bg-[#17181b] p-5 sm:p-7" onClick={(event) => event.stopPropagation()}><button aria-label="Pencereyi kapat" onClick={() => setSelected(null)} className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center border border-white/10 bg-black/60 text-zinc-400 hover:text-white"><X size={17} /></button><div className="relative mb-5 aspect-[16/9] overflow-hidden bg-[#101114]"><Image src={selected.image} alt={selected.name} fill sizes="(max-width: 640px) 100vw, 560px" className="object-contain" /></div><span className="section-kicker">{displayCategory(selected.category)} · {selected.badge}</span><h3 className="mt-2 font-display text-2xl font-bold uppercase sm:text-3xl">{selected.name}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{selected.shortDesc}</p><p className="mt-3 text-lg font-bold">{formatPrice(selected)}</p><label className="mt-5 block text-[10px] font-bold uppercase tracking-[1px] text-zinc-400">Varyant<select value={size} onChange={(event) => setSize(event.target.value)} className="mt-2 block w-full border border-white/15 bg-[#101114] p-3 text-sm text-white">{selected.sizes.map((option) => <option key={option}>{option}</option>)}</select></label><button onClick={addToCart} className="mt-5 flex w-full items-center justify-center gap-2 bg-orange py-4 text-xs font-bold uppercase tracking-[1px] transition hover:bg-[#ff7043]"><Check size={15} /> Sepete ekle · {formatPrice(selected)}</button><a href="https://www.shopier.com/" target="_blank" rel="noreferrer" className="mt-3 block w-full border border-white/15 py-4 text-center text-[10px] font-bold uppercase tracking-[1px] transition hover:border-white/40">Hemen satın al <ArrowRight className="ml-1 inline" size={13} /></a></div></div>}
    </section>
  );
}