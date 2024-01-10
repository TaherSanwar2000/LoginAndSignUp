import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        ToastAndroid.show('Login Successfull', ToastAndroid.LONG);
        navigation.navigate('Home')
      })
      .catch(error => {
        ToastAndroid.show('Invalid credential', ToastAndroid.LONG);
        console.log(error);
      });
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
        value={email}
        style={{
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 25,
          paddingHorizontal: 20,
          width: '90%',
          color: '#000',
        }}
        onChangeText={text => setEmail(text)}
        placeholder="Enter your email here..."
      />
      <TextInput
        value={password}
        style={{
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 25,
          paddingHorizontal: 20,
          width: '90%',
          marginTop: 10,
          color: '#000',
        }}
        onChangeText={text => setPassword(text)}
        placeholder="Enter your password here..."
      />
      <TouchableOpacity
        onPress={() => login()}
        style={{
          backgroundColor: '#000',
          padding: 10,
          borderRadius: 22,
          width: '50%',
          alignItems: 'center',
          marginTop: 18,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
          LogIn
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={{fontSize: 15, color: '#000', marginTop: 5}}>
          Create Account ?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
