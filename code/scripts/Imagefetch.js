async function Imagefetch() {
    try{

        const response = await fetch("../../resource-images/images.json");

       if (!response.ok){
           throw new Error("Could not fetch resource");
       }

       const data = await response.json();
       const img = data.imagen1.url;

       const imgElement = document.getElementById("product_image");
       if (!imgElement){throw new Error("wtf is this im boutta crash out")}
       imgElement.src = img;
       console.log(data);
    }
    catch(error){
        console.error(error);
    }
}