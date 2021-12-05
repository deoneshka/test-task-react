import { createAction } from '@reduxjs/toolkit';

export const fetchRecipeRequest = createAction('recipes/fetchRecipeRequest');
export const fetchRecipeSuccess = createAction('recipes/fetchRecipeSuccess');
export const fetchRecipeError = createAction('recipes/fetchRecipeError');
export const addToFavorite = createAction('recipes/addToFavorite');
export const openModal = createAction('recipes/openModal');
export const closeModal = createAction('recipes/closeModal');
