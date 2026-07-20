export class Popup {
    _element;
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
    open() {
        this._element.classList.add('popup_is-opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
    close() {
        this._element.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    };
    setEventListeners() {
        const closeBtn = this._element.querySelector('.popup__close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }
        this._element.addEventListener('click', (evt) => {
            if (evt.target === this._element) {
                this.close();
            }
        });
    }
}
//# sourceMappingURL=Popup.js.map