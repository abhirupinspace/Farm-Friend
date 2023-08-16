import * as React from "react";
import { Text, StyleSheet, Image, View, ImageBackground } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SettingsIcon = () => {
  return (
    <ImageBackground
      style={styles.settingsIcon}
      resizeMode="cover"
      source={require("../assets/settings.png")}
    >
      <Text style={[styles.farmFriend, styles.settingsFlexBox]}>
        FARM FRIEND
      </Text>
      <Image
        style={styles.settingsChild}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Text style={[styles.settings, styles.settingsFlexBox]}>Settings</Text>
      <Text style={[styles.language, styles.languageTypo]}>Language</Text>
      <Text style={[styles.darkmode, styles.darkmodePosition]}>Darkmode</Text>
      <Text style={[styles.offlineMode, styles.languageTypo]}>
        Offline Mode
      </Text>
      <Text style={[styles.contactUs, styles.languageTypo]}>Contact Us</Text>
      <Image
        style={styles.translateIcon}
        resizeMode="cover"
        source={require("../assets/translate1.png")}
      />
      <Image
        style={[styles.umoonIcon, styles.darkmodePosition]}
        resizeMode="cover"
        source={require("../assets/umoon.png")}
      />
      <Image
        style={[styles.iconNoWifiSolid, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-no-wifi-solid.png")}
      />
      <Image
        style={[styles.iconPhoneCallLineContact, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-phone-call-line-contact.png")}
      />
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
      <Image
        style={[styles.settingsItem, styles.notchIconPosition]}
        resizeMode="cover"
        source={require("../assets/group-22.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  settingsFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  languageTypo: {
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    left: 71,
    textAlign: "left",
  },
  darkmodePosition: {
    top: 443,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    left: "10%",
    right: "83.61%",
    width: "6.39%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  timeDarkLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  notchIconPosition: {
    left: 0,
    position: "absolute",
  },
  farmFriend: {
    top: 62,
    left: 17,
    fontSize: FontSize.size_17xl,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    color: Color.white,
    width: 281,
    height: 58,
  },
  settingsChild: {
    top: 707,
    left: 249,
    width: 67,
    height: 67,
    position: "absolute",
  },
  settings: {
    top: 341,
    left: 32,
    fontSize: FontSize.size_13xl,
    letterSpacing: 3.2,
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.palegoldenrod,
  },
  language: {
    top: 400,
    position: "absolute",
  },
  darkmode: {
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    left: 71,
    textAlign: "left",
  },
  offlineMode: {
    top: 487,
    position: "absolute",
  },
  contactUs: {
    top: 530,
    position: "absolute",
  },
  translateIcon: {
    top: 401,
    left: 37,
    width: 22,
    height: 22,
    position: "absolute",
  },
  umoonIcon: {
    left: 35,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconNoWifiSolid: {
    height: "2.71%",
    top: "61.13%",
    bottom: "36.17%",
  },
  iconPhoneCallLineContact: {
    height: "2.88%",
    top: "66.5%",
    bottom: "30.63%",
  },
  notchIcon: {
    top: 0,
    right: 0,
    height: 30,
    display: "none",
    maxWidth: "100%",
    left: 0,
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
    width: 54,
    height: 21,
  },
  statusBar: {
    marginTop: -400,
    marginLeft: -191,
    top: "50%",
    left: "50%",
    backgroundColor: Color.black,
    width: 376,
    height: 36,
  },
  settingsItem: {
    top: 721,
    width: 360,
    height: 79,
  },
  settingsIcon: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SettingsIcon;
