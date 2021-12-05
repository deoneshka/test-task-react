// import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.recipes.loading;
export const getError = state => state.recipes.error;
export const getRandomRecipe = state => state.recipes.item;
export const getFavourites = state => state.recipes.favourites;
export const getModalStatus = state => state.recipes.modal;
// export const getFilter = state => state.tickers.filter;
// export const getFavorite = state => state.tickers.favorite;
// export const getToggle = state => state.tickers.toggle;

// export const getFavoriteTickers = createSelector(
//   [getUpdatedTickers, getFavorite],
//   (tickers, favoriteTickers) => {
//     return tickers.filter(({ ticker }) => favoriteTickers.includes(ticker));
//   },
// );

// export const getVisibleTickers = createSelector(
//   [getUpdatedTickers, getFavoriteTickers, getFilter, getToggle],
//   (allTickers, favoriteTickers, filter, toggle) => {
//     const normalizedFilter = filter.toLowerCase();
//     const tickers = toggle === 'all' ? allTickers : favoriteTickers;

//     return tickers.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter),
//     );
//   },
// );
