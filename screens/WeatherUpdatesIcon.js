import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const WeatherUpdatesIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.weatherUpdatesIcon}
      resizeMode="cover"
      source={require("../assets/weatherupdates.png")}
    >
      <View style={[styles.weatherUpdatesChild, styles.weatherBg]} />
      <View style={[styles.weatherUpdatesItem, styles.weatherBg]} />
      <Text style={styles.farmFriend}>FARM FRIEND</Text>
      <Text style={[styles.weatherUpdates, styles.toDoList1Clr]}>
        Weather Updates
      </Text>
      <Pressable
        style={styles.toDoList}
        onPress={() => navigation.navigate("ToDo")}
      >
        <Text style={[styles.toDoList1, styles.toDoList1Clr]}>To-Do List</Text>
      </Pressable>
      <View style={[styles.statusBar, styles.timeDarkLayout]}>
        <Image
          style={styles.notchIcon}
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
      <View style={styles.weekPlanner} />
      <Image
        style={styles.iphone11ProMax1}
        resizeMode="cover"
        source={require("../assets/iphone-11-pro-max--1.png")}
      />
      <Image
        style={styles.weatherUpdatesInner}
        resizeMode="cover"
        source={require("../assets/group-23.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  weatherBg: {
    backgroundColor: Color.gray_600,
    borderRadius: Border.br_51xl,
    position: "absolute",
  },
  toDoList1Clr: {
    color: Color.palegoldenrod,
    textAlign: "left",
  },
  timeDarkLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  weatherUpdatesChild: {
    left: -78,
    width: 366,
    height: 97,
    top: 99,
    borderRadius: Border.br_51xl,
  },
  weatherUpdatesItem: {
    top: 200,
    left: -60,
    width: 271,
    height: 49,
  },
  farmFriend: {
    top: 49,
    fontSize: FontSize.size_17xl,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    color: Color.white,
    width: 281,
    height: 58,
    textAlign: "left",
    left: 19,
    position: "absolute",
  },
  weatherUpdates: {
    fontSize: FontSize.size_21xl,
    letterSpacing: 6.8,
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 261,
    height: 68,
    left: 19,
    color: Color.palegoldenrod,
    top: 99,
    position: "absolute",
  },
  toDoList1: {
    fontSize: FontSize.size_xl,
    letterSpacing: 3.4,
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
    width: 133,
    height: 25,
  },
  toDoList: {
    left: 29,
    top: 212,
    position: "absolute",
  },
  notchIcon: {
    top: 0,
    right: 0,
    left: 0,
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
    top: 12,
    left: 21,
    width: 54,
    height: 21,
  },
  statusBar: {
    marginTop: -403,
    marginLeft: -199,
    top: "50%",
    backgroundColor: Color.black,
    width: 376,
    height: 36,
    left: "50%",
  },
  weekPlanner: {
    width: 3173,
    height: 5482,
  },
  iphone11ProMax1: {
    marginLeft: -136,
    top: 293,
    borderRadius: Border.br_31xl,
    width: 276,
    height: 386,
    opacity: 0.6,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  weatherUpdatesInner: {
    marginLeft: -180,
    top: 735,
    width: 360,
    height: 65,
    left: "50%",
    position: "absolute",
  },
  weatherUpdatesIcon: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default WeatherUpdatesIcon;
