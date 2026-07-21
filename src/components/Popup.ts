export class Popup {
  protected _element: HTMLElement;

  constructor(selector: string) {
    this._element = document.querySelector<HTMLElement>(selector)!;
  }

  public open(): void {
    this._element.classList.add('popup_is-opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  public close(): void {
    this._element.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  private _handleEscClose = (evt: KeyboardEvent): void => {
  if (evt.key === 'Escape') {
    this.close();
  }
};

public setEventListeners(): void {
  const closeBtn = this._element.querySelector<HTMLElement>('.popup__close');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => this.close());
  }
  
  this._element.addEventListener('click', (evt: MouseEvent) => {
      if (evt.target === this._element) {
        this.close();
      }
    });
}
}