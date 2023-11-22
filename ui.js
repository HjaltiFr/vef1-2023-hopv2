import { getProduct } from "./api.js";


async function renderProducts(parentElement) {
    const boxElement = result.box
    ? el(
        'div', 
        {class: 'box'},
         el('h2', {}, result.box?.title ?? 'Ekkert nafn'),
         el('div', { class: 'image' }, el('img', { src: result.image, alt: ''}))
         )
}
