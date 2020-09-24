
import { StyleSheet } from 'react-native';

import { Colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    footerContainer: {
        alignItems: 'center',
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 50,
    },
    headingText: {
        color: Colors.darkBlue,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '600',
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