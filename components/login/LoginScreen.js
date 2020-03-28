import React from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'

import { doLogin } from './LoginAction';
import { TextField } from '../utils/TextField';
import { Button } from '../utils/Button';

export class LoginScreen extends React.Component {
    state = {
        loginId: '',
        password: '',
        errors: {}
    }

    render() {
        const { loginId, password, errors } = this.state;

        return (
            <View style={styles.root}>
                <TextField
                    label='ログインID'
                    value={loginId}
                    onChangeText={text => this.setState({ loginId: text })}
                    error={errors.loginId}
                />
                <TextField
                    label='パスワード'
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                    error={errors.password}
                />
                <Button onPress={this.onClickLogin}>
                    ログイン
                </Button>
            </View>
        )
    }

    validate = () => {
        const { loginId, password } = this.state;

        let errors = {}
        if (loginId.trim().length === 0) {
            errors.loginId = '入力してください';
        }

        if (password.trim().length === 0) {
            errors.password = '入力してください';

        }

        this.setState({ errors: errors });
        return Object.keys(errors).length === 0;
    }

    onClickLogin = () => {
        if (!this.validate()) {
            return;
        }

        const { loginId, password } = this.state;
        doLogin(loginId, password)
            .then(_ => {
                this.props.navigation.navigate('Home');
            });

    }
}

const styles = StyleSheet.create({
    root: {
        height: '100%',
        margin: 8,
        display: 'flex',
        justifyContent: 'center',
    },

});