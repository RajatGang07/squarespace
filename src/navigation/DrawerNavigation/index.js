import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import _get from 'lodash.get';

import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  Avatar,
  Caption,
  Drawer,
  Paragraph,
  Title,
} from 'react-native-paper';
import Animated from 'react-native-reanimated';

import { logOut } from '../../store/actions/creadentialAction';
import styles from './styles';
import { getUserToken, getSignOutValue } from '../../store/selectors/credentialSelectors';


const routing = (navigation, route) => () => {
  return navigation.navigate(route);
}

const logoutUser = (logOutAction) => () => {
  logOutAction();
}


const DrawerContent = ({ userName, navigation, logOutAction, ...props }) => {

  return (
    <DrawerContentScrollView {...props}>
      <Animated.View
        style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          >
            <Avatar.Icon size={50} icon="alien" />

          </TouchableOpacity>
          <Title style={styles.title}>{userName}</Title>
          <Caption style={styles.caption}>gamer</Caption>
          <View style={styles.row}>
            <View style={styles.section}>
              <Caption style={styles.caption}>Software Engineer</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                @
              </Paragraph>
              <Caption style={styles.caption}>Tekion</Caption>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="About Us"
            onPress={routing(navigation, 'AboutUs')}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Scrollable Modal"
            onPress={routing(navigation, 'Scrollable')}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Backdrop Close Modal"
            onPress={routing(navigation, 'BackdropCloseModal')}
          />
        </Drawer.Section>

        <DrawerItem
          label="Logout"
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          onPress={logoutUser(logOutAction)}
        />
      </Animated.View>
    </DrawerContentScrollView>
  );
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
  logOutAction: logOut
})(DrawerContent);