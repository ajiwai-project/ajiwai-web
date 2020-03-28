import React from 'react'
import { View, StyleSheet, TextInput, Text } from "react-native";

import { Card, CardContent, CardHeader } from '../utils/Card'
import { Typography } from '../utils/Typography';
import { SearchInput } from '../utils/SearchInput';
import { getRecommends } from './HomeAction';

/*  TODO
    - [ ] 適当に画面を作る(データはここに定義)
    - [ ] モックのGETを作る
    - [ ] モックデータを表示
*/


const SAKE_DATA = [
    { name: 'dummy1' },
    { name: 'dummy2' },
    { name: 'dummy3' },
    { name: 'dummy4' },
    { name: 'dummy5' },
    { name: 'dummy6' },
    { name: 'dummy7' },
]

export class HomeScreen extends React.Component {
    state = {
        searchValue: ''
    };

    render() {
        const { searchValue } = this.state;

        return (
            <View style={styles.root}>
                <SearchInput value={searchValue} onChangeText={text => this.setState({ searchValue: text })} />
                {SAKE_DATA.map((sake, idx) =>
                    <Card key={idx}>
                        <CardHeader>
                            <Typography variant='h5'>{sake.name}</Typography>
                        </CardHeader>
                        <CardContent>
                            <Typography variant='body1'>{`${sake.name}はXXXXで飲めます`}</Typography>
                        </CardContent>
                    </Card>
                )}
            </View>
        )
    }

    componentDidMount() {
        getRecommends();
    }
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#fff',
        padding: 16,
        display: 'flex',
        overflow: 'auto'
    }
});
