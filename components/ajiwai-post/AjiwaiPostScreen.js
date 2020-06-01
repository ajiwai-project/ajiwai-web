import React from 'react'
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import { Thumbnail, Textarea } from 'native-base';
import { Button } from '../utils/Button'
import { primary } from '../../constant/Color';

export class AjiwaiPostScreen extends React.Component {
    state = {
        sakeName: '',
        ajiwai: '',
        image: '',
        errors: {}
    }
    render() {
        return (
            <View style={styles.root}>
                <View style={styles.imageSection}>
                    {this.state.image ? (
                        <Thumbnail
                            large
                            square
                            source={{ uri: this.state.image }}
                            style={styles.image}
                        />
                    ) : null}
                    <TouchableOpacity style={styles.iconButton} onPress={this.pickImage}>
                        <Text style={styles.iconButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textSection, styles.borderBottom}>
                    <Textarea
                        style={styles.title}
                        placeholder='日本酒名'
                        rowSpan={1}
                        onChangeText={text => console.log(text)}
                    />
                </View>
                <View style={styles.textSection}>
                    <Textarea
                        style={styles.description}
                        placeholder='香り、味...'
                        rowSpan={6}
                        onChangeText={text => console.log(text)}
                    />
                </View>
                <View>
                    <Button>投稿</Button>
                </View>
            </View>
        );
    }

    onClickPost = () => {
        console.log(this.state.sakeName);
        console.log(this.state.ajiwai);
    }
    
    pickImage = async () => {
        console.log('pick image');
    }
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageSection: {
        position: 'relative',
        width: width,
        height: width,
        backgroundColor: 'black',
    },
    image: {
        width: width,
        height: width,
    },
    iconButton: {
        backgroundColor: primary,
        position: 'absolute',
        bottom: -5,
        right: width / 20,
        width: 54,
        height: 54,
        borderRadius: 32,
    },
    iconButtonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 40,
    },
    textSection: {
        width: width,
    },
    title: {
        height: (height - width) * 1 / 10,
        padding: 5,
        width: width,
    },
    description: {
        borderColor: '#000',
        padding: 5,
        height: (height - width) * 1 / 2,
        width: width,
    },
    borderBottom: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
})