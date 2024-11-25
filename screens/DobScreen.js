import React, { useState, useRef, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Platform, Alert } from "react-native";
import { Button, } from '@ant-design/react-native';
import { Ionicons } from 'react-native-vector-icons';
import { UserContext } from "../UserContext";

export default function DobScreen({ navigation }) {

    const { updateUserData } = useContext(UserContext);
    const [selectAge, setSelectAge] = useState(18);
    const ages = Array.from({ length: 70 - 18 + 1 }, (_, i) => i + 18);
    const flatListRef = useRef(null);
    const ITEM_HEIGHT = 50;


    const handleSelectAge = (age) => {
        setSelectAge(age);
    };

    const handleScrollEnd = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const index = Math.round(offsetY / ITEM_HEIGHT);
        setSelectAge(ages[index]);
    };

    const render = ({ item }) => (
        <TouchableOpacity
            onPress={() => handleSelectAge(item)}
            style={[
                styles.ageItem,
                selectAge === item && styles.selectAgeItem,
            ]}
        >
            <Text
                style={[
                    styles.ageText,
                    selectAge === item && styles.selectAgeText,
                ]}
            >
                {item}
            </Text>
        </TouchableOpacity>
    );

    const handleSubmit = () => {
        if (!selectAge) {
            Alert.alert("Select your age.");
        } else {
            updateUserData('age',selectAge)
            navigation.navigate("Gender");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backBtn}><Ionicons name="arrow-back-outline" size={30}/></TouchableOpacity>
            <View style={styles.progressBar}><View style={styles.progress}></View></View>
            </View>
            <View style={styles.itemContainer}>
            
                <Text style={styles.mainText}>How Old Are You?</Text>
                <Text style={styles.text}>Please provide your age in years</Text>
                <View style={styles.box}></View>
                <Ionicons name="caret-forward-outline" size={35} color='#FFB200' style={styles.selectionArrow}></Ionicons>
                <FlatList
                    ref={flatListRef}
                    data={ages}
                    keyExtractor={(item) => item.toString()}
                    renderItem={render}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                    onMomentumScrollEnd={handleScrollEnd}
                    getItemLayout={(data, index) => ({
                        length: ITEM_HEIGHT,
                        offset: ITEM_HEIGHT * index,
                        index,
                    })}
                    snapToInterval={ITEM_HEIGHT}
                    decelerationRate="fast"
                    style={styles.flatListStyle}
                />

                <View style={styles.buttonContainer}>
                <Button style={styles.Button} onPress={handleSubmit}><Text style={styles.buttonText}>Continue</Text></Button>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBE7',
    },
    itemContainer: {
        alignItems: 'center',
        margin: 20,
        marginTop:10
    },
    buttonContainer: {
        width: '100%',
        height: 190,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    Button: {
        width: 325,
        height: 56,
        borderRadius: 20,
        backgroundColor: '#FFB200',
        borderColor: '#FFB200',
        position:'relative',
        ...Platform.select({android:{top:-60}, ios:{top:45}})
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
    ageItem: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ageText: {
        fontSize: 48,
        color: '#333',
        opacity:0.5
    },
    selectAgeText: {
        height:80,
        color: '#FFB200',
        fontSize: 64,
        fontWeight: 'bold',
        opacity:1,
        borderBlockColor:'#FFB200', 
    },
    selectAgeItem:{
        padding:40,
        paddingBottom:30
    },
    flatListStyle: {
        height:280,
        marginTop: 80,
    },
    listContainer: {
        alignItems: 'center',
        paddingVertical: 100, 
    },
    backBtn:{
        margin:20,
        width:40,
        height:40, 
    },
    header:{
        flexDirection:'row',
        ...Platform.select({ ios :{marginTop:0, }, android :{marginTop:30}})
    },
    progressBar:{
        backgroundColor:'#FFEC9E',
        width:180,
        height:8,
        borderRadius:50,
        margin:30
    },
    progress:{
        backgroundColor:'#FFB200',
        width:90,
        height:8,
        borderRadius:50
    },
    selectionArrow:{
        position:'relative',
        top:235,
        right:60,

    }
  
});
