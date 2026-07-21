import type { CardData } from '../types/CardData.js';
export declare class Card {
    private _cardData;
    private _selector;
    private _handleCardClick;
    constructor(cardData: CardData, selector: string, handleCardClick: (data: CardData) => void);
    private _getTemplate;
    private _setCardContent;
    private _handleDeleteCard;
    private _setEventListeners;
    generateCard(): HTMLElement;
}
//# sourceMappingURL=Card.d.ts.map