import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLoading,
  getError,
  getRandomRecipe,
  getFavourites,
} from '../../redux/recipes/recipes-selectors';
import { fetchRecipe } from '../../redux/recipes/recipes-operations';
import LoaderComponent from '../../components/LoaderComponent';
import Container from '../../components/Container';
import RecipeCard from '../../components/RecipeCard';
import { addToFavorite } from '../../redux/recipes/recipes-actions';
import './HomeView.scss';

export default function HomeView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const isError = useSelector(getError);
  const recipeInfo = useSelector(getRandomRecipe);
  const favouritesRecipes = useSelector(getFavourites);

  useEffect(() => {
    dispatch(fetchRecipe());
  }, [dispatch]);

  const addToFavoritesRecipes = useCallback(
    recipe => {
      if (!favouritesRecipes.find(obj => obj.idMeal === recipe.idMeal))
        dispatch(addToFavorite(recipe));
    },
    [favouritesRecipes, dispatch],
  );

  return (
    <Container>
      {isLoading && <LoaderComponent />}
      {!isLoading && !isError && recipeInfo.length > 0 && (
        <div className="recipe-card">
          <RecipeCard
            name={recipeInfo[0].strMeal}
            image={recipeInfo[0].strMealThumb}
            recipe={recipeInfo[0].strInstructions}
          />
          <div className="recipe-card__button-wrapper">
            <button
              type="button"
              className="button-wrapper__button"
              onClick={() => dispatch(fetchRecipe())}
            >
              Skip
            </button>
            <button
              type="button"
              className="button-wrapper__button"
              onClick={() => addToFavoritesRecipes(recipeInfo[0])}
            >
              Like
            </button>
          </div>
        </div>
      )}
      {isError && (
        <h2 className="error">Sorry, server connection error, try later.</h2>
      )}
    </Container>
  );
}
