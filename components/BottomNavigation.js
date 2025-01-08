import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Chats, ForYou, ProfileIcon } from '../components/icons';
import ChatScreen from '../screens/ChatScreen';
import Profile from '../screens/ProfileScreen';
import Foryou from '../screens/ForyouScreen';


const Tab = createBottomTabNavigator();


export default function BottomNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="Chats"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let IconComponent;
                    if (route.name === 'Foryou') {
                        IconComponent = ForYou;
                    } else if (route.name === 'Chats') {
                        IconComponent = Chats;
                    } else if (route.name === 'Profile') {
                        IconComponent = ProfileIcon;
                    }
                    return <IconComponent width={size} height={size} fill={color} />;
                },
                tabBarActiveTintColor: '#C29225',
                tabBarInactiveTintColor: '#C29225',
                headerShown: false,
            })}
        >
            <Tab.Screen name="Foryou" component={Foryou} />
            <Tab.Screen name="Chats" component={ChatScreen} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    );
}