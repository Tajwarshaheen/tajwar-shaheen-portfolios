import { PDFDocument } from 'pdf-lib';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

async function generateCVPdf() {
  const imagePath = path.join(
    rootDir,
    'public/assets/aistudio/White_Cream_And_Beige_Geometric_Minimalist_Graphic_Designer_Resume_7c716fe1.jpg'
  );
  
  if (!fs.existsSync(imagePath)) {
    console.error('CV source image not found at:', imagePath);
    return;
  }
  
  const imageBytes = fs.readFileSync(imagePath);
  const pdfDoc = await PDFDocument.create();
  const jpgImage = await pdfDoc.embedJpg(imageBytes);
  
  // Standard A4 dimensions in points: 595.28 x 841.89
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  
  const page = pdfDoc.addPage([pageWidth, pageHeight]);
  page.drawImage(jpgImage, {
    x: 0,
    y: 0,
    width: pageWidth,
    height: pageHeight,
  });
  
  pdfDoc.setTitle('Tajwar Shaheen - Curriculum Vitae');
  pdfDoc.setAuthor('Tajwar Shaheen');
  pdfDoc.setSubject('Curriculum Vitae');
  pdfDoc.setCreator('Tajwar Shaheen Portfolio');
  
  const pdfBytes = await pdfDoc.save();
  const targetPdf = path.join(rootDir, 'public/Tajwar_CV.pdf');
  fs.writeFileSync(targetPdf, pdfBytes);
  console.log('Successfully generated', targetPdf, '(', pdfBytes.length, 'bytes)');
}

generateCVPdf().catch(console.error);
