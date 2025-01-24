import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import styles from '../styles/VerificationStyle'
import { Dollar, Payment, Wingman, Verification, Back, RightArrow } from '../components/icons';
import { ThemeContext } from '../context/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";

export default function VerificationScreen({ navigation }) {

    const theme = useContext(ThemeContext);
    const [isActive, setIsActive] = useState('');

    return (
        // linear gradient
        <LinearGradient
            colors={['#EFE6FD', '#FFF9E6', '#FDE9EF']}
            locations={[0, 0.48, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }} 
        >
            <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}><Back /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ChatLandingScreen')} style={styles.skipBtn}>
                    <Text>Skip</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.itemContainer}>
                <Verification />
                <View style={styles.textContainer}>
                    <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>
                    <Text style={{ color: theme.colors.violet, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium2, }}>verification in progress!</Text></Text>
                    <Text style={[styles.text, { fontFamily: theme.fontfamily.semibold, color: theme.colors.text, marginBottom:20, opacity:0.8 }]}>once done, you can meet amazing people!</Text>
                    <Text style={[styles.mainText, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3 }]}>
                    <Text style={{ color: theme.colors.primary, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.medium3 }}>details </Text>lead to destiny.</Text>
                    <Text style={[styles.text, { fontFamily: theme.fontfamily.semibold, color: theme.colors.subText, marginTop:0, opacity:0.8 }]}>share your interests for a better match!</Text>
                </View>
                
                <View style={styles.buttonContainer}>
                    <View style={styles.firstContainer}>
                    <TouchableOpacity style={[styles.button1, { borderColor: theme.colors.blueGreen, backgroundColor:theme.colors.background, borderWidth:2 }, isActive === 'button1' && {borderColor: theme.colors.blueGreen, borderWidth:2}]}  onPress={() => setIsActive('button1')}>
                        <Payment width={30} />
                        <Text style={[styles.buttonText, { color: theme.colors.text, fontSize: theme.fontsize.small, fontFamily: theme.fontfamily.semibold, opacity:0.6 , margin:8}]}>more Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button2, { borderColor: theme.colors.violet,backgroundColor:theme.colors.background, borderWidth:2 }, isActive === 'button2' && {borderColor: theme.colors.violet,borderWidth:2}]}  onPress={() => setIsActive('button2')}>
                        <Wingman width={25} />
                        <Text style={[styles.buttonText, { color: theme.colors.text, fontSize: theme.fontsize.small, fontFamily: theme.fontfamily.bold, opacity:0.6, margin:8  }]}>wingman</Text>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={[styles.button, { backgroundColor:theme.colors.primary }, isActive === 'button3' && {borderColor: theme.colors.primary,borderWidth:2}]}  onPress={() => setIsActive('button3')}>
                        <Dollar width={30}/>
                        <View style={{alignItems:'flex-start'}}>
                        <Text style={[styles.buttonText, { color:theme.colors.background, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.bold, marginBottom:3  }]}>get premium plan</Text>
                        <Text style={[styles.buttonText, { color:theme.colors.background, fontSize: theme.fontsize.small, fontFamily: theme.fontfamily.semibold, }]}>get all the benefits of search &</Text>
                        <Text style={[styles.buttonText, { color:theme.colors.background, fontSize: theme.fontsize.small, fontFamily: theme.fontfamily.semibold, }]}>communication</Text>
                        </View>
                        < RightArrow/>
                    </TouchableOpacity>  
                </View>
            </View>
        </SafeAreaView>
        </LinearGradient>
    )
}