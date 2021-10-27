import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../pages/public/Signin';
import Vendedor from '../pages/private/Vendedor/Vendedor';
import OrcamentoPage from '../pages/private/Orcamento/OrcamentoPage';
import ParcelamentoPage from '../pages/private/Parcelamento/ParcelamentoPage';
import {SignupPage} from '../components/public/Signin/SignupPage';
import {ForgotPassword} from '../components/public/Signin/ForgotPassword';

const {Navigator, Screen} = createStackNavigator();
const AuthNavigation = ({initial}) => {
  return (
    <Navigator initialRouteName={initial}>
      <Screen name="Signin" component={Signin} options={{headerShown: false}} />
      <Screen
        name="Vendedor"
        component={Vendedor}
        options={{headerShown: false}}
      />
      <Screen
        name="OrcamentoPage"
        component={OrcamentoPage}
        options={{headerShown: false}}
      />
      <Screen
        name="ParcelamentoPage"
        component={ParcelamentoPage}
        options={{headerShown: false}}
      />
      <Screen
        name="SignupPage"
        component={SignupPage}
        options={{headerShown: false}}
      />
      <Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};
export default AuthNavigation;
