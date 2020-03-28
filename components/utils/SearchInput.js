import React from 'react';
import { View, StyleSheet, Text, TextInput } from "react-native";

export const SearchInput = () => {
    return (
        <View style={styles.root}>
            <TextInput style={styles.input} placeholder='甘くてフルーティ'/>
        </View>
    ) 
}

const styles = StyleSheet.create({
    root: {
        margin: 8,    
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(0.0, 0,0, 0.12)',
        borderRadius: 24,
        padding: 12,
    },
});