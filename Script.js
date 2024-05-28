function toggleMenu() {
    const menu = document.querySelector('.navigation .menu');
    const navMenu = document.querySelector('.navigation .nav-menu');
    menu.classList.toggle('open');
    navMenu.classList.toggle('open');
}
document.addEventListener("DOMContentLoaded", function() {
    var pdfElement = document.getElementById('pdf-viewer');
    var pdfUrl = 'pdf/PEI_Franc.pdf';

    // Carregar o PDF
    pdfjsLib.getDocument(pdfUrl).promise.then(function(pdf) {
        pdf.getPage(1).then(function(page) {
            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            var viewport = page.getViewport({ scale: 1.5 });
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };

            page.render(renderContext);
            pdfElement.appendChild(canvas);
        });
    });
});
