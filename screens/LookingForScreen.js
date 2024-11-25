import { useState, useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, FlatList, Alert } from "react-native";
import { Button } from '@ant-design/react-native';
import { Ionicons } from 'react-native-vector-icons';
import { UserContext } from "../UserContext";

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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBE7',
    },
    itemContainer: {
        alignItems: 'center',
        margin: 20,
        marginTop: 10,

    },
    Button: {
        width: 325,
        height: 56,
        borderRadius: 20,
        backgroundColor: '#FFB200',
        borderColor: '#FFB200',
        marginTop: 25,
        position: 'relative',
        ...Platform.select({ android: { top: 60 }, ios: { top: 145 } })
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:18
    },
    mainText: {
        fontSize: 24,
        fontWeight: '500',
        padding: 10,
    },
    text: {
        fontSize: 14,
    },
    backBtn: {
        margin: 20,
        width: 40,
        height: 40,

    },
    header: {
        flexDirection: 'row',
        ...Platform.select({ ios: { marginTop: 0, }, android: { marginTop: 30 } })
    },
    progressBar: {
        backgroundColor: '#FFEC9E',
        width: 180,
        height: 8,
        borderRadius: 50,
        margin: 30
    },
    progress: {
        backgroundColor: '#FFB200',
        width: 135,
        height: 8,
        borderRadius: 50
    },
    itemText:{
        width:325,
        height:64,
        backgroundColor:'white',
        margin:15,
        borderRadius:20,
        padding:18,
        fontSize:16,
        fontWeight:'400',

    },
    selectedItem:{
        borderColor:'#FFB200',
        borderWidth:2,
        fontWeight:'600'
    },
    items:{
        marginTop:10
    },
    itemsSection:{
        flexDirection:'row',
        marginLeft:10
    },
    itemCircle:{
        width:24,
        height:24,
        borderColor:'#999999',
        borderWidth:1,
        borderRadius:100,
        position:'relative',
        right:60,
        top:35
    },
    selectedItemCircle:{
        borderColor:'#FFB200',
        borderWidth:5
    }
})