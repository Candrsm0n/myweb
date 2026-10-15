import { z } from "zod";

const coordinate = z
  .string()
  .trim()
  .refine(
    (value) => value === "" || Number.isFinite(Number(value)),
    { error: "Masukkan koordinat angka yang valid." }
  );

const phoneNumber = z
  .string()
  .trim()
  .min(9, "Masukkan nomor WhatsApp yang valid.")
  .max(24, "Nomor terlalu panjang.")
  .regex(/^[+0-9][0-9\s().-]*$/, "Gunakan angka dan tanda + untuk nomor WhatsApp.")
  .refine((value) => {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 9 && digits.length <= 15;
  }, "Nomor WhatsApp harus berisi 9–15 digit.");

export const orderSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter.").max(80, "Nama maksimal 80 karakter."),
  phone: phoneNumber,
  packageId: z.enum(["home-10", "home-20", "home-30", "home-40"], {
    error: "Pilih paket yang tersedia."
  }),
  address: z.string().trim().min(10, "Alamat minimal 10 karakter.").max(240, "Alamat maksimal 240 karakter."),
  latitude: coordinate,
  longitude: coordinate,
  terms: z.boolean().refine((value) => value, { error: "Setujui penggunaan data untuk permintaan pemasangan." })
}).superRefine((values, context) => {
  const hasLatitude = values.latitude !== "";
  const hasLongitude = values.longitude !== "";
  if (hasLatitude !== hasLongitude) {
    context.addIssue({
      code: "custom",
      path: [hasLatitude ? "longitude" : "latitude"],
      message: "Isi kedua koordinat atau kosongkan keduanya."
    });
  }
  if (hasLatitude && Number(values.latitude) < -90 || hasLatitude && Number(values.latitude) > 90) {
    context.addIssue({ code: "custom", path: ["latitude"], message: "Latitude harus di antara -90 dan 90." });
  }
  if (hasLongitude && Number(values.longitude) < -180 || hasLongitude && Number(values.longitude) > 180) {
    context.addIssue({ code: "custom", path: ["longitude"], message: "Longitude harus di antara -180 dan 180." });
  }
});

export const coverageSchema = z.object({
  area: z.string().trim().min(3, "Masukkan area minimal 3 karakter.").max(100, "Nama area terlalu panjang."),
  address: z.string().trim().max(240, "Alamat maksimal 240 karakter."),
  latitude: coordinate,
  longitude: coordinate
}).superRefine((values, context) => {
  if ((values.latitude === "") !== (values.longitude === "")) {
    context.addIssue({
      code: "custom",
      path: [values.latitude === "" ? "latitude" : "longitude"],
      message: "Isi kedua koordinat atau kosongkan keduanya."
    });
  }
  if (values.latitude !== "" && (Number(values.latitude) < -90 || Number(values.latitude) > 90)) {
    context.addIssue({ code: "custom", path: ["latitude"], message: "Latitude harus di antara -90 dan 90." });
  }
  if (values.longitude !== "" && (Number(values.longitude) < -180 || Number(values.longitude) > 180)) {
    context.addIssue({ code: "custom", path: ["longitude"], message: "Longitude harus di antara -180 dan 180." });
  }
});

export type OrderFormValues = z.infer<typeof orderSchema>;
export type CoverageFormValues = z.infer<typeof coverageSchema>;
