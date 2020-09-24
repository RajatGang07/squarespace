import { StyleSheet } from 'react-native';

import { Colors } from '../../styles/index';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    todoText: {
        color: Colors.slateBlue,
        fontWeight: '800',
    },
    headerContainer: {
        alignItems: 'flex-end',
    },
    headingText: {
        color: Colors.darkBlue,
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 22,
        fontWeight: '600',
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal: 50,
    },
    inputContainer: {
        marginVertical: 5,
        height: 45,
    },
    label: {
        fontSize: 16,
    },
    textInput: {
        borderRadius: 3,
        flex: 1,
        padding: 10,
        fontSize: 16,
        borderColor: Colors.ligthGrey,
        borderWidth: 1,
    },
});

export default styles;
