import { StyleSheet } from 'react-native';
import Colors from '../../../constant/Color';

 const styles = StyleSheet.create({
    rightAction: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: Colors.red,
        padding: 15,
    },
    rightActionText: {
        color: Colors.white,
        fontSize: 18,
    },
});

export default styles;