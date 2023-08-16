import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  Pressable,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const ChatSectionIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.chatSectionIcon}
      resizeMode="cover"
      source={require("../assets/chatsection.png")}
    >
      <Image
        style={styles.chatSectionChild}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Text style={styles.fardinAhmed}>Fardin Ahmed</Text>
      <Pressable
        style={[styles.vector, styles.vectorLayout]}
        onPress={() => navigation.navigate("AgriConnect")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector1, styles.vectorLayout]}
        onPress={() => navigation.navigate("AgriConnect")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <View style={[styles.statusBar, styles.timeDarkLayout]}>
        <Image
          style={[styles.notchIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/notch2.png")}
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
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/group-5.png")}
        />
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  vectorLayout: {
    height: "2.75%",
    width: "3.89%",
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  timeDarkLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  chatSectionChild: {
    top: 37,
    left: 44,
    width: 40,
    height: 39,
    position: "absolute",
  },
  fardinAhmed: {
    top: 47,
    left: 96,
    fontSize: FontSize.size_mini,
    letterSpacing: 1.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "left",
    width: 136,
    height: 20,
    position: "absolute",
  },
  icon: {
    maxHeight: "100%",
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "5.28%",
    top: "5.63%",
    right: "90.83%",
    bottom: "91.63%",
  },
  vector1: {
    left: "91.39%",
    top: "5%",
    right: "4.72%",
    bottom: "92.25%",
  },
  notchIcon: {
    top: 0,
    right: 0,
    left: 0,
    height: 30,
    display: "none",
    position: "absolute",
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
    overflow: "hidden",
  },
  statusBar: {
    top: -4,
    left: -11,
    backgroundColor: Color.black,
    width: 379,
    height: 31,
  },
  icon2: {
    marginLeft: -180,
  },
  wrapper: {
    left: "50%",
    bottom: 0,
    width: 360,
    height: 65,
    position: "absolute",
  },
  chatSectionIcon: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default ChatSectionIcon;
