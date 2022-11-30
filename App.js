import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Account from './src/screens/Account';
import Home from './src/screens/Home';
import Transfer from './src/screens/Transfer';
import Overview from './src/screens/Overview';
import {Color} from './src/constants';
import Game from './src/screens/Game';
import Test1 from './src/screens/Test1';
import {Provider} from 'react-redux';
import store from './src/redux-toolkit/configureStore';
import Form from './src/screens/Form';
import styles from './src/styles/OverviewStyles';
// import store from './src/redux/store/configureStore';
import {useForm, Controller} from 'react-hook-form';
import Feed from './src/screens/Feed';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      studentName: '',
    },
  });
  const onSubmit = data => console.log(data);
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={Color.primary} />
        {/* <Account /> */}
        {/* <Transfer /> */}
        {/* <Overview /> */}
        <Game />
        {/* <Test1 /> */}
        {/* <Form
          title="STUDENT NAME"
          control={control}
          placeholder="Enter student name"
        />
        {errors.studentName && <Text>This is required.</Text>} */}
        {/* <TouchableOpacity
          style={style.buttonContainer}
          onPress={() => {
            launchCamera();
            Geolocation.getCurrentPosition(info => console.log(info));
          }}>
          <Text style={style.buttonText}>SEND</Text>
        </TouchableOpacity> */}
        {/* <Feed></Feed> */}
      </SafeAreaView>
    </Provider>
  );
};

const style = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'orange',
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
});

export default App;
