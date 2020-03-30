import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IIcon from 'react-native-vector-icons/Ionicons';
import {Container, TabsContainer, TabItem, TabText} from './styles';
import globalTheme from '~/config/Theme';
import I18n from '~/config/i18n/i18n';

export default function Tabs({translateY}) {
  function handleTabItem(icon, text){
    return(
      <TabItem>
        {icon}
        <TabText>{text}</TabText>
      </TabItem>
    )
  }
  return (
    <Container>
      <TabsContainer>
        {handleTabItem(
          <Icon name="adduser" size={24} color={globalTheme.colors.white} />,
          I18n.t('tab.refer_friends')
        )}
        {handleTabItem(
          <SLIcon name="screen-smartphone" size={24} color={globalTheme.colors.white} />,
          I18n.t('tab.phone_recharge')
        )}
        {handleTabItem(
          <MIcon name="chat-bubble-outline" size={24} color={globalTheme.colors.white} />,
          I18n.t('tab.charge')
        )}
        {handleTabItem(
          <MIcon name="arrow-downward" size={24} color={globalTheme.colors.white} />,
          I18n.t('tab.deposit')
        )}
        {handleTabItem(
          <MIcon name="arrow-upward" size={24} color={globalTheme.colors.white} />,
          I18n.t('tab.transfer')
        )}
         {handleTabItem(
          <MCIcon name="tune" size={24} color={globalTheme.colors.white} />,
          I18n.t('tab.speed_limit')
        )}
         {handleTabItem(
          <IIcon name="ios-help-circle-outline" size={24} color={globalTheme.colors.white} />,
          I18n.t('tab.help_me')
        )}
        {handleTabItem(
          <MCIcon name="barcode" size={24} color={globalTheme.colors.white} />,
          I18n.t('tab.pay')
        )}
        {handleTabItem(
          <Icon name="unlock" size={24} color={globalTheme.colors.white} />,
          I18n.t('tab.lock_card')
        )}
        {handleTabItem(
          <Icon name="creditcard" size={24} color={globalTheme.colors.white} />,
          I18n.t('tab.virtual_card')
        )}
        {handleTabItem(
          <MCIcon name="sort-descending" size={24} color={globalTheme.colors.white} />,
          I18n.t('tab.organize_shortcuts')
        )}
      </TabsContainer>
    </Container>
  );
}
