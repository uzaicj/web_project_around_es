import { defaultFormConfig } from '../utils/constants.js';
export declare class FormValidator {
    private formConfig;
    private formElement;
    constructor(formConfig: typeof defaultFormConfig, formElement: HTMLFormElement);
    private toggleError;
    private checkInputValidity;
    private toggleButtonState;
    private setEventListeners;
    enableValidation(): void;
    resetValidation(): void;
}
//# sourceMappingURL=FormValidator.d.ts.map