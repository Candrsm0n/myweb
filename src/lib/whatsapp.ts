import business from "../data/business.json";
import type { OrderDetails, WifiPackage } from "../data/types";

const formatter = new Intl.NumberFormat(business.locale, {
  style: "currency",
  currency: business.currency,
  maximumFractionDigits: 0
});

export function formatPrice(amount: number): string {
  return formatter.format(amount);
}

export function normalizePhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.startsWith("0")) return "62" + digits.slice(1);
  return digits;
}

export function makeWhatsAppUrl(message: string): string {
  const number = business.whatsappNumber.replace(/\D/g, "");
  return "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
}

export function orderMessage(details: OrderDetails, selectedPackage: WifiPackage): string {
  const latitude = details.latitude.trim();
  const longitude = details.longitude.trim();
  const coordinates = latitude && longitude
    ? latitude + ", " + longitude + "\nPeta: https://maps.google.com/?q=" + latitude + "," + longitude
    : "Belum dibagikan";

  return [
    "Halo Teknisi Wifi, saya ingin mendaftar layanan internet.",
    "",
    "Nama: " + details.name.trim(),
    "Nomor WhatsApp: " + normalizePhone(details.phone),
    "Paket: " + selectedPackage.name + " — " + selectedPackage.speedMbps + " Mbps",
    "Harga paket: " + formatPrice(selectedPackage.monthlyPrice) + " / bulan",
    "Kuota: " + selectedPackage.quota,
    "Batas perangkat: " + selectedPackage.deviceLabel,
    "Alamat pemasangan: " + details.address.trim(),
    "Koordinat: " + coordinates,
    "",
    "Mohon cek cakupan, promo, PPN/FUP, biaya awal, dan jadwal pemasangan. Terima kasih."
  ].join("\n");
}

export function coverageMessage(area: string, address: string, latitude: string, longitude: string): string {
  const coords = latitude && longitude ? latitude + ", " + longitude : "Belum tersedia";
  return [
    "Halo Teknisi Wifi, saya ingin mengecek cakupan jaringan.",
    "",
    "Area: " + area.trim(),
    "Alamat: " + (address.trim() || "Belum diisi"),
    "Koordinat: " + coords,
    "",
    "Mohon konfirmasi apakah jaringan tersedia di lokasi tersebut."
  ].join("\n");
}
