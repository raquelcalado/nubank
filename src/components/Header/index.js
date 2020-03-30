import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Top, Logo, Title} from './styles';
import logo from '~/assets/Nubank_Logo.png';
import globalTheme from '~/config/Theme';
import I18n from '~/config/i18n/i18n';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>{I18n.t('username')}</Title>
      </Top>
      <Icon
        name="keyboard-arrow-down"
        size={25}
        style={{opacity: 0.4}}
        color={globalTheme.colors.white}
      />
    </Container>
  );
}
