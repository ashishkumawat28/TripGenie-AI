import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generateTripPDF = (trip) => {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(22);
  doc.setTextColor(30, 64, 175);
  doc.text("Voyara AI", 14, 20);

  // Trip Info
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);

  doc.text(`Trip: ${trip.tripTitle}`, 14, 35);
  doc.text(`Destination: ${trip.destination}`, 14, 45);
  doc.text(`Budget: ${trip.totalBudget}`, 14, 55);

  let currentY = 70;

  trip.days.forEach((day) => {
    
    // Check if next day's content will fit
    if (currentY > 240) {
    doc.addPage();
    currentY = 20;
    }

    doc.setFontSize(15);
    doc.setTextColor(37, 99, 235);

    doc.text(`Day ${day.day}: ${day.title}`, 14, currentY);

    currentY += 10;

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    doc.text("Places:", 14, currentY);

    currentY += 7;

    day.places.forEach((place) => {
        if (currentY > 280) {
            doc.addPage();
            currentY = 20;
        }
        doc.text(`• ${place}`, 20, currentY);
        currentY += 7;
    });

    doc.text("Food:", 14, currentY);

    currentY += 7;

    day.food.forEach((food) => {
        if (currentY > 280) {
            doc.addPage();
            currentY = 20;
        }
        doc.text(`• ${food}`, 20, currentY);
        currentY += 7;
    });

    doc.text(`Hotel: ${day.hotel}`, 14, currentY);

    currentY += 8;

    doc.text(`Estimated Cost: ${day.estimatedCost}`, 14, currentY);

    currentY += 15;
  });

  if (currentY > 240) {
    doc.addPage();
    currentY = 20;
  }
  
  autoTable(doc, {
    startY: currentY,
    head: [["Travel Tips"]],
    body: trip.travelTips.map((tip) => [tip]),
    theme: "striped",
    headStyles: {
      fillColor: [22, 163, 74],
    },
  });

  doc.save(`${trip.tripTitle}.pdf`);
};