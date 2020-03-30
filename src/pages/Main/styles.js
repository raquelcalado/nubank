import styled from 'styled-components/native';
import {StatusBar, Animated} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import globalTheme from '~/config/Theme';

export const Container = styled.View`
  flex: 1;
  background: ${globalTheme.colors.primary};
  padding-top: ${StatusBar.currentHeight}px;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: ${globalTheme.colors.white};
  border-radius: 1px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;
export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Account = styled.Text`
  color: ${globalTheme.colors.grey};
  margin-left: 20px;
  font-size: 14px;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: ${globalTheme.colors.grey};
`;

export const Description = styled.Text`
  font-size: 28px;
  margin-top: 3px;
  color: ${globalTheme.colors.greydark};
`;

export const CardFooter = styled.View`
  padding: 25px;
  background: ${globalTheme.colors.greylight};
  border-radius: 4px;
`;

export const Anottation = styled.Text`
  font-size: 13px;
  color: ${globalTheme.colors.greydark};
  width: 270px;
`;

export const Coin = styled(MaterialCommunityIcon)`
  opacity: 0.5;
  margin-right: 5px;
`;

export const Coins = styled(FontAwesome5Icon)``;

export const ChevronRight = styled(EvilIcon)`
  opacity: 0.5;
  align-self: center;
`;

export const EyeOff = styled(FeatherIcon)``;
