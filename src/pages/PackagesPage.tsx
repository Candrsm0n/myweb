import {useState} from "react";
import packages from "../data/packages.json";
import type {WifiPackage} from "../data/types";
import {PackageCard} from "../components/PackageCard";
import {PageHeading} from "./PageHeading";

export function PackagesPage({onSelect}:{onSelect:(plan:WifiPackage)=>void}) {
  const [selectedId,setSelectedId]=useState<string|null>(null);
  const choosePlan=(plan:WifiPackage)=>{setSelectedId(plan.id);onSelect(plan);};
  return <main className="page-shell"><div className="container">
    <PageHeading eyebrow="PAKET INTERNET" title="Pilih kecepatan" accent="yang pas untukmu." description="Bandingkan kecepatan, harga, dan patokan jumlah perangkat. Konfirmasi cakupan dan rincian akhir sebelum berlangganan."/>
    <div className="package-grid">{(packages as WifiPackage[]).map(plan=><PackageCard key={plan.id} plan={plan} selected={selectedId===plan.id} onHighlight={()=>setSelectedId(plan.id)} onSelect={choosePlan}/>)}</div>
    <div className="page-note"><span className="note-mark">i</span>Unlimited, FUP, ketersediaan router, promo pasang, PPN, dan ketentuan area perlu dikonfirmasi sebelum aktivasi.</div>
    <div className="package-device-guide"><span className="kicker">PATOKAN DEVICE DI FLYER</span><div>{(packages as WifiPackage[]).map(plan=><div key={plan.id}><strong>{plan.speedMbps} Mbps</strong><span>{plan.deviceLabel}</span></div>)}</div></div>
  </div></main>;
}