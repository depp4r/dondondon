let productsGrid = document.getElementById('product-grid');
let productArray = [];
let url = 'https://my-json-server.typicode.com/depp4r/dondondon';

fetch (url + '/products')
    .then (async function (response) {
        let product = await response.json()
        productsGrid.innerHTML = null;
        products.forEach(p => {
            productArray.push(p);
            let pElem = document.createElement('div')
            pElem.classList.add('product')
            pElem.innerHTML = `
            <h2 class='product-name'>${p.name}</h2>
            <img class='product-photo' src='${p.photo_url}' alt='${p.name}'>
            <p class='product-price'><b>Price: </b>${p.price}$</p>
            <p class='product-description'><b>Description: </b>${p.description}$</p>
            <a href=''>Seller profile</a>
            <button>Buy</button>
            `;
            productsGrid.append(pElem);
        });
    })