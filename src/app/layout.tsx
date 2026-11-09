import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Noto_Serif_Sinhala } from "next/font/google";
import "./globals.css";import Nav from "@/components/Nav";import Footer from "@/components/Footer";import { site } from "@/config/site";
const serif=Cormorant_Garamond({subsets:["latin"],weight:["300","400","500","600"],variable:"--f-serif"});
const sans=DM_Sans({subsets:["latin"],variable:"--f-sans"});
const sinhala=Noto_Serif_Sinhala({subsets:["sinhala"],variable:"--f-sinhala"});
export const metadata: Metadata = {metadataBase:new URL(site.url),title:{default:"VIMĀNA Collective | The Art of Sri Lankan Heritage",template:"%s | VIMĀNA Collective"},
  description:"Discover the timeless beauty of Sri Lankan heritage through culture, craftsmanship and thoughtful living.",openGraph:{title:"VIMĀNA Collective",images:["/images/brand/lotus.jpg"]}};
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en" className={`${serif.variable} ${sans.variable} ${sinhala.variable}`}><body><Nav/><main className="pt-16 md:pt-20">{children}</main><Footer/></body></html>;
}
