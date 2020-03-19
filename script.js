'use strict';
window.addEventListener('load', function () {
    let products = new Product(6);

});

class Product {
    constructor(quantity) {
        this.container = document.querySelector('.product');
        this.basketTable = document.querySelector('.basket__table');
        this.basketEmpty = document.querySelector('.basket__empty');
        this.buyButtons = document.querySelectorAll('.addToCart');
        this.delButtons = document.querySelectorAll('.basket__delete');

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
            prodPrice.innerText = "$" + price;
            prodDesc.append(prodPrice);
            newProd.append(prodDesc);
            let button = document.createElement('button');
            button.classList.add('addToCart');
            button.innerText = 'Купить';
            button.addEventListener('click', this.addProdToCart);
            newProd.append(button);
            this.container.append(newProd);
        }
        //this.addListener(this.buyButtons, this.addProdToCart);
        this.addListener(this.delButtons, this.actionInBasket.bind(this));
    }




    addListener(el, func) {
        if (typeof el.length == 'undefined') {
            el.addEventListener('click', func);
        } else if (el.length > 0 ) {
            el.forEach(item => item.addEventListener('click', func));
        }
    }

    addProdToCart() {
        console.log(event.target);
    }
    delProdFromCart() {
        let removeObj = event.target.parentNode.parentNode;
        removeObj.remove();
    }

    actionInBasket() {
        this.delProdFromCart();
        if (this.isBasketEmpty()) {
            this.hideItem(this.basketTable);

        }
    }

    hideItem(obj) {
        obj.classList.add('hidden');
    }

    unhideItem(obj) {
        obj.classList.remove('hidden');
    }

    isBasketEmpty() {
        let div = this.basketTable;
        if (div.children.length === 1) {
            return true;
        }
    }
}

