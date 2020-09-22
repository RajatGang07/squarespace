import React from 'react';
import { connect } from 'react-redux';
import _get from 'lodash.get';

import T from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Colors from '../../constant/Color';
import Separator from '../../component/Separator/Separator'
import QuestionList from '../../component/atom/QuestionList';

handleSubmit = (inputText, props, setInputText) => {
  const { addListAction } = props;
  addListAction(inputText);
  setInputText("");
};

handleListClick = (id, title, props) => () => {
  const { navigation } = props;
  navigation.navigate('UserQuestionsList', { id: id, title: title });
};

const UserQuestionsScreenView = ({ question, ...props }) => {
  console.log("question in user question : ", question)
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.headingSubContainer}>
          <Text style={styles.title}>User Questions</Text>
        </View>
        <View style={{ marginTop: 5 }}>
          <Separator />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={question}
          renderItem={({ item, index }) => (
            <QuestionList item={item} id={item.id} title={item.title} {...props} />
          )}
          keyExtractor={(list) => list.id}
        />
      </View>
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    padding: 10
    // backgroundColor: Colors.cream,
  },
  container: {
    padding: 10,
    flex: 1,
  },
  headingSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  title: {
    color: Colors.darkBlue,
    fontWeight: '800',
    fontSize: 24,
  },
  textInput: {
    marginVertical: 5,
    padding: 5,
    borderRadius: 3,
    borderColor: Colors.ligthGrey,
    borderWidth: 1,
    height: 40,
  },
  index: {
    color: Colors.blue,
    fontWeight: '500',
  },
  textStyle: {
    color: Colors.darkBlue,
    fontSize: 20,
    marginVertical: 5,
  },
});


UserQuestionsScreenView.propTypes = {
  question: T.array
};

const mapStateToProps = (state) => {
  const question = _get(state, 'question.question');
  return {
    question: question,
  };
};

export default connect(mapStateToProps, {
})(UserQuestionsScreenView);
