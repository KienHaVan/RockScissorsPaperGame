import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';
const Form = ({title = 'STUDENT NAME', control, ...props}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.textInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={'#999'}
            {...props}
          />
        )}
        name="studentName"
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  heading: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 20,
    color: 'black',
  },
  textInput: {
    borderColor: '#999',
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 10,
    fontSize: 16,
    fontWeight: '700',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});
