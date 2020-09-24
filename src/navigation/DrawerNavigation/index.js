import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';

import { tryLocalSignIn } from '../../store/actions/creadentialAction';
import BottomNavigator from '../../navigation/BottomNavigator';
import DrawerStack from './DrawerStack';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
   
        return (
            <Drawer.Navigator
                drawerContent={(props) => <DrawerStack {...props} />}>
                <Drawer.Screen name="Home" component={BottomNavigator} />
            </Drawer.Navigator>
        );
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
})(DrawerNavigation);

