import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
    View,
    Text,
    TextInput,
    Button,
    SafeAreaView,
} from 'react-native';
import { signIn } from '../../store/actions/creadentialAction';

import styles from './styles';

const routing = navigation => route  => {
    return navigation.navigate(route);
}

const SignInScreen = ({ signInAction, navigation, ...props }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.bodyContainer}>
                    <Text style={styles.headingText}>Having Doubt? Ask here </Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Username"
                            value={username}
                            onChangeText={setUsername}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>
                    <Button
                        title="Sign in"
                        onPress={() =>
                            username && password && signInAction(username, password)
                        }
                    />
                    <View style={styles.footerContainer}>
                        <Text onPress={routing('SignUp')}>New User</Text>
                    </View>

                    <View style={styles.footerContainer}>
                        <Text onPress={routing('RestorePassword')}>Forgot password</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};



export default connect(null, {
    signInAction: signIn,
})(SignInScreen);
