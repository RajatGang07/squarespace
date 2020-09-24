import { StyleSheet } from 'react-native';

import Colors from '../../constant/Color';

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        padding: 10
    },
    container: {
        padding: 10,
        flex: 1,
    },
    headingSubContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    title: {
        color: Colors.darkBlue,
        fontWeight: '800',
        fontSize: 24,
    },
    textInput: {
        marginVertical: 5,
        padding: 5,
        borderRadius: 3,
        borderColor: Colors.ligthGrey,
        borderWidth: 1,
        height: 40,
    },
    index: {
        color: Colors.blue,
        fontWeight: '500',
    },
    textStyle: {
        color: Colors.darkBlue,
        fontSize: 20,
        marginVertical: 5,
    },
});

export default styles;