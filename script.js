document.addEventListener("DOMContentLoaded", function() {
    const downloadBtn = document.getElementById("downloadBtn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            // Importar jsPDF y html2canvas
            const { jsPDF } = window.jspdf;

            html2canvas(document.querySelector("body")).then(canvas => {
                const imgData = canvas.toDataURL("image/png");
                const pdf = new jsPDF();

                // Ajustar el tamaño de la imagen al tamaño del PDF
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

                pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
                pdf.save("Mi_CV.pdf");
            });
        });
    }
});



