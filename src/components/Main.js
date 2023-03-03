import React from "react"
import api from "../utils/api.js";
import Card from "./Card.js";

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  // Хуки состояния для инфы пользователя и карточек

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([])

  // Хук для запроса инфы пользователя и карточек

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      })
    api.getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <main>
      <section className="profile">
        <div className="profile__element">
          <button type="button" className="profile__avatar-edit-button" onClick={onEditAvatar}><img src={userAvatar} alt="Аватарка" className="profile__avatar" /></button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="places">
        <ul className="cards">
          {cards.map((item) => (
            <Card card={item} key={item._id} onCardClick={onCardClick}/>
          ))}
        </ul>
      </section>
    </main>
  )
}