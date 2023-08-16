import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const LoginPageLanguage1 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.loginPageLanguage}
      resizeMode="cover"
      source={require("../assets/loginpagelanguage.png")}
    >
      <Pressable
        style={[styles.english, styles.englishLayout]}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Image
          style={[styles.englishChild, styles.notchIconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-3.png")}
        />
        <Text style={[styles.english1, styles.textClr]}>ENGLISH</Text>
      </Pressable>
      <Pressable
        style={[styles.hindi, styles.englishLayout]}
        onPress={() => navigation.navigate("LoginPageLanguage")}
      >
        <Image
          style={[styles.englishChild, styles.notchIconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-3.png")}
        />
        <Text style={[styles.text, styles.textClr]}>हिंदी</Text>
      </Pressable>
      <Text style={[styles.chooseLanguage, styles.english1Typo]}>
        Choose Language
      </Text>
      <Text style={[styles.hackwaveNexus, styles.english1Typo]}>
        ©HackWave Nexus
      </Text>
      <View style={[styles.title, styles.titleLayout]}>
        <Text style={[styles.farmFriend, styles.titleLayout]}>FARM FRIEND</Text>
        <Text style={styles.welcomeUser}>Welcome User!</Text>
      </View>
      <View style={[styles.loginPageLanguageChild, styles.loginLayout]} />
      <View style={[styles.loginPageLanguageItem, styles.loginLayout]} />
      <View style={[styles.statusBar, styles.timeDarkLayout]}>
        <Image
          style={[styles.notchIcon, styles.notchIconPosition]}
          resizeMode="cover"
          source={require("../assets/notch1.png")}
        />
        <View style={styles.statusIcons}>
          <Image
            style={styles.networkSignalDark}
            resizeMode="cover"
            source={require("../assets/network-signal--dark.png")}
          />
          <Image
            style={styles.wifiSignalDark}
            resizeMode="cover"
            source={require("../assets/wifi-signal--dark.png")}
          />
          <Image
            style={styles.batteryDark}
            resizeMode="cover"
            source={require("../assets/statusnormal-level100.png")}
          />
        </View>
        <Image
          style={styles.indicatorIcon}
          resizeMode="cover"
          source={require("../assets/indicator.png")}
        />
        <Image
          style={[styles.timeDark, styles.timeDarkLayout]}
          resizeMode="cover"
          source={require("../assets/colorclear.png")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  englishLayout: {
    height: 56,
    width: 311,
    position: "absolute",
  },
  notchIconPosition: {
    left: 0,
    top: 0,
  },
  textClr: {
    color: Color.white,
    textAlign: "left",
  },
  english1Typo: {
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  titleLayout: {
    width: 276,
    position: "absolute",
  },
  loginLayout: {
    height: 1,
    width: 361,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  timeDarkLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  englishChild: {
    borderRadius: Border.br_31xl,
    opacity: 0.5,
    height: 56,
    width: 311,
    position: "absolute",
  },
  english1: {
    left: 105,
    fontSize: FontSize.size_5xl,
    width: 120,
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    top: 12,
  },
  english: {
    top: 436,
    left: 27,
    width: 311,
  },
  text: {
    left: 134,
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.tiroDevaHindiRegular,
    width: 43,
    height: 31,
    textAlign: "left",
    top: 12,
    position: "absolute",
  },
  hindi: {
    top: 506,
    left: 27,
    width: 311,
  },
  chooseLanguage: {
    top: 395,
    left: 119,
    fontSize: FontSize.size_sm,
    color: Color.bisque,
    width: 127,
    height: 18,
    textAlign: "left",
  },
  hackwaveNexus: {
    top: 767,
    left: 133,
    fontSize: FontSize.size_3xs,
    color: Color.gray_400,
    width: 99,
    height: 15,
    textAlign: "left",
  },
  farmFriend: {
    fontSize: FontSize.size_53xl,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    height: 181,
    textAlign: "left",
    color: Color.white,
    left: 0,
    top: 0,
  },
  welcomeUser: {
    top: 181,
    left: 6,
    fontSize: FontSize.size_13xl,
    letterSpacing: 3.2,
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.palegoldenrod,
    textAlign: "left",
    position: "absolute",
  },
  title: {
    top: 53,
    left: 12,
    height: 220,
  },
  loginPageLanguageChild: {
    top: 40,
    borderColor: "#686868",
  },
  loginPageLanguageItem: {
    top: 41,
    borderColor: "#000",
  },
  notchIcon: {
    right: 0,
    maxWidth: "100%",
    height: 30,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  networkSignalDark: {
    width: 20,
    height: 14,
  },
  wifiSignalDark: {
    width: 16,
    marginLeft: 4,
    height: 14,
  },
  batteryDark: {
    width: 25,
    height: 12,
    marginLeft: 4,
  },
  statusIcons: {
    top: 16,
    right: 14,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeDark: {
    left: 21,
    width: 54,
    height: 21,
    top: 12,
  },
  statusBar: {
    marginTop: -397,
    marginLeft: -188,
    top: "50%",
    left: "50%",
    backgroundColor: Color.black,
    width: 376,
    height: 36,
  },
  loginPageLanguage: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default LoginPageLanguage1;
