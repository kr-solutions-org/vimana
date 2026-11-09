import Reveal from "@/components/Reveal";import Lotus from "@/components/Lotus";import Link from "next/link";
export const metadata={title:"Our Story"};
export default function Story(){return <section className="relative mx-auto max-w-4xl overflow-hidden px-5 py-24">
 <Lotus size={500} className="absolute -right-40 top-10 w-96 h-auto opacity-20"/>
 <Reveal><h1 className="font-serif text-5xl text-deep md:text-7xl">Every Tradition Holds a Story.</h1></Reveal>
 <Reveal delay={.1}><p className="mt-8 text-lg text-earth">[Placeholder] Replace this text with the real Vimāna Collective story: its inspiration, makers and values. No claims have been invented here.</p></Reveal>
 <Link href="/collection" className="btn btn-solid mt-10">Explore the Collection</Link></section>}
