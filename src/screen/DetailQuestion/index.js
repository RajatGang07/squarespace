import React, { useState } from 'react';
import { connect } from 'react-redux';
import _get from 'lodash.get';
import {
    View,
    Text,
    FlatList,
    TextInput,
    Image,
    ScrollView,
    Button
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import Separator from 'components/molecules/Separator';
import styles from './styles';
import { addSolution, deleteReview } from 'store/actions/questionAction';
import DeleteReview from 'components/atoms/DeleteReview';



handleSubmit = (inputText, id, props, setInputText) => () => {
    const { addSolutionAction } = props;
    addSolutionAction(id, inputText);
    setInputText("");
};
const DetailQuestion = ({ ...props }) => {

    const { question } = props;
    const [inputText, setInputText] = useState("");
    const { id } = props.route.params;
    const quest = question[id];
    const relatedTopics = quest.relatedTopics;
    const solutions = quest.solutions;

    const relatedTopicArray = [];
    relatedTopics.map((item) => {
        relatedTopicArray.push(<View style={{ padding: 5 }} key={item.id}><Text style={styles.relatedTopics}>{item.title}</Text></View>);
    })

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headingContainer}>
                <View>
                    <Text style={styles.title}>
                        {quest.question}
                    </Text>
                </View>
                <View style={styles.relatedTopic}>
                    {relatedTopicArray}
                </View>
            </View>
            <View style={styles.top}>
                <Separator />
            </View>

            <View style={styles.subContainer}>
                <Text>
                    Hi, I am a Software Engineer @ Tekion.  Talk a little bit about what your current role is, the scope of it, and perhaps a big recent accomplishment.
                    </Text>
            </View>

            <View style={styles.top}>
                <Separator />
            </View>

            <View style={styles.author}>
                <View style={styles.padd}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                </View>
                <View style={styles.byDate}>
                    <Text>By{' '}</Text><Text style={styles.questAuthor}>{quest.questAuthor}</Text>
                </View>

                <View style={styles.byDate}>
                    <Text>on{' '}</Text><Text style={styles.date}>{quest.date}</Text>
                </View>

            </View>

            <View style={styles.solutionLengthParent}>
                <Text>{solutions.length}</Text><Text>{' '}Answers</Text>
            </View>
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={solutions}
                    renderItem={({ item }) => (
                        <Swipeable
                            renderRightActions={() => (
                                <DeleteReview id={id} reviewId={item.id} />
                            )}
                        >
                            <View style={styles.answerParent} key={item.id}>
                                <View style={styles.answerSubParent}>
                                    <Text style={styles.solutions}>{item.ans}</Text>
                                </View>

                                <View style={styles.solutionParent}>
                                    <View style={styles.solutionSubParent}>
                                        <Text style={styles.solAuthor}>By{' '}</Text><Text style={styles.questAuthor}>{item.solAuthor}{' '}</Text>
                                    </View>

                                    <View style={styles.dateSolParent}>
                                        <Text style={styles.date}>{item.dateSol}</Text>
                                    </View>

                                </View>

                            </View>
                            <Separator />
                        </Swipeable>
                    )}
                    keyExtractor={item => item.id.toString()}
                />

                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.title}>Want to give solution?</Text>
                </View>
                <View style={styles.solutionTextBoxParent}>
                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        style={styles.solutionTextBox}
                        onChangeText={setInputText}
                        value={inputText}
                    />
                </View>

                <View>
                    <Button title="Submit" onPress={handleSubmit(inputText,id, props, setInputText)} />
                </View>


            </View>
        </ScrollView>
    );
}



const mapStateToProps = (state) => {
    const question = _get(state, 'question.question');
    return {
        question: question,
    };
};

export default connect(mapStateToProps, {
    addSolutionAction: addSolution,
    deleteReviewAction: deleteReview
})(DetailQuestion);
