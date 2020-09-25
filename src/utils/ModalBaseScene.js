import React, { Component } from 'react';
import { Button, View } from 'react-native';

import styles from './styles';

class ModalBaseScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    open = () => this.setState({ visible: true });
    close = () => this.setState({ visible: false });
    isVisible = () => this.state.visible;
    renderButton() {
        return (
            <Button testID={'modal-open-button'} onPress={this.open} title="Open" />
        );
    }
    render() {
        return (
            <View style={styles.view}>
                {this.renderButton()}
                {this.renderModal()}
            </View>
        );
    }
}



export default ModalBaseScene;