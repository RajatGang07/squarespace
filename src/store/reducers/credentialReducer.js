import produce from "immer";


const initialState = {
  userName: '',
  isSignout: true,
  userToken: null,
  isLoading: false,
};



const credentialReducer  = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN': {
      const { userToken, userName } = action.payload;
      return produce(state, draft => {
        draft.isSignout = false;
        draft.userToken = userToken;
        draft.userName = userName;
      });
    }
    case 'SIGN_UP': {
      const { userToken, userName } = action.payload;
      return produce(state, draft => {
        draft.isSignout = false;
        draft.userToken = userToken;
        draft.userName = userName;
      });
    }

    case 'SIGN_OUT': {
      return produce(state, draft => {
        draft.isSignout = true;
        draft.userToken = null;
      });
    }

    default: {
      return state;
    }
  }
}


// const credentialReducer = createReducer(initialState, {
//   SIGN_IN: (state, action) => {
//     console.log("action sign in", action.payload);
//     state.isSignout = false;
//     const { userToken, userName } = action.payload;
//     state.userToken = userToken;
//     state.userName = userName;
//   },
//   SIGN_UP: (state, action) => {
//     console.log("action sign up", action.payload);
//     state.isSignout = false;
//     const { userToken, userName } = action.payload;
//     state.userToken = userToken;
//     state.userName = userName;
//   },
//   SIGN_OUT: (state) => {
//     state.isSignout = true;
//     state.userToken = null;
//   },
// });

export default credentialReducer;
