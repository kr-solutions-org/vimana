"use client";
import Link from "next/link";import Image from "next/image";import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";import { AnimatePresence, motion } from "framer-motion";import { Menu, X } from "lucide-react";
import { nav } from "@/config/site";
export default function Nav(){
  const path=usePathname();const [solid,setSolid]=useState(false);const [open,setOpen]=useState(false);
  useEffect(()=>{const f=()=>setSolid(scrollY>40);f();addEventListener("scroll",f,{passive:true});return()=>removeEventListener("scroll",f)},[]);
  useEffect(()=>setOpen(false),[path]);
  const active=(h:string)=>h==="/"?path==="/":path.startsWith(h);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solid||open?"bg-ivory/95 backdrop-blur shadow-sm":"bg-transparent"}`}>
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20">
      <Link href="/" aria-label="VIMĀNA Collective home"><Image src="/images/brand/logo.png" alt="VIMĀNA Collective" width={1414} height={2000} className="h-12 w-auto mix-blend-multiply md:h-14" priority/></Link>
      <nav className="hidden gap-9 md:flex" aria-label="Main">{nav.map(([l,h])=><Link key={h} href={h} className="group relative py-2 text-xs uppercase tracking-[.2em] text-earth">{l}
        <span className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-500 ${active(h)?"scale-x-100":"scale-x-0 group-hover:scale-x-100"}`}/></Link>)}</nav>
      <button className="p-2 md:hidden" onClick={()=>setOpen(!open)} aria-label={open?"Close menu":"Open menu"} aria-expanded={open}>{open?<X/>:<Menu/>}</button>
    </div>
    <AnimatePresence>{open&&<motion.nav initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden md:hidden" aria-label="Mobile">
      <ul className="px-5 pb-8">{nav.map(([l,h])=><li key={h}><Link href={h} className={`block border-b border-sand py-4 font-serif text-3xl ${active(h)?"text-gold":"text-earth"}`}>{l}</Link></li>)}</ul></motion.nav>}</AnimatePresence>
  </header>;
}
