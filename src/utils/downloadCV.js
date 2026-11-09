/**
 * Utility to reliably download Tajwar's official graphic CV PDF.
 * Ensures that the downloaded file is a verified PDF document and
 * prevents accidental download of proxy loading/error HTML pages.
 */
export async function downloadCVPdf(e) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  try {
    const response = await fetch('/Tajwar_CV.pdf', {
      cache: 'no-cache',
      headers: {
        Accept: 'application/pdf',
      },
    });

    if (!response.ok) {
      throw new Error(`Server returned status ${response.status}`);
    }

    const blob = await response.blob();

    // Verify first 5 bytes are '%PDF-' to ensure it's not an HTML startup/error page
    const magicBytes = await blob.slice(0, 5).text();
    if (!magicBytes.startsWith('%PDF-')) {
      console.warn('Fetched resource is not a PDF (%PDF- header missing). Navigating directly to file.');
      window.location.href = '/Tajwar_CV.pdf';
      return;
    }

    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'Tajwar_CV.pdf';
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    }, 1000);
  } catch (error) {
    console.error('Direct blob download failed, falling back to direct location:', error);
    window.location.href = '/Tajwar_CV.pdf';
  }
}
