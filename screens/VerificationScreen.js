import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import styles from '../styles/VerificationStyle'
import { Button } from "@ant-design/react-native";
import { Dollar, HeartMan, Payment, Wingman } from '../components/icons';
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from '../context/ThemeContext';

export default function VerificationScreen({navigation}) {

    const theme = useContext(ThemeContext);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.header}>
               
                <TouchableOpacity onPress={() => navigation.navigate('MainTabs')} style={styles.skipBtn}>
                    <Text>Skip</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.itemContainer}>
                <HeartMan />
                <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium }]}>Verification is in progress</Text>
                <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium }]}>and may take a few hours.</Text>
                <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium }]}> Once complete, you'll be able</Text>
                <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium }]}> to explore and meet</Text>
                <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium }]}>amazing people. Meanwhile,</Text>
                <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium }]}> Fill more details for perfect</Text>
                <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium }]}>Match</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]}>
                        <Payment width={30}/>
                        <Text style={[styles.buttonText, { color: theme.colors.text, fontSize: theme.fontsize.smaller, fontFamily: theme.fontfamily.bold }]}>More Details</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]}>
                        <Dollar width={30}/>
                        <Text style={[styles.buttonText, { color: theme.colors.text, fontSize: theme.fontsize.smaller, fontFamily: theme.fontfamily.bold}]}>Premium match </Text></TouchableOpacity>
               
                <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]}>
                    <Wingman width={25}/>
                    <Text style={[styles.buttonText, { color: theme.colors.text, fontSize: theme.fontsize.smaller, fontFamily: theme.fontfamily.bold }]}>Add a wingman</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}