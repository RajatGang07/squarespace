import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, Avatar } from 'react-native-paper';
import { connect } from 'react-redux';
import _get from 'lodash.get';

import BottomTabs from '../BottomTabs';
import AboutUs from '../../screen/AboutUsScreen';
import UserQuestionsList from '../../screen/DetailQuestion';
import Scrollable from '../../screen/Modal/Scrollable';
import BackdropCloseModal from '../../screen/Modal/BackdropCloseModal';
import { getUserToken, getSignOutValue } from '../../store/selectors/credentialSelectors';


const Stack = createStackNavigator();

const StackNavigator = ({userName}) => {

  return (
    <Stack.Navigator
      initialRouteName="UserQuestions"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          const { options } = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
                ? options.title
                : scene.route.name;

          return (
            <Appbar.Header
            >
              {previous ? (
                <Appbar.BackAction
                  onPress={navigation.goBack}
                />
              ) : (
                  <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={() => {
                      navigation.openDrawer();
                    }}
                  >
                     <Avatar.Icon size={40} icon="alien"  />
                  </TouchableOpacity>
                )}
              <Appbar.Content
                title={
                  title === 'UserQuestions' ? (
                    <Text
                      style={{ marginRight: 10 }}>
                      Hi, {userName}
                    </Text>
                  ) : (
                      title
                    )
                }
                titleStyle={{
                  fontSize: 18,
                  fontWeight: 'bold',
                }}
              />
            </Appbar.Header>
          );
        },
      }}
    >
      <Stack.Screen
        name="UserQuestions"
        component={BottomTabs}
        options={({ route }) => {
          console.log('!@# options', { route });
          const routeName = route.state
            ? route.state.routes[route.state.index].name
            : 'UserQuestions';
          return { headerTitle: routeName };
        }}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{ headerTitle: 'About Us' }}
      />
       <Stack.Screen
        name="Scrollable"
        component={Scrollable}
        options={{ headerTitle: 'Scrollable Modal' }}
      />
        <Stack.Screen
        name="BackdropCloseModal"
        component={BackdropCloseModal}
        options={{ headerTitle: 'Backdrop Close Modal' }}
      />
      
         <Stack.Screen
          name="UserQuestionsList"
          component={UserQuestionsList}
          options={({ route }) => ({
            title: route.params.title,
          })}
        />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  const userToken = getUserToken(state);
  const isSignout = getSignOutValue(state);
  return {
    userToken,
    isSignout,
  };
};

export default connect(mapStateToProps, {
})(StackNavigator);