import { Popup } from './Popup.js';
export class PopupWithForm extends Popup {
    _formElement;
    _inputList;
    _handleFormSubmit;
    constructor(selector, handleFormSubmit) {
        super(selector);
        this._formElement = this._element.querySelector('.popup__form');
        this._inputList = this._formElement.querySelectorAll('.popup__input');
        this._handleFormSubmit = handleFormSubmit;
    }
    _getInputValues() {
        const data = {};
        this._inputList.forEach((inputElement) => {
            data[inputElement.name] = inputElement.value;
        });
        return data;
    }
    _handleSubmit = (event) => {
        event.preventDefault();
        const inputValues = this._getInputValues();
        this._handleFormSubmit(inputValues);
    };
    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', this._handleSubmit);
    }
    close() {
        super.close();
        this._formElement.reset();
    }
}
//# sourceMappingURL=PopupWithForm.js.map