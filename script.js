document.addEventListener("DOMContentLoaded", function() {
    const downloadBtn = document.getElementById("downloadBtn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            // Importar jsPDF
            const { jsPDF } = window.jspdf;

            const doc = new jsPDF();

            // Añadir contenido al PDF
            doc.setFontSize(18);
            doc.text("Mi CV", 10, 10); // Título
            doc.setFontSize(12);
            doc.text("Descripción de mi CV:", 10, 20);
            doc.text("Desarrollador de software apasionado por la tecnología.", 10, 30);
            doc.text("Contacto:", 10, 40);
            doc.text("📞 319 4146005", 10, 50);
            doc.text("Enlaces útiles:", 10, 60);
            doc.text("- Educación", 20, 70);
            doc.text("- Experiencia", 20, 80);

            // Descargar el archivo PDF
            doc.save("Mi_CV.pdf");
        });
    }
});

