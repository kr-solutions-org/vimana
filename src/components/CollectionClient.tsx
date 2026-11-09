"use client";
import { useMemo, useState } from "react";import { Product, categories } from "@/data/products";import ProductCard from "./ProductCard";import Reveal from "./Reveal";
export default function CollectionClient({items}:{items:Product[]}){
  const [cat,setCat]=useState("All");const [q,setQ]=useState("");const [sort,setSort]=useState("order");
  const list=useMemo(()=>items.filter(p=>(cat==="All"||p.category===cat)&&(p.name+p.shortDescription).toLowerCase().includes(q.toLowerCase()))
    .sort((a,b)=>sort==="name"?a.name.localeCompare(b.name):a.displayOrder-b.displayOrder),[items,cat,q,sort]);
  return <>
   <div className="flex flex-wrap items-center gap-3">
    <div className="flex flex-wrap gap-2" role="group" aria-label="Categories">{["All",...categories].map(c=><button key={c} onClick={()=>setCat(c)} aria-pressed={cat===c} className={`border px-4 py-2 text-xs uppercase tracking-widest ${cat===c?"border-earth bg-earth text-cream":"border-gold/60"}`}>{c}</button>)}</div>
    <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search" aria-label="Search products" className="ml-auto w-full border border-gold/60 bg-cream px-4 py-2 text-sm sm:w-56"/>
    <select value={sort} onChange={e=>setSort(e.target.value)} aria-label="Sort" className="border border-gold/60 bg-cream px-3 py-2 text-sm"><option value="order">Featured order</option><option value="name">Name A to Z</option></select></div>
   <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-3 xl:grid-cols-4">{list.map((p,i)=><Reveal key={p.id} delay={(i%4)*.07}><ProductCard p={p}/></Reveal>)}</div>
   {!list.length&&<p className="mt-12 text-earth">No products match your search.</p>}</>;
}
