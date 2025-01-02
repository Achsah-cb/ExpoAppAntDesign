import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/VerificationStyle'
import { Button } from "@ant-design/react-native";
import { HeartMan } from '../components/icons';

export default function VerificationScreen() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.itemContainer}>
                <HeartMan /> 
                <Text style= {styles.mainText}>Verification is in progress</Text>
                <Text style= {styles.mainText}>and may take a few hours.</Text>
                <Text style= {styles.mainText}> Once complete, you'll be able</Text>
                <Text style= {styles.mainText}> to explore and meet</Text>
                <Text style= {styles.mainText}>amazing people. Meanwhile,</Text>
                <Text style= {styles.mainText}> Fill more details for perfect</Text>
                <Text style= {styles.mainText}>Match</Text>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button}><Text style={styles.buttonText}>Fill More Details </Text></Button>
                    <Button style={styles.button}><Text style={styles.buttonText}>Add a Wingman</Text></Button>
                </View>
                <Button style={styles.button}><Text style={styles.buttonText}>Premier match services</Text></Button>
            </View>
        </SafeAreaView>
    )
}