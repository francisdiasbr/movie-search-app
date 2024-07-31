import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import BaseService from '../api/service';
import { FetchMovieSuggestionPayload, MovieSuggestionState } from './types';

export const fetchMovieSuggestion = createAsyncThunk<FetchMovieSuggestionPayload, string>(
  'movies/fetchMovieSuggestion',
  async (query: string) => {
    const url = `suggestion?query=${encodeURIComponent(query)}`;
    const response = await BaseService.get(url);
    return response.data;
  }
);

const initialState: MovieSuggestionState = {
  data: '',
  status: 'idle',
  error: null,
};

const movieSuggestionSlice = createSlice({
  name: 'movieSuggestion',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieSuggestion.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieSuggestion.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchMovieSuggestion.rejected, (state) => {
        state.status = 'failed';
        state.error = 'error';
      });
  },
});

export default movieSuggestionSlice.reducer;
