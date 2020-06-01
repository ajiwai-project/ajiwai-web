import React from 'react'
import { View, StyleSheet, Text } from "react-native";
import { Button } from '../utils/Button';

export class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.root}>
                <Text>ホーム画面だよ</Text>
                <Button onPress={this.toPost}>投稿する</Button>
            </View>
        )
    }

    toPost = () => {
        this.props.navigation.navigate('AjiwaiPost');
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    }
});
