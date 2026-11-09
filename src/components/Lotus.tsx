import Image from "next/image";
export default function Lotus({size=600,className="",spin=true}:{size?:number;className?:string;spin?:boolean}){
  return <Image src="/images/brand/lotus.jpg" alt="" aria-hidden width={size} height={size} className={`rounded-full mix-blend-multiply ${spin?"spin-slow":""} ${className}`}/>;
}
