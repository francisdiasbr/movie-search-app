import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import curatoryReducer from './curatorySlice';
import movieSuggestionReducer from './movieSuggestionSlice';

const store = configureStore({
  reducer: {
    movies: movieSuggestionReducer,
    moviesCuratory: curatoryReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type AppState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store;
