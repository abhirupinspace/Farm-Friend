import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const LoginPageIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.loginPageIcon}
      resizeMode="cover"
      source={require("../assets/loginpagelanguage.png")}
    >
      <Pressable
        style={styles.loginPageChild}
        onPress={() => navigation.navigate("Homepage")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.loginPageItem, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <Image
        style={[styles.loginPageInner, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <Image
        style={[styles.loginPageChild1, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <Text style={[styles.username, styles.loginClr]}>Username</Text>
      <Text style={[styles.logInWith, styles.logLayout]}>
        Log in with Facebook
      </Text>
      <Text style={[styles.logInWith1, styles.logLayout]}>
        Log in with Google
      </Text>
      <Text style={[styles.password, styles.loginClr]}>Password</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector8.png")}
      />
      <Text style={[styles.login, styles.loginClr]}>Login</Text>
      <Text style={[styles.signInTo, styles.loginTypo]}>
        Sign in to continue
      </Text>
      <Text style={[styles.hackwaveNexus, styles.loginTypo]}>
        ©HackWave Nexus
      </Text>
      <View style={styles.title}>
        <Text style={[styles.farmFriend, styles.notchIconPosition]}>
          FARM FRIEND
        </Text>
        <Text style={styles.welcomeUser}>Welcome User!</Text>
      </View>
      <Image
        style={[styles.socialIcon, styles.socialIconLayout]}
        resizeMode="cover"
        source={require("../assets/social.png")}
      />
      <Image
        style={[styles.socialIcon1, styles.socialIconLayout]}
        resizeMode="cover"
        source={require("../assets/social1.png")}
      />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.loginPageChild2, styles.lineViewLayout]} />
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
  vectorIconLayout: {
    maxHeight: "100%",
    left: "13.61%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loginLayout: {
    opacity: 0.5,
    height: 40,
    width: 281,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  loginClr: {
    color: Color.white,
    textAlign: "left",
  },
  logLayout: {
    height: 17,
    width: 149,
    color: Color.white,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  notchIconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  socialIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  lineViewLayout: {
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
  loginPageChild: {
    top: 547,
    left: 130,
    backgroundColor: "rgba(244, 148, 159, 0.4)",
    width: 107,
    height: 39,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.63%",
    width: "7.5%",
    top: "55.38%",
    right: "78.89%",
    bottom: "41%",
  },
  loginPageItem: {
    top: 488,
    left: 42,
    height: 40,
    width: 281,
  },
  loginPageInner: {
    top: 438,
    left: 42,
    height: 40,
    width: 281,
  },
  rectangleIcon: {
    marginLeft: -141,
    top: 643,
    left: "50%",
  },
  loginPageChild1: {
    top: 693,
    left: 42,
    height: 40,
    width: 281,
  },
  username: {
    top: 448,
    left: 146,
    width: 115,
    height: 19,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    fontSize: FontSize.size_sm,
  },
  logInWith: {
    top: 653,
    left: 104,
    textAlign: "left",
  },
  logInWith1: {
    marginLeft: -84,
    top: 702,
    textAlign: "center",
    left: "50%",
  },
  password: {
    top: 497,
    left: 148,
    width: 87,
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    fontSize: FontSize.size_sm,
  },
  vectorIcon1: {
    height: "3.5%",
    width: "6.67%",
    top: "61.75%",
    right: "79.72%",
    bottom: "34.75%",
  },
  login: {
    top: 553,
    left: 159,
    fontSize: FontSize.size_xl,
    height: 27,
    width: 54,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  signInTo: {
    top: 409,
    left: 125,
    color: Color.bisque,
    width: 131,
    height: 20,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
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
    width: 276,
    textAlign: "left",
    color: Color.white,
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
    width: 276,
    position: "absolute",
  },
  socialIcon: {
    top: 650,
    left: 251,
  },
  socialIcon1: {
    top: 699,
    left: 245,
  },
  lineView: {
    top: 40,
    borderColor: "#686868",
  },
  loginPageChild2: {
    top: 41,
    borderColor: "#000",
  },
  notchIcon: {
    right: 0,
    height: 30,
    display: "none",
    maxWidth: "100%",
    top: 0,
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
    top: 12,
    left: 21,
    height: 21,
    width: 54,
  },
  statusBar: {
    marginTop: -397,
    marginLeft: -188,
    top: "50%",
    backgroundColor: Color.black,
    width: 376,
    height: 36,
    left: "50%",
  },
  loginPageIcon: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default LoginPageIcon;
