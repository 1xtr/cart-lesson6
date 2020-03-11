'use strict';
window.addEventListener('load', function () {
    let products = new Product(6);
    let but = products.buyButtons();
    let buy = products.addProdToCart;
    products.addListner(but, buy);
});

class Product {
    constructor(quantity) {
        this.container = document.querySelector('.product');
        for (let i=1; i <= quantity; i++) {
            let prodName = 'Product ' + i;
            let price = 100 * i;
            let newProd = document.createElement('div');
            newProd.classList.add('product__item');
            newProd.setAttribute('data-id', i);
            let prodImg = document.createElement('img');
            prodImg.classList.add('product__img');
            prodImg.src = 'img/no_foto.jpg';
            prodImg.alt = prodName;
            newProd.append(prodImg);
            let prodDesc = document.createElement('div');
            prodDesc.classList.add('product__desc');
            let prodTitle = document.createElement('p');
            prodTitle.classList.add('product__h2');
            prodTitle.innerText = prodName;
            prodDesc.append(prodTitle);
            let prodPrice = document.createElement('p');
            prodPrice.classList.add('product__price');
            prodPrice.setAttribute('data-price', price);
            prodPrice.innerText = price + " руб.";
            prodDesc.append(prodPrice);
            newProd.append(prodDesc);
            let button = document.createElement('button');
            button.classList.add('addToCart');
            button.innerText = 'Купить';
            newProd.append(button);
            this.container.append(newProd);
        }
    }
    buyButtons() {
        return document.querySelectorAll('.addToCart');
    }

    addListner(el, func) {
        if (typeof el.length == 'undefined') {
            el.addEventListener('click', func);
        } else if (el.length > 0 ) {
            el.forEach(item => item.addEventListener('click', func));
        }
    }

    addProdToCart() {
        console.log(new Date());
    }
}

