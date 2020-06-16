import React from 'react'
import { View, StyleSheet, Text, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Button } from '../utils/Button';

export class HomeScreen extends React.Component {
    state = {
        hasCameraRollPermission: null,
        photo: null,
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({hasCameraRollPermission: status == 'granted'});
    }

    render() {
        let { hasCameraRollPermission, photo } = this.state;

        return (
            <View style={styles.root}>
                {photo && <Image source={{uri: photo.uri}} style={{width: 200, height: 200}}/>}
                <Button onPress={this.handleCameraRoll}>写真を撮る</Button>
                <Text>ホーム画面だよ</Text>
            </View>
        )
    }

    handleCameraRoll = async () => {
        let photo = await ImagePicker.launchImageLibraryAsync();
        this.setState({photo: photo})
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
