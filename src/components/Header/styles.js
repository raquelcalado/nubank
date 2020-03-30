import styled from 'styled-components/native';
import globalTheme from '~/config/Theme';

export const Container = styled.View`
  align-items: center;
  padding: 0 0 90px;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  font-size: 18px;
  color: ${globalTheme.colors.white};
  font-weight: bold;
  margin-left: 8px;
`;
