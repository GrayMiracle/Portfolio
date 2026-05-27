import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const inputDir = "public/assets";
const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];

async function getImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return getImages(fullPath);
      }

      const ext = path.extname(entry.name).toLowerCase();

      if (imageExtensions.includes(ext)) {
        return fullPath;
      }

      return [];
    })
  );

  return files.flat();
}

const images = await getImages(inputDir);

for (const image of images) {
  const parsed = path.parse(image);
  const ext = parsed.ext.toLowerCase();
  const outputPath = path.join(parsed.dir, `${parsed.name}.webp`);

  if (ext === ".gif") {
    const metadata = await sharp(image, { animated: true }).metadata();

    await sharp(image, { animated: true })
      .resize({
        width: 1200,
        withoutEnlargement: true,
      })
      .webp({
        quality: 75,
        effort: 6,
        loop: metadata.loop ?? 0,
        delay: metadata.delay,
      })
      .toFile(outputPath);

    console.log(`Optimized animated GIF: ${outputPath}`);
  } else {
    await sharp(image)
      .resize({
        width: 1200,
        withoutEnlargement: true,
      })
      .webp({
        quality: 75,
        effort: 6,
      })
      .toFile(outputPath);

    console.log(`Optimized still image: ${outputPath}`);
  }
}