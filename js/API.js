'use strict'
import dataHandler from "./dataHandler.js"

export default {
    fetch() {
        return dataHandler.getCatalog().then((data) => data);
    }
}



// fetch() {
//     return [
//         { title: "ELLERY X M'O CAPSULE", description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00, img1: 'img/product_1.webp', img2: 'img/product_1.jpg' },
//         { title: "ELLERY X M'O CAPSULE", description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00, img1: 'img/product_2.webp', img2: 'img/product_2.jpg' },
//         { title: "ELLERY X M'O CAPSULE", description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00, img1: 'img/product_3.webp', img2: 'img/product_3.jpg' },
//         { title: "ELLERY X M'O CAPSULE", description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00, img1: 'img/product_4.webp', img2: 'img/product_4.jpg' },
//         { title: "ELLERY X M'O CAPSULE", description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00, img1: 'img/product_5.webp', img2: 'img/product_5.jpg' },
//         { title: "ELLERY X M'O CAPSULE", description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00, img1: 'img/product_6.webp', img2: 'img/product_6.jpg' }
//     ]
// }