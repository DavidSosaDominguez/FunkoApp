function logoutUser(event) {
    event.preventDefault();
    sessionStorage.removeItem('user');
    location.reload();
}

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

            clonedElement.removeAttribute("xlu-include-file");
            clonedElement.innerHTML = content;
            el.replaceWith(clonedElement);

            if(clonedElement.tagName === 'HEADER') {
                const signupTag = document.querySelector('#sign_up');
                const loginTag = document.querySelector('#sign_in');
                const logoutTag = document.querySelector('#log-out-button');
                const cartTag = document.querySelector('#cart-button');

                const user = sessionStorage.getItem('user');

                if(!user) {
                    logoutTag.style.display = 'none';
                    cartTag.style.display = 'none';
                }else {
                    signupTag.style.display = 'none';
                    loginTag.style.display = 'none';
                }

                logoutTag.addEventListener('click', logoutUser)
            }
        } catch (error) {
            console.error("Error fetching file:", error);
        }
    });

    // Esperamos que todas las inclusiones se completen
    await Promise.all(fetchPromises);
}
