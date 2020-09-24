import {StyleSheet } from 'react-native';
import { Colors } from '../../styles/index';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    headerContainer: {
        flexDirection: 'row',
    },
    heading: {
        fontSize: 22,
        fontWeight: '600',
        marginLeft: 15,
        marginBottom: 10,
    },
    userDetailsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    userDetailsItem: {
        marginLeft: 5,
        fontSize: 18,
    },
    drawerItem: {
        borderRadius: 0,
        borderBottomWidth: 1,
        borderColor: Colors.lightestGrey,
    },
    drawerItemLabel: {
        fontSize: 18,
    },
});

export default styles;