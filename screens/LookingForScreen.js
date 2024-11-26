import { useState, useContext } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Alert } from "react-native";
import { Button } from '@ant-design/react-native';
import { Ionicons } from 'react-native-vector-icons';
import { UserContext } from "../UserContext";
import styles from "../styles/LookingForStyle";

export default function LookingForScreen({ navigation }) {

    const [selectItem, setSelectItem] = useState(null);
    const { updateUserData } = useContext(UserContext);

    const items = [
        { Key: '1', name: 'A relationship' },
        { Key: '2', name: 'Something casual' },
        { Key: '3', name: 'I am not sure yet' },
        { Key: '4', name: 'Prefer not to say' },
    ];

    const handleSelect = (key) => {
        setSelectItem(key);
    };

    const render = ({ item }) => {
      const  isSelcted = item.key === selectItem;
        return (
            <TouchableOpacity
                style={styles.itemsSection}
                onPress={() => handleSelect(item.name)}>  
                <Text style={[styles.itemText, selectItem === item.name && styles.selectedItem]}>{item.name}</Text>
                <View style={[styles.itemCircle, selectItem === item.name && styles.selectedItemCircle]}></View>
            </TouchableOpacity>
        )
    };

    const handleSubmit = () => {
        if (!selectItem) {
            Alert.alert("Select your preferences.");
        } else {
            updateUserData('preferences', selectItem)
            navigation.navigate("Interest");
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Ionicons name="arrow-back-outline" size={30} /></TouchableOpacity>
                <View style={styles.progressBar}><View style={styles.progress}></View></View>
            </View>
            <View style={styles.itemContainer}>

                <Text style={styles.mainText}>I Am Looking For...</Text>
                <Text style={styles.text}>Provide us the further insights into your </Text>
                <Text style={styles.text}>preferences</Text>

                <FlatList
                    data={items}
                    renderItem={render}
                    keyExtractor={(item) => item.name}
                    style={styles.items}
                />
                
                <Button style={styles.Button} onPress={handleSubmit}><Text style={styles.buttonText}>Continue</Text></Button>
            </View>
        </SafeAreaView>
    )
}
