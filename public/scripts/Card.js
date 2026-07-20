export class Card {
    _cardData;
    _selector;
    _handleCardClick;
    constructor(cardData, selector, handleCardClick) {
        this._cardData = cardData;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
    }
    _getTemplate() {
        const cardTemplate = document.querySelector(this._selector);
        const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true);
        return cardElement;
    }
    _setCardContent(element) {
        const imageElement = element.querySelector(".card__image");
        imageElement.src = this._cardData.link;
        imageElement.alt = this._cardData.name;
        const titleElement = element.querySelector(".card__title");
        titleElement.textContent = this._cardData.name;
    }
    _setEventListeners(element) {
        const imageElement = element.querySelector(".card__image");
        imageElement.addEventListener('click', () => {
            this._handleCardClick(this._cardData);
        });
    }
    generateCard() {
        const cardElement = this._getTemplate();
        this._setCardContent(cardElement);
        this._setEventListeners(cardElement);
        return cardElement;
    }
}
//# sourceMappingURL=Card.js.map