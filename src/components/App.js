import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";


function App() {

  //Функции для смены состояния открытия попапов

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card)
  }

  // Функция изменения состояний для закрытия любого попапа

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  // Хуки состояния для попапов

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({})

  return (
    <>
      <div className="page">
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        
        <Footer />

        <PopupWithForm
          title='Редактировать профиль'
          name='edit'
          isOpen={isEditProfilePopupOpen}
          btnText='Сохранить'
          onClose={closeAllPopups}
        >
          <input id="profile-name-input" type="text" className="popup__input popup__input_type_edit-profile-name"
            name="name" placeholder="Имя" required minLength="2" maxLength="40" />
          <span className="popup__input-error profile-name-input-error"></span>
          <input id="profile-about-input" type="text" className="popup__input popup__input_type_edit-profile-about"
            name="about" placeholder="О себе" required minLength="2" maxLength="200" />
          <span className="popup__input-error profile-about-input-error"></span>
        </PopupWithForm >

        <PopupWithForm
          title='Новое место'
          name='add'
          isOpen={isAddPlacePopupOpen}
          btnText='Сохранить'
          onClose={closeAllPopups}
        >
          <input id="card-name-input" type="text" className="popup__input popup__input_type_add-card-name" name="name"
            placeholder="Название" required minLength="2" maxLength="30" />
          <span className="popup__input-error card-name-input-error"></span>
          <input id="card-link-input" type="url" className="popup__input popup__input_type_add-card-link" name="link"
            placeholder="Ссылка на картинку" required />
          <span className="popup__input-error card-link-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          title='Обновить Аватар'
          name='avatar'
          isOpen={isEditAvatarPopupOpen}
          btnText='Сохранить'
          onClose={closeAllPopups}
        >
          <input id="avatar-input" type="url" className="popup__input popup__input_type_avatar" name="avatar"
            placeholder="Ссылка на картинку" required />
          <span className="popup__input-error avatar-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          title='Вы уверены?'
          name='delete'
          btnText='Да'
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
        />

      </div>
    </>
  );
}

export default App;
