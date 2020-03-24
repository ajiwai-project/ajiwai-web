import React from 'react'
import { View, StyleSheet, TextInput, Button } from "react-native";
import { doLogin } from './LoginAction';

export class LoginScreen extends React.Component {
    state = {
        loginId: '',
        password: ''
    }
    render() {
        const { loginId, password } = this.state;

        return (
            <View style={styles.root}>
                <TextInput style={styles.input} placeholder='login id' value={loginId} onChangeText={e => this.setState({ loginId: e })} />
                <TextInput style={styles.input} placeholder='password' value={password} onChangeText={e => this.setState({ password: e })} />
                <View style={styles.button}>
                    <Button title='Login' type='outline' onPress={(loginId, password) => doLogin(loginId, password)} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        marginBottom: 16,
        width: '100%',
    },
    button: {
        width: '100%',
    }
});
