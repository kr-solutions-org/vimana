import Link from "next/link";import Image from "next/image";import { Product, availabilityLabel } from "@/data/products";
export default function ProductCard({p}:{p:Product}){
  return <Link href={`/products/${p.slug}`} className="group block">
    <div className="relative aspect-[4/5] overflow-hidden bg-sand">{p.images[0]?<Image src={p.images[0]} alt={p.name} fill sizes="(min-width:1024px) 25vw,50vw" className="object-cover transition-transform duration-700 group-hover:scale-105"/>
      :<Image src="/images/brand/lotus.jpg" alt="" aria-hidden fill sizes="25vw" className="object-contain p-10 opacity-40 mix-blend-multiply"/>}
      <span className="absolute left-3 top-3 bg-cream/90 px-2 py-1 text-[10px] uppercase tracking-widest text-earth">{availabilityLabel[p.availability]}</span></div>
    <p className="mt-4 text-[11px] uppercase tracking-[.2em] text-gold">{p.category}</p>
    <h3 className="font-serif text-2xl text-deep">{p.name}</h3><p className="text-sm text-earth">{p.shortDescription}</p>
    <p className="mt-1 text-sm">{p.price??"Contact for Price"}</p><span className="mt-2 inline-block border-b border-gold text-xs uppercase tracking-widest">View Details</span></Link>;
}
