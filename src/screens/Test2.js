/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import Test3 from './Test3';
import {useSelector} from 'react-redux';

const Test2 = () => {
  const count = useSelector(state => state.counter.count);
  return (
    <View style={{flex: 1, marginLeft: 30}}>
      <Text style={{fontWeight: '900', fontSize: 26}}>Count2: {count}</Text>
      <View style={{flex: 1}}>
        <Test3 />
      </View>
    </View>
  );
};

export default Test2;
