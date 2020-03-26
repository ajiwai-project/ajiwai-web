import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { primary } from '../../constant/Color';


export const Button = (props) => {

    return (
        <TouchableOpacity
            style={styles.root}
            onPress={props.onPress}
        >
            <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: primary,
        marginTop: 8,
        height: 36,
        minWidth: 64,
        paddingRight: 16,
        paddingLeft: 16,
        borderRadius: 8
    },
    text: {
        color: '#FFFFFF',
        textAlign: 'center',
        lineHeight: 36
    }
});