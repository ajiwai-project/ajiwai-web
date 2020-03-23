import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { LoginScreen } from '../components/login/LoginScreen';
import React from 'react';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;

