import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home/Home';
import { HOME, MEET, PROFILE, VENUES } from './Routes';
import Profile from '../screens/profile/Profile';
import { Dimensions } from 'react-native';

export type RootDrawerParams = {
    Home: undefined
    Meet: undefined
    Venues: undefined
    Profile: undefined
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

const DrawerNavigator = () => {

    return <Drawer.Navigator
        initialRouteName={HOME}
        backBehavior='firstRoute'
        screenOptions={{
            headerShown: false
        }}>
        <Drawer.Screen name={HOME} component={Home} />
        <Drawer.Screen name={MEET} component={Home} />
        <Drawer.Screen name={VENUES} component={Home} />
        <Drawer.Screen name={PROFILE} component={Profile} />
    </Drawer.Navigator>
};

export default DrawerNavigator;
