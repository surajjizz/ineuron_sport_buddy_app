import * as React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { HOME } from './Routes';
import Home from '../screens/home/Home';

export type RootStackParams = {
    Home: undefined
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={HOME}

            screenOptions={{
                headerShown: false,

                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}>
            <Stack.Screen name={HOME} component={Home} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
