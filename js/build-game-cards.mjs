import { 
    createImageElement,
    createDivElement,
    createHeadingElement,
    createElementParagraph} from "./htmlElements.mjs";



export function buildGameCardHtml(game) {

    const gameCard = createDivElement('game-card', 'gameCard') 

    const cardTitleContainer = createDivElement('card-title-container', 'cardTitleContainer');

    const cardTitle = createHeadingElement('card-title', 'h2', game.title);

    const cardImageContainer = createDivElement('game-image-container')

    const cardImage = createImageElement('card-image', '', game.image.url, game.description);

    const priceContainer = createDivElement('price-container', '')

    const cardPrice = createElementParagraph('price', game.price)
        if (game.onSale === true) {
            cardPrice.style.textDecoration = 'line-through';
        }

    const cardDiscountPrice = createElementParagraph('discount-price', game.discountedPrice);
        if (game.onSale === false) {
            cardDiscountPrice.textContent = '';
        } 
        if (game.onSale === true) {
            cardDiscountPrice.style.color = 'var(--light-green)';
        }

    // const favorite = ;

    // const description = ;

    // const age = 

    priceContainer.append(cardPrice, cardDiscountPrice)
    cardImageContainer.appendChild(cardImage);
    cardTitleContainer.appendChild(cardTitle);
    gameCard.append(cardTitleContainer, cardImageContainer, priceContainer);

    return gameCard;
}


