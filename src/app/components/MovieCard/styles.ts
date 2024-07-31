import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const CardContainer = styled.View`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: flex-end;
  height: 200px;
  margin: 8px 0;
  padding: 16px;
  width: ${width - 100}px;
`;

export const GenreList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
`;

export const Genre = styled.Text`
  font-size: 12px;
  color: #888;
  margin-right: 8px;
`;

export const Rating = styled.Text`
  font-size: 12px;
  color: #888;
  flex-direction: row;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: #666;
  margin: 4px 0;
`;

export const Title = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;