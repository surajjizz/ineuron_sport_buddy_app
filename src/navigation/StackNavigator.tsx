import * as React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { HOME, LISTVIEW, PROFILE } from './Routes';
import Home from '../screens/home/Home';
import profile from '../screens/Profile/profile';
import ListView from '../screens/List /MeetList';

export type RootStackParams = {
    Home: undefined,
    Profile: undefined,
    List_View: undefined
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={PROFILE}

            screenOptions={{
                headerShown: false,

                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}>
            <Stack.Screen name={HOME} component={Home} />
            <Stack.Screen name={PROFILE} component={profile} />
            <Stack.Screen name={LISTVIEW} component={ListView} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
