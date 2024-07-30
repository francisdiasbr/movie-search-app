import React from 'react';
import { Text, TextInput } from 'react-native-paper';

import MainLayout from '../../components/MainLayout';
import * as S from './styles';

const Home = () => {
  return (
    <MainLayout>
      <Text variant='displayLarge' style={{ backgroundColor:'red' }}>Movie Tipster</Text>
      <S.Container>
        <Text>Text 1</Text>
        <Text>Text 2</Text>
        <Text>Text 3</Text>
        <Text>Text 4</Text>
        <Text>Text 5</Text>
      </S.Container>
    </MainLayout>
  );
}

export default Home;