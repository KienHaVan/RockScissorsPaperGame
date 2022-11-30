import {createSlice} from '@reduxjs/toolkit';
import {fetchAPI} from './thunk/counterThunk';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    data: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    increase: state => {
      state.count += 1;
    },
    decrease: state => {
      state.count -= 1;
    },
  },
  extraReducers: {
    [fetchAPI.pending.type]: state => {
      state.isLoading = true;
    },
    [fetchAPI.fulfilled.type]: (state, action) => {
      state.data.push(action.payload);
      // state.isLoading = false;
    },
    [fetchAPI.rejected.type]: (state, action) => {
      // state.errorMess.push(action.payload);
      // state.isLoading = false;
      console.log('rejected', action.error.message);
      state.isError = true;
    },
  },
  // extraReducers: builder => {
  //   builder.addCase(fetchAPI.pending, (state, action) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(fetchAPI.fulfilled, (state, action) => {
  //     state.data.push(action.payload);
  //     // state.isLoading = false;
  //   });
  //   builder.addCase(fetchAPI.rejected, (state, action) => {
  //     // state.errorMess.push(action.payload);
  //     // state.isLoading = false;
  //     console.log('rejected', action.payload);
  //     state.isError = true;
  //   });
  // },
});

export const {increase, decrease} = counterSlice.actions;
export default counterSlice.reducer;
