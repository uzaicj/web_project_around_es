import { defaultFormConfig } from '../utils/constants.js';

export class FormValidator {
  private formConfig: typeof defaultFormConfig;
  private formElement: HTMLFormElement;

  constructor(formConfig: typeof defaultFormConfig, formElement: HTMLFormElement) {
    this.formConfig = formConfig;
    this.formElement = formElement;
  }

private toggleError(inputElement: HTMLInputElement, isValid: boolean): void {
  const errorElement = this.formElement.querySelector(`.${inputElement.id}-input-error`);
  inputElement.classList.toggle(this.formConfig.popupInputTypeError, !isValid);
  errorElement!.classList.toggle(this.formConfig.popupInputErrorActive, !isValid);
  errorElement!.textContent = isValid ? '' : inputElement.validationMessage;
}

private checkInputValidity(inputElement: HTMLInputElement): void {
  const isValid = inputElement.validity.valid;
  this.toggleError(inputElement, isValid);
}

private toggleButtonState(inputList: NodeListOf<HTMLInputElement>, buttonElement: HTMLButtonElement): void{
  const hasInvalidInput = Array.from(inputList).some((inputElement) => !inputElement.validity.valid);
  buttonElement.disabled = hasInvalidInput;
  buttonElement.classList.toggle(this.formConfig.popupButtonDisabled, hasInvalidInput);
}

private setEventListeners(): void {
  const inputList = this.formElement.querySelectorAll(this.formConfig.popupInput) as NodeListOf<HTMLInputElement>;
  const buttonElement = this.formElement.querySelector(this.formConfig.popupButton) as HTMLButtonElement;

  this.toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this.checkInputValidity(inputElement);
      this.toggleButtonState(inputList, buttonElement);
    });
  });
}

enableValidation(): void {
  this.setEventListeners();
}

resetValidation(): void {
  const inputList = this.formElement.querySelectorAll(this.formConfig.popupInput) as NodeListOf<HTMLInputElement>;
  const buttonElement = this.formElement.querySelector(this.formConfig.popupButton) as HTMLButtonElement;
  inputList.forEach((inputElement) => {
    this.toggleError(inputElement, true);
  });
  this.toggleButtonState(inputList, buttonElement);
}
}