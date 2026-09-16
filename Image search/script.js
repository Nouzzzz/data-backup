// API Key - acufidumisu

let btn = document.getElementById("btn");
let searchtext = document.getElementById("searchtext");
const gallery = document.getElementById("gallery");

btn.addEventListener('click', async () => {
    const imageData = await getImages();
    
    if (imageData && imageData.photos) {
        displayImages(imageData.photos);
    }
});

async function getImages() {
    const search = searchtext.value;
    const url = `https://api.pexels.com/v1/search?query=${search}`;
    
    try {
        const response = await fetch(url, {
            headers: {
                
                Authorization: ""
            }
        });
        
        const data = await response.json();
        console.log(data);
        return data; 
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

function displayImages(images) {
  
    gallery.innerHTML = "";


    images.forEach(image => {
        gallery.innerHTML += `
            <img src="${image.src.small}" alt="${image.alt}">
        `;
    });
}
