import type {WifiPackage} from "../data/types";
import {formatPrice} from "../lib/whatsapp";
import {Icon} from "./Icons";

export function PackageCard({plan,onSelect,onHighlight,selected=false}:{plan:WifiPackage;onSelect:(plan:WifiPackage)=>void;onHighlight:()=>void;selected?:boolean}) {
  const className=["plan-card",plan.featured?"featured":"",selected?"selected":""].filter(Boolean).join(" ");
  return <article className={className} aria-current={selected?"true":undefined} onClick={onHighlight}>
    {plan.badge&&!selected&&<span className="badge">{plan.badge}</span>}
    <div className="plan-top"><span>{plan.name}</span><strong>{plan.speedMbps}<small>Mbps</small></strong></div>
    <p className="plan-desc">{plan.description}</p>
    <div className="plan-price">{formatPrice(plan.monthlyPrice)}<small>/ bulan</small></div>
    <ul><li><Icon name="wifi"/>{plan.quota}</li><li><Icon name="phone"/>{plan.deviceLabel}</li><li><Icon name="router"/>Router dual-band*</li><li><Icon name="check"/>Biaya pasang sesuai promo*</li></ul>
    <button className={"button plan-btn "+(selected||plan.featured?"button-primary":"button-outline")} onClick={()=>onSelect(plan)} type="button">{selected?"Paket dipilih":"Pilih paket"} <Icon name={selected?"check":"arrow"}/></button>
    <small className="plan-note">FUP, PPN, promo, dan syarat area dikonfirmasi.</small>
  </article>;
}