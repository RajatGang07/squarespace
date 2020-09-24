import {StyleSheet} from 'react-native';

import Colors from '../../constant/Color';

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
        padding: 10,
        flex: 1,
        backgroundColor: Colors.lightestGrey,
        flexDirection: 'row'
    },
    solutionParent: {
        padding: 5,
        flexDirection: 'row',
    },
    tinyLogo: {
        width: 25,
        height: 25,
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
    },
    byDate: { padding: 5, flexDirection: "row", top: '10%' },
    relatedTopic: { flexDirection: "row", padding: 5 },
    top: { marginTop: 10 },
    padd: { padding: 5 },
    answerParent: { flex: 1, flexDirection: "row", justifyContent: 'space-between', backgroundColor: '#dfbe9f', padding: 5 },
    solutionLengthParent: { padding: 10, flexDirection: "row" },
    answerSubParent:{ padding: 2, flex: 1 },
    solutionSubParent: { flexDirection: "row" },
    solAuthor: { justifyContent: 'flex-start' },
    dateSolParent: { flexDirection: "row" },
    solutionTextBox: { height: 200, backgroundColor: Colors.palePurple }
});

export default styles;