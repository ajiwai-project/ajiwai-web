import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableWithoutFeedback } from 'react-native';

import { primary, error } from '../../constant/Color';

export const TextField = (props) => {
    const [inputStyle, setInputStyle] = useState(styles.input);

    return (
        <View style={styles.root}>
            <View>
                <Text>{props.label}</Text>
            </View>
            <TouchableWithoutFeedback
                onFocus={_ => setInputStyle(styles.inputActive)}
                onBlur={_ => setInputStyle(styles.input)}
            >
                <TextInput
                    style={inputStyle}
                    onChangeText={text => props.onChangeText(text)}
                    value={props.value}
                />
            </TouchableWithoutFeedback>
            <View>
                {props.error && <Text style={styles.error}>{props.error}</Text>}
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    root: {
        marginTop: 8,
    },
    label: {

    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(0.0, 0,0, 0.12)',
        borderRadius: 8,
        padding: 12,
    },
    inputActive: {
        borderWidth: 2,
        borderColor: primary,
        borderRadius: 8,
        padding: 12,
    },
    error: {
        color: error
    }
});