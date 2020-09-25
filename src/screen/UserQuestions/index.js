import React from 'react';
import { connect } from 'react-redux';
import _get from 'lodash.get';

import T from 'prop-types';
import {
  View,
  Text,
  FlatList,
} from 'react-native';

import styles from './styles';
import Separator from 'components/molecules/Separator'
import QuestionList from 'components/atoms/QuestionList';
import { getQuestionList } from '../../store/selectors/questionSelector';

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
  console.log(question, "question");

  return (
    <View style={styles.safeAreaContainer}>
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
          keyExtractor={(list) => list.id.toString()}
        />
      </View>
    </View>
  )
};





UserQuestionsScreenView.propTypes = {
  question: T.array
};

const mapStateToProps = (state) => {
  const question = getQuestionList(state);
  return {
    question: question,
  };
};

export default connect(mapStateToProps, {
})(UserQuestionsScreenView);
