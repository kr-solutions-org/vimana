import { notFound } from "next/navigation";import Link from "next/link";import { products, getProduct, availabilityLabel } from "@/data/products";
import Gallery from "@/components/Gallery";import { waLink } from "@/config/site";
export const generateStaticParams=()=>products.map(p=>({slug:p.slug}));
export function generateMetadata({params}:{params:{slug:string}}){const p=getProduct(params.slug);return {title:p?.name??"Product",description:p?.shortDescription}}
export default function ProductPage({params}:{params:{slug:string}}){
  const p=getProduct(params.slug);if(!p)notFound();
  const msg=`Hello Vimana Collective, I am interested in ${p.name}. Could you please share more information about this product?`;
  return <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
   <Gallery images={p.images} name={p.name}/>
   <div><Link href="/collection" className="text-xs uppercase tracking-widest text-gold">← Collection</Link>
    <p className="mt-6 text-[11px] uppercase tracking-[.2em] text-gold">{p.category}</p><h1 className="font-serif text-5xl text-deep">{p.name}</h1>
    <p className="mt-2 text-sm">{availabilityLabel[p.availability]} · {p.price??"Contact for Price"}</p>
    <p className="mt-6 text-earth">{p.fullDescription}</p>
    {p.materials&&<p className="mt-4 text-sm"><b>Materials:</b> {p.materials.join(", ")}</p>}{p.dimensions&&<p className="text-sm"><b>Dimensions:</b> {p.dimensions}</p>}
    <a href={waLink(msg)} target="_blank" rel="noopener" className="btn btn-solid mt-8">Enquire About This Product</a></div></section>;
}
