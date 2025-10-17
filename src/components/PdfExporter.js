import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const exportToPdf = async (previewRef) => {
  const input = previewRef.current;
  const canvas = await html2canvas(input, {
    scale: 2,
    useCORS: true,
    logging: false,
    allowTaint: true,
    backgroundColor: "#ffffff"
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const aspectRatio = canvas.width / canvas.height;

  let imgWidth = pdfWidth;
  let imgHeight = pdfWidth / aspectRatio;
  if (imgHeight > pdfHeight) {
    imgHeight = pdfHeight;
    imgWidth = pdfHeight * aspectRatio;
  }
  const x = (pdfWidth - imgWidth) / 2;
  const y = (pdfHeight - imgHeight) / 2;

  pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
  pdf.save("vigovia-itinerary.pdf");
};

export default exportToPdf;
