import React from 'react';
import {StatusBar, Text} from 'react-native';
import Router from './routes';
import {Root} from 'popup-ui';

import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <Root>
      <NavigationContainer independent={true}>
        <StatusBar barStyle="light-content" />
        <Router />
      </NavigationContainer>
    </Root>
  );
}
