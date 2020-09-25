import React from 'react';
import Modal from 'react-native-modal';
import ModalBaseScene from '../../utils/ModalBaseScene';
import DefaultModalContent from '../../utils/DefaultModalContent';

import styles from './styles';
class AboutUsScreen extends ModalBaseScene {
  renderModal(){
    return (
      <Modal
        testID={'modal'}
        isVisible={this.isVisible()}
        onSwipeComplete={this.close}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={styles.view}>
        <DefaultModalContent onPress={this.close} />
      </Modal>
    );
  }
}



export default AboutUsScreen;