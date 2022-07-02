import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HOME, MEET, PROFILE, VENUES } from './Routes';
import Home from '../screens/home/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from '../screens/profile/Profile';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return <Tab.Navigator
        initialRouteName={HOME}
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}
    >
        <Tab.Screen name={HOME} component={Home}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }} />
        <Tab.Screen name={MEET} component={Home}
            options={{
                tabBarLabel: 'Meet',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="tooltip-text-outline" color={color} size={26} />
                ),
            }} />
        <Tab.Screen name={VENUES} component={Home}
            options={{
                tabBarLabel: 'Venues',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="location" color={color} size={26} />
                ),
            }} />
        <Tab.Screen name={PROFILE} component={Profile}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }} />
    </Tab.Navigator>
}

export default BottomTabNavigator;
