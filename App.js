import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import _get from 'lodash.get';


import Auth from 'screen/Auth';

const App = () => {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  console.log(state, 'state')
  const userName = _get(state, 'credentialReducer.userName');
  return {
    userName,
  };
};

export default connect(mapStateToProps, {})(App);
