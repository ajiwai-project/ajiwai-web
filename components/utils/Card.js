import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export const Card = (props) => {
    return (
        <View style={styles.card}>{props.children}</View>
    )
}

export const CardHeader = (props) => {
    return (
        <View style={styles.cardHeader}>{props.children}</View>
    )

}

export const CardContent = (props) => {
    return (
        <View>{props.children}</View>
    )
}

export const CardAction = () => {
    return (
        <Text>this is card</Text>
    )
}

const styles = StyleSheet.create({
    card: {
        minWidth: 344,
        minHeight: 148,
        margin: 8,
        padding: 16,
        borderRadius: 2,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(0.0, 0.0, 0.0, 0.12)',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    cardHeader: {
    }
});