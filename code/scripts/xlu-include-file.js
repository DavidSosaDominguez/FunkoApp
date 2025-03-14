async function xLuIncludeFile() {
    let elements = document.querySelectorAll("[xlu-include-file]");

    // Mapeamos todas las promesas de carga
    let fetchPromises = Array.from(elements).map(async (el) => {
        let file = el.getAttribute("xlu-include-file");
        let clonedElement = el.cloneNode(false);

        try {
            let response = await fetch(file);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            let content = await response.text();

            if (file === "article-template.html") {
                let articleData = {
                    title: el.getAttribute("data-title"),
                    subtitle: el.getAttribute("data-subtitle"),
                    date: el.getAttribute("data-date"),
                    displayDate: el.getAttribute("data-display-date"),
                    content: el.getAttribute("data-content"),
                    image: el.getAttribute("data-image"),
                    imageCaption: el.getAttribute("data-image-caption")
                };

                content = content.replace(/{{title}}/g, articleData.title)
                    .replace(/{{subtitle}}/g, articleData.subtitle)
                    .replace(/{{date}}/g, articleData.date)
                    .replace(/{{displayDate}}/g, articleData.displayDate)
                    .replace(/{{content}}/g, articleData.content)
                    .replace(/{{image}}/g, articleData.image || '')
                    .replace(/{{imageCaption}}/g, articleData.imageCaption || '');
            }

            clonedElement.removeAttribute("xlu-include-file");
            clonedElement.innerHTML = content;
            el.replaceWith(clonedElement);
        } catch (error) {
            console.error("Error fetching file:", error);
        }
    });

    // Esperamos que todas las inclusiones se completen
    await Promise.all(fetchPromises);
}
