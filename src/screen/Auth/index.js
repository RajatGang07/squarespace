import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import SignIn from '../../screen/SignIn';
import SignUp from '../../screen/SignUp';
import { tryLocalSignIn } from '../../store/actions/creadentialAction';
import DrawerNavigation from '../../navigation/DrawerNavigation';
import RestorePasswordScreenView from '../RestorePasswordScreen/index';


const Stack = createStackNavigator();

const Auth = ({ userToken, isSignout, ...props }) => {
    // in a same stack
    if (userToken) {
        return (
            <DrawerNavigation  {...props} />
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
    const { userToken, isSignout } = state.credential;

    return {
        userToken,
        isSignout,
    };
};

export default connect(mapStateToProps, {
    tryLocalSignInAction: tryLocalSignIn,
})(Auth);

