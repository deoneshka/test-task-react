import './RecipeCard.scss';

export default function RecipeCard({ image, name, recipe }) {
  return (
    <div className="recipe-card__wrapper">
      <img src={image} alt={name} className="recipe-card__image"></img>
      <div className="recipe-card__info">
        <h3 className="info__title">{name}</h3>
        <p className="info__description">{recipe}</p>
      </div>
    </div>
  );
}
