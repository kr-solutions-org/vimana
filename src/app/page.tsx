"use client";
import Link from "next/link";import { motion, useScroll, useTransform } from "framer-motion";
import Lotus from "@/components/Lotus";import Reveal from "@/components/Reveal";import { site } from "@/config/site";
const words=["Rooted in Tradition.","Inspired by Tomorrow."];
export default function Home(){
  const {scrollY}=useScroll();const y=useTransform(scrollY,[0,800],[0,120]);
  return <>
  <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden">
    <motion.div style={{y}} initial={{opacity:0,scale:.9}} animate={{opacity:.55,scale:1}} transition={{duration:2}} className="pointer-events-none absolute -right-[20%] top-1/2 w-[110vw] max-w-[900px] -translate-y-1/2 md:right-[-8%]"><Lotus size={900} className="w-full h-auto"/></motion.div>
    <div className="relative mx-auto w-full max-w-7xl px-5">
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.6}} className="font-sinhala text-3xl text-earth">{site.sinhala}</motion.p>
      <h1 className="mt-4 font-serif text-5xl font-light leading-[1.05] text-deep sm:text-7xl lg:text-8xl">{words.map((w,i)=><span key={w} className="block overflow-hidden"><motion.span className="block" initial={{y:"110%"}} animate={{y:0}} transition={{duration:1,delay:.9+i*.2,ease:[.22,1,.36,1]}}>{w}</motion.span></span>)}</h1>
      <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:1.5,duration:.8}} className="mt-6 max-w-lg text-lg text-earth">Discover the timeless beauty of Sri Lankan heritage through the art of culture, craftsmanship and thoughtful living.</motion.p>
      <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:1.7,duration:.8}} className="mt-9 flex flex-wrap gap-4">
        <Link href="/collection" className="btn btn-solid">Explore Our Collection</Link><Link href="/our-story" className="btn btn-line">Discover Our Story</Link></motion.div>
    </div></section>
  <section className="bg-sand py-24"><div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
    <Reveal><Lotus size={520} className="mx-auto w-3/4 h-auto"/></Reveal>
    <Reveal delay={.15}><h2 className="font-serif text-4xl text-deep md:text-6xl">Every Tradition Holds a Story.</h2>
      <p className="mt-5 text-earth">Vimāna Collective presents pieces inspired by the beauty and heritage of Sri Lanka. [Editable placeholder: replace with the brand's own story.]</p>
      <Link href="/collection" className="btn btn-line mt-8">View the Collection</Link></Reveal></div></section></>;
}
