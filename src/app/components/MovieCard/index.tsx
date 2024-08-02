import React from 'react';

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
        <S.Subtitle>
          {averageRating} ({numVotes})
        </S.Subtitle>
      </S.Rating>
      <S.Subtitle>{startYear}</S.Subtitle>
    </S.CardContainer>
  );
};

export default MovieCard;
