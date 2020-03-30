import React from 'react';

import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';
import Pagination from '~/components/Pagination';
import globalTheme from '~/config/Theme';
import I18n from '~/config/i18n/i18n';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Anottation,
  Row,
  Account,
  Coin,
  ChevronRight,
  Coins,
  EyeOff,
} from './styles';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-380, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <CardHeader>
              <Row>
                <Coins name="coins" size={23} color={globalTheme.colors.greydarksecundary} />
                <Account>{I18n.t('main_card.account')}</Account>
              </Row>
              <EyeOff name="eye-off" size={23} color={globalTheme.colors.greydarksecundary} />
            </CardHeader>
            <CardContent>
              <Title>{I18n.t('main_card.balance_available')}</Title>
              <Description>{`${I18n.t('currency')} 1.153.661,65`}</Description>
            </CardContent>
            <CardFooter>
              <Row>
                <Coin name="coin" size={23} color={globalTheme.colors.primary} />
                <Anottation>
                  {`${I18n.t('main_card.transfer_of')} ${I18n.t('currency')} 349,95 ${I18n.t('main_card.received_from')} ${I18n.t('usertransfer')} ${I18n.t('days_of_the_week.friday')}`}
                </Anottation>
                <ChevronRight name="chevron-right" size={23} color={globalTheme.colors.greydark} />
              </Row>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Pagination length={3} current={1} />
      <Tabs translateY={translateY} />
    </Container>
  );
}
