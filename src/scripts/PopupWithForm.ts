import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  private _formElement!: HTMLFormElement;
  private _inputList!: NodeListOf<HTMLInputElement>;

  private _handleFormSubmit: (data: Record<string, string>) => void;

  constructor(selector: string, handleFormSubmit: (data: Record<string, string>) => void) {
    super(selector);
    this._formElement = this._element.querySelector<HTMLFormElement>('.popup__form')!;
    this._inputList = this._formElement.querySelectorAll<HTMLInputElement>('.popup__input')!;
    this._handleFormSubmit = handleFormSubmit;
  }

  private _getInputValues(): Record<string, string> {
    const data: Record<string, string> = {};
    this._inputList.forEach((inputElement) => {
      data[inputElement.name] = inputElement.value;
    });
    return data;
  }

  private _handleSubmit = (event: SubmitEvent): void => {
    event.preventDefault();
    const inputValues = this._getInputValues();
    this._handleFormSubmit(inputValues);
  };

  public setEventListeners(): void {
    super.setEventListeners();
    this._formElement.addEventListener('submit', this._handleSubmit);
  }

  public close(): void {
    super.close();
    this._formElement.reset();
  }
  
}