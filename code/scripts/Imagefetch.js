let Imagefetch = fetch("../../resource-images/images.json")
                    .then(response => {
                        if(!response.ok){
                            throw new Error("Could not find the resource");
                        }
                        return response.json();
                    })
                    .then(data => {console.log(data)})
                    .catch(error => console.log(error));