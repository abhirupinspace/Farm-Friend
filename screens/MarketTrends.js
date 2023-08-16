import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MarketTrends = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.marketTrends}
      resizeMode="cover"
      source={require("../assets/markettrends.png")}
    >
      <Text style={[styles.farmFriend, styles.farmFriendPosition]}>
        FARM FRIEND
      </Text>
      <Text
        style={[styles.liveMarketTrends, styles.farmFriendPosition]}
      >{`Live Market 
Trends`}</Text>
      <View style={[styles.cropsPic, styles.riceLayout]}>
        <Image
          style={[styles.wheatIcon, styles.moreLayout]}
          resizeMode="cover"
          source={require("../assets/wheat.png")}
        />
        <View style={[styles.rice, styles.ricePosition]}>
          <Image
            style={[styles.riceChild, styles.ricePosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={[styles.rice1, styles.rice1Typo]}>Rice</Text>
          <Text style={[styles.wheat, styles.rice1Typo]}>Wheat</Text>
        </View>
        <View style={[styles.sugarcane, styles.moreLayout]}>
          <Image
            style={[styles.riceChild, styles.ricePosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-61.png")}
          />
          <Text style={[styles.sugarcane1, styles.potatoes1Typo]}>
            Sugarcane
          </Text>
        </View>
        <Pressable
          style={[styles.tomatoes, styles.moreLayout]}
          onPress={() => navigation.navigate("MarketTrendsTomatoes1")}
        >
          <Image
            style={[styles.riceChild, styles.ricePosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Text style={[styles.tomatoes1, styles.rice1Typo]}>Tomatoes</Text>
        </Pressable>
        <View style={[styles.potatoes, styles.moreLayout]}>
          <Image
            style={[styles.riceChild, styles.ricePosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <Text style={[styles.potatoes1, styles.potatoes1Typo]}>Potatoes</Text>
        </View>
        <View style={[styles.carrot, styles.moreLayout]}>
          <Image
            style={[styles.riceChild, styles.ricePosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-71.png")}
          />
          <Text style={[styles.carrot1, styles.rice1Typo]}>Carrot</Text>
        </View>
        <View style={[styles.more, styles.moreLayout]}>
          <Image
            style={[styles.riceChild, styles.ricePosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-81.png")}
          />
          <Text style={[styles.moreCrops, styles.rice1Typo]}>{`More
crops`}</Text>
        </View>
      </View>
      <Image
        style={[styles.barIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/bar1.png")}
      />
      <View style={[styles.statusBar, styles.timeDarkLayout]}>
        <Image
          style={[styles.notchIcon, styles.iconLayout]}
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
  farmFriendPosition: {
    textAlign: "left",
    left: 17,
    position: "absolute",
  },
  riceLayout: {
    height: 158,
    position: "absolute",
  },
  moreLayout: {
    width: 158,
    height: 158,
    position: "absolute",
  },
  ricePosition: {
    left: 0,
    top: 0,
  },
  rice1Typo: {
    color: Color.gray_300,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  potatoes1Typo: {
    height: 28,
    color: Color.gray_300,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  timeDarkLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  farmFriend: {
    fontSize: FontSize.size_17xl,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    color: Color.white,
    width: 281,
    height: 58,
    top: 62,
  },
  liveMarketTrends: {
    top: 120,
    fontSize: FontSize.size_13xl,
    letterSpacing: 3.2,
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.palegoldenrod,
  },
  wheatIcon: {
    left: 171,
    top: 0,
  },
  riceChild: {
    width: 158,
    height: 158,
    position: "absolute",
  },
  rice1: {
    top: 70,
    left: 53,
  },
  wheat: {
    top: 68,
    left: 211,
  },
  rice: {
    width: 289,
    height: 158,
    position: "absolute",
  },
  sugarcane1: {
    top: 67,
    left: 19,
    width: 137,
  },
  sugarcane: {
    left: 699,
    top: 0,
  },
  tomatoes1: {
    left: 18,
    top: 62,
  },
  tomatoes: {
    left: 342,
    top: 0,
  },
  potatoes1: {
    top: 65,
    left: 27,
    width: 109,
  },
  potatoes: {
    left: 513,
    top: 0,
  },
  carrot1: {
    top: 71,
    left: 42,
  },
  carrot: {
    left: 879,
    top: 0,
  },
  moreCrops: {
    top: 50,
    left: 45,
  },
  more: {
    left: 1059,
    top: 0,
  },
  cropsPic: {
    top: 321,
    left: 8,
    width: 360,
  },
  barIcon: {
    height: "8.13%",
    top: "91.88%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxHeight: "100%",
    width: "100%",
  },
  notchIcon: {
    right: 0,
    height: 30,
    display: "none",
    left: 0,
    top: 0,
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
    left: -8,
    backgroundColor: Color.black,
    width: 376,
    height: 34,
    top: 0,
  },
  marketTrends: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default MarketTrends;
