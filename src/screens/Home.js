/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import {users} from '../data/user';
import {FontSize} from '../constants';
import {Icon} from 'react-native-vector-icons/FontAwesome';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text
            style={{
              padding: 20,
              alignSelf: 'center',
              fontSize: FontSize.h1,
              fontWeight: 'bold',
              color: 'black',
            }}>
            My Infomation
          </Text>
        </View>
        <ScrollView>
          {users.map(user => (
            <Card key={user.id} user={user} />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  cardContainer: {
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    flex: 100,
  },
  cardUpper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardText: {
    color: 'black',
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: FontSize.h4,
  },
  cardAvatar: {
    width: 70,
    height: 70,
    borderRadius: 100,
    resizeMode: 'cover',
    flexShrink: 1,
  },
  cardInfo: {},
});

function Card({user}) {
  return (
    <ImageBackground style={styles.cardContainer} source={{uri: user.image}}>
      <View style={styles.cardUpper}>
        <View style={{flex: 80}}>
          <Text style={[styles.cardText, {fontSize: FontSize.h3}]}>
            Full Name: {user.first_name} {user.last_name}
          </Text>
          <Text style={styles.cardText}>Age: {user.age}</Text>
          <Text style={styles.cardText}>Gender: {user.gender}</Text>
          <Text style={[styles.cardText, {fontStyle: 'italic'}]}>
            Salary: ${user.salary}
          </Text>
          <Text style={[styles.cardText, {textDecorationLine: 'underline'}]}>
            Email: {user.email}
          </Text>
        </View>
        <View style={{flex: 20}}>
          <Image
            source={{
              uri: user.avatar,
            }}
            style={styles.cardAvatar}
          />
        </View>
      </View>
      <View>
        <Text style={[styles.cardText, styles.cardInfo]} numberOfLines={3}>
          {user.info}
        </Text>
      </View>
    </ImageBackground>
  );
}
