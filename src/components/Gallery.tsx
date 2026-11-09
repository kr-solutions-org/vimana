"use client";
import { useState } from "react";import Image from "next/image";import { ChevronLeft, ChevronRight } from "lucide-react";
export default function Gallery({images,name}:{images:string[];name:string}){
  const [i,setI]=useState(0);const n=images.length;
  if(!n)return <div className="relative aspect-square bg-sand"><Image src="/images/brand/lotus.jpg" alt="" aria-hidden fill sizes="50vw" className="object-contain p-16 opacity-40 mix-blend-multiply"/></div>;
  return <div className="relative aspect-square overflow-hidden bg-sand"><Image src={images[i]} alt={`${name} photo ${i+1}`} fill priority sizes="50vw" className="object-cover"/>
   {n>1&&<>
    <button aria-label="Previous image" onClick={()=>setI((i-1+n)%n)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-cream/90 p-2"><ChevronLeft/></button>
    <button aria-label="Next image" onClick={()=>setI((i+1)%n)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-cream/90 p-2"><ChevronRight/></button></>}</div>;
}
