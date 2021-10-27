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
import HTTPClient from '../../../server';

const SignupPage = () => {
  const {navigate} = useNavigation();

  /* const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  console.log(state, 'state');
  const handleSignup = async () => {
    try {
      const res = await HTTPClient.post('users/sign_up', state);
      console.log(res, 'res');
    } catch (e) {
      console.log(e.response, 'error do zip');
    }
  };
*/
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Signup</Text>
        <TextInput
          placeholderTextColor="#dee1dc"
          placeholder="E-mail"
          style={styles.textInput}
          //          value={state.email}
          //          onChangeText={email => setState({...state, email})}
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#dee1dc"
          placeholder="Password"
          secureTextEntry
          //          value={state.password}
          //          onChangeText={password => setState({...state, password})}
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#dee1dc"
          placeholder="Password Confirmation"
          secureTextEntry
          //          value={state.confirmPassword}
          //          onChangeText={confirmPassword =>
          //            setState({...state, confirmPassword})
          //          }
        />
        <View>
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.textButtom}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigate('Signin')}>
            <Text style={styles.textButtom2}>Back to Login</Text>
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
  button2: {
    alignItems: 'center',
    padding: 10,
    marginTop: 30,
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 100,
    opacity: 0.8,
  },
  textButtom: {
    color: '#101010',
    fontSize: 17,
    fontWeight: 'bold',
  },
  textButtom2: {
    color: '#f5f5f5',
    fontSize: 17,
    fontWeight: 'bold',
  },
  title: {
    color: '#f5f5f5',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
});

export {SignupPage};
