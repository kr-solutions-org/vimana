import Link from "next/link";import Image from "next/image";import { Instagram, Facebook } from "lucide-react";import { site, nav } from "@/config/site";
export default function Footer(){
  return <footer className="relative overflow-hidden bg-deep text-sand">
    <Image src="/images/brand/watermark.png" alt="" aria-hidden width={1414} height={2000} className="pointer-events-none absolute -right-20 top-1/2 h-[140%] w-auto -translate-y-1/2 opacity-[.07]"/>
    <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3">
      <div><p className="font-sinhala text-4xl">{site.sinhala}</p><p className="mt-1 font-serif text-2xl tracking-[.3em]">VIMĀNA</p><p className="mt-4 max-w-xs text-sm opacity-80">Sri Lankan heritage, craftsmanship and thoughtful living.</p></div>
      <ul className="space-y-2 text-sm">{nav.map(([l,h])=><li key={h}><Link href={h} className="hover:text-gold">{l}</Link></li>)}</ul>
      <div className="space-y-3 text-sm"><div className="flex gap-4"><a href={site.instagram} aria-label="Instagram" target="_blank" rel="noopener"><Instagram/></a><a href={site.facebook} aria-label="Facebook" target="_blank" rel="noopener"><Facebook/></a></div>
        {site.email&&<p>{site.email}</p>}{site.location&&<p>{site.location}</p>}</div>
    </div>
    <div className="relative border-t border-white/10 py-5 text-center text-xs opacity-70">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
  </footer>;
}
