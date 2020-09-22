import React, { useState } from 'react';
import { connect } from 'react-redux';
import _get from 'lodash.get';
import _values from 'lodash.values';
import T from 'prop-types';
import { View, TextInput, Text, Button } from 'react-native';
import styles from './styles';

import { addQuestion } from '../../store/actions/questionAction';
import Colors from '../../constant/Color';

handleSubmit = (inputText, props, setInputText) => {
    console.log(props, "props");
    const { addQuestionAction } = props;
    addQuestionAction(inputText);
    setInputText("");
};


const QuestionScreenView = ({ ...props }) => {
    const [inputText, setInputText] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.title}>
                    Do you want to ask any question?
                </Text>
            </View>
            <View style={{ padding: 10, flexDirection: "column" }}>
                <TextInput
                    multiline={true}
                    numberOfLines={10}
                    style={{ height: 200, backgroundColor: Colors.palePurple }}
                    onChangeText={(text) => setInputText(text)}
                    //onSubmitEditing={() => handleSubmit(inputText, props, setInputText)}
                    value={inputText}
                />
            </View>
            <View>
                <Button title="Submit" onPress={() => handleSubmit(inputText, props, setInputText)} />
            </View>
        </View>
    )

};

QuestionScreenView.propTypes = {

};

export default connect(null, {
    addQuestionAction: addQuestion,
})(QuestionScreenView);
