import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Foto from '../assets/ciclone3.png';
import HTTPClient from '../../../server';
import {Toast} from 'popup-ui';

const SigninPage = () => {
  const {navigate} = useNavigation();

  const [state, setState] = useState({
    email: 'alan@teste.com',
    password: '123123',
  });

  console.log(state, 'state');
  const handleSignin = async () => {
    try {
      const {data} = await HTTPClient.post('/v1/auth/sign_in', state);
      console.log(data, 'data');
      navigate('Vendedor');
    } catch (e) {
      Toast.show({
        title: 'Aviso!',
        text: e.response.data.errors[0],
        color: '#282C2B',
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.inner}>
        <Image
          source={Foto}
          style={{width: 250, height: 90, marginLeft: 50, marginBottom: 80}}
        />
        <TextInput
          placeholderTextColor="#dee1dc"
          placeholder="Username"
          style={styles.textInput}
          value={state.email}
          onChangeText={email => setState({...state, email})}
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#dee1dc"
          placeholder="Password"
          secureTextEntry
          value={state.password}
          onChangeText={password => setState({...state, password})}
        />
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigate('SignupPage')}>
            <Text style={styles.text1}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('ForgotPassword')}>
            <Text style={styles.text1}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={handleSignin}>
            <Text style={styles.textButtom}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    borderRadius: 7,
    margin: 15,
    color: '#f5f5f5',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 100,
    opacity: 0.8,
  },
  textButtom: {
    color: '#101010',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text1: {
    color: '#f5f5f5',
    fontSize: 17,
    fontWeight: 'normal',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingTop: 10,
  },
});

export {SigninPage};
