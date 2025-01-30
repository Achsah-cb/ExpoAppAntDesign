import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../styles/ChatStyle';
import { ThemeContext } from '../context/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const ChatScreen = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const theme = useContext(ThemeContext);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                // Fetch a random profile picture for each user from randomuser.me
                const fetchProfilePics = data.map(async (user) => {
                    try {
                        const response = await fetch('https://randomuser.me/api/');
                        if (!response.ok) {
                            throw new Error('Failed to fetch profile picture');
                        }
                        const picData = await response.json();
                        if (!picData.results || !picData.results[0].picture.large) {
                            throw new Error('Profile picture data is missing');
                        }
                        const profilePic = picData.results[0].picture.large; // Get the large profile picture URL

                        return {
                            ...user,
                            profilePic: profilePic,
                            isOnline: Math.random() > 0.5, // Randomize online status for testing
                        };
                    } catch (error) {
                        console.error('Error fetching profile picture:', error);
                        return {
                            ...user,
                            profilePic: 'https://via.placeholder.com/50', // Fallback placeholder image
                            isOnline: Math.random() > 0.5, // Randomize online status for testing
                        };
                    }
                });

                // Use Promise.all to wait for all profile pictures to be fetched
                Promise.all(fetchProfilePics)
                    .then((usersWithExtras) => {
                        setUsers(usersWithExtras);
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error('Error in Promise.all:', error);
                        setLoading(false);
                    });
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
    }

    return (

         // linear gradient
         <LinearGradient
         colors={['#EFE6FD', '#FFF9E6', '#FDE9EF']}
         locations={[0, 0.48, 1]}
         start={{ x: 0, y: 0 }}
         end={{ x: 1, y: 1 }}
         style={{ flex: 1 }} 
        >
         <SafeAreaView >
            <View style={styles.header}></View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.profileScroll}>
                {users.map((user, item) => (
                    <TouchableOpacity key={user.id} style={styles.profileContainer} onPress={() => navigation.navigate('DmScreen', { userId: item.id })}>
                        <Image
                            source={{ uri: user.profilePic }}
                            style={
                                [styles.profilePic,{borderColor: theme.colors.primary}]}
                        />
                        <View style={[styles.statusIndicator, { backgroundColor: user.isOnline ? '#89EB1A' : 'gray' }]}></View>
                        <Text style={{ fontFamily: theme.fontfamily.semibold, fontSize: theme.fontsize.small }}>
                            {user.name.split(' ')[0]} {/* Display only the first name */}
                        </Text>

                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={styles.container}>
           
            </View>
        </SafeAreaView>
        </LinearGradient>
    );
};



export default ChatScreen;
