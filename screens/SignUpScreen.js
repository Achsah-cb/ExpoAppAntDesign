import React, { useContext } from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "../styles/SignUpStyle";
import { Button } from '@ant-design/react-native';
import { ThemeContext } from '../context/ThemeContext';

const SignUpScreen = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      {/* <LinearGradient
        colors={["#FFEFBA", "#FFFFFF"]}
        style={styles.container}
      > */}
      <View style={styles.container}>
        {/* GIF Section */}
        <View style={styles.gifContainer}>
          <Image
            source={require("../assets/gif/handheart.gif")}
            style={styles.gif}
          />
        </View>
        {/* Title Section */}
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: theme.colors.primary, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>
            find love,
          </Text>
          <Text style={[styles.title, { color: theme.colors.text, fontFamily: theme.fontfamily.bold, fontSize: theme.fontsize.large }]}>
            start your story here.
          </Text>
          <Text style={[styles.description, { color: theme.colors.subText, fontFamily: theme.fontfamily.semibold, fontSize: theme.fontsize.medium }]}>
            join us to discover your ideal partner and ignite the sparks of romance in your journey.
          </Text>
        </View>

        {/* Button Section */}
        <View style={styles.buttonContainer}>
        <Button style={[styles.Button, { backgroundColor: theme.colors.primary, borderRadius: theme.border.borderradius }]} onPress={() => navigation.navigate("SignInScreen")}>
            <Text style={[styles.buttonText, { color: theme.colors.btnText, fontSize: theme.fontsize.medium, fontFamily: theme.fontfamily.semibold }]}>sign up</Text>
          </Button>
          <Text style={[styles.loginText, { color: theme.colors.text, fontFamily: theme.fontfamily.regular, fontSize: theme.fontsize.small }]}>
            already have an account?{" "}{" "}
            <Text
              style={[styles.loginLink, { color: theme.colors.primary, fontFamily: theme.fontfamily.semibold, fontSize: theme.fontsize.small }]}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              login
            </Text>
          </Text>
        </View>
      </View>
      {/* </LinearGradient> */}
    </SafeAreaView>
  );
};

export default SignUpScreen;