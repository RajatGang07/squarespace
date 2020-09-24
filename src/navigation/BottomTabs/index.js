import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { connect } from 'react-redux';
import _get from 'lodash.get';

import UserQuestions from '../../screen/UserQuestions';
import QuestionScreenContainer from '../../screen/QuestionScreen';
const Tab = createMaterialBottomTabNavigator();

const BottomTabs = (props) => {
  const routeName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : 'UserQuestions';

  let icon = 'alien';

  switch (routeName) {
    case 'AskQuestion':
      icon = 'home-account';
      break;
    default:
      icon = 'bell-outline';
      break;
  }

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="UserQuestions"
        backBehavior="initialRoute"
        shifting={true}
        sceneAnimationEnabled={false}
      >
        <Tab.Screen
          name="Home"
          component={UserQuestions}
          options={{
            tabBarIcon: 'home-account',
          }}
        />
        <Tab.Screen
          name="AskQuestion"
          component={QuestionScreenContainer}
          options={{
            tabBarIcon: 'bell-outline',
          }}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  const userName = _get(state, 'credential.userName');
  return {
      userName,
  };
};

export default connect(mapStateToProps, {
})(BottomTabs);