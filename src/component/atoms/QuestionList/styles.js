import { StyleSheet } from 'react-native';

import Colors from '../../../constant/Color';

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
    },
    relatedTopicsArrayParent: { flexDirection: "row", marginTop: -10, padding: 5 },
    dateAuthorName: { flexDirection: "row" },
    padding: { padding: 5 },
    margin: { marginTop: 10 },
    authorParent: { padding: 5, flexDirection: "row" }
});

export default styles;