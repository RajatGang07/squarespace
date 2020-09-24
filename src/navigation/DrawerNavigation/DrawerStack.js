import React from 'react';
import { connect } from 'react-redux';
import _get from 'lodash.get';

import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors } from '../../styles/index';
import styles from './styles';
import { logOut } from '../../store/actions/creadentialAction';


const DrawerStack = ({ userName, navigation, logOutAction, ...restProps }) => {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView >
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        style={styles.menuIcon}
                        onPress={() => navigation.closeDrawer()}>
                        <Icon name="menu" size={25} />
                    </TouchableOpacity>
                    <Text style={styles.heading}>Square Space</Text>
                </View>
                <View style={styles.userDetailsContainer}>
                    <Avatar.Icon size={52} icon="alien" color={Colors.white} />
                    <Text style={styles.userDetailsItem}> {userName} </Text>
                </View>
                <DrawerItem
                    labelStyle={styles.drawerItemLabel}
                    style={styles.drawerItem}
                    label="Home"
                    icon={({ color, size }) => (
                        <Icon name="home-outline" color={color} size={size} />
                    )}
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                />
                <DrawerItem
                    labelStyle={styles.drawerItemLabel}
                    style={styles.drawerItem}
                    label="About Us"
                    icon={({ color, size }) => (
                        <Icon name="home-outline" color={color} size={size} />
                    )}
                    onPress={() => {
                        navigation.navigate('AboutUs');
                    }}
                />
            </DrawerContentScrollView>
            <DrawerItem
                label="Logout"
                icon={({ color, size }) => (
                    <Icon name="exit-to-app" color={color} size={size} />
                )}
                onPress={() => logOutAction()}
            />
        </View>
    );
}




const mapStateToProps = (state) => {
    const userName = _get(state, 'credential.userName');
    return {
        userName,
    };
};

export default connect(mapStateToProps, {
    logOutAction: logOut,
})(DrawerStack);
