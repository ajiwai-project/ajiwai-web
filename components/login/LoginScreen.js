import React from 'react'
import { Container, Content, Form, Item, Label, Input, Button, Text } from "native-base";

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
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>ログインID</Label>
                            <Input
                                value={loginId}
                                onChangeText={e => this.setState({ loginId: e })}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>パスワード</Label>
                            <Input
                                value={password}
                                onChangeText={e => this.setState({ password: e })}
                            />
                        </Item>
                        <Button title='Login' type='outline' onPress={this.onClickLogin} />
                    </Form>
                </Content>
            </Container>
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