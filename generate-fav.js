// make sure to have the logo.svg in the public folder

/**
 * Generate favicons from logo.svg
 * 
 * Prerequisites:
 * npm install sharp
 * 
 * Usage:
 * node generate-favicons.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.log('Sharp not found. Installing...');
  console.log('Run: npm install sharp');
  console.log('Then run this script again.');
  process.exit(1);
}

const sizes = [16, 32, 48, 64, 128, 256, 512];
const appleSizes = [180]; // For apple-touch-icon
const inputSvg = path.join(__dirname, 'public', 'logo.svg');
const outputDir = path.join(__dirname, 'public');

async function generateFavicons() {
  try {
    // Read the SVG file
    const svgBuffer = fs.readFileSync(inputSvg);
    
    console.log('Generating favicons...');
    
    // Generate different sizes
    for (const size of sizes) {
      const outputFile = path.join(outputDir, `favicon-${size}x${size}.png`);
      
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(outputFile);
      
      console.log(`✓ Generated favicon-${size}x${size}.png`);
    }

    // Generate apple touch icons
    for (const size of appleSizes) {
      const outputFile = path.join(outputDir, `apple-touch-icon.png`);
      const precomposedFile = path.join(outputDir, `apple-touch-icon-precomposed.png`);
      
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(outputFile);

      await sharp(svgBuffer)
        .resize(size, size) 
        .png()
        .toFile(precomposedFile);
        
      console.log(`✓ Generated apple-touch-icon.png and apple-touch-icon-precomposed.png (${size}x${size})`);
    }
    
    // Generate favicon.ico (32x32)
    const icoFile = path.join(outputDir, 'favicon.ico');
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(icoFile);
    
    console.log('✓ Generated favicon.ico');
    console.log(`
🎉 All favicons generated successfully!

Add this to your metadata:
export const metadata: Metadata = {
  title: "API Tester",
  description:
    "Test your APIs with a clean, modern interface. Built with Next.js, React, and Tailwind CSS.",
  keywords: ["API", "testing", "Postman", "REST", "HTTP", "developer tools"],
  authors: [{ name: "Om Shejul" }],
  creator: "Om Shejul",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico", 
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon-precomposed.png", sizes: "180x180", type: "image/png" }
    ],
  },
  openGraph: {
    title: "API Tester",
    description: "Test your APIs with a clean, modern interface",
    type: "website",
  },
};`);
    
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();