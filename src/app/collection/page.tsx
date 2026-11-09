import CollectionClient from "@/components/CollectionClient";import { products } from "@/data/products";
export const metadata={title:"Collection"};
export default function Collection(){return <section className="mx-auto max-w-7xl px-5 py-20">
 <h1 className="font-serif text-5xl text-deep md:text-7xl">Discover the Collection</h1>
 <p className="mb-12 mt-3 text-earth">Thoughtfully presented pieces inspired by the beauty and heritage of Sri Lanka.</p>
 <CollectionClient items={products}/></section>}
