import { useSelector } from 'react-redux';
import { getFavourites } from '../../redux/recipes/recipes-selectors';
import RecipeCard from '../RecipeCard';
import defaultImage from '../../images/Placeholder.png';
import './RecipesList.scss';

export default function RecipeList() {
  const favouriteRecipes = useSelector(getFavourites);
  return (
    <ul className="recipe-card__list">
      {favouriteRecipes.map(
        ({ idMeal, strMeal, strMealThumb, strInstructions }) => (
          <li key={idMeal} className="list__item">
            <RecipeCard
              name={strMeal}
              image={strMealThumb ? strMealThumb : defaultImage}
              recipe={strInstructions}
            />
          </li>
        ),
      )}
    </ul>
  );
}
