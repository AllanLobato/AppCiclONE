import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppList from './AppList';

const {Navigator, Screen} = createStackNavigator();

const AppNavigation = ({initial}) => {
  return (
    <Navigator initialRouteName={initial}>
      {AppList.map(({name, component}, index) => (
        <Screen name={name} component={component} key={`${name} - ${index}`} />
      ))}
    </Navigator>
  );
};
export default AppNavigation;
