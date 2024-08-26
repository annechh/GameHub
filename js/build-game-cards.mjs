import { 
    createImageElement,
    createDivElement,
    createHeadingElement,
    createElementParagraph} from "./htmlElements.mjs";

import { addPulseAnimation } from "./animations.mjs";



export function buildGameCardHtml(game) {

    const gameCard = createDivElement({
        className: 'game-card',
        id: 'gameCard'
    }) 

    const cardTitleContainer = createDivElement({
        className: 'card-title-container', 
        id: 'cardTitleContainer'
    });

    const cardTitle = createHeadingElement({
        className: 'card-title', 
        htmlElement: 'h2', 
        textContent: game.title});

    const cardImageContainer = createDivElement({
        className: 'game-image-container'
    })

    const cardImage = createImageElement({
        className: 'card-image',
        src: game.image.url,
        alt: game.description});

    const priceContainer = createDivElement({
        className: 'price-container'
    })

    const cardPrice = createElementParagraph({
        className: 'price', 
        textContent: game.price})
        if (game.onSale === true) {
            cardPrice.style.textDecoration = 'line-through';
        }

    const cardDiscountPrice = createElementParagraph({
        className: 'discount-price', 
        textContent: game.discountedPrice
    });
        if (game.onSale === false) {
            cardDiscountPrice.textContent = '';
        } 
        if (game.onSale === true) {
            cardDiscountPrice.style.color = 'var(--light-green)';
        }
    
    const onSaleTitleContainer1 = createDivElement({
        className: 'on-sale-title-container1'
    })
        if (game.onSale === false) {
            onSaleTitleContainer1.style.display = 'none';
        }
        
        
    const onSaleStamp = createImageElement({
        className: 'sale-img',
        id: 'saleImg',
        src: './images/sale.png',
        alt: 'On sale stamp'
    });
        if (game.onSale === true) {
            addPulseAnimation(onSaleTitleContainer1);
        }
    // const favorite = ;

    // const description = ;

    // const age = 

    priceContainer.append(cardPrice, cardDiscountPrice)
    cardImageContainer.appendChild(cardImage);
    cardTitleContainer.appendChild(cardTitle);
    onSaleTitleContainer1.appendChild(onSaleStamp);
    gameCard.append(cardImageContainer, onSaleTitleContainer1, cardTitleContainer, priceContainer);

    return gameCard;
}

console.log('hello');
