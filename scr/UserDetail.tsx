import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const UserDetail = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const navigation = useNavigation();
  const saveUSerInfo = () => {
    firestore()
      .collection('Users')
      .add({
        name: name,
        dob: dob,
        phone: phoneNum,
      })
      .then(() => {
        console.log('User added!');
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
        value={name}
        style={{
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 25,
          paddingHorizontal: 20,
          width: '90%',
          marginTop: 10,
          color: '#000',
        }}
        onChangeText={text => setName(text)}
        placeholder="Enter your name here..."
      />
      <TextInput
        value={dob}
        style={{
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 25,
          paddingHorizontal: 20,
          width: '90%',
          marginTop: 10,
          color: '#000',
        }}
        onChangeText={text => setDob(text)}
        placeholder="Enter your DOB here..."
      />
      <TextInput
        value={phoneNum}
        style={{
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 25,
          paddingHorizontal: 20,
          width: '90%',
          marginTop: 10,
          color: '#000',
        }}
        onChangeText={text => setPhoneNum(text)}
        placeholder="Enter your phone number here..."
      />
      <TouchableOpacity
        onPress={() => {
          saveUSerInfo();
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
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserDetail;
