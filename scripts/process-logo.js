const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processLogo() {
  const inputPath = path.resolve(__dirname, '../BRAXVIO.png');
  const brandDir = path.resolve(__dirname, '../public/brand');
  const publicDir = path.resolve(__dirname, '../public');
  const appDir = path.resolve(__dirname, '../src/app');

  if (!fs.existsSync(brandDir)) {
    fs.mkdirSync(brandDir, { recursive: true });
  }

  console.log('Loading:', inputPath);
  
  // 1. First trim the outer transparency
  const trimmedFullBuffer = await sharp(inputPath).trim().toBuffer({ resolveWithObject: true });
  console.log('Full trimmed:', trimmedFullBuffer.info.width, 'x', trimmedFullBuffer.info.height);

  // 2. Extract ONLY the iconic blue "B" emblem (rows 0 to 402)
  // The emblem height is 403 pixels
  const pureSymbolBuffer = await sharp(trimmedFullBuffer.data)
    .extract({
      left: 0,
      top: 0,
      width: trimmedFullBuffer.info.width,
      height: 403
    })
    .trim()
    .toBuffer({ resolveWithObject: true });

  console.log('Pure B Symbol dimensions:', pureSymbolBuffer.info.width, 'x', pureSymbolBuffer.info.height);

  // 3. Create a clean square canvas with breathing room for the pure symbol
  const symW = pureSymbolBuffer.info.width;
  const symH = pureSymbolBuffer.info.height;
  const squareSize = Math.round(Math.max(symW, symH) * 1.12);

  const squareEmblem = await sharp(pureSymbolBuffer.data)
    .resize({
      width: symW,
      height: symH,
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .extend({
      top: Math.round((squareSize - symH) / 2),
      bottom: Math.round((squareSize - symH) / 2),
      left: Math.round((squareSize - symW) / 2),
      right: Math.round((squareSize - symW) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  // Save the pure symbol files
  await sharp(pureSymbolBuffer.data).png().toFile(path.join(brandDir, 'braxvio-symbol.png'));
  await sharp(squareEmblem).png().toFile(path.join(brandDir, 'braxvio-mark.png'));
  await sharp(squareEmblem).png().toFile(path.join(brandDir, 'braxvio-logo.png'));
  await sharp(squareEmblem).png().toFile(path.join(publicDir, 'braxvio-logo.png'));

  // 4. Create ultra-crisp Favicons and Apple Touch Icons from the pure B emblem
  await sharp(squareEmblem).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
  await sharp(squareEmblem).resize(48, 48).png().toFile(path.join(publicDir, 'favicon-48x48.png'));
  await sharp(squareEmblem).resize(180, 180).png().toFile(path.join(appDir, 'apple-icon.png'));
  await sharp(squareEmblem).resize(48, 48).png().toFile(path.join(appDir, 'icon.png'));
  await sharp(squareEmblem).resize(32, 32).toFile(path.join(publicDir, 'favicon.ico'));

  console.log('Favicons and app icons created with pure B symbol.');

  // 5. Generate high-craft OpenGraph card (1200x630)
  const ogEmblemBuffer = await sharp(pureSymbolBuffer.data)
    .resize({ width: 260, height: 260, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const ogSvg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#090b0e"/>
          <stop offset="50%" stop-color="#040608"/>
          <stop offset="100%" stop-color="#020305"/>
        </linearGradient>
        <radialGradient id="glowGrad" cx="25%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#0055D4" stop-opacity="0.18"/>
          <stop offset="60%" stop-color="#38bdf8" stop-opacity="0.04"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="emblemGlow" cx="80%" cy="40%" r="40%">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>
        </pattern>
      </defs>

      <!-- Background -->
      <rect width="1200" height="630" fill="url(#bgGrad)"/>
      <rect width="1200" height="630" fill="url(#glowGrad)"/>
      <rect width="1200" height="630" fill="url(#emblemGlow)"/>
      <rect width="1200" height="630" fill="url(#grid)"/>

      <!-- Accent Top Border -->
      <rect x="0" y="0" width="1200" height="4" fill="#0055D4"/>

      <!-- Inner Border Box -->
      <rect x="40" y="40" width="1120" height="550" rx="20" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>

      <!-- Category Pill -->
      <g transform="translate(100, 105)">
        <rect width="258" height="34" rx="17" fill="rgba(0, 85, 212, 0.12)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1"/>
        <text x="18" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#38bdf8" letter-spacing="1.5">TECHNOLOGY PARENT COMPANY</text>
      </g>

      <!-- Main Typography -->
      <text x="100" y="275" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="64" font-weight="800" fill="#ffffff" letter-spacing="-2">Braxvio</text>
      <text x="100" y="340" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="500" fill="#cbd5e1" letter-spacing="-0.5">We build technology ventures designed to endure.</text>

      <!-- Context Paragraph -->
      <text x="100" y="405" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="400" fill="#94a3b8">
        Infrastructure, health, fintech, and clean energy platforms across emerging markets.
      </text>

      <!-- Emblem Container Frame on Right -->
      <g transform="translate(800, 165)">
        <rect width="280" height="280" rx="32" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.09)" stroke-width="1"/>
      </g>

      <!-- Bottom Meta -->
      <g transform="translate(100, 495)">
        <text x="0" y="20" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#94a3b8" letter-spacing="0.5">Ventures: Pharmora · DevPay Africa · Pellmia · EcoLift · Kampus</text>
        <text x="880" y="20" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#38bdf8">braxvio.com</text>
      </g>
    </svg>
  `;

  const ogBase = await sharp(Buffer.from(ogSvg)).png().toBuffer();

  const ogFinal = await sharp(ogBase)
    .composite([
      {
        input: ogEmblemBuffer,
        top: 175,
        left: 810
      }
    ])
    .png()
    .toBuffer();

  await sharp(ogFinal).toFile(path.join(appDir, 'opengraph-image.png'));
  await sharp(ogFinal).toFile(path.join(appDir, 'twitter-image.png'));
  await sharp(ogFinal).toFile(path.join(publicDir, 'og-image.png'));

  console.log('OpenGraph cards refreshed with pure B emblem.');
}

processLogo().catch(err => {
  console.error('Error processing logo:', err);
  process.exit(1);
});
