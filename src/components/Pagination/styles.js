import styled from 'styled-components/native';
import globalTheme from '~/config/Theme';

export const Container = styled.View`
  flex-direction: row;
  padding-top: 15px;
  padding-bottom: 60px;
  justify-content: center;
`;

export const Item = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 5px;
  border-width: 0;
  margin: 1.8px;
  background-color: ${globalTheme.colors.purplelight};
  opacity: 0.9;
`;