import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  private _imageElement: HTMLImageElement;
  private _captionElement: HTMLElement;

  constructor(selector: string) {
    super(selector);
    this._imageElement = this._element.querySelector<HTMLImageElement>('.popup__image')!;
    this._captionElement = this._element.querySelector<HTMLElement>('.popup__caption')!;
  }

  public open(imageSrc?: string, caption?: string): void {
    if (imageSrc !== undefined && caption !== undefined) {
      this._imageElement.src = imageSrc;
      this._imageElement.alt = caption;
      this._captionElement.textContent = caption;
    }
    super.open();
  }
}