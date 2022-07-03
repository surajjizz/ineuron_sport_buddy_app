import * as React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { HOME } from './Routes';
import BottomTabNavigator from './BottomTabNavigator';
import { Platform } from 'react-native';
import DrawerNavigator from './DrawerNavigator';

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
            <Stack.Screen name={HOME} component={Platform.OS === 'web' ? DrawerNavigator : BottomTabNavigator} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
