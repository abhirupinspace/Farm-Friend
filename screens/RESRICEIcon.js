import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const RESRICEIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.resRiceIcon}
      resizeMode="cover"
      source={require("../assets/resrice.png")}
    >
      <Text style={[styles.farmFriend, styles.farmFriendFlexBox]}>
        FARM FRIEND
      </Text>
      <Text
        style={[styles.cropDetailsAnd, styles.farmFriendFlexBox]}
      >{`CROP DETAILS
AND RESEARCH`}</Text>
      <View style={[styles.resRiceChild, styles.resLayout]} />
      <View style={[styles.rice, styles.riceLayout1]}>
        <View style={[styles.riceChild, styles.riceLayout]} />
      </View>
      <View style={[styles.resRiceItem, styles.riceLayout]} />
      <Text style={styles.rice1}>RICE</Text>
      <Pressable
        style={[styles.wheat, styles.riceLayout1]}
        onPress={() => navigation.navigate("RESWHEAT")}
      >
        <View style={[styles.riceChild, styles.riceLayout]} />
        <Text style={[styles.wheat1, styles.wheat1Typo]}>WHEAT</Text>
      </Pressable>
      <Text style={[styles.tomatoes, styles.wheat1Typo]}>TOMATOES</Text>
      <Text
        style={[styles.riceCultivationInContainer, styles.farmFriendFlexBox]}
      >
        <Text
          style={styles.riceCultivationIn}
        >{`Rice cultivation in India has a long history, dating back to as early as 5,000 BC
Here is a detailed record of rice cultivation in India:
`}</Text>
        <Text style={styles.earlyCultivation}>{`Early Cultivation:
`}</Text>
        <Text
          style={styles.riceCultivationIn}
        >{`Rice cultivation in the Indian subcontinent began around 5,000 BC
Several wild cereals, including rice, grew in the Vindhyan Hills, and rice cultivation may have been underway as early as 7,000 BC.
Rice was cultivated in the Indus Valley civilization during the 3rd millennium BC.
`}</Text>
        <Text style={styles.earlyCultivation}>{`Importance in Indian Economy:
`}</Text>
        <Text
          style={styles.riceCultivationIn}
        >{`Rice is one of the chief grains in India and plays a significant role in the national economy.
India is the world's second-largest producer of rice and the largest exporter of rice.
Rice production in India has increased from 53.6 million tons in FY 1980 to 120 million tons in FY 2020-21.
`}</Text>
        <Text style={styles.earlyCultivation}>{`Cultivation Methods:
`}</Text>
        <Text
          style={styles.riceCultivationIn}
        >{`Traditional methods are still used for rice cultivation in India
The fields are plowed, fertilized with cow dung, and smoothed
Seeds are transplanted by hand, and proper irrigation is provided for cultivation
Rice can be grown on a variety of soils, including silts, loams, and gravels, and can tolerate alkaline and acid soils.
Irrigation has made it possible to grow rice even in regions with a baked climate, such as Punjab and Haryana.
`}</Text>
        <Text style={styles.earlyCultivation}>{`Area of Cultivation:
`}</Text>
        <Text
          style={styles.riceCultivationIn}
        >{`India has a large area under rice cultivation.
The total area of cultivation for rice in India was estimated to be around 44 million hectares in 2022.
`}</Text>
        <Text style={styles.earlyCultivation}>{`Recent Developments:
`}</Text>
        <Text
          style={styles.riceCultivationIn}
        >{`India achieved a record rice crop in 2021, which led to an abundance of rice for farmers.
The non-basmati variety of rice, preferred by most overseas buyers, was sold at $345 per tonne.
In 2020, India produced a record 117.94 million tonnes of rice.
Overall, rice cultivation has been an integral part of India's agricultural history and continues to be a significant contributor to the country's economy. The cultivation methods have evolved over time, and India has become a major player in the global rice market.`}</Text>
      </Text>
      <View style={[styles.statusBar, styles.timeDarkLayout]}>
        <Image
          style={[styles.notchIcon, styles.riceChildPosition]}
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
        style={[styles.resRiceInner, styles.statusBarPosition]}
        resizeMode="cover"
        source={require("../assets/group-2.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  farmFriendFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  resLayout: {
    width: 360,
    position: "absolute",
  },
  riceLayout1: {
    height: 43,
    width: 136,
    top: 194,
    position: "absolute",
  },
  riceLayout: {
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
    height: 43,
    width: 136,
    backgroundColor: Color.gray_800,
    position: "absolute",
  },
  wheat1Typo: {
    fontFamily: FontFamily.interThin,
    fontWeight: "100",
    height: 32,
    fontSize: FontSize.size_7xl,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  timeDarkLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  riceChildPosition: {
    top: 0,
    left: 0,
  },
  statusBarPosition: {
    left: "50%",
    top: "50%",
  },
  farmFriend: {
    top: 49,
    left: 19,
    fontSize: FontSize.size_17xl,
    width: 281,
    height: 58,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
  },
  cropDetailsAnd: {
    top: 107,
    left: 17,
    fontSize: FontSize.size_13xl,
    fontStyle: "italic",
    color: Color.palegoldenrod,
    width: 261,
    height: 68,
    fontFamily: FontFamily.interExtraLight,
    fontWeight: "200",
  },
  resRiceChild: {
    top: 237,
    height: 1256,
    backgroundColor: Color.gray_800,
    left: 0,
    width: 360,
  },
  riceChild: {
    top: 0,
    left: 0,
  },
  rice: {
    left: 11,
  },
  resRiceItem: {
    top: 196,
    left: 289,
  },
  rice1: {
    left: 49,
    fontFamily: FontFamily.interRegular,
    width: 61,
    height: 32,
    fontSize: FontSize.size_7xl,
    top: 201,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  wheat1: {
    top: 7,
    left: 26,
    width: 94,
  },
  wheat: {
    left: 150,
  },
  tomatoes: {
    left: 309,
    width: 201,
    top: 201,
    fontFamily: FontFamily.interThin,
    fontWeight: "100",
  },
  riceCultivationIn: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
  },
  earlyCultivation: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  riceCultivationInContainer: {
    top: 250,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    width: 325,
    left: 21,
    color: Color.white,
    textAlign: "left",
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
    top: 12,
    width: 54,
    height: 21,
    left: 21,
  },
  statusBar: {
    marginTop: -742,
    marginLeft: -196,
    backgroundColor: Color.black,
    width: 376,
    height: 36,
    left: "50%",
    top: "50%",
  },
  resRiceInner: {
    marginTop: -7,
    marginLeft: -180,
    height: 65,
    width: 360,
    position: "absolute",
  },
  resRiceIcon: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 1484,
    overflow: "hidden",
  },
});

export default RESRICEIcon;
