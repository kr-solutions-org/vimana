import ContactForm from "@/components/ContactForm";import { site, waLink } from "@/config/site";
export const metadata={title:"Contact"};
export default function Contact(){return <section className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-2">
 <div><h1 className="font-serif text-5xl text-deep md:text-7xl">Let&apos;s Connect.</h1>
  <p className="mt-4 text-earth">We would love to hear from you. Discover a piece, ask a question or simply connect with Vimana Collective.</p>
  <ul className="mt-8 space-y-3 text-sm"><li><a className="underline" href={waLink("Hello Vimana Collective")}>WhatsApp</a></li><li><a className="underline" href={site.instagram}>Instagram</a></li><li><a className="underline" href={site.facebook}>Facebook</a></li>
  {site.email&&<li>{site.email}</li>}{site.location&&<li>{site.location}</li>}</ul></div>
 <ContactForm/></section>}
