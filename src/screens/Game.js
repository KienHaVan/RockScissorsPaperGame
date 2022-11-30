/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {scaleSizeUI} from '../utils/scaleSizeUI';
import {Color, Font} from '../constants';

const value = {
  ROCK: 0,
  SCISSORS: 1,
  PAPER: 2,
};

const list = [
  {
    id: 0,
    name: 'rock',
    image: require('../assets/Game/rock1.png'),
  },
  {
    id: 1,
    name: 'scissors',
    image: require('../assets/Game/scissors1.png'),
  },
  {
    id: 2,
    name: 'paper',
    image: require('../assets/Game/paper1.png'),
  },
];

const text = {
  first: "LET'S PLAY",
  start: 'CHOOSE YOURS',
  win: 'YOU WIN',
  lose: 'YOU LOSE',
  draw: 'DRAW',
  again: 'PLAY AGAIN',
};

const Game = () => {
  const [comChoice, setComChoice] = useState(0);
  const [yourChoice, setYourChoice] = useState(0);
  const [result, setResult] = useState(text.first);
  useEffect(() => {
    setResult(text.first);
  }, []);
  const handleRandomComputer = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    setComChoice(Number(randomNumber));
  };
  const rule = (you, com) => {
    if (you === com) {
      setResult(text.draw);
    }
    if (you === value.ROCK) {
      if (com === value.PAPER) setResult(text.lose);
      if (com === value.SCISSORS) setResult(text.win);
    }
    if (you === value.SCISSORS) {
      if (com === value.ROCK) setResult(text.lose);
      if (com === value.PAPER) setResult(text.win);
    }
    if (you === value.PAPER) {
      if (com === value.SCISSORS) setResult(text.lose);
      if (com === value.ROCK) setResult(text.win);
    }
  };
  const handleStart = () => {
    setResult(text.start);
  };
  const handlePlay = id => {
    setYourChoice(id);
    handleRandomComputer();
  };
  useEffect(() => {
    rule(yourChoice, comChoice);
    setTimeout(() => {
      setResult(text.again);
    }, 2000);
  }, [yourChoice, comChoice]);
  return (
    <View style={{flex: 1, backgroundColor: Color.white, paddingTop: 20}}>
      <View
        style={{
          flex: scaleSizeUI(35, true),
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[Font.heading2, {marginBottom: 20}]}>COMPUTER</Text>
        <View
          style={{
            width: 160,
            height: 160,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={
              comChoice === value.ROCK
                ? list[0].image
                : comChoice === value.SCISSORS
                ? list[1].image
                : list[2].image
            }
            resizeMode="contain"
            style={{height: '100%', transform: [{scaleY: -1}]}}
          />
        </View>
      </View>
      <View
        style={{
          flex: scaleSizeUI(10, true),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Color.error,
          alignSelf: 'center',
          width: '100%',
        }}>
        <TouchableOpacity onPress={handleStart}>
          <Text style={[Font.heading1, {alignSelf: 'center', color: 'white'}]}>
            {result}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: scaleSizeUI(50, true),
          alignSelf: 'center',
          width: '100%',
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            width: 160,
            height: 160,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            alignSelf: 'center',
          }}>
          <Image
            source={
              yourChoice === 0
                ? list[0].image
                : yourChoice === 1
                ? list[1].image
                : list[2].image
            }
            resizeMode="contain"
            style={{height: '100%'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 40,
          }}>
          {list.map(item => (
            <TouchableOpacity
              disabled={result === text.start ? false : true}
              onPress={() => handlePlay(item.id)}
              key={item.id}
              style={{
                width: 100,
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                backgroundColor: Color.primary,
                padding: 10,
                borderRadius: 100,
              }}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={{height: '100%'}}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Game;
