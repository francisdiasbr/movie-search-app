import React from 'react';

import * as S from './styles';

const MainLayout = ({ children }: any) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
};

export default MainLayout;