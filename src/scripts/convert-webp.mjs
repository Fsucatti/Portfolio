// scripts/convert-webp.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = path.join(process.cwd(), "public/projects");
const outputDir = inputDir; // overwrite in same folder

// Ensure directory exists
if (!fs.existsSync(inputDir)) {
  console.error("❌ Input directory does not exist:", inputDir);
  process.exit(1);
}

// Supported formats
const supported = [".jpg", ".jpeg", ".png"];

fs.readdirSync(inputDir).forEach(async (file) => {
  const ext = path.extname(file).toLowerCase();

  if (!supported.includes(ext)) return;

  const inputPath = path.join(inputDir, file);
  const baseName = path.basename(file, ext);
  const outputPath = path.join(outputDir, `${baseName}.webp`);

  try {
    await sharp(inputPath)
      .resize(1200, null, { withoutEnlargement: true }) // max width 1200px
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`✅ Converted: ${file} → ${baseName}.webp`);
  } catch (err) {
    console.error(`❌ Error converting ${file}:`, err);
  }
});
