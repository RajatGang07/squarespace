import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  isSignout: true,
  userToken: null,
  isLoading: false,
};

const credentialReducer = createReducer(initialState, {
  SIGN_IN: (state, action) => {
    console.log("action sign in", action.payload);
    state.isSignout = false;
    const { userToken, userName } = action.payload;
    state.userToken = userToken;
    state.userName = userName;
  },
  SIGN_UP: (state, action) => {
    console.log("action sign up", action.payload);
    state.isSignout = false;
    const { userToken, userName } = action.payload;
    state.userToken = userToken;
    state.userName = userName;
  },
  SIGN_OUT: (state) => {
    state.isSignout = true;
    state.userToken = null;
  },
});

export default credentialReducer;
