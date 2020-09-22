import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { connect } from 'react-redux';

import SignIn from '../../screen/SignIn';
import SignUp from '../../screen/SignUp';

import { tryLocalSignIn } from '../../store/actions/creadentialAction';
import BottomNavigator from '../../navigation/BottomNavigator';
import DrawerNavigation from '../../navigation/DrawerNavigation';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Auth = ({ userToken, isSignout, ...props }) => {
    if (userToken) {
        return (
            <Drawer.Navigator
            drawerContent={(props) => <DrawerNavigation {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={BottomNavigator} />
        </Drawer.Navigator>
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

