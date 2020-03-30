import React from 'react';
import {StatusBar} from 'react-native';
import globalTheme from '~/config/Theme';
// import '~/config/ReactotronConfig';

import Routes from '~/config/Routes';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor={globalTheme.colors.primary} />
    <Routes />
  </>
);

export default App;
