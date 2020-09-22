import React from 'react';
import { connect } from 'react-redux';

import _get from 'lodash.get';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

import UserQuestions from '../../screen/UserQuestions/index';
import UserQuestionsList from '../../screen/DetailQuestion';

import Colors from '../../constant/Color';

import { logOut } from '../../store/actions/creadentialAction';
import LogoutButton from '../atom/LogoutButton';
import AboutUsScreenScreenView from '../../screen/AboutUsScreen/AboutUsScreenView';


const Stack = createStackNavigator();

const TodoStack = ({ loggedInUser, navigation, logOutAction, ...props }) => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.cream,
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={styles.menuIcon}
                onPress={() => navigation.openDrawer()}>
                <Icon name="menu" size={25} />
              </TouchableOpacity>
            );
          },

          headerRight: () => {
            return (
              <TouchableOpacity>
                  <LogoutButton />
              </TouchableOpacity>
            );
          },

        }}>
        <Stack.Screen
          name="UserQuestions"
          component={UserQuestions}
          options={{
            title: `Hi, ${loggedInUser}`,
          }}
        />
        <Stack.Screen
          name="UserQuestionsList"
          component={UserQuestionsList}
          options={({ route }) => ({
            title: route.params.title,
          })}
        />
         <Stack.Screen
          name="AboutUs"
          component={AboutUsScreenScreenView}
        />


      </Stack.Navigator>

    </>
  );
};

const styles = StyleSheet.create({
  menuIcon: {
    marginLeft: 10,
  },
});

const mapStateToProps = (state) => {
  const userName = _get(state, 'credential.userName');
  return {
    loggedInUser: userName,
  };
};

export default connect(mapStateToProps, {
  logOutAction: logOut,
})(TodoStack);
