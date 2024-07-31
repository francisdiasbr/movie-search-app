export interface MovieSuggestionState {
  data: string; // Tipo do dado retornado (pode ajustar conforme necessário)
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface MovieCuratoryState {
  data: any; // Tipo do dado retornado (pode ajustar conforme necessário)
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export type FetchCuratoryPayload = string;
export type FetchMovieSuggestionPayload = string;