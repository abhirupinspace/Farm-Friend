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
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const Homepage = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.homepage}
      resizeMode="cover"
      source={require("../assets/homepage.png")}
    >
      <Pressable
        style={[styles.weatherUpdates, styles.weatherLayout]}
        onPress={() => navigation.navigate("WeatherUpdates")}
      >
        <Image
          style={[styles.weatherBgIcon, styles.farmHelpItemPosition]}
          resizeMode="cover"
          source={require("../assets/weather-bg.png")}
        />
        <Text
          style={[styles.weatherUpdatesAnd, styles.andTypo]}
        >{`WEATHER UPDATES
AND TO-DO LIST`}</Text>
      </Pressable>
      <Pressable
        style={[styles.cropDetails, styles.cropDetailsFlexBox]}
        onPress={() => navigation.navigate("RESRICE")}
      >
        <Image
          style={[styles.cropDetailsChild, styles.farmHelpItemPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-91.png")}
        />
        <Text style={[styles.cropDetailsAnd, styles.andTypo]}>{`CROP DETAILS
AND RESEARCH`}</Text>
      </Pressable>
      <Pressable
        style={styles.market}
        onPress={() => navigation.navigate("MarketTrends")}
      >
        <Image
          style={[styles.marketChild, styles.marketPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-71.png")}
        />
        <Image
          style={[styles.marketItem, styles.marketPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-8.png")}
        />
        <Text style={[styles.liveMarketTrends, styles.andTypo]}>{`LIVE MARKET
TRENDS`}</Text>
      </Pressable>
      <Pressable
        style={[styles.social, styles.socialLayout]}
        onPress={() => navigation.navigate("AgriConnect")}
      >
        <Image
          style={[styles.socialChild, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-92.png")}
        />
        <Text style={[styles.social1, styles.socialTypo]}>AGRI-CONNECT</Text>
      </Pressable>
      <Pressable
        style={[styles.farmHelp, styles.farmLayout1]}
        onPress={() => navigation.navigate("Farmhelp")}
      >
        <Image
          style={[styles.farmHelpChild, styles.farmLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-93.png")}
        />
        <Text style={[styles.social2, styles.socialTypo]}>FARM-HELP</Text>
      </Pressable>
      <Pressable
        style={[styles.farmHelp1, styles.farmLayout]}
        onPress={() => navigation.navigate("Links")}
      >
        <Image
          style={[styles.farmHelpItem, styles.farmLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-94.png")}
        />
        <Text style={[styles.social3, styles.socialTypo]}>
          LINKS AND REFERENCES
        </Text>
      </Pressable>
      <Text style={[styles.farmFriend, styles.homeFlexBox]}>FARM FRIEND</Text>
      <Text style={[styles.home, styles.homeFlexBox]}>Home</Text>
      <Image
        style={[styles.notificationBellIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/notification-bell.png")}
      />
      <Text style={[styles.dateDdd, styles.homeFlexBox]}>
        Wed, Aug 16th 2023
      </Text>
      <Pressable
        style={[styles.iconCart, styles.iconLayout1]}
        onPress={() => navigation.navigate("FarmMart")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-cart.png")}
        />
      </Pressable>
      <View style={styles.tab}>
        <View style={styles.tabChild} />
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/group-1.png")}
          />
        </Pressable>
        <Image
          style={styles.tabItem}
          resizeMode="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Pressable
          style={styles.iconProfileCircleIcon}
          onPress={() => navigation.navigate("Profile1")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/-icon-profile-circle-icon.png")}
          />
        </Pressable>
        <Image
          style={[styles.iconHome2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-home-2.png")}
        />
        <View style={[styles.statusBar, styles.timeDarkLayout]}>
          <Image
            style={styles.notchIcon}
            resizeMode="cover"
            source={require("../assets/notch1.png")}
          />
          <View style={[styles.statusIcons, styles.cropDetailsFlexBox]}>
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
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  weatherLayout: {
    height: 183,
    width: 380,
    left: "50%",
    position: "absolute",
  },
  farmHelpItemPosition: {
    borderTopRightRadius: Border.br_41xl,
    borderTopLeftRadius: Border.br_41xl,
  },
  andTypo: {
    textAlign: "center",
    fontSize: FontSize.size_13xl,
    color: Color.white,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    fontStyle: "italic",
    position: "absolute",
  },
  cropDetailsFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  marketPosition: {
    left: 2,
    borderTopRightRadius: Border.br_41xl,
    borderTopLeftRadius: Border.br_41xl,
    top: 0,
    position: "absolute",
  },
  socialLayout: {
    height: 194,
    width: 366,
    position: "absolute",
  },
  childPosition: {
    left: 5,
    borderTopRightRadius: Border.br_41xl,
    borderTopLeftRadius: Border.br_41xl,
    top: 0,
  },
  socialTypo: {
    width: 253,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    fontStyle: "italic",
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  farmLayout1: {
    height: 208,
    width: 366,
    position: "absolute",
  },
  farmLayout: {
    height: 220,
    width: 366,
    position: "absolute",
  },
  homeFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout1: {
    width: "10%",
    position: "absolute",
  },
  timeDarkLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  weatherBgIcon: {
    marginLeft: -178,
    top: 0,
    height: 183,
    width: 380,
    left: "50%",
    position: "absolute",
  },
  weatherUpdatesAnd: {
    marginLeft: -186,
    top: 47,
    letterSpacing: 0.3,
    width: 369,
    height: 56,
    left: "50%",
  },
  weatherUpdates: {
    marginLeft: -192,
    top: 219,
  },
  cropDetailsChild: {
    width: 362,
    height: 187,
    zIndex: 0,
  },
  cropDetailsAnd: {
    top: 37,
    left: 39,
    width: 280,
    zIndex: 1,
    height: 80,
  },
  cropDetails: {
    top: 365,
    left: -1,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    justifyContent: "center",
  },
  marketChild: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    height: 176,
    width: 360,
  },
  marketItem: {
    borderBottomRightRadius: Border.br_16xl,
    borderBottomLeftRadius: Border.br_16xl,
    width: 359,
    height: 193,
  },
  liveMarketTrends: {
    top: 59,
    width: 202,
    height: 88,
    left: 75,
  },
  market: {
    top: 513,
    left: -2,
    height: 193,
    width: 360,
    position: "absolute",
  },
  socialChild: {
    height: 194,
    width: 366,
    position: "absolute",
  },
  social1: {
    top: 78,
    left: 53,
    height: 75,
  },
  social: {
    top: 664,
    left: -5,
  },
  farmHelpChild: {
    left: 5,
    borderTopRightRadius: Border.br_41xl,
    borderTopLeftRadius: Border.br_41xl,
    top: 0,
  },
  social2: {
    top: 83,
    left: 47,
    height: 80,
  },
  farmHelp: {
    top: 825,
    left: -5,
  },
  farmHelpItem: {
    left: 3,
    borderTopRightRadius: Border.br_41xl,
    borderTopLeftRadius: Border.br_41xl,
    top: 0,
  },
  social3: {
    top: 67,
    left: 61,
    height: 85,
  },
  farmHelp1: {
    top: 996,
    left: -3,
  },
  farmFriend: {
    top: 50,
    left: 19,
    fontSize: FontSize.size_17xl,
    width: 281,
    height: 58,
    color: Color.white,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
    textAlign: "left",
  },
  home: {
    top: 89,
    left: 14,
    fontSize: 64,
    letterSpacing: 10.9,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.palegoldenrod,
    width: 261,
    height: 68,
    fontStyle: "italic",
    textAlign: "left",
  },
  notificationBellIcon: {
    height: "2.85%",
    top: "4.19%",
    right: "7.22%",
    bottom: "92.96%",
    left: "82.78%",
    width: "10%",
    position: "absolute",
  },
  dateDdd: {
    top: 180,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: "#9b9696",
    width: 232,
    height: 29,
    left: 75,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconCart: {
    left: "81.94%",
    top: "8.22%",
    right: "8.06%",
    bottom: "89.23%",
    height: "2.55%",
  },
  tabChild: {
    top: 735,
    left: 7,
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    height: 65,
    backgroundColor: Color.black,
    width: 360,
    position: "absolute",
  },
  wrapper: {
    left: "71.01%",
    top: "92.75%",
    right: "17.29%",
    bottom: "1.58%",
    width: "11.7%",
    height: "5.67%",
    position: "absolute",
  },
  tabItem: {
    top: 712,
    left: 155,
    width: 67,
    height: 67,
    position: "absolute",
  },
  iconProfileCircleIcon: {
    left: "16.22%",
    top: "92.88%",
    right: "72.1%",
    bottom: "1.71%",
    width: "11.68%",
    height: "5.41%",
    position: "absolute",
  },
  iconHome2: {
    height: "5.24%",
    width: "11.17%",
    top: "90.38%",
    right: "44.41%",
    bottom: "4.38%",
    left: "44.41%",
    position: "absolute",
  },
  notchIcon: {
    right: 0,
    left: 0,
    height: 30,
    display: "none",
    maxWidth: "100%",
    top: 0,
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
    marginTop: -400,
    marginLeft: -188,
    top: "50%",
    height: 36,
    backgroundColor: Color.black,
    width: 376,
    left: "50%",
  },
  tab: {
    left: -8,
    height: 800,
    width: 376,
    top: 0,
    position: "absolute",
  },
  homepage: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 1265,
    overflow: "hidden",
    width: "100%",
  },
});

export default Homepage;
