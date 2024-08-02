import React, { useEffect } from 'react';
import { Text } from 'react-native-paper';

import { fetchCuratory } from '../../../store/curatorySlice';
import { useAppDispatch } from '../../../store/store';
import { useGlobalState } from '../../../store/useGlobalState';
import MainLayout from '../../components/MainLayout';
import MovieCard from '../../components/MovieCard';
import ScrollableContainer from '../../components/ScrollableContainer';
import * as S from './styles';

const Curatory = () => {
  const dispatch = useAppDispatch();
  const curatoryState = useGlobalState(state => state.moviesCuratory);

  useEffect(() => {
    dispatch(fetchCuratory());
  }, []);

  return (
    <MainLayout>
      <S.Container>
        <Text variant='displaySmall'>Curatory</Text>
        <Text variant='headlineSmall'>Selected by gender and decade</Text>
        <ScrollableContainer>
          {curatoryState.status === 'loading' && <Text>Carregando...</Text>}
          {curatoryState.status === 'failed' && <Text>{curatoryState.error}</Text>}
          {curatoryState.status === 'succeeded' && (
            curatoryState.data.map(movie => (
              <MovieCard key={movie._id} {...movie} />
            ))
          )}
        </ScrollableContainer>
      </S.Container>
    </MainLayout>
  );
}

export default Curatory;