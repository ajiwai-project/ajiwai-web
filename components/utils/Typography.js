import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const Typography = (props) => {
    return (
        <Text style={styles[props.variant]}>{props.children}</Text>
    );
}


const styles = StyleSheet.create({
    h1: {
        fontSize: 96,
        fontWeight: 'light'
    },
    h2: {
        fontSize: 60,
        fontWeight: 'light'
    },
    h3: {
        fontSize: 48,
        fontWeight: 'normal'
    },
    h4: {
        fontSize: 34,
        fontWeight: 'normal'
    },
    h5: {
        fontSize: 24,
        fontWeight: 'normal'
    },
    h6: {
        fontSize: 20,
        fontWeight: 'medium'
    },
    subtitle1: {
        fontSize: 16,
        fontWeight: 'normal'
    },
    subtitle2: {
        fontSize: 14,
        fontWeight: 'medium'
    },
    body1: {
        fontSize: 16,
        fontWeight: 'normal'
    },
    body2: {
        fontSize: 14,
        fontWeight: 'normal'
    },
    button: {
        fontSize: 14,
        fontWeight: 'medium'
    }
});