import { StyleSheet } from 'react-native';
import  Colors  from '../../constant/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column" 
  },
  container: {
    flex: 1,
    padding: 10,
},
headingContainer:{
  padding:10
},
title: {
    color: Colors.darkBlue,
    fontWeight: '500',
    fontSize: 24,
    padding: 10,
    marginTop: 15
},
textInput: {
    marginVertical: 5,
    padding: 5,
    borderRadius: 2,
    borderColor: Colors.ligthGrey,
    borderWidth: 1,
    height: 40,
},
textStyle: {
    color: Colors.slateBlue,
    fontSize: 20,
    marginVertical: 5,
},
relatedTopics: {
    fontWeight: '500',
    fontSize: 12,
    padding: 10,
    marginTop: 15,
    backgroundColor: Colors.grey,
},
solutions: {
    fontSize: 16,
    padding: 10,
}
 
});

export default styles;
