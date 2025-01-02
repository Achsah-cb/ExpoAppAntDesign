import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/DmStyle';

export default function DmScreen({ route }) {
  const { userId } = route.params;
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch user details and messages
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => res.json()),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then((res) => res.json()),
    ])
      .then(([userData, messagesData]) => {
        setUser({
          ...userData,
          profilePic: 'https://via.placeholder.com/50', // Use a placeholder for the user's profile picture
          isOnline: true, // Mocking online status
        });
        setMessages(
          messagesData.map((msg) => ({
            id: msg.id.toString(),
            text: msg.body,
            sentByMe: false, // Mark these messages as received
          }))
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [userId]);

  const sendMessage = () => {
    if (text.trim()) {
      setMessages([
        ...messages,
        { id: Date.now().toString(), text, sentByMe: true }, // Mark the message as sent by the user
      ]);
      setText('');
    }
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back-outline" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')} style={styles.menuBtn}>
          <Ionicons name="menu" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.userDetails}>
        <Image source={{ uri: user.profilePic }} style={styles.userProfilePic} />
        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userStatus}>{user.isOnline ? 'online' : 'offline'}</Text>
        </View>
      </View>

      {/* Chat Messages */}
      <View style={styles.messageBox}>
        <Text style={styles.dayText}>Today</Text>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.messageContainer,
                {
                  alignSelf: item.sentByMe ? 'flex-end' : 'flex-start',
                  backgroundColor: item.sentByMe ? '#EDD06A' : '#EAE6E6',
                  borderTopLeftRadius:10,
                  borderTopRightRadius: 10,
                  borderBottomLeftRadius: item.sentByMe ? 10 : 0,
                  borderBottomRightRadius: item.sentByMe ? 0 : 10,
                  margin:10
                },
              ]}
            >
              {!item.sentByMe && (
                <Image source={{ uri: user.profilePic }} style={styles.messageProfilePic} />
              )}
              <Text style={styles.message}>{item.text}</Text>
            </View>
          )}
        />

        {/* Input Box */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            value={text}
            onChangeText={setText}
          />
          <TouchableOpacity title="Send" onPress={sendMessage} style={styles.sendBtn}>
            <Ionicons name="send-sharp" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
