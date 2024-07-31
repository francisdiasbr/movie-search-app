import React from 'react';
import { Rating } from 'react-native-ratings';

import * as S from './styles';
import { MovieCardProps } from './types';

const MovieCard: React.FC<MovieCardProps> = ({
  primaryTitle,
  averageRating,
  numVotes,
  startYear,
}) => {
  return (
    <S.CardContainer>
      <S.Title>{primaryTitle}</S.Title>
      <S.Rating>
        <Rating
          ratingCount={10}
          readonly
          startingValue={averageRating}
          imageSize={12}
          tintColor='#fff'
          type='custom'
          fractions={0}
          ratingColor='#DA8744'
        />
        {numVotes}
      </S.Rating>
      <S.Subtitle>{startYear}</S.Subtitle>
    </S.CardContainer>
  );
};

export default MovieCard;
