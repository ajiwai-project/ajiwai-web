import React from 'react'
import { View, Text, StyleSheet } from "react-native";


export class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.root}>
                <Text>ログインだよ</Text>
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
    },
  });
