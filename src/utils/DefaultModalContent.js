
import React from 'react';
import {Button, Text, View} from 'react-native';

import styles from './styles';

const DefaultModalContent = props => (
  <View style={styles.content}>
    <Text style={styles.contentTitle}>Hi 👋!</Text>
    <Button testID={'close-button'} onPress={props.onPress} title="Close" />
  </View>
);


export default DefaultModalContent;