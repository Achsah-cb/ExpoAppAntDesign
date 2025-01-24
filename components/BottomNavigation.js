import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Chats, ActiveChats, ForYou, ForYouActive, ProfileIcon, ActiveProfileIcon} from '../components/icons';
import ChatScreen from '../screens/ChatScreen';
import Foryou from '../screens/ForyouScreen';
import MenuScreen from '../screens/MenuScreen';
import { LinearGradient } from 'expo-linear-gradient';

const Tab = createBottomTabNavigator();


export default function BottomNavigation() {
    return (
        <LinearGradient
                    colors={['#EFE6FD', '#FFF9E6', '#FDE9EF']}
                    locations={[0, 0.48, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ flex: 1 }} 
                >
        <Tab.Navigator
            initialRouteName="Chats"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    let IconComponent;
                    if (route.name === 'Foryou') {
                        IconComponent = focused ? ForYouActive : ForYou;
                    } else if (route.name === 'Chats') {
                        IconComponent =  focused ? ActiveChats: Chats;
                    } else if (route.name === 'Menu') {
                        IconComponent = focused ? ActiveProfileIcon: ProfileIcon;
                    }
                    const iconSize = 50;
                    return <IconComponent width={size} height={size} fill={color} />;
                },
                tabBarActiveTintColor: '#FF2A64',
                tabBarInactiveTintColor: '#ADAFBB',
                headerShown: false,
                tabBarLabel: () => null,
                tabBarStyle: {
                    backgroundColor: 'transparent', // Remove background bar
                    borderTopWidth: 0, // Remove the border at the top
                },
            })}
        >
            <Tab.Screen name="Foryou" component={Foryou} />
            <Tab.Screen name="Chats" component={ChatScreen} />
            <Tab.Screen name='Menu' component={MenuScreen} />
        </Tab.Navigator>
        </LinearGradient>
    );
}