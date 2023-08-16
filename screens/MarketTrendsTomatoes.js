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

const MarketTrendsTomatoes = () => {
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
      <Text
        style={[styles.liveMarketTrends, styles.tomatoesTypo]}
      >{`Live Market 
Trends`}</Text>
      <Text style={[styles.tomatoes, styles.tomatoesTypo]}>Tomatoes</Text>
      <Text
        style={[styles.theForecastFor, styles.presentTrendsTypo1]}
      >{`The forecast for tomato prices in India in the near future suggests a potential softening of prices as supplies from hilly states commence.

Currently, tomato prices have surged in recent weeks, reaching up to Rs 150 to Rs 200 per kilogram in retail markets.

However, experts do not see a sign of ease in prices

The National Cooperative Consumers' Federation of India (NCCF) has announced that tomatoes will be sold at a price of Rs 90 per kilogram

While the exact timeline for the price softening is not mentioned in the search results, it is expected to happen within the next 2-3 weeks as supplies from hilly states come into the market

This suggests that there may be a relief in tomato prices in the near future. However, it is important to note that the search results do not provide a comprehensive forecast for tomato prices in India.`}</Text>
      <Pressable
        style={[styles.marketTrendsTomatoesItem, styles.marketLayout]}
        onPress={() => navigation.navigate("MarketTrendsTomatoes1")}
      />
      <View style={[styles.marketTrendsTomatoesInner, styles.marketLayout]} />
      <Text style={[styles.presentTrends, styles.presentTrendsTypo]}>{`Present
Trends`}</Text>
      <Text
        style={[styles.futurePredictions, styles.presentTrendsTypo]}
      >{`Future
Predictions`}</Text>
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
  tomatoesTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  presentTrendsTypo1: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  marketLayout: {
    height: 43,
    width: 136,
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
    top: 248,
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
    top: 291,
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
  theForecastFor: {
    top: 309,
    left: 14,
    fontSize: FontSize.size_sm,
    width: 332,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  marketTrendsTomatoesItem: {
    left: 22,
    backgroundColor: Color.gray_500,
  },
  marketTrendsTomatoesInner: {
    left: 206,
    backgroundColor: Color.gray_600,
  },
  presentTrends: {
    top: 253,
    left: 59,
    color: Color.gray_700,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  futurePredictions: {
    top: 249,
    left: 222,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.white,
    textAlign: "center",
    letterSpacing: 1.6,
    fontSize: FontSize.size_base,
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
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default MarketTrendsTomatoes;
