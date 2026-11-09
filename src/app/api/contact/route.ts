import { NextResponse } from "next/server";
export async function POST(req:Request){
  const b=await req.json().catch(()=>null);
  if(!b||!b.name||!/^\S+@\S+\.\S+$/.test(b.email||"")||!b.message)return NextResponse.json({error:"Invalid"},{status:400});
  const {RESEND_API_KEY:k,CONTACT_TO_EMAIL:to,CONTACT_FROM_EMAIL:from}=process.env;
  if(!k||!to||!from)return NextResponse.json({error:"Email not configured"},{status:501});
  const esc=(s:string)=>String(s).replace(/[<>&]/g,c=>c==="<"?"&lt;":c===">"?"&gt;":"&amp;");
  const r=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${k}`,"Content-Type":"application/json"},
   body:JSON.stringify({from,to,reply_to:b.email,subject:`[Website] ${esc(b.subject||"Enquiry")}`,html:`<p><b>${esc(b.name)}</b> (${esc(b.email)}, ${esc(b.phone||"-")})</p><p>${esc(b.message)}</p>`})});
  return r.ok?NextResponse.json({ok:true}):NextResponse.json({error:"Send failed"},{status:502});
}
