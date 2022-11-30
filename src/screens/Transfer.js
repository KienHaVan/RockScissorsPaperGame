/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Font from '../constants/Font';
import {Color} from '../constants';
import {scaleSizeUI} from '../utils/scaleSizeUI';
import Constants from '../constants/Constants';
import FontWeight from '../constants/FontWeight';
// import {uuid} from 'uuidv4';

const userList = [
  {
    name: 'Phillip',
    image: require('../assets/images/person1.png'),
  },
  {
    name: 'Brandon',
    image: require('../assets/images/person2.png'),
  },
  {
    name: 'Julia',
    image: require('../assets/images/person3.png'),
  },
  {
    name: 'Dianne ',
    image: require('../assets/images/person4.png'),
  },
];

const Transfer = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.primary,
      }}>
      <View
        style={{
          flex: scaleSizeUI(80, true),
          paddingHorizontal: Constants.paddingPrimary,
        }}>
        <Header />
      </View>
      <View
        style={{
          flex: scaleSizeUI(42, true),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 48,
            height: 6,
            backgroundColor: 'rgba(222, 255, 255, 0.3)',
            borderRadius: 24,
          }}
        />
      </View>
      <View
        style={{
          flex: scaleSizeUI(670, true),
          backgroundColor: Color.white,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
        }}>
        <Content />
      </View>
    </View>
  );
};

export default Transfer;

const Header = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            padding: Constants.paddingSecondary,
          }}>
          <Image
            source={require('../assets/images/Left.png')}
            style={{width: 24, height: 24}}
          />
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text
            style={[
              Font.heading4,
              {
                color: Color.white,
                lineHeight: 28,
              },
            ]}>
            Transfer
          </Text>
        </View>
        <View style={{width: 56, height: 56}} />
      </View>
    </View>
  );
};
const Content = () => {
  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={[
            Font.heading4,
            {
              textAlign: 'center',
              marginVertical: 32,
              width: 280,
            },
          ]}>
          Where do you want to transfer?
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: Constants.paddingPrimary,
          borderColor: '#A0A4A8',
          borderWidth: 1,
          paddingHorizontal: 24,
          paddingVertical: 15,
          borderRadius: 16,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 24,
        }}>
        <Image source={require('../assets/images/Card.png')} />
        <Text style={{flex: 1, marginLeft: 12}}>Select Bank</Text>
        <Image source={require('../assets/images/ArrowDown.png')} />
      </View>
      <View style={{paddingHorizontal: 24, marginBottom: 24}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 24,
          }}>
          <Text style={Font.heading6}>Transfer to</Text>
          <Text style={([Font.heading6], {color: Color.primary})}>See all</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{alignItems: 'center', marginRight: 20}}>
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 100,
                backgroundColor: '#f5f7fe',
                marginBottom: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../assets/images/user-add.png')}></Image>
            </View>
            <Text style={[Font.heading6, {fontWeight: FontWeight.Medium}]}>
              Add
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            {userList.map(user => (
              <View key={user.image} style={{alignItems: 'center'}}>
                <Image
                  source={user.image}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 100,
                    backgroundColor: '#f5f7fe',
                    marginBottom: 8,
                  }}
                />
                <Text style={[Font.heading6, {fontWeight: FontWeight.Medium}]}>
                  {user.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View />
      </View>
      <View
        style={{
          marginHorizontal: 24,
          paddingHorizontal: 24,
          alignItems: 'center',
          backgroundColor: '#F5F7FE',
          borderRadius: 16,
          paddingBottom: 38,
          marginBottom: 60,
        }}>
        <Text
          style={[
            Font.heading4,
            {marginTop: 16, color: 'rgba(12, 32, 115, 0.5)', marginBottom: 24},
          ]}>
          Amount (USD)
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../assets/images/Decrease.png')}
            style={{width: 32, height: 32}}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <Text style={[Font.heading4, {marginRight: 4, lineHeight: 46}]}>
              $
            </Text>
            <Text style={[Font.heading1]}>75</Text>
          </View>
          <Image source={require('../assets/images/Increase.png')} />
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 24,
          borderRadius: 16,
          backgroundColor: Color.primary,
          padding: 15,
        }}>
        <Text
          style={[Font.heading6, {color: Color.white, alignSelf: 'center'}]}>
          Continue
        </Text>
      </View>
    </View>
  );
};
