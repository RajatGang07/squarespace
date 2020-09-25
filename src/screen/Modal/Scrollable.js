import React from 'react';
import {ScrollView, Text, View,TouchableWithoutFeedback} from 'react-native';
import Modal from 'react-native-modal';
import ModalBaseScene from '../../utils/ModalBaseScene';
import {Dimensions} from 'react-native';
import styles from './styles';


class Scrollable extends ModalBaseScene {
  constructor(props) {
    super(props, {
      scrollOffset: null,
      fullScreen: false,
      window: '',
      screenHeight: '',
      screenWidth: '',
      showCloseBar: true
    });

    this.scrollViewRef = React.createRef();
  }

  componentWillMount() {
    this.setState({
      window: Dimensions.get('window'),
      screenHeight: Dimensions.get('window').height,
      screenWidth: Dimensions.get('window').width,
    });
  }

  handleOnScroll = (event) => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y,
      fullScreen: true,
    });
  };
  handleScrollTo = (p) => {
    console.log('p: ', p);
    if (this.scrollViewRef.current) {
      this.scrollViewRef.current.scrollTo(p);
    }
  };

  onClose = () => {
    this.setState({
      fullScreen: false,
    });
    this.close();
  };

  renderModal() {
    const {fullScreen,showCloseBar} = this.state;

    console.log(this.state);
    return (
      <Modal
        testID={'modal'}
        isVisible={this.isVisible()}
        onSwipeComplete={this.onClose}
        swipeDirection={['down']}
        scrollTo={this.handleScrollTo}
        scrollOffset={this.state.scrollOffset}
        scrollOffsetMax={400 - 300} // content height - ScrollView height
        propagateSwipe={true}
        style={styles.modal}
        animationType="slide"
        bounces={false}
        >
        <View
          style={[
            fullScreen
              ? {height: this.state.screenHeight - 200}
              : styles.scrollableModal,
          ]}>
          <ScrollView
            ref={this.scrollViewRef}
            onScroll={this.handleOnScroll}
            scrollEventThrottle={16}>
            {(
              <TouchableWithoutFeedback onPress={this.onClose}>
                <View style={styles.closeBarContainer}>
                  <View style={styles.closeBar} />
                  <Text style={{fontSize: 24}}>Click on me</Text>
                </View>
              </TouchableWithoutFeedback>
            )}

            {/* {/* <View style={styles.scrollableModalContent1}>
              <Text style={styles.scrollableModalText1}>
                You can scroll me up! 👆
              </Text>
            </View> */}
            <View style={styles.scrollableModalContent2}>
              <Text style={styles.scrollableModalText2}>
                Same here as well! ☝
              </Text>
            </View>
            <View style={styles.scrollableModalContent1}>
              <Text style={styles.scrollableModalText1}>Scroll More</Text>
            </View>
            <View style={styles.scrollableModalContent2}>
              <Text style={styles.scrollableModalText2}>
                Wait a little More
              </Text>
            </View>
            <View style={styles.scrollableModalContent1}>
              <Text style={styles.scrollableModalText1}>Game over ☝</Text>
            </View> 
          </ScrollView>
        </View>
      </Modal>
    );
  }
}



export default Scrollable;
