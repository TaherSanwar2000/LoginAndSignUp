import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const Home = () => {
  const [getData, setData] = useState();
  useEffect(() => {
    getUserInfor();
  }, []);
  const getUserInfor = async () => {
    const users = await firestore().collection('Users').get();
    setData(users.docs);
    console.log(getData);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        data={getData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 8,
              padding: 16,
              marginBottom: 16,
            }}>
            <Text style={{fontSize: 18, color: '#000'}}>
              Name: {item._data.name}
            </Text>
            <Text style={{fontSize: 18, color: '#000'}}>
              DOB: {item._data.dob}
            </Text>
            <Text style={{fontSize: 18, color: '#000'}}>
              Phone: {item._data.phone}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
