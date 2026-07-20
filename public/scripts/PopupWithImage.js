import { Popup } from './Popup.js';
export class PopupWithImage extends Popup {
    _imageElement;
    _captionElement;
    constructor(selector) {
        super(selector);
        this._imageElement = this._element.querySelector('.popup__image');
        this._captionElement = this._element.querySelector('.popup__caption');
    }
    open(imageSrc, caption) {
        if (imageSrc !== undefined && caption !== undefined) {
            this._imageElement.src = imageSrc;
            this._imageElement.alt = caption;
            this._captionElement.textContent = caption;
        }
        super.open();
    }
}
//# sourceMappingURL=PopupWithImage.js.map