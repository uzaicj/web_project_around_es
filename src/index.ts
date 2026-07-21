import { Card } from "./components/Card.js";
import { Section } from "./components/Section.js";
import { UserInfo } from "./components/UserInfo.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { FormValidator } from "./components/FormValidator.js";
import type { CardData } from "./types/CardData.js";
import { defaultFormConfig } from "./utils/constants.js";

// =====================
// DATOS INICIALES
// =====================

const initialCards: CardData[] = [
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
// ELEMENTOS DEL DOM
// =====================

const profileEditButton = document.querySelector<HTMLButtonElement>(
  ".profile__edit-button"
)!;

const addCardButton = document.querySelector<HTMLButtonElement>(
  ".profile__add-button"
)!;

const nameInput = document.querySelector<HTMLInputElement>(
  ".popup__input_type_name"
)!;

const descriptionInput = document.querySelector<HTMLInputElement>(
  ".popup__input_type_description"
)!;

const editProfileFormElement = document.querySelector<HTMLFormElement>(
  "#edit-profile-form"
)!;

const newCardFormElement = document.querySelector<HTMLFormElement>(
  "#new-card-form"
)!;

// =====================
// VALIDACIÓN
// =====================

const editProfileFormValidator = new FormValidator(
  defaultFormConfig,
  editProfileFormElement
);

editProfileFormValidator.enableValidation();

const newCardFormValidator = new FormValidator(
  defaultFormConfig,
  newCardFormElement
);

newCardFormValidator.enableValidation();

// =====================
// USER INFO
// =====================

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

// =====================
// POPUP IMAGEN
// =====================

const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();

function handleCardClick(data: CardData): void {
  imagePopup.open(data.link, data.name);
}

// =====================
// TARJETAS
// =====================

const cardSection = new Section<CardData>(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = new Card(cardData, "#card-template", handleCardClick);
      cardSection.addItem(card.generateCard());
    },
  },
  ".cards__list"
);

cardSection.renderItems();

// =====================
// POPUP EDITAR PERFIL
// =====================

const editProfilePopup = new PopupWithForm("#edit-popup", (data) => {
  userInfo.setUserInfo({
    name: data.name!,
    job: data.description!,
  });

  editProfilePopup.close();
});

editProfilePopup.setEventListeners();

// =====================
// POPUP NUEVA TARJETA
// =====================

const addCardPopup = new PopupWithForm("#new-card-popup", (data) => {
  const newCardData: CardData = {
    name: data["place-name"]!,
    link: data.link!,
  };

  const card = new Card(newCardData, "#card-template", handleCardClick);

  cardSection.addItem(card.generateCard());

  addCardPopup.close();
});

addCardPopup.setEventListeners();

// =====================
// EVENTOS
// =====================

profileEditButton.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();

  nameInput.value = currentUserInfo.name;
  descriptionInput.value = currentUserInfo.job;

  editProfileFormValidator.resetValidation();

  editProfilePopup.open();
});

addCardButton.addEventListener("click", () => {
  newCardFormValidator.resetValidation();

  addCardPopup.open();
});