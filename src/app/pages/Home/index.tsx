import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';

import { fetchMovieSuggestion } from '../../../store/movieSuggestionSlice';
import { useAppDispatch } from '../../../store/store';
import { useGlobalState } from '../../../store/useGlobalState';
import MainLayout from '../../components/MainLayout';
import ScrollableContainer from '../../components/ScrollableContainer';
import * as S from './styles';

const Home = () => {
  const [text, setText] = useState('');
  
  const dispatch = useAppDispatch();
  const movieState = useGlobalState(state => state.movies);

  const handleSearchSuggestion = () => {
    dispatch(fetchMovieSuggestion(text));
  }

  return (
    <MainLayout>
      <S.Container>
        <Text variant='displaySmall'>Movie Tipster</Text>
        <Text variant='headlineSmall'>O que você está procurando hoje?</Text>
        <TextInput
          label='Pesquisar'
          mode='outlined'
          style={{ width: '100%' }}
          onChangeText={setText}
          value={text}
        />
        <Button loading={movieState.status === 'loading'} mode='contained' onPress={handleSearchSuggestion}>{movieState.status === 'loading' ? '' : 'Buscar'}</Button>
        <ScrollableContainer>
          <Text>{movieState.status === 'loading' ? 'Carregando...' : movieState.data}</Text>
          {movieState.status === 'failed' && <Text>{movieState.error}</Text>}
        </ScrollableContainer>
      </S.Container>
    </MainLayout>
  );
}

export default Home;