import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    TextInput,
    Button,
    SafeAreaView,
} from 'react-native';

import { signUp } from 'store/actions/creadentialAction';
import styles from './styles';

const SignUpScreen = ({ signUpAction, navigation, ...props }) => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.bodyContainer}>
                    <Text style={styles.headingText}>
                        Want to ask something? <Text style={styles.todoText}> Sign up here </Text>
                    </Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Username"
                            value={userName}
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
                        title="Sign Up"
                        onPress={() =>
                            signUpAction(userName, password)
                        }
                    />
                </View>
                <View style={styles.headerContainer}>
                    <Text onPress={() => navigation.navigate('SignIn')}> Already a User?</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};


export default connect(null, {
    signUpAction: signUp,
})(SignUpScreen);
