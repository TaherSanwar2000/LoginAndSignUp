import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const signup = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        ToastAndroid.show('User account created', ToastAndroid.BOTTOM);
        navigation.navigate('Registration');
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          ToastAndroid.show(
            'email address is already in use!',
            ToastAndroid.BOTTOM,
          );
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          ToastAndroid.show(
            'That email address is invalid!',
            ToastAndroid.BOTTOM,
          );
          console.log('That email address is invalid!');
        }

        console.error(error);
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
        onPress={() => {
          signup();
        }}
        style={{
          backgroundColor: '#000',
          padding: 10,
          borderRadius: 22,
          width: '50%',
          alignItems: 'center',
          marginTop: 18,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
          SignUp
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
