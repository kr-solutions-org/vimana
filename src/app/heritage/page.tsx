import Reveal from "@/components/Reveal";
export const metadata={title:"Heritage"};
const themes=["Lotus designs","Kandyan architecture","Ambalama structures","Handloom","Traditional pottery","Brass craftsmanship","Wood carving","Traditional masks"];
export default function Heritage(){return <section className="mx-auto max-w-6xl px-5 py-24">
 <Reveal><h1 className="font-serif text-5xl text-deep md:text-7xl">Sri Lankan Heritage</h1><p className="mt-4 max-w-xl text-earth">Themes that inspire the collection. Authentic Sri Lankan photography and text to be supplied; none is invented here.</p></Reveal>
 <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{themes.map((t,i)=><Reveal key={t} delay={(i%4)*.08}><div className="flex aspect-[3/4] items-end border border-gold/50 bg-sand p-5"><h2 className="font-serif text-2xl text-earth">{t}</h2></div></Reveal>)}</div></section>}
