import React, { useContext } from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import styles from '../styles/MenuStyle';
import { Back, Dollar, RightArrow, RightArrow2, YourProfile, PaymentMethod, Settings, HelpCenter, PrivayPolicy } from '../components/icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from "../context/UserContext";

export default function MenuScreen({ navigation }) {

  const theme = useContext(ThemeContext);
  const { userData, updateUserData } = useContext(UserContext);

  return (
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
          <View style={styles.headerTitle}><Text style={{color: theme.colors.text, fontFamily: theme.fontfamily.semibold, fontSize: theme.fontsize.medium}}>profile</Text></View>
        </View>
        <View style={styles.MainItems}>
          {/* profile picture */}
          <View style={styles.profilePicture}>
            {userData.images && userData.images.length > 0 ? (
              <Image
                source={{ uri: userData.images[0] }}
                style={styles.profileImage}
              />
            ) : (
              <View
                style={[
                  styles.profileImage,
                  { justifyContent: 'center', alignItems: 'center' },
                ]}
              >
                <Text style={{ color: theme.colors.subText }}>No Image</Text>
              </View>
            )}
          </View>
          
          <View style={styles.username}><Text style={{ color:theme.colors.text, fontSize: theme.fontsize.medium3, fontFamily: theme.fontfamily.semibold, marginBottom:3  }}>esther howard</Text></View>
          <View> 
            <TouchableOpacity style={[styles.button, { backgroundColor:theme.colors.primary }]}>
                <Dollar width={30}/>
                <View style={{alignItems:'flex-start'}}>
                  <Text style={[styles.buttonText, { color:theme.colors.background, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.bold, marginBottom:3  }]}>get premium plan</Text>
                  <Text style={[styles.buttonText, { color:theme.colors.background, fontSize: theme.fontsize.small, fontFamily: theme.fontfamily.semibold, }]}>get all the benefits of search &</Text>
                  <Text style={[styles.buttonText, { color:theme.colors.background, fontSize: theme.fontsize.small, fontFamily: theme.fontfamily.semibold, }]}>communication</Text>
                </View>
                < RightArrow/>
              </TouchableOpacity>  
            </View>
          <View>

            <TouchableOpacity style={[styles.options, {borderBottomWidth:1.5, borderColor:'#E0E0E0'}]} onPress={() => navigation.navigate('YourProfileScreen')}>
              <YourProfile width={25}/>
              <Text style={[styles.text,{ color:theme.colors.text, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold, marginBottom:3 }]}>your profile</Text>
              <RightArrow2 width={26}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.options, {borderBottomWidth:1.5, borderColor:'#E0E0E0'}]}>
              <PaymentMethod width={25}/>
              <Text style={[styles.text,{ color:theme.colors.text, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold, marginBottom:3 }]}>payment method</Text>
              <RightArrow2 width={26}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.options, {borderBottomWidth:1.5, borderColor:'#E0E0E0'}]}>
              <Settings width={25}/>
              <Text style={[styles.text,{ color:theme.colors.text, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold, marginBottom:3 }]}>settings</Text>
              <RightArrow2 width={26}/>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.options, {borderBottomWidth:1.5, borderColor:'#E0E0E0'}]}>
              <HelpCenter width={25}/>
              <Text  style={[styles.text,{ color:theme.colors.text, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold, marginBottom:3 }]}>help center</Text>
              <RightArrow2 width={26}/>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.options, {borderBottomWidth:1.5, borderColor:'#E0E0E0'}]}>
              <PrivayPolicy width={25}/>
              <Text style={[styles.text,{ color:theme.colors.text, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold, marginBottom:3 }]}>privacy policy</Text>
              <RightArrow2 width={26}/>
            </TouchableOpacity>
          </View>
        </View>

      </SafeAreaView>
    </LinearGradient>
  );
}
