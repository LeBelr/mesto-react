export default function Card({card, onCardClick}) {

function handleClick() {
    (onCardClick(card)) ;
  }

  return (
    <li className="cards__item" onClick={handleClick}>
      <img src={card.link} alt={card.name} className="cards__image" />
      <button type="button" className="cards__delete-button"></button>
      <div className="cards__box-title">
        <h2 className="cards__title">{card.name}</h2>
        <div className="cards__box-like">
          <button type="button" className="cards__like-button"></button>
          <p className="cards__like-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}