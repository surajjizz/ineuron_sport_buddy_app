import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { REGISTER, LOGIN } from './Routes';
import Login from '../screens/login/Login';

export type AuthStackParams = {
    Register: undefined
    Login: undefined
};

const AuthStack = createStackNavigator<AuthStackParams>();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <AuthStack.Screen name={REGISTER} component={Login} />
            <AuthStack.Screen name={LOGIN} component={Login} />
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
