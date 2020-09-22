import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, SafeAreaView } from 'react-native';

import Colors from '../../constant/Color';
import Separator from '../Separator/Separator';

handleListClick = (id, title, props) => () => {
    const { navigation } = props;
    navigation.navigate('UserQuestionsList', { id: id, title: title });
};

const QuestionList = ({ item, id, title, ...props }) => {
    const relatedTopics = item.relatedTopics;
    const textData = [];
    relatedTopics.map((item) => {
        textData.push(<View style={{ padding: 5 }} key={item.id}><Text style={styles.relatedTopics}>{item.title}</Text></View>);
    })


    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <TouchableOpacity  onPress={handleListClick(id, title, props)}>
                <View>
                    <Text style={styles.textStyle}>
                        {item.question}
                    </Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: -10, padding: 5 }}>
                    {textData}
                </View>

                <View style={{ flexDirection: "row" }}>
                    <View style={{ padding: 5 }}>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                    <View style={{ padding: 5, flexDirection: "row" }}>
                        <Text>By{' '}</Text><Text style={styles.questAuthor}>{item.questAuthor}</Text>
                    </View>

                </View>
            </TouchableOpacity>
            <View style={{marginTop: 10}}>
                 <Separator />   
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        padding: 10,
        marginTop: 6,
        marginBottom: 5
      },
    textStyle: {
        color: Colors.darkBlue,
        fontSize: 20,
        marginVertical: 5,
        padding: 10
    },
    relatedTopics: {
        fontWeight: '500',
        fontSize: 10,
        padding: 8,
        backgroundColor: Colors.lightestGrey,
    },
    questAuthor: {
        fontWeight: '500',
        fontSize: 14,
        color: Colors.blue
    },
    date: {
        fontWeight: '500',
        fontSize: 14,
        color: Colors.grey
    }
});

export default QuestionList;
