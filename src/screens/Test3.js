/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Test3 = () => {
  const count = useSelector(state => state.counter.count);
  return (
    <View style={{marginLeft: 30}}>
      <Text style={{fontWeight: '900', fontSize: 26}}>Count3: {count}</Text>
    </View>
  );
};

export default Test3;
