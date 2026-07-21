import type { CardData } from '../types/CardData.js';

export class Card {
  private _cardData: CardData;
  private _selector: string;
  private _handleCardClick: (data: CardData) => void;

  constructor(cardData: CardData, selector: string, handleCardClick: (data: CardData) => void) {
    this._cardData = cardData;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
  }

  private _getTemplate(): HTMLElement {
    const cardTemplate = document.querySelector<HTMLTemplateElement>(this._selector) as HTMLTemplateElement;
    const cardElement = cardTemplate.content.querySelector<HTMLElement>('.card')!.cloneNode(true) as HTMLElement;
    return cardElement;
  }

  private _setCardContent(element: HTMLElement): void {
    const imageElement = element.querySelector<HTMLImageElement>(".card__image")!;
    imageElement.src = this._cardData.link;
    imageElement.alt = this._cardData.name;
    const titleElement = element.querySelector<HTMLHeadingElement>(".card__title")!;
    titleElement.textContent = this._cardData.name;
  }

  private _handleDeleteCard = (element: HTMLElement): void => {
    element.remove();
  };

  private _setEventListeners(element: HTMLElement): void {
    const imageElement = element.querySelector<HTMLImageElement>(".card__image")!;
    imageElement.addEventListener('click', () => {
      this._handleCardClick(this._cardData);
    });

    const likeButton = element.querySelector<HTMLButtonElement>(".card__like-button")!;
    likeButton.addEventListener('click', () => {
      likeButton.classList.toggle('card__like-button_is-active');
    });

    const deleteButton = element.querySelector<HTMLButtonElement>(".card__delete-button")!;
    deleteButton.addEventListener('click', () => {
      this._handleDeleteCard(element);
    });
  }

  public generateCard(): HTMLElement {
    const cardElement = this._getTemplate();
    this._setCardContent(cardElement);
    this._setEventListeners(cardElement);
    return cardElement;
  }
}