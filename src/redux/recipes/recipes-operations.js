import axios from 'axios';
import {
  fetchRecipeRequest,
  fetchRecipeSuccess,
  fetchRecipeError,
} from './recipes-actions';

export const fetchRecipe = () => async dispatch => {
  dispatch(fetchRecipeRequest());

  try {
    const {
      data: { meals },
    } = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');

    dispatch(fetchRecipeSuccess(meals));
  } catch (error) {
    dispatch(fetchRecipeError());
  }
};
