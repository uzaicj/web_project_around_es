import { defaultFormConfig } from '../utils/constants.js';
export class FormValidator {
    formConfig;
    formElement;
    constructor(formConfig, formElement) {
        this.formConfig = formConfig;
        this.formElement = formElement;
    }
    toggleError(inputElement, isValid) {
        const errorElement = this.formElement.querySelector(`.${inputElement.id}-input-error`);
        inputElement.classList.toggle(this.formConfig.popupInputTypeError, !isValid);
        errorElement.classList.toggle(this.formConfig.popupInputErrorActive, !isValid);
        errorElement.textContent = isValid ? '' : inputElement.validationMessage;
    }
    checkInputValidity(inputElement) {
        const isValid = inputElement.validity.valid;
        this.toggleError(inputElement, isValid);
    }
    toggleButtonState(inputList, buttonElement) {
        const hasInvalidInput = Array.from(inputList).some((inputElement) => !inputElement.validity.valid);
        buttonElement.disabled = hasInvalidInput;
        buttonElement.classList.toggle(this.formConfig.popupButtonDisabled, hasInvalidInput);
    }
    setEventListeners() {
        const inputList = this.formElement.querySelectorAll(this.formConfig.popupInput);
        const buttonElement = this.formElement.querySelector(this.formConfig.popupButton);
        this.toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this.checkInputValidity(inputElement);
                this.toggleButtonState(inputList, buttonElement);
            });
        });
    }
    enableValidation() {
        this.setEventListeners();
    }
    resetValidation() {
        const inputList = this.formElement.querySelectorAll(this.formConfig.popupInput);
        const buttonElement = this.formElement.querySelector(this.formConfig.popupButton);
        inputList.forEach((inputElement) => {
            this.toggleError(inputElement, true);
        });
        this.toggleButtonState(inputList, buttonElement);
    }
}
//# sourceMappingURL=FormValidator.js.map