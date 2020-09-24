import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import  StackNavigator  from '../StackNavigator';
import DrawerContent  from '../DrawerNavigation';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="UserQuestions" component={StackNavigator} />
      </Drawer.Navigator>
  );
};