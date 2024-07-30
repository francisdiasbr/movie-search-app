import React from 'react';
import { ScrollView } from 'react-native';

import * as S from './styles';

const MainLayout = ({ children }: any) => {
  return (
    <S.Container>
      <ScrollView>
        {children}
      </ScrollView>
    </S.Container>
  );
};

export default MainLayout;