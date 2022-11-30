import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchAPI = createAsyncThunk('counter/fetchAPI', async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.log('User not found');
  }
});
