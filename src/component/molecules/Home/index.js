import React from 'react';
import { connect } from 'react-redux';
import _get from 'lodash.get';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './styles';
import UserQuestions from '../../../screen/UserQuestions';
import UserQuestionsList from '../../../screen/DetailQuestion';
import Colors from '../../../constant/Color';
import LogoutButton from '../../atoms/LogoutButton';
import AboutUsScreenScreenView from '../../../screen/AboutUsScreen';


const Stack = createStackNavigator();

const Home = ({...props }) => {
  const {
    loggedInUser, 
    navigation,
  } = props;
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



const mapStateToProps = (state) => {
  const userName = _get(state, 'credential.userName');
  return {
    loggedInUser: userName,
  };
};

export default connect(mapStateToProps, {})(Home);
