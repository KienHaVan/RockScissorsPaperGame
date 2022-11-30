/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {scaleSizeUI} from '../utils/scaleSizeUI';

const Account = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: scaleSizeUI(200, true)}}>
        <Header />
      </View>
      <View style={{flex: scaleSizeUI(400, true)}}>
        <Content />
      </View>
      <View style={{flex: scaleSizeUI(50, true)}}>
        <Footer />
      </View>
    </View>
  );
};

const Header = () => {
  return (
    <View style={{flex: 1, marginBottom: 20}}>
      <View
        style={{
          flex: scaleSizeUI(30, true),
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          marginTop: 5,
        }}>
        <TouchableOpacity>
          <Image source={require('../assets/left.png')} tintColor="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/qr.png')} tintColor="gray" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: scaleSizeUI(140, true),
          paddingHorizontal: 5,
        }}>
        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1625395005224-0fce68a3cdc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            }}
            style={{width: 100, height: 100, borderRadius: 100}}
          />
        </View>
        <View style={{flex: 7, marginLeft: 20}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 32,
              color: 'black',
              marginBottom: 3,
            }}>
            Bruce Lee
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'gray',
              marginBottom: 10,
              fontStyle: 'italic',
            }}>
            lee.bruce@gmail.com
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <TouchableOpacity
              style={{
                width: 120,
                backgroundColor: 'blue',
                borderRadius: 16,
                marginRight: 10,
              }}>
              <Text
                style={{
                  padding: 10,
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: 'white',
                  alignSelf: 'center',
                }}>
                Follow
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 80,
                backgroundColor: '#1d9bf0',
                borderRadius: 16,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/send-solid.png')}
                tintColor="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: scaleSizeUI(50, true),
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 24, color: 'black'}}>
            210
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 14, color: 'gray'}}>
            Photos
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 24, color: 'black'}}>
            15k
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 14, color: 'gray'}}>
            Followers
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 24, color: 'black'}}>
            605
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 14, color: 'gray'}}>
            Following
          </Text>
        </View>
      </View>
    </View>
  );
};
const Content = () => {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flex: 1,
        }}>
        <View style={{flex: 50, margin: 5}}>
          {new Array(5).fill(0).map((item, index) => (
            <View
              key={index}
              style={{
                marginBottom: 10,
                maxHeight: 300,
                overflow: 'hidden',
                borderRadius: 16,
              }}>
              <Image
                source={require('../assets/pizza1.jpg')}
                style={{
                  width: '100%',
                  height: Math.floor(Math.random() * 200 + 100),
                  backgroundColor: 'gray',
                  borderRadius: 16,
                  resizeMode: 'cover',
                }}
              />
            </View>
          ))}
        </View>
        <View style={{flex: 50, margin: 5}}>
          {new Array(5).fill(0).map((item, index) => (
            <View
              key={index}
              style={{
                marginBottom: 10,
                maxHeight: 300,
                overflow: 'hidden',
                borderRadius: 16,
              }}>
              <Image
                source={require('../assets/pizza2.jpg')}
                style={{
                  width: '100%',
                  height: Math.floor(Math.random() * 150 + 200),
                  backgroundColor: 'gray',
                  borderRadius: 16,
                  resizeMode: 'cover',
                }}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
const Footer = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        alignSelf: 'center',
      }}>
      <TouchableOpacity style={{marginHorizontal: 20}}>
        <Image
          source={require('../assets/home.png')}
          style={{width: 30, height: 30}}
          tintColor="black"
        />
      </TouchableOpacity>
      <TouchableOpacity style={{marginHorizontal: 20}}>
        <Image
          source={require('../assets/plus.png')}
          style={{width: 30, height: 30}}
          tintColor="black"
        />
      </TouchableOpacity>
      <TouchableOpacity style={{marginHorizontal: 20}}>
        <Image
          source={require('../assets/user.png')}
          style={{width: 30, height: 30}}
          tintColor="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Account;
<TouchableOpacity></TouchableOpacity>;
