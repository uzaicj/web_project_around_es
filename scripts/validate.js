function showError(formElement, inputElement) {
  const errorElement = formElement.querySelector(
    `.${inputElement.id}-input-error`
  );

  inputElement.classList.add("popup__input_type_error");

  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add("popup__input-error_active");
}

function hideError(formElement, inputElement) {
  const errorElement = formElement.querySelector(
    `.${inputElement.id}-input-error`
  );

  inputElement.classList.remove("popup__input_type_error");

  errorElement.textContent = "";
  errorElement.classList.remove("popup__input-error_active");
}

function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement);
  } else {
    hideError(formElement, inputElement);
  }
}

function hasInvalidInput(inputList) {
  return Array.from(inputList).some(
    (inputElement) => !inputElement.validity.valid
  );
}

function toggleButtonState(inputList, buttonElement) {
  buttonElement.disabled = hasInvalidInput(inputList);
}

export function setEventListeners(formElement) {
  const inputList = formElement.querySelectorAll(".popup__input");
  const buttonElement = formElement.querySelector(".popup__button");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

export function resetValidation(formElement) {
  const inputList = formElement.querySelectorAll(".popup__input");
  const buttonElement = formElement.querySelector(".popup__button");

  inputList.forEach((inputElement) => {
    hideError(formElement, inputElement);
  });

  toggleButtonState(inputList, buttonElement);
}