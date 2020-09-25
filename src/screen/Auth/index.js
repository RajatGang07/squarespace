import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import SignIn from 'screen/SignIn';
import SignUp from 'screen/SignUp';
import { tryLocalSignIn } from 'store/actions/creadentialAction';
import RestorePasswordScreenView from 'screen/RestorePasswordScreen/index';
import { RootNavigator } from 'navigation/RootNavigator';
import { getUserToken, getSignOutValue } from '../../store/selectors/credentialSelectors';


const Stack = createStackNavigator();

const Auth = ({ userToken, isSignout, ...props }) => {
    console.log(userToken, "userToken");
    // in a same stack
    if (userToken) {
        return (
            <RootNavigator />
        );
    }
    return (
        <Stack.Navigator
            screenOptions={{
                title: 'Square Space',
                animationTypeForReplace: isSignout ? 'push' : 'pop',
                headerShown: false,
            }}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="RestorePassword" component={RestorePasswordScreenView} />
        </Stack.Navigator>
    )

}

const mapStateToProps = (state) => {
    const userToken = getUserToken(state);
    const isSignout = getSignOutValue(state);
    return {
      userToken,
      isSignout,
    };
  };


export default connect(mapStateToProps, {
    tryLocalSignInAction: tryLocalSignIn,
})(Auth);

