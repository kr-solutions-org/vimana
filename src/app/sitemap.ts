import { site } from "@/config/site";import { products } from "@/data/products";
export default function sitemap(){return [...["","/our-story","/collection","/heritage","/contact"],...products.map(p=>`/products/${p.slug}`)].map(u=>({url:site.url+u}))}
