const items = [
    {
        name: "AK-47",
        description: "an assault rifle that is chambered for the 7.62×39mm cartridge",
        price: "$756",
        image: "images/ak47.jpg"
    }
]

function displayItems(){
    const container = document.getElementById("item-container");
    container.innerHTML = "";

    items.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");

        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p class="price">${item.price}</p>
        `;

        container.appendChild(itemElement);

    });
}

document.addEventListener("DOMContentLoaded",displayItems);