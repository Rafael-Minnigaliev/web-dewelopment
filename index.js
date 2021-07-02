'use strict'

const goods = [
    { title: "ELLERY X M'O CAPSULE", description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00, img1: 'img/product_1.webp', img2: 'img/product_1.jpg' },
    { title: "ELLERY X M'O CAPSULE", description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00, img1: 'img/product_2.webp', img2: 'img/product_2.jpg' },
    { title: "ELLERY X M'O CAPSULE", description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00, img1: 'img/product_3.webp', img2: 'img/product_3.jpg' },
    { title: "ELLERY X M'O CAPSULE", description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00, img1: 'img/product_4.webp', img2: 'img/product_4.jpg' },
    { title: "ELLERY X M'O CAPSULE", description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00, img1: 'img/product_5.webp', img2: 'img/product_5.jpg' },
    { title: "ELLERY X M'O CAPSULE", description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00, img1: 'img/product_6.webp', img2: 'img/product_6.jpg' }
];

const $product__cards = document.querySelector('.product__cards');


const renderGoodsItem = ({ title, description, price, img1, img2 }) => {
    return `<div class="product__card">
    <div class="product__image">
                        <picture>
                            <source srcset="${img1}" type="image/webp">
                            <img class="product__img" src="${img2}" alt="product">
                        </picture>
                        <div class="product__overlay">
                            <button class="product__button-cart"> <img class="product__cart-img"
                                    src="img/product-cart.svg" alt="cart"> Add to
                                Cart
                            </button>
                        </div>
                    </div>
                    <div class="product__info">
                        <a href="product.html" class="product__titel">${title}</a> <br>
                        <span class="product__description">${description}</span> <br>
                        <span class="product__price">$${price}</span>
                    </div>
                    </div>`
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
        item => renderGoodsItem(item)
    ).join(' ');

    $product__cards.insertAdjacentHTML('afterbegin', goodsList);
}


renderGoodsList();