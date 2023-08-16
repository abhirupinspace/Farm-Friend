import * as React from "react";
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const FarmhelpIcon = () => {
  return (
    <ImageBackground
      style={styles.farmhelpIcon}
      resizeMode="cover"
      source={require("../assets/farmhelp.png")}
    >
      <Text style={styles.farmFriend}>FARM FRIEND</Text>
      <Text style={styles.farmHelp}>Farm Help</Text>
      <Text style={styles.yourAiPowered}>Your AI powered assistant</Text>
      <View style={styles.farmhelpChild} />
      <Image
        style={[styles.farmhelpItem, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-75.png")}
      />
      <Image
        style={styles.farmhelpInner}
        resizeMode="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <View style={[styles.rectangleView, styles.farmhelpChildBg]} />
      <View style={[styles.farmhelpChild1, styles.farmhelpChildBg]} />
      <View style={[styles.farmhelpChild2, styles.farmhelpChildBg]} />
      <View style={[styles.farmhelpChild3, styles.farmhelpChildBg]} />
      <Text style={[styles.hiUserHow, styles.howTypo]}>
        Hi user. How may I help you?
      </Text>
      <Text
        style={[styles.howShallI, styles.howTypo]}
      >{`How shall I control snakes
in my field?`}</Text>
      <Text style={[styles.preventSnakesOn, styles.howTypo]}>
        Prevent snakes on your farm by removing hiding spots and tall grass,
        keeping vegetation trimmed, and eliminating rodent populations. Install
        snake-proof fencing around the perimeter, using mesh that extends both
        above and below ground. Seal gaps and holes in buildings to block snake
        entry. Maintain a clean environment by disposing of potential food
        sources and clutter. Consider using natural deterrents like certain
        plants and predator scents. Educate yourself about local snake species
        and exercise caution while working. Balance prevention with ecological
        sensitivity, as snakes contribute to pest control and the ecosystem. For
        assistance with potentially dangerous snakes, consult wildlife
        authorities or pest control experts.
      </Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.typeHere, styles.hereTypo]}>Type here.</Text>
      <Text style={[styles.speakHere, styles.hereTypo]}>Speak here.</Text>
      <Image
        style={[styles.barIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/bar1.png")}
      />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.statusBarPosition]}
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
          style={styles.timeDark}
          resizeMode="cover"
          source={require("../assets/colorclear.png")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  farmhelpChildBg: {
    backgroundColor: Color.gray_900,
    position: "absolute",
  },
  howTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.white,
    position: "absolute",
  },
  hereTypo: {
    height: 7,
    fontFamily: FontFamily.interThin,
    fontWeight: "100",
    fontSize: FontSize.size_3xs,
    fontStyle: "italic",
    color: Color.white,
    position: "absolute",
  },
  statusBarPosition: {
    top: 0,
    position: "absolute",
  },
  farmFriend: {
    top: 62,
    fontSize: FontSize.size_17xl,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    width: 281,
    height: 58,
    textAlign: "left",
    color: Color.white,
    left: 17,
    position: "absolute",
  },
  farmHelp: {
    top: 120,
    fontSize: FontSize.size_13xl,
    letterSpacing: 3.2,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.palegoldenrod,
    fontStyle: "italic",
    textAlign: "left",
    left: 17,
    position: "absolute",
  },
  yourAiPowered: {
    top: 159,
    fontSize: FontSize.size_base,
    letterSpacing: 1.6,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontStyle: "italic",
    textAlign: "left",
    color: Color.white,
    left: 17,
    position: "absolute",
  },
  farmhelpChild: {
    top: 211,
    left: 13,
    borderRadius: 40,
    backgroundColor: Color.gray_800,
    width: 328,
    height: 503,
    position: "absolute",
  },
  farmhelpItem: {
    height: "3%",
    width: "4.44%",
    top: "81%",
    right: "47.78%",
    bottom: "16%",
    left: "47.78%",
  },
  farmhelpInner: {
    top: 635,
    left: 156,
    width: 49,
    height: 49,
    position: "absolute",
  },
  rectangleView: {
    top: 598,
    left: 22,
    borderRadius: Border.br_11xl,
    width: 308,
    height: 23,
  },
  farmhelpChild1: {
    top: 249,
    left: 28,
    width: 156,
    height: 25,
    borderRadius: Border.br_xl,
  },
  farmhelpChild2: {
    top: 277,
    left: 180,
    width: 146,
    height: 30,
    borderRadius: Border.br_xl,
  },
  farmhelpChild3: {
    top: 320,
    left: 29,
    width: 233,
    height: 233,
    borderRadius: Border.br_xl,
  },
  hiUserHow: {
    top: 255,
    left: 35,
    textAlign: "left",
  },
  howShallI: {
    top: 280,
    left: 193,
    textAlign: "right",
  },
  preventSnakesOn: {
    top: 327,
    left: 40,
    width: 215,
    textAlign: "left",
  },
  vectorIcon: {
    height: "2.13%",
    width: "4.17%",
    top: "75.13%",
    right: "10.28%",
    bottom: "22.75%",
    left: "85.56%",
  },
  typeHere: {
    top: 603,
    left: 38,
    width: 149,
    textAlign: "left",
  },
  speakHere: {
    top: 690,
    left: 149,
    textAlign: "center",
    width: 63,
  },
  barIcon: {
    height: "8.13%",
    top: "91.88%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
  },
  notchIcon: {
    right: 0,
    left: 0,
    display: "none",
    height: 30,
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
    width: 54,
    height: 21,
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  statusBar: {
    left: -8,
    backgroundColor: Color.black,
    width: 376,
    height: 34,
    borderRadius: Border.br_xl,
  },
  farmhelpIcon: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default FarmhelpIcon;
