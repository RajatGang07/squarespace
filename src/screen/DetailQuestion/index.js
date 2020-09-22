import React, { useState } from 'react';
import { connect } from 'react-redux';
import _get from 'lodash.get';
import _values from 'lodash.values';
import { AirbnbRating } from 'react-native-ratings';

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    TextInput,
    Image
} from 'react-native';
import Separator from '../../component/Separator/Separator';
import { Swipeable } from 'react-native-gesture-handler';

import Colors from '../../constant/Color';
import { addSolution, deleteReview } from '../../store/actions/questionAction';
import EditReview from '../../component/atom/EditReview';
import DeleteReview from '../../component/atom/DeleteReview';



handleSubmit = (inputText, id, props, setInputText) => {
    console.log(props, "props");
    const { addSolutionAction } = props;
    addSolutionAction(id, inputText);
    setInputText("");
};

const DetailQuestion = ({ question, ...props }) => {

    const [inputText, setInputText] = useState("");
    const { id } = props.route.params;
    const quest = question[id];
    const relatedTopics = quest.relatedTopics;
    const solutions = quest.solutions;

    const textData = [];
    relatedTopics.map((item) => {
        textData.push(<View style={{ padding: 5 }} key={item.id}><Text style={styles.relatedTopics}>{item.title}</Text></View>);
    })

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headingContainer}>
                <View>
                    <Text style={styles.title}>
                        {quest.question}
                    </Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: -10, padding: 5 }}>
                    {textData}
                </View>

            </View>
            <View style={{ marginTop: 10 }}>
                <Separator />
            </View>

            <View style={styles.subContainer}>
                <Text>
                    Hi, I am a Software Engineer @ Tekion.  Talk a little bit about what your current role is, the scope of it, and perhaps a big recent accomplishment.
                    </Text>
            </View>

            <View style={{ marginTop: 10 }}>
                <Separator />
            </View>

            <View style={styles.author}>
                <View style={{ padding: 5 }}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                </View>
                <View style={{ padding: 5, flexDirection: "row", top: '30%' }}>
                    <Text>By{' '}</Text><Text style={styles.questAuthor}>{quest.questAuthor}</Text>
                </View>

                <View style={{ padding: 5, flexDirection: "row", top: '30%' }}>
                    <Text style={styles.date}>{quest.date}</Text>
                </View>

            </View>

            <View style={{ padding: 10, flexDirection: "row" }}>
                <Text>{solutions.length}</Text><Text>{' '}Answers</Text>
            </View>
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={solutions}
                    renderItem={({ item, index }) => (
                        <Swipeable
                            renderRightActions={() => (
                                <DeleteReview id={id} reviewId={item.id} />
                            )}
                        >
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', backgroundColor: '#dfbe9f', padding: 5 }} key={item.id}>
                                <View style={{ padding: 2, flex:1 }}>
                                    <Text style={styles.solutions}>{item.ans}</Text>
                                </View>

                                <View style={styles.sol}>
                                    <View style={{ flexDirection: "row",}}>
                                        <Text style={{justifyContent: 'flex-start'}}>By{' '}</Text><Text style={styles.questAuthor}>{item.solAuthor}{' '}</Text>
                                    </View>

                                    <View style={{  flexDirection: "row",}}>
                                        <Text style={styles.date}>{item.dateSol}</Text>
                                    </View>

                                </View>

                            </View>
                            <Separator />
                        </Swipeable>
                    )}
                    keyExtractor={item => item.id}
                />

                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.title}>Want to give solution?</Text>
                </View>
                <View style={{ padding: 10, flexDirection: "column" }}>
                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        style={{ height: 200, backgroundColor: Colors.palePurple }}
                        onChangeText={(text) => setInputText(text)}
                        onSubmitEditing={() => handleSubmit(inputText, id, props, setInputText)}
                        value={inputText}
                    />
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
    },
    subContainer: {
        padding: 10,
        backgroundColor: Colors.white
    },
    author: {
        padding: 5,
        flex: 1,
        backgroundColor: Colors.lightestGrey,
        flexDirection: 'row'
    },
    sol:{
        padding: 5,
        flexDirection: 'row',
        top: '10%'
    },
    tinyLogo: {
        width: 25,
        height: 25,
        top: '30%'
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
        backgroundColor: Colors.ligthGrey,
    },
    questAuthor: {
        fontWeight: '500',
        fontSize: 14,
        color: Colors.blue,
        flexShrink: 1
    },
    solutions: {
        fontSize: 16,
        padding: 10,
        flexShrink: 1
    },
    date: {
        fontWeight: '500',
        fontSize: 14,
        color: Colors.grey,
        justifyContent: 'flex-end'
    }
});

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
