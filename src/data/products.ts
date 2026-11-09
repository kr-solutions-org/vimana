export type Availability = "in-stock" | "made-to-order" | "sold-out";
export interface Product { id:string; slug:string; name:string; category:string; shortDescription:string; fullDescription:string;
  price?:string; images:string[]; materials?:string[]; dimensions?:string; availability:Availability; featured:boolean; displayOrder:number; }
export const categories = ["Home & Living","Textiles","Brass & Metalwork","Wood & Carving"]; // edit freely
export const availabilityLabel: Record<Availability,string> = {"in-stock":"In Stock","made-to-order":"Made to Order","sold-out":"Sold Out"};
// SAMPLE ENTRIES: not real Vimana products. Replace with real data and photos in /public/images/products.
export const products: Product[] = [
 {id:"1",slug:"sample-piece-one",name:"Sample Piece One",category:"Home & Living",shortDescription:"Sample entry. Replace with a real product.",fullDescription:"Sample entry. Replace with the real product description.",images:[],availability:"in-stock",featured:true,displayOrder:1},
 {id:"2",slug:"sample-piece-two",name:"Sample Piece Two",category:"Textiles",shortDescription:"Sample entry. Replace with a real product.",fullDescription:"Sample entry. Replace with the real product description.",images:[],availability:"made-to-order",featured:true,displayOrder:2},
 {id:"3",slug:"sample-piece-three",name:"Sample Piece Three",category:"Brass & Metalwork",shortDescription:"Sample entry. Replace with a real product.",fullDescription:"Sample entry. Replace with the real product description.",images:[],availability:"in-stock",featured:false,displayOrder:3},
];
export const getProduct = (slug:string) => products.find(p=>p.slug===slug);
