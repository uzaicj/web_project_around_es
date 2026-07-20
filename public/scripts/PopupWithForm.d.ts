import { Popup } from './Popup.js';
export declare class PopupWithForm extends Popup {
    private _formElement;
    private _inputList;
    private _handleFormSubmit;
    constructor(selector: string, handleFormSubmit: (data: Record<string, string>) => void);
    private _getInputValues;
    private _handleSubmit;
    setEventListeners(): void;
    close(): void;
}
//# sourceMappingURL=PopupWithForm.d.ts.map