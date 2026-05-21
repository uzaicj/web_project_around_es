let initialCards = [
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

initialCards.forEach(function (item) {
  console.log(item.name);
});

//Constantes 

const profileEditButton = document.querySelector('.profile__edit-button'); // Botón para abrir la ventana emergente de edición del perfil

const editPopup = document.querySelector('#edit-popup'); // Ventana emergente para editar el perfil

const popupClose = editPopup.querySelector('.popup__close'); // Botón para cerrar la ventana emergente de edición del perfil

//Funciones de apertura y cierre de la ventana emergente

function openModal(modal) {
  modal.classList.add('popup_is-opened');
}
function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
}

//Eventos de apertura y cierre de la ventana emergente

profileEditButton.addEventListener('click', handleOpenEditModal);

popupClose.addEventListener('click', function () {
  closeModal(editPopup);
});

//Elementos del formulario de edición del perfil

const editNameInput = editPopup.querySelector(".popup__input_type_name");

const editDescriptionInput = editPopup.querySelector(".popup__input_type_description");

const profileName = document.querySelector(".profile__title");

const profileDescription = document.querySelector(".profile__description");

function fillProfileForm() {
  editNameInput.value = profileName.textContent;
  editDescriptionInput.value = profileDescription.textContent;
};

function handleOpenEditModal() {
  fillProfileForm();
  openModal(editPopup);
}

//Formulario de edición del perfil

const editProfileForm = editPopup.querySelector("#edit-profile-form");


function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = editNameInput.value;
  profileDescription.textContent = editDescriptionInput.value;
  closeModal(editPopup);
};

editProfileForm.addEventListener('submit', handleProfileFormSubmit);