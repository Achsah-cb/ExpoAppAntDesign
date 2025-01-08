import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../styles/ChatStyle';
import { ThemeContext } from '../context/ThemeContext';

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

        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.tertiary }]}>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('VerificationScreen')} style={styles.backBtn}><Ionicons name="chevron-back" size={20} color="#D48806"/></TouchableOpacity>
           <View style={styles.ChatTextContainer}><Text style={[styles.chatTitleText,{ fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium }]}>Chat</Text></View>
                <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')} style={styles.menuBtn}><Ionicons name="menu" size={25} /></TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.profileScroll}>
                {users.map((user, item) => (
                    <TouchableOpacity key={user.id} style={styles.profileContainer} onPress={() => navigation.navigate('DmScreen', { userId: item.id })}>
                        <Image
                            source={{ uri: user.profilePic }}
                            style={
                                styles.profilePic}
                        />
                        <View style={[styles.statusIndicator, { backgroundColor: user.isOnline ? '#89EB1A' : 'gray' }]}></View>
                        <Text style={{ fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.regular }}>
                            {user.name.split(' ')[0]} {/* Display only the first name */}
                        </Text>

                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={styles.messageBox}>
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.userItem}
                            onPress={() => navigation.navigate('DmScreen', { userId: item.id })}
                        >
                            <Image source={{ uri: item.profilePic }} style={styles.userProfilePic} />
                            <View>
                                <Text style={{ fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium}}>{item.name}</Text>
                                <Text style={[{ fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.smaller }, { color: item.isOnline ? 'green' : 'gray' }]}>
                                    {item.isOnline ? 'Online' : 'Offline'}
                                </Text>
                                <View style={styles.dateContainer}><Text style={styles.dateText}>10/01/24</Text></View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};



export default ChatScreen;
