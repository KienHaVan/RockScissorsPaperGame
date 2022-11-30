/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Test2 from './Test2';
import Test3 from './Test3';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
// import {decrement, increment} from '../redux/actions/counterActions';
// import {getData, incrementAsync} from '../redux/thunk/counterThunk';
import {decrease, increase} from '../redux-toolkit/counterSlice';
import {fetchAPI} from '../redux-toolkit/thunk/counterThunk';

const Test1 = () => {
  const data = useSelector(state => state.counter);
  console.log('🚀 ~ file: Test1.js ~ line 14 ~ Test1 ~ data', data);

  const dispatch = useDispatch();
  return (
    // <NavigationContainer>
    <View style={{flex: 1}}>
      <Text style={{fontWeight: '900', fontSize: 26}}>
        Count1: {data.count}
      </Text>
      <TouchableOpacity
        style={{
          paddingVertical: 6,
          paddingHorizontal: 10,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => dispatch(increase())}>
        <Text style={{fontWeight: '900', fontSize: 26, color: 'white'}}>
          Increase
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingVertical: 6,
          paddingHorizontal: 10,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}
        onPress={() => dispatch(decrease())}>
        <Text style={{fontWeight: '900', fontSize: 26, color: 'white'}}>
          Decrease
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingVertical: 6,
          paddingHorizontal: 10,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}
        onPress={() => dispatch(fetchAPI())}>
        <Text style={{fontWeight: '900', fontSize: 26, color: 'white'}}>
          GET DATA
        </Text>
      </TouchableOpacity>
      {data.isLoading && (
        <View
          style={{
            alignSelf: 'center',
            width: 100,
            height: 100,
            borderColor: 'orange',
            borderWidth: 10,
            borderRadius: 100,
            borderLeftColor: 'rgba(52, 52, 52, 0.8)',
            marginTop: 10,
          }}></View>
      )}
      <View style={{flex: 1}}>
        <Test2 />
      </View>
    </View>
    // </NavigationContainer>
  );
};

export default Test1;
