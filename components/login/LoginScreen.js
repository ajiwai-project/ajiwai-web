import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from 'react-native-elements';


export class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.root}>
                <View style={styles.input}>
                    <Input placeholder='login id' />
                </View>
                <View style={styles.input}>
                    <Input placeholder='password' />
                </View>
                <View style={styles.button}>
                    <Button title='Login' type='outline' />
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
