import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import FeedAPI from '../api/fetchApi';

const Feed = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const handleFetchApi = () => {
    FeedAPI.getListFeed().then(res => setData(res.data));
  };
  const handlePostApi = () => {
    FeedAPI.addListFeed({nameAuthor: text});
  };
  const handleDeleteApi = () => {
    FeedAPI.deleteListFeed(text);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={'Hello world'}
        onChangeText={one => setText(one)}></TextInput>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleFetchApi}>
        <Text style={styles.buttonText}>GET FEED</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={handlePostApi}>
        <Text style={styles.buttonText}>POST FEED</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleDeleteApi}>
        <Text style={styles.buttonText}>DELETE FEED</Text>
      </TouchableOpacity>
      <View>
        {data.map(item => (
          <Text key={item.id}>{item.nameAuthor}</Text>
        ))}
      </View>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonContainer: {
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'orange',
    marginBottom: 30,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
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
    marginBottom: 20,
    width: '100%',
  },
});
