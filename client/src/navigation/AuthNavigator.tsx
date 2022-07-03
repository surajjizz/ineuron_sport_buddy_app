import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { REGISTER, LOGIN } from './Routes';
import Login from '../screens/login/Login';
import Register from '../screens/login/Register';

export type AuthStackParams = {
    Register: undefined
    Login: undefined
};

const AuthStack = createStackNavigator<AuthStackParams>();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator
            initialRouteName={LOGIN}
            screenOptions={{
                headerShown: false,
            }}>
            <AuthStack.Screen name={REGISTER} component={Register} />
            <AuthStack.Screen name={LOGIN} component={Login} />
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
