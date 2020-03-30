import React from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import globalTheme from '~/config/Theme';
import I18n from '~/config/i18n/i18n';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './style';

export default function Menu({translateY}) {
  function renderNavItem(text, icon){
    return(
      <NavItem>
          <Icon name={icon} size={22} color={globalTheme.colors.white} />
          <NavText>{text}</NavText>
        </NavItem>
    )
  }

  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <QRCode
          value="https://github.com/raquelcalado/"
          size={80}
          color={globalTheme.colors.primary}
          bgColor={globalTheme.colors.white}
        />
      </Code>
      <Nav>
        {renderNavItem(I18n.t('menu.help_me'), "help-outline")}
        {renderNavItem(I18n.t('menu.profile'), "person-outline")}
        {renderNavItem(I18n.t('menu.configure_card'), "credit-card")}
        {renderNavItem(I18n.t('menu.corporation_account'), "store")}
        {renderNavItem(I18n.t('menu.app_settings'), "phone-iphone")}
      </Nav>
      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>{(I18n.t('menu.sign_out')).toUpperCase()}</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}

Menu.propTypes = {
  translateY: PropTypes.object.isRequired,
};
