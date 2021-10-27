import React from 'react';
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

const ForgotPassword = () => {
  const {navigate} = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Forgot Password?</Text>
        <TextInput
          placeholderTextColor="#dee1dc"
          placeholder="E-mail"
          style={styles.textInput}
        />
        <View>
          <TouchableOpacity style={styles.button} onPress={() => navigate('')}>
            <Text style={styles.textButtom}>
              Send me reset password instructions
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigate('Signin')}>
            <Text style={styles.text1}>Login </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('SignupPage')}>
            <Text style={styles.text1}>Signup </Text>
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
    fontSize: 15,
    fontWeight: 'bold',
  },
  text1: {
    color: '#f5f5f5',
    fontSize: 17,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingTop: 30,
  },
  title: {
    color: '#f5f5f5',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
});

export {ForgotPassword};
