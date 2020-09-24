import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HOME_TAB, TABBAR_OPTIONS,QUESTION_TAB } from '../constant/config';
import QuestionScreenContainer from '../screen/QuestionScreen/index';
import Home from '../component/molecules/Home';

const Tab = createBottomTabNavigator();

// naming

const BottomNavigator = ({...props}) => {
  console.log(props, "props in bottom")
  return (
    <Tab.Navigator tabBarOptions={TABBAR_OPTIONS}>
      <Tab.Screen  name="Home" component={Home} options={HOME_TAB} />
      <Tab.Screen name="Ask Question" component={QuestionScreenContainer} options={QUESTION_TAB} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
