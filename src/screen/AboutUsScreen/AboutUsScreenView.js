import React from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import Colors from '../../constant/Color';

const AboutUsScreenScreenView = () => (
  <View style={styles.container}>
     <Text style={styles.textStyle}>Hello </Text>
  </View>
);

const styles = StyleSheet.create({
    
  container: {
      flex: 1,
      padding: 10,
  },
  textStyle: {
      color: Colors.slateBlue,
      fontSize: 20,
      marginVertical: 5,
  }
});

export default AboutUsScreenScreenView;
