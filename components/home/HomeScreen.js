import React from 'react'
import { View, StyleSheet, Text } from "react-native";

export class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.root}>
                <Text>ホーム画面だよ</Text>
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
    }
});
