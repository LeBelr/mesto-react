export default function Card(props) {

function handleClick() {
    (props.onCardClick(props.card)) ;
  }

  return (
    <li className="cards__item" onClick={handleClick}>
      <img src={props.card.link} alt={props.card.name} className="cards__image" />
      <button type="button" className="cards__delete-button"></button>
      <div className="cards__box-title">
        <h2 className="cards__title">{props.card.name}</h2>
        <div className="cards__box-like">
          <button type="button" className="cards__like-button"></button>
          <p className="cards__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}