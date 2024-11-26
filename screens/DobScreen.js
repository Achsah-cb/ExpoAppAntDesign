import React, { useState, useRef, useContext } from "react";
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, Alert } from "react-native";
import { Button, } from '@ant-design/react-native';
import { Ionicons } from 'react-native-vector-icons';
import { UserContext } from "../UserContext";
import styles from "../styles/DobStyle";

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
            navigation.navigate("GenderScreen");
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

