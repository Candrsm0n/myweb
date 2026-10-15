import {Icon} from "./Icons";
export function Hero({onPackagesClick,onCalculatorClick}:{onPackagesClick:()=>void;onCalculatorClick:()=>void}) {
 return <section id="beranda" className="hero">
  <div className="container hero-grid">
   <div className="hero-copy">
    <span className="eyebrow"><i/> INTERNET RUMAH TANPA RIBET</span>
    <h1>Internet stabil,<br/><em>hari makin lancar.</em></h1>
    <p>Koneksi untuk kerja, belajar, streaming, dan waktu bersama keluarga. Cari paket berdasarkan jumlah perangkat, lalu cek jaringan di alamatmu.</p>
    <div className="hero-actions"><button className="button button-primary" onClick={onPackagesClick}>Lihat paket internet <Icon name="arrow"/></button><button className="button button-quiet" onClick={onCalculatorClick}><span className="play">›</span> Hitung kebutuhan Wi-Fi</button></div>
    <div className="hero-proof"><span className="proof-icon"><Icon name="wifi"/></span><div><strong>Untuk rumah, kost, dan usaha</strong><small>Internet broadband untuk aktivitas harian</small></div><span className="proof-spark">✦</span></div>
   </div>
   <div className="hero-visual">
    <div className="hero-orbit"/><div className="hero-orbit orbit-alt"/><div className="hero-wifi"><Icon name="wifi" size={102}/></div><div className="hero-beam"/>
    <div className="speed-card"><div className="speed-head"><span><i/> JARINGAN AKTIF</span><Icon name="signal"/></div><div className="speed-number">40<span>Mbps</span></div><p>Ruang koneksi lebih lega</p><div className="chart">{Array.from({length:18},(_,i)=><i key={i} style={{height:(20+(i*37%72))+"%"}} />)}</div><small>● Broadband rumah <b>24/7</b></small></div>
    <div className="float-tag tag-one"><Icon name="bolt"/><span><strong>Unlimited*</strong><small>Paket broadband</small></span></div><div className="float-tag tag-two"><Icon name="shield"/><span><strong>Wi-Fi stabil</strong><small>Nyaman dipakai</small></span></div><span className="visual-caption">CONNECTED · EVERYDAY</span><span className="hero-star star-one">✦</span><span className="hero-star star-two">✳</span>
   </div>
  </div>
  <div className="container hero-meta"><span>DIRANCANG UNTUK KEHIDUPAN DIGITALMU</span><div><span><Icon name="signal"/> Koneksi broadband</span><span><Icon name="router"/> Router dual-band*</span><span><Icon name="headphones"/> Bantuan WhatsApp</span></div></div>
 </section>;
}