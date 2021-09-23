Vue.component('header-site', {
    template: `<header class="header center">
    <div class="header__items">
        <a class="header__link header__link_logo" @click="logoBtnHandler">
            <picture>
                <source srcset="img/logo_header.webp" type="image/webp">
                <img src="img/logo_header.png" alt="logo">
            </picture>
        </a>
        <a @click="inputSearch" v-if="carrent_page != 'cart'" class="header__link"><img src="img/search_header.svg" alt="search"></a>
        <input type="text" v-if="is_active" @keyup.enter="search" v-model="localvalue" placeholder="Поиск" style="margin-left: 30px; height: 30px; width: 280px; padding-left: 10px; align-items: center;">
    </div>
    <div class="header__items header__items_right">
        <div class="header__menu">
            <input type="checkbox" id="menu">
            <label for="menu" class="header__link"><img src="img/menu_header.svg" alt="menu"></label>
            <nav class="menu">
                <div class="menu__overlay">
                    <label for="menu"><img class="menu__cross-img" src="img/menu_cross.svg" alt="cross"></label>
                    <p class="menu__title">MENU</p>
                    <p class="menu__heading">MAN</p>
                    <ul>
                        <li class="menu__list"><a href="#" class="menu__link">Accessories</a></li>
                        <li class="menu__list"><a href="#" class="menu__link">Bags</a></li>
                        <li class="menu__list"><a href="#" class="menu__link">Denim</a></li>
                        <li class="menu__list"><a href="#" class="menu__link">T-Shirts</a></li>
                    </ul>
                    <p class="menu__heading">WOMAN</p>
                    <ul>
                        <li class="menu__list"><a href="#" class="menu__link">Accessories</a></li>
                        <li class="menu__list"><a href="#" class="menu__link">Jackets & Coats</a></li>
                        <li class="menu__list"><a href="#" class="menu__link">Polos</a></li>
                        <li class="menu__list"><a href="#" class="menu__link">T-Shirts</a></li>
                        <li class="menu__list"><a href="#" class="menu__link">Shirts</a></li>
                    </ul>
                    <p class="menu__heading">KIDS</p>
                    <ul>
                        <li class="menu__list"><a href="#" class="menu__link">Accessories</a></li>
                        <li class="menu__list"><a href="#" class="menu__link">Jackets & Coats</a></li>
                        <li class="menu__list"><a href="#" class="menu__link">Polos</a></li>
                        <li class="menu__list"><a href="#" class="menu__link">T-Shirts</a></li>
                        <li class="menu__list"><a href="#" class="menu__link">Shirts</a></li>
                        <li class="menu__list"><a href="#" class="menu__link">Bags</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <a href="registration.html" class="header__link header__link_login"><img src="img/login_header.svg"
                alt="login"></a>
        <a id="cart-btn" class="header__link header__link_cart"><img src="img/cart.svg"
                alt="cart" @click="cartBtnHandler"><span class="header__cart-counter">{{count}}</span></a>
    </div>
</header>`,
    props: ['count', 'is_active', 'value', 'carrent_page'],

    data() {
        return {
            localvalue: this.value
        };
    },

    methods: {
        cartBtnHandler() {
            this.$emit('go-to', 'cart')
        },

        logoBtnHandler() {
            this.$emit('go-to', 'index')
        },

        inputSearch() {
            this.$emit('input-search')
        },

        search() {
            this.$emit('search', this.localvalue)
        }
    }
})

Vue.component('promo', {
    template: `<section class="promo center">
        <div class="promo__items">
            <h1 class="promo__heading"><span class="promo__brand">THE BRAND</span> <br>
                OF LUXERIOUS <span class="promo__fashion">FASHION</span>
            </h1>
        </div>
    </section>  `
})

Vue.component('category', {
    template: `<section class="category center">
    <h2 class="hidden">product categories</h2>
        <div class="category__item category__item_womens">30% OFF
            <span class="category__text">FOR WOMEN</span>
        </div>
        <div class="category__item category__item_mens">
            HOT DEAL<span class="category__text">FOR MEN</span>
        </div>
        <div class="category__item category__item_kids">NEW ARRIVALS<span class="category__text">FOR KIDS</span>
        </div>
        <div class="category__item category__item_accesories">LUXIROUS & TRENDY<span
                class="category__text">ACCESORIES</span>
        </div>
    </section>`
})

Vue.component('card', {
    template: `<div class="product__card">
    <div class="product__image">
        <picture>
            <source :srcset="good.img1" type="image/webp">
            <img class="product__img" :src="good.img2" alt="product">
        </picture>
        <div class="product__overlay">
            <button class="product__button-cart" @click="addToCartHandler"> <img class="product__cart-img"
                    src="img/product-cart.svg" alt="cart"> Add to
                    Cart
            </button>
        </div>
    </div>
    <div class="product__info">
        <a href="product.html" class="product__titel">{{good.title}}</a> <br>
        <span class="product__description">{{good.description}}</span> <br>
        <span class="product__price">{{'$'+good.price}}</span>
    </div>
</div>`,

    props: ['good'],

    methods: {
        addToCartHandler() {
            this.$emit('add-to-cart', this.good.id)
        }
    }
})

Vue.component('search-list', {
    template: `<section class="product center">
    <div class="product__header">
        <h2 class="product__heading" style="margin-bottom: 40px;">Результат поиска</h2>
    </div>
    <div class="product__cards" style="margin-bottom: 50px; justify-content: start;">

        <card v-for="good of search_list" v-bind:good="good" @add-to-cart="addToCartHandler"></card>

    </div>
</section>`,

    props: ['search_list'],

    methods: {
        addToCartHandler(id) {
            this.$emit('add-to-cart', id)
        }
    }
})

Vue.component('good-list', {
    template: `<section class="product center">
    <div class="product__header">
        <h2 class="product__heading">Fetured Items</h2>
        <p class="product__text">Shop for items based on what we featured in this week</p>
    </div>
    <div class="product__cards">

        <card v-for="good of list" v-bind:good="good" @add-to-cart="addToCartHandler"></card>

    </div>
    <div class="product__btn">
        <a href="catalog.html" class="product__button">Browse All Product</a>
    </div>
</section>`,

    props: ['list'],

    methods: {
        addToCartHandler(id) {
            this.$emit('add-to-cart', id)
        }
    }
})

Vue.component('advantage', {
    template: `<section class="advantage center">
    <h2 class="hidden">advantages</h2>
    <div class="advantage__item">
        <img src="img/delivery.svg" alt="delivery" height="32">
        <span class="advantage__heading">Free Delivery</span>
        Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
    </div>
    <div class="advantage__item advantage__item_sale">
        <img src="img/sale.svg" alt="sale" height="32">
        <span class="advantage__heading">Sales & discounts</span>
        Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
    </div>
    <div class="advantage__item">
        <img src="img/quality.svg" alt="quality" height="32">
        <span class="advantage__heading">Quality assurance</span>
        Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
    </div>
</section>`
})

Vue.component('feedback', {
    template: `<aside class="feedback center">
    <section class="reviews">
        <h2 class="hidden">reviews</h2>
        <picture>
            <source srcset="img/reviews-photo.webp" type="image/webp">
            <img src="img/reviews-photo.png" class="reviews__photo" alt="photo">
        </picture><br>
        “Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span class="reviews__text">a pulvinar purus
            condimentum“</span>
    </section>

    <section class="subscribe">
        <h2>SUBSCRIBE</h2>
        <p class="subscribe__text">FOR OUR NEWLETTER AND PROMOTION</p>
        <form action="#" class="subscribe__form">
            <input class="subscribe__input-email" value="" type="email" placeholder="Enter Your Email" minlength="3"
                maxlength="254" required>
            <input class="subscribe__input-submit" type="submit" value="Subscribe">
            <span class="subscribe__input-error">Ошибка, повторите ввод!</span>
        </form>
    </section>
</aside>`
})

Vue.component('site-footer', {
    template: `<footer class="footer center">
    <section class="footer__copyright">
        <h2 class="hidden">copyright</h2>
        <p>&copy; 2021 Brand All Rights Reserved.</p>
    </section>
    <section class="footer__socials">
        <h2 class="hidden">company in social networks</h2>
        <a href="#" class="footer__socials-item"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="footer__socials-item"><i class="fab fa-instagram"></i></a>
        <a href="#" class="footer__socials-item"><i class="fab fa-pinterest-p"></i></a>
        <a href="#" class="footer__socials-item"><i class="fab fa-twitter"></i></a>
    </section>
</footer>`
})

//Компоненты корзны

Vue.component('breadcrumbs', {
    template: `<section class="breadcrumbs center">
        <h1 class="breadcrumbs__title breadcrumbs__title_cart-reg">SHOPPING CART</h1>
    </section>`
})

Vue.component('cart-card', {
    template: ` <div class="product-cart">
    <picture>
        <source class="product-cart__img" media="(max-width: 787px)" srcset="img/cart-img-1-mob.webp" type="image/webp">
        <source class="product-cart__img" media="(max-width: 787px)" srcset="img/cart-img-1-mob.jpg">
        <source class="product-cart__img" :srcset="good.img1" type="image/webp">
        <img class="product-cart__img" :src="good.img2" alt="photo">
    </picture>
    <div class="product-cart__info">
        <h3 class="product-cart__title">{{good.title}}</h3>
        <form action="#" class="product-cart__quantity-form">
            Price: <span class="product-cart__price">{{'$'+good.price}}</span> <br>
            Color: Red <br>
            Size: Xl <br>
            Quantity:<input class="product-cart__quantity-input" type="number" name="quantity" min="1"
                max="10" required placeholder="1">
        </form>
    </div>
    <div class="product-cart__close">
        <i class="fas fa-times"></i>
    </div>
</div>`,

    methods: {
        rrr() {
            if (good.id == good.id) {
                console.log(1233)
            }
        }
    },

    props: ['good']
})

Vue.component('cart-good-list', {
    template: `<main class="shopping-cart center">
    <section class="products-cart">
        <h2 class="hidden">Products-cart</h2>
        
            <h1 v-if="cart.length == '0'">Корзина пуста</h1>
            <cart-card v-for="good of cart" v-bind:good="good"></cart-card>

        <div class="cart-buttons">
                <button class="cart-buttons__button">CLEAR SHOPPING CART</button>
                <a href="catalog.html" class="cart-buttons__button">CONTINUE SHOPPING</a>
            </div>
        </section>

            <shipping-adress></shipping-adress>
        
</main>`,

    props: ['cart'],
    methods: {
        quant() {
            this.$emit('rrr')
        }
    },
})

Vue.component('shipping-adress', {
    template: `<form action="#" class="adress-form">
<div class="shipping-adress">
    <h2 class="shipping-adress__title">SHIPPING ADRESS</h2>
    <input type="text" class="shipping-adress__input" placeholder="Bangladesh">
    <input type="text" class="shipping-adress__input" placeholder="State">
    <input type="text" class="shipping-adress__input" placeholder="Postcode / Zip">
    <input type="text" class="shipping-adress__input shipping-adress__input_quote"
        placeholder="GET A QUOTE">
</div>
<div class="checkout">
    <h2 class="hidden">Checkout</h2>
    <p class="checkout__sub-total">SUB TOTAL <span class="checkout__price-checkout">$900</span>
    </p>
    <p class="checkout__grand-total">GRAND TOTAL <span class="checkout__price-checkout">$900</span></p>
    <hr class="checkout__line">
    <input type="submit" class="checkout__submit" value="PROCEED TO CHECKOUT">
</div>
</form>`
})

//Страницы
Vue.component('index-page', {
    template: `<div>
        <header-site @go-to="goToHandler" v-bind:is_active="is_active" v-bind:count="cart.length" v-bind:carrent_page="carrent_page" v-bind:value="value" @input-search="inputSearch" @search="search"></header-site>
        <promo></promo>
        <category></category>
        <search-list v-if="search_list != 0" v-bind:search_list="search_list" @add-to-cart="addToCartHandler"></search-list>
        <good-list v-bind:list="list" @add-to-cart="addToCartHandler"></good-list>
        <advantage></advantage>
        <feedback></feedback>
        <site-footer></site-footer>
    </div>`,

    props: ['list', 'cart', 'is_active', 'value', 'search_list', 'carrent_page'],

    methods: {
        goToHandler(target) {
            this.$emit('go-to', target)
        },
        addToCartHandler(id) {
            this.$emit('add-to-cart', id)
        },
        inputSearch() {
            this.$emit('input-search')
        },
        search(value) {
            this.$emit('search', value)
        }
    }
})

Vue.component('cart-page', {
    template: `<div>
    <header-site @go-to="goToHandler" v-bind:count="cart.length" v-bind:carrent_page="carrent_page"></header-site>
    <breadcrumbs></breadcrumbs>
    <cart-good-list v-bind:cart="cart"></cart-good-list>
    <feedback></feedback>
    <site-footer></site-footer>
</div>`,
    methods: {
        goToHandler(target) {
            this.$emit('go-to', target)
        }
    },

    props: ['cart', 'carrent_page']
})

const app = new Vue({
    el: '#app',

    data: {
        carrent_page: 'index',
        is_active: false,
        value: '',
        list: [
            {
                id: 1,
                title: "ELLERY",
                description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52,
                img1: "img/product_1.webp",
                img2: "img/product_1.jpg"
            },
            {
                id: 2,
                title: "CAPSULE",
                description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52,
                img1: "img/product_2.webp",
                img2: "img/product_2.jpg"
            },
            {
                id: 3,
                title: "ELLERY CAPSULE",
                description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52,
                img1: "img/product_3.webp",
                img2: "img/product_3.jpg"
            },
            {
                id: 4,
                title: "JERCY",
                description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52,
                img1: "img/product_4.webp",
                img2: "img/product_4.jpg"
            },
            {
                id: 5,
                title: "SHIRT",
                description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52,
                img1: "img/product_5.webp",
                img2: "img/product_5.jpg"
            },
            {
                id: 6,
                title: "SOCKS",
                description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                price: 52,
                img1: "img/product_6.webp",
                img2: "img/product_6.jpg"
            }
        ],
        cart: [],
        search_list: []
    },

    methods: {
        goToHandler(target) {
            this.carrent_page = target;
        },

        inputSearch() {
            this.is_active = !this.is_active;
        },

        addToCartHandler(id) {
            const good = this.list.find(item => item.id === id);
            this.cart.push(good);
        },

        search(value) {
            if (value) {
                const regexp = new RegExp(value, 'ig')
                const good = this.list.find(item => regexp.test(item.title));
                if (good !== undefined) {
                    this.search_list = [];
                    this.search_list.push(good);
                } else {
                    this.search_list = [];
                }
            }
        }
    }
})

