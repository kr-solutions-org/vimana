"use client";
import { useState } from "react";import { waLink } from "@/config/site";
type F={name:string;email:string;phone:string;subject:string;message:string};
const L:[keyof F,string,boolean][]=[["name","Name",false],["email","Email",false],["phone","Phone (optional)",false],["subject","Subject",false],["message","Message",true]];
export default function ContactForm(){
  const [f,setF]=useState<F>({name:"",email:"",phone:"",subject:"",message:""});const [err,setErr]=useState<Partial<F>>({});const [st,setSt]=useState<"idle"|"sending"|"ok"|"fallback">("idle");
  const validate=()=>{const e:Partial<F>={};if(f.name.trim().length<2)e.name="Please enter your name";if(!/^\S+@\S+\.\S+$/.test(f.email))e.email="Enter a valid email";
    if(f.phone&&!/^[+\d\s()-]{7,}$/.test(f.phone))e.phone="Enter a valid phone number";if(!f.subject.trim())e.subject="Required";if(f.message.trim().length<10)e.message="Please write at least 10 characters";setErr(e);return !Object.keys(e).length};
  const wa=()=>window.open(waLink(`Hello Vimana Collective, I am ${f.name}. ${f.subject}: ${f.message}`),"_blank");
  async function submit(ev:React.FormEvent){ev.preventDefault();if(!validate())return;setSt("sending");
    try{const r=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)});
      if(r.ok)setSt("ok");else{setSt("fallback");wa()}}catch{setSt("fallback");wa()}}
  if(st==="ok")return <p className="font-serif text-3xl">Thank you. We will be in touch soon.</p>;
  const cls="mt-1 w-full border border-gold/60 bg-cream px-4 py-3 text-base normal-case tracking-normal";
  return <form onSubmit={submit} noValidate className="space-y-5">{L.map(([k,label,area])=><label key={k} className="block text-xs uppercase tracking-widest text-earth">{label}
    {area?<textarea rows={5} value={f[k]} onChange={e=>setF({...f,[k]:e.target.value})} aria-invalid={!!err[k]} className={cls}/>
    :<input value={f[k]} onChange={e=>setF({...f,[k]:e.target.value})} aria-invalid={!!err[k]} className={cls}/>}
    {err[k]&&<span className="text-red-800 normal-case tracking-normal">{err[k]}</span>}</label>)}
   <button disabled={st==="sending"} className="btn btn-solid">{st==="sending"?"Sending…":"Send Message"}</button>
   {st==="fallback"&&<p className="text-sm text-earth">Email delivery is not configured yet, so WhatsApp was opened with your message instead.</p>}</form>;
}
