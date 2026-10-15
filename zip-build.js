import archiver from "archiver";
import { createWriteStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const zipPath = path.resolve(projectRoot, "..", "AstraHOME-WiFi-Project.zip");
const output = createWriteStream(zipPath);
const archive = archiver("zip", { zlib: { level: 9 } });

output.on("close", () => {
  console.log("ZIP berhasil dibuat: " + zipPath);
  console.log("Ukuran: " + archive.pointer() + " bytes");
});

output.on("error", (error) => {
  console.error("Gagal menulis ZIP:", error.message);
  process.exitCode = 1;
});

archive.on("warning", (error) => {
  if (error.code === "ENOENT") {
    console.warn("File dilewati:", error.message);
    return;
  }
  throw error;
});

archive.on("error", (error) => {
  console.error("Gagal membuat ZIP:", error.message);
  process.exitCode = 1;
});

archive.pipe(output);
archive.glob("**/*", {
  cwd: projectRoot,
  dot: true,
  ignore: [
    "node_modules/**",
    "dist/**",
    ".git/**",
    "*.zip",
    "coverage/**"
  ]
});
archive.finalize();
