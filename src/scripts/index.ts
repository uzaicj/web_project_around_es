// =====================
// IMPORTS
// =====================

import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { Section } from './Section.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';
import { defaultFormConfig } from '../utils/constants.js';
import type { CardData } from '../types/CardData.js';

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
// PERFIL DE USUARIO (UserInfo + popup de editar perfil)
// =====================

const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__description',
});

const editProfilePopup = new PopupWithForm('#edit-popup', (data) => {
  userInfo.setUserInfo({ name: data.name!, job: data.description! });
  editProfilePopup.close();
});
editProfilePopup.setEventListeners();

const profileEditButton = document.querySelector<HTMLButtonElement>('.profile__edit-button')!;

profileEditButton.addEventListener('click', () => {
  const currentUserInfo = userInfo.getUserInfo();

  const nameInput = document.querySelector<HTMLInputElement>('.popup__input_type_name')!;
  const descriptionInput = document.querySelector<HTMLInputElement>('.popup__input_type_description')!;

  nameInput.value = currentUserInfo.name;
  descriptionInput.value = currentUserInfo.job;

  editProfilePopup.open();
});

// =====================
// POPUP DE IMAGEN (al hacer clic en una tarjeta)
// =====================

const imagePopup = new PopupWithImage('#image-popup');
imagePopup.setEventListeners();

function handleCardClick(data: CardData): void {
  imagePopup.open(data.link, data.name);
}

// =====================
// TARJETAS (Section + Card)
// =====================

const cardSection = new Section<CardData>(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = new Card(cardData, '#card-template', handleCardClick);
      const cardElement = card.generateCard();
      cardSection.addItem(cardElement);
    },
  },
  '.cards__list'
);

cardSection.renderItems();

// =====================
// POPUP NUEVA TARJETA
// =====================

const addCardPopup = new PopupWithForm('#new-card-popup', (data) => {
  const newCardData: CardData = { name: data['place-name']!, link: data.link! };

  const card = new Card(newCardData, '#card-template', handleCardClick);
  const cardElement = card.generateCard();
  cardSection.addItem(cardElement);

  addCardPopup.close();
});
addCardPopup.setEventListeners();

const addCardButton = document.querySelector<HTMLButtonElement>('.profile__add-button')!;
addCardButton.addEventListener('click', () => {
  addCardPopup.open();
});

// =====================
// VALIDACIÓN DE FORMULARIOS
// =====================

const formList = document.querySelectorAll<HTMLFormElement>('.popup__form');

formList.forEach((formElement) => {
  const formValidator = new FormValidator(defaultFormConfig, formElement);
  formValidator.enableValidation();
});