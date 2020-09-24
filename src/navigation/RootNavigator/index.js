import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { StackNavigator } from './stack';
import { DrawerContent } from './drawerContent';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};