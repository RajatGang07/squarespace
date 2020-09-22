import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HOME_TAB, TABBAR_OPTIONS,QUESTION_TAB } from '../constant/config';
import UserQuestions from '../screen/UserQuestions';
import QuestionScreenContainer from '../screen/QuestionScreen/index';
import Header from '../component/Header/Header';

const Tab = createBottomTabNavigator();

const BottomNavigator = ({...props}) => {
  return (
    <Tab.Navigator tabBarOptions={TABBAR_OPTIONS}>
      <Tab.Screen name="Home" component={Header} options={HOME_TAB} />
      <Tab.Screen name="Ask Question" component={QuestionScreenContainer} options={QUESTION_TAB} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
