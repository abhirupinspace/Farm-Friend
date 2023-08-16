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

const MarketTrendsTomatoes1 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.marketTrendsTomatoes}
      resizeMode="cover"
      source={require("../assets/markettrendstomatoes.png")}
    >
      <Image
        style={styles.marketTrendsTomatoesChild}
        resizeMode="cover"
        source={require("../assets/rectangle-54.png")}
      />
      <Text style={[styles.farmFriend, styles.farmFriendFlexBox]}>
        FARM FRIEND
      </Text>
      <Text style={[styles.liveMarketTrends, styles.trendsTypo]}>{`Live Market 
Trends`}</Text>
      <Text style={[styles.tomatoes, styles.trendsTypo]}>Tomatoes</Text>
      <Text
        style={[styles.thePresentMarket, styles.thePresentMarketTypo]}
      >{`The present market trends and analysis of tomatoes in India are as follows:

1. Tomato prices in India have been soaring in recent weeks due to heavy rains that have damaged crops and reduced supply.
2. As of July 25, the price of 1 kilogram of tomatoes reached 203 rupees ($2.48), nearly three times higher than the previous year.
3. In some areas, prices have surged by over 400% .
4. The high prices have led to theft and turmoil in some areas.
5. However, the high prices have also led to windfall gains for some tomato farmers.
6. It is unclear when prices will ease, but some experts predict that prices may start to come down as supply improves.
7. The Indian tomato processing market size reached US$ 1,233.3 Million in 2022 and is expected to reach US$ 1,931.2 Million by 2028.

`}</Text>
      <Image
        style={styles.marketTrendsTomatoesItem}
        resizeMode="cover"
        source={require("../assets/rectangle-541.png")}
      />
      <View style={[styles.present, styles.futureLayout]}>
        <View style={[styles.presentChild, styles.childPosition]} />
        <Text style={[styles.presentTrends, styles.presentTrendsTypo]}>{`Present
Trends`}</Text>
      </View>
      <Pressable
        style={[styles.future, styles.futureLayout]}
        onPress={() => navigation.navigate("MarketTrendsTomatoes")}
      >
        <View style={[styles.futureChild, styles.childPosition]} />
        <Text
          style={[styles.futurePredictions, styles.presentTrendsTypo]}
        >{`Future
Predictions`}</Text>
      </Pressable>
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
  farmFriendFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  trendsTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  thePresentMarketTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  futureLayout: {
    width: 136,
    top: 248,
    height: 43,
    position: "absolute",
  },
  childPosition: {
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
    top: 0,
    width: 136,
    height: 43,
    left: 0,
    position: "absolute",
  },
  presentTrendsTypo: {
    textAlign: "center",
    letterSpacing: 1.6,
    fontSize: FontSize.size_base,
    fontStyle: "italic",
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
  marketTrendsTomatoesChild: {
    top: 288,
    width: 368,
    height: 495,
    left: 0,
    position: "absolute",
  },
  farmFriend: {
    top: 62,
    fontSize: FontSize.size_17xl,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    width: 281,
    height: 58,
    left: 17,
  },
  liveMarketTrends: {
    top: 105,
    color: Color.palegoldenrod,
    fontStyle: "italic",
    letterSpacing: 3.2,
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
    left: 17,
  },
  tomatoes: {
    top: 196,
    left: 90,
    color: Color.red,
    fontStyle: "italic",
    letterSpacing: 3.2,
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  thePresentMarket: {
    top: 304,
    left: 15,
    fontSize: FontSize.size_sm,
    width: 332,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  marketTrendsTomatoesItem: {
    top: 672,
    left: 76,
    width: 201,
    height: 43,
    position: "absolute",
    borderRadius: Border.br_6xl,
  },
  presentChild: {
    backgroundColor: Color.gray_800,
  },
  presentTrends: {
    top: 5,
    left: 35,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.white,
    textAlign: "center",
    letterSpacing: 1.6,
    fontSize: FontSize.size_base,
  },
  present: {
    left: 22,
  },
  futureChild: {
    backgroundColor: Color.gray_500,
  },
  futurePredictions: {
    top: 1,
    left: 18,
    color: Color.gray_700,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  future: {
    left: 206,
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
    top: 0,
    left: 0,
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
  marketTrendsTomatoes: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_6xl,
  },
});

export default MarketTrendsTomatoes1;
