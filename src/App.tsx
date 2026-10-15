import {useEffect,useState} from "react";
import type {WifiPackage} from "./data/types";
import {isAllowedHost} from "./lib/domainGuard";
import {makeWhatsAppUrl} from "./lib/whatsapp";
import {Footer} from "./components/Footer";
import {Icon} from "./components/Icons";
import {Navbar} from "./components/Navbar";
import {PaymentModal} from "./components/PaymentModal";
import {HomePage} from "./pages/HomePage";
import {PackagesPage} from "./pages/PackagesPage";
import {CalculatorPage} from "./pages/CalculatorPage";
import {CoveragePage} from "./pages/CoveragePage";
import {FAQPage} from "./pages/FAQPage";

type Route="beranda"|"paket"|"kalkulator"|"cakupan"|"faq";
function readRoute():Route {
  const route=window.location.hash.slice(1).replace("/","").split("?")[0];
  return (["beranda","paket","kalkulator","cakupan","faq"] as string[]).includes(route) ? route as Route : "beranda";
}
export default function App() {
  const [route,setRoute]=useState<Route>(readRoute);
  const [plan,setPlan]=useState<WifiPackage|null>(null);
  useEffect(()=>{
    const sync=()=>{setRoute(readRoute());window.scrollTo({top:0,behavior:"smooth"});};
    window.addEventListener("hashchange",sync);
    return ()=>window.removeEventListener("hashchange",sync);
  },[]);
  if(!isAllowedHost()) return <main className="domain-block"><Icon name="shield" size={38}/><h1>Domain belum diizinkan</h1><p>Periksa VITE_ALLOWED_HOSTS pada file .env untuk mengaktifkan domain.</p></main>;
  const chat=makeWhatsAppUrl("Halo Teknisi Wifi, saya ingin bertanya tentang layanan internet.");
  const openPackages=()=>{window.location.hash="/paket";};
  const openCalculator=()=>{window.location.hash="/kalkulator";};
  return <>
    <Navbar/>
    <div key={route} className="route-view">
      {route==="beranda"&&<HomePage onPackagesClick={openPackages} onCalculatorClick={openCalculator}/>}
      {route==="paket"&&<PackagesPage onSelect={setPlan}/>}
      {route==="kalkulator"&&<CalculatorPage onSelect={setPlan}/>}
      {route==="cakupan"&&<CoveragePage/>}
      {route==="faq"&&<FAQPage/>}
    </div>
    <Footer/>
    <a className="floating-chat" href={chat} target="_blank" rel="noreferrer" aria-label="Hubungi AstraHOME di WhatsApp"><Icon name="headphones" size={19}/><span>Chat kami</span></a>
    <PaymentModal plan={plan} onClose={()=>setPlan(null)}/>
  </>;
}