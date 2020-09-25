import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    // scrollableFullModal: {
    //     height: this.state.screenHeight,
    // },
    scrollableModal: {
        height: 300,
    },
    scrollableModalContent1: {
        height: 200,
        backgroundColor: '#87BBE0',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center',
    },
    scrollableModalText1: {
        fontSize: 20,
        color: 'white',
    },
    scrollableModalContent2: {
        height: 200,
        backgroundColor: '#A9DCD3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollableModalText2: {
        fontSize: 20,
        color: 'white',
    }, container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    scrollContainer: {
        width: '100%',
        backgroundColor: 'white',
        paddingTop: 12,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeBarContainer: {
        height: 16,
        width: 44,
        paddingVertical: 12,
        alignSelf: 'center',
    },
    closeBar: {
        height: 4,
        borderRadius: 2,
        backgroundColor: 'black',
    },
    bottomModal: {
        margin: 0,
    },
});

export default styles;