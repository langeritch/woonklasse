import { Jimp, intToRGBA, rgbaToInt } from "jimp";

async function processImage(inputPath) {
    console.log(`Processing ${inputPath}...`);
    try {
        const image = await Jimp.read(inputPath);
        
        // Get the background color from the top-left pixel
        const bgColorInt = image.getPixelColor(0, 0);
        const bgColor = intToRGBA(bgColorInt);
        
        console.log(`Detected background color: rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})`);
        
        // Tolerance for considering a pixel as background (0-255)
        const tolerance = 40;

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];

            const diffR = Math.abs(r - bgColor.r);
            const diffG = Math.abs(g - bgColor.g);
            const diffB = Math.abs(b - bgColor.b);

            // If the pixel is close to the background color, make it transparent
            if (diffR < tolerance && diffG < tolerance && diffB < tolerance) {
                this.bitmap.data[idx + 3] = 0; // Set alpha to 0
            }
        });
        
        await image.write(inputPath);
        console.log(`Successfully removed background for ${inputPath}`);
    } catch (e) {
        console.error(`Failed to process ${inputPath}:`, e);
    }
}

async function run() {
    await processImage('./public/woonklasse-logo.png');
    await processImage('./public/badkamerstijl-logo.png');
}

run();
