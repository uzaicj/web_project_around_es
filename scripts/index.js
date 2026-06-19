import { setEventListeners, resetValidation } from "./validate.js";

// =====================
// DATOS INICIALES
// =====================

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

// =====================
// UTILIDADES MODAL
// =====================

function openModal(modal) {
  modal.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscClose);
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscClose);

  const form = modal.querySelector(".popup__form");
  if (form) {
    resetValidation(form);
  }
}
// =====================
// cierre del modal mediante overlay
// =====================

function handleOverlayClickClose(event) {
  if (event.target === event.currentTarget) {
  closeModal(event.currentTarget)
}
}

const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("click", handleOverlayClickClose);
});

// cierre del modal mediante ESC
function handleEscClose(event) {
const popup = document.querySelector(".popup_is-opened");

  if (event.key === "Escape") {
    closeModal(popup);
  }
}

// =====================
// INICIALIZAR VALIDACIÓN DE FORMULARIOS
// =====================

const formList = document.querySelectorAll(".popup__form");

formList.forEach((formElement) => {
  setEventListeners(formElement);
});

// =====================
// POPUP EDITAR PERFIL
// =====================

const profileEditButton = document.querySelector(".profile__edit-button");

const editPopup = document.querySelector("#edit-popup");

const editPopupCloseButton =
  editPopup.querySelector(".popup__close");

const editProfileForm =
  editPopup.querySelector("#edit-profile-form");

const editNameInput =
  editPopup.querySelector(".popup__input_type_name");

const editDescriptionInput =
  editPopup.querySelector(".popup__input_type_description");

const profileName =
  document.querySelector(".profile__title");

const profileDescription =
  document.querySelector(".profile__description");

function fillProfileForm() {
  editNameInput.value = profileName.textContent;
  editDescriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal(editPopup);
}

function handleProfileFormSubmit(event) {
  event.preventDefault();

  profileName.textContent = editNameInput.value;
  profileDescription.textContent = editDescriptionInput.value;

  closeModal(editPopup);
}

profileEditButton.addEventListener(
  "click",
  handleOpenEditModal
);

editPopupCloseButton.addEventListener(
  "click",
  () => closeModal(editPopup)
);

editProfileForm.addEventListener(
  "submit",
  handleProfileFormSubmit
);

// =====================
// TARJETAS
// =====================

const cardList = document.querySelector(".cards__list");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage =
    cardElement.querySelector(".card__image");

  const cardTitle =
    cardElement.querySelector(".card__title");

  const likeButton =
    cardElement.querySelector(".card__like-button");

  const deleteButton =
    cardElement.querySelector(".card__delete-button");

  cardImage.alt = data.name;
  cardImage.src = data.link;

  cardTitle.textContent = data.name;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle(
      "card__like-button_is-active"
    );
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  return cardElement;
}

function renderCard(data) {
  const cardElement = getCardElement(data);

  cardList.prepend(cardElement);
}

initialCards.forEach(renderCard);

// =====================
// POPUP NUEVA TARJETA
// =====================

const addCardButton =
  document.querySelector(".profile__add-button");

const addCardPopup =
  document.querySelector("#new-card-popup");

const addCardPopupCloseButton =
  addCardPopup.querySelector(".popup__close");

const addCardForm =
  addCardPopup.querySelector("#new-card-form");

const cardNameInput =
  addCardForm.querySelector(".popup__input_type_card-name");

const cardLinkInput =
  addCardForm.querySelector(".popup__input_type_url");

function handleAddCardFormSubmit(event) {
  event.preventDefault();

  const newCardData = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };

  renderCard(newCardData);

  addCardForm.reset();

  closeModal(addCardPopup);
}

addCardButton.addEventListener(
  "click",
  () => openModal(addCardPopup)
);

addCardPopupCloseButton.addEventListener(
  "click",
  () => closeModal(addCardPopup)
);

addCardForm.addEventListener(
  "submit",
  handleAddCardFormSubmit
);

// =====================
// POPUP IMAGEN
// =====================

const imagePopup =
  document.querySelector("#image-popup");

const imagePopupCloseButton =
  imagePopup.querySelector(".popup__close");

const imagePopupImage =
  imagePopup.querySelector(".popup__image");

const imagePopupCaption =
  imagePopup.querySelector(".popup__caption");

imagePopupCloseButton.addEventListener(
  "click",
  () => closeModal(imagePopup)
);

cardList.addEventListener("click", (event) => {
  if (event.target.classList.contains("card__image")) {
    const cardElement =
      event.target.closest(".card");

    const cardTitle =
      cardElement.querySelector(".card__title")
        .textContent;

    const cardImageSrc = event.target.src;

    imagePopupImage.src = cardImageSrc;

    imagePopupImage.alt = cardTitle;

    imagePopupCaption.textContent = cardTitle;

    openModal(imagePopup);
  }
});
