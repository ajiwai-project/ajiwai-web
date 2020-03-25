import React from 'react'
import { View, StyleSheet, TextInput, Button } from "react-native";
import { doLogin } from './LoginAction';

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
                <TextInput
                    style={styles.input}
                    placeholder='login id'
                    value={loginId}
                    onChangeText={e => this.setState({ loginId: e })}
                />
                {errors['loginId'] && <Text>{errors['loginId']}</Text>}
                <TextInput
                    style={styles.input}
                    placeholder='password'
                    value={password} o
                    nChangeText={e => this.setState({ password: e })}
                />
                {errors['password'] && <Text>{errors['password']}</Text>}

                <View style={styles.button}>
                    <Button title='Login' type='outline' onPress={this.onClickLogin} />
                </View>
            </View>
        )
    }

    validate = () => {
        const { loginId, password, errors } = this.state;

        if (loginId.trim().length === 0) {
            errors['loginId'] = '入力してください';
        }

        if (password.trim().length === 0) {
            errors['password'] = '入力してください';

        }

        this.setState({ errors: errors });
        return Object.keys(errors).length === 0;
    }

    onClickLogin = () => {
        if (!this.validate) {
            return;
        }

        const { loginId, password } = this.state;
        doLogin(loginId, password)
            .then(res => {
                this.props.navigation.navigate('Home');

            });

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
