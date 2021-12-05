import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchRecipeRequest,
  fetchRecipeSuccess,
  fetchRecipeError,
  addToFavorite,
  openModal,
  closeModal,
} from './recipes-actions';

const item = createReducer([], {
  [fetchRecipeSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchRecipeRequest]: () => true,
  [fetchRecipeSuccess]: () => false,
  [fetchRecipeError]: () => false,
});

const error = createReducer(false, {
  [fetchRecipeRequest]: () => false,
  [fetchRecipeSuccess]: () => false,
  [fetchRecipeError]: () => true,
});

const favourites = createReducer([], {
  [addToFavorite]: (state, { payload }) => [...state, payload],
});

const modal = createReducer(false, {
  [openModal]: () => true,
  [closeModal]: () => false,
});

export default combineReducers({
  item,
  loading,
  error,
  favourites,
  modal,
});
