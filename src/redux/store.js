import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from './slices/favoriteSlice';
import recordReducer from './slices/recordSlice';

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        record: recordReducer,
    }
});