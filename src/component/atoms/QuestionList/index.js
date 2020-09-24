import React from 'react';
import { Text, TouchableOpacity, View, SafeAreaView } from 'react-native';

import Separator from '../../molecules/Separator';
import styles  from './styles';

handleListClick = (id, title, props) => () => {
    const { navigation } = props;
    navigation.navigate('UserQuestionsList', { id: id, title: title });
};

const QuestionList = ({ item, id, title, ...props }) => {
    const relatedTopics = item.relatedTopics;
    const relatedTopicsArray = [];
    relatedTopics.map((item) => {
        relatedTopicsArray.push(<View style={styles.padding} key={item.id}><Text style={styles.relatedTopics}>{item.title}</Text></View>);
    })


    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <TouchableOpacity onPress={handleListClick(id, title, props)}>
                <View>
                    <Text style={styles.textStyle}>
                        {item.question}
                    </Text>
                </View>

                <View style={styles.relatedTopicsArrayParent}>
                    {relatedTopicsArray}
                </View>

                <View style={styles.dateAuthorName}>
                    <View style={styles.padding}>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                    <View style={styles.authorParent}>
                        <Text>By{' '}</Text><Text style={styles.questAuthor}>{item.questAuthor}</Text>
                    </View>

                </View>

            </TouchableOpacity>
            <View style={styles.margin}>
                <Separator />
            </View>
        </SafeAreaView>
    );
};



export default QuestionList;
