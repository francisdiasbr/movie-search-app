import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';

import BaseService from '../../../api/service';
import MainLayout from '../../components/MainLayout';
import ScrollableContainer from '../../components/ScrollableContainer';
import * as S from './styles';


const fetchMovies = async (query: any) => {
  const url = `suggestion?query=${encodeURIComponent(query)}`;
  const response = await BaseService.get(url);
  console.log(response);
  return response;
}


const Home = () => {

  const [text, setText] = useState('');
  const [movieResponse, setMovieResponse] = useState('');

  const handleSearchMovies = async () => {
    try {
      const movies = await fetchMovies(text);
      setMovieResponse(movies.data);
    } catch (error) {
      console.log(error);
    }
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
        <Button mode='contained' onPress={handleSearchMovies}>Buscar</Button>
        <ScrollableContainer>
          <Text>{movieResponse}</Text>
        </ScrollableContainer>
      </S.Container>
    </MainLayout>
  );
}

export default Home;