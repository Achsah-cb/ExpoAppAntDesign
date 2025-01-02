import { View, Text, TouchableOpacity, Switch, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from 'react-native-vector-icons';
import styles from '../styles/SettingsStyle'


export default function SettingsScreen({ navigation }) {

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <Ionicons name="arrow-back-outline" size={30} />
                </TouchableOpacity>
                {/*<TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')} style={styles.settingsBtn}>
        <Ionicons name="settings-outline" size={30} />
      </TouchableOpacity>*/}
            </View>
            <View style={styles.containerItems}>
                <View style={styles.premium}>
                    <Text style={styles.heading}>Premium</Text>
                    <Text>Get all the benefits</Text>
                    <Text style={styles.priceLabel}>Get premium of $70</Text>
                </View>
                <View style={styles.mainInfo}>
                    <Text style={styles.mainInfoText}>Main Info</Text>
                    <View style={styles.email}>
                        <Text style={styles.textStyle}>Email</Text>
                        <TextInput placeholder='user@email.com' style={styles.inputText} />
                    </View>
                    <View style={styles.phone}>
                        <Text style={styles.textStyle}>Phone No</Text>
                        <TextInput placeholder='+1 0829803687' style={styles.inputText} B />
                    </View>
                </View>
                <View style={styles.notification}>
                    <Text style={styles.notificationText}>Notification</Text>
                    <View style={styles.pushNotification}>
                        <Text style={styles.textStyle}>Push-notification</Text>
                        <Switch
                            trackColor={{ false: "#D0CFCE", true: "#D0CFC7" }}
                            thumbColor={isEnabled ? "#EA5A47" : "#EA5A47"}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={styles.switch}
                        />
                    </View>
                </View>
                <View style={styles.moreDetails}>
                    <Text style={styles.moreDetailsText}>More Details</Text>
                    <Ionicons name="chevron-forward-sharp" style={[styles.moreDetailsText, styles.arrowIcon]} />
                </View>
            </View>
        </View>
    )
}