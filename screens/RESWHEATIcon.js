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
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const RESWHEATIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.resWheatIcon}
      resizeMode="cover"
      source={require("../assets/reswheat.png")}
    >
      <Text style={[styles.farmFriend, styles.farmFriendFlexBox]}>
        FARM FRIEND
      </Text>
      <Text
        style={[styles.cropDetailsAnd, styles.farmFriendFlexBox]}
      >{`CROP DETAILS
AND RESEARCH`}</Text>
      <View style={[styles.resWheatChild, styles.groupIconLayout]} />
      <View style={[styles.resWheatItem, styles.riceLayout]} />
      <View style={[styles.resWheatInner, styles.riceLayout]} />
      <Pressable
        style={[styles.rice, styles.riceLayout]}
        onPress={() => navigation.navigate("RESRICE")}
      >
        <View style={[styles.riceChild, styles.riceChildPosition]} />
        <Text style={styles.rice1}>RICE</Text>
      </Pressable>
      <Text style={[styles.wheat, styles.wheatPosition]}>WHEAT</Text>
      <Text style={[styles.tomatoes, styles.wheatPosition]}>TOMATOES</Text>
      <Text style={[styles.wheatIsTheContainer, styles.farmFriendFlexBox]}>
        <Text
          style={styles.wheatIsThe}
        >{`Wheat is the second most important food crop in India, after rice, and contributes to about 25% of the total food grain production in the country.
Here is a detailed record of wheat cultivation in India:
`}</Text>
        <Text style={styles.areaOfCultivation}>{`Area of Cultivation:
`}</Text>
        <Text
          style={styles.wheatIsThe}
        >{`The total area under wheat cultivation in India is about 29.8 million hectares.
The major increase in the productivity of wheat has been observed in the states of Haryana, Punjab, and Uttar Pradesh.
Higher area coverage is reported from Madhya Pradesh in recent years.
`}</Text>
        <Text style={styles.soilRequirements}>{`Soil Requirements:
`}</Text>
        <Text
          style={styles.wheatIsThe}
        >{`Wheat is grown in a wide range of soils in India.
Soils with a loamy texture or clay loam, and moderate water-holding capacity are ideal for wheat cultivation.
`}</Text>
        <Text style={styles.soilRequirements}>{`Varieties of Wheat:
`}</Text>
        <Text
          style={styles.wheatIsThe}
        >{`Indian wheat is largely a medium protein, soft/medium hard, and white bread wheat
There are several commercial and improved varieties of wheat that have been developed in India
Agro-climatic Conditions:
Wheat crop has wide adaptability and can be grown in the tropical and sub-tropical zones and also in the temperate zone and the cold tracts of the far north, beyond the 60-degree north altitude
Wheat is best grown as a rabi or winter season crop in India since the conditions during that time are conducive for growth and ensure a good yield.
`}</Text>
        <Text style={styles.soilRequirements}>{`Health Benefits:
`}</Text>
        <Text
          style={styles.wheatIsThe}
        >{`Wheat is a good source of protein, fiber, manganese, and magnesium in its unrefined state.
Some of the health benefits of whole wheat include improved digestion, lower risk of heart disease, and reduced risk of type 2 diabetes.
`}</Text>
        <Text style={styles.soilRequirements}>{`Recent Developments:
`}</Text>
        <Text
          style={styles.wheatIsThe}
        >{`India's wheat production is estimated to set a new record of 112.74 million tonnes in the 2022-23 crop year.
Despite lower crop yields due to unseasonal rains in February and March, India is likely to harvest a record 112.7 million tonnes of wheat in 2023.
Earlier this year, torrential rains and hailstorms hit India's fertile northern, central, and western plains, damaging ripening winter-planted crops including wheat and exposing farmers to losses.`}</Text>
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
        style={[styles.groupIcon, styles.statusBarPosition]}
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
  groupIconLayout: {
    width: 360,
    position: "absolute",
  },
  riceLayout: {
    height: 43,
    width: 136,
  },
  riceChildPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  wheatPosition: {
    top: 201,
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
  resWheatChild: {
    top: 237,
    height: 1240,
    backgroundColor: Color.gray_800,
    left: 0,
    width: 360,
  },
  resWheatItem: {
    left: 150,
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
    width: 136,
    backgroundColor: Color.gray_800,
    top: 194,
    position: "absolute",
  },
  resWheatInner: {
    left: 290,
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
    width: 136,
    backgroundColor: Color.gray_800,
    top: 194,
    position: "absolute",
  },
  riceChild: {
    height: 43,
    width: 136,
    borderTopRightRadius: Border.br_6xl,
    borderTopLeftRadius: Border.br_6xl,
    backgroundColor: Color.gray_800,
  },
  rice1: {
    top: 7,
    left: 38,
    width: 61,
    height: 32,
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.interThin,
    fontWeight: "100",
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  rice: {
    left: 11,
    top: 194,
    position: "absolute",
  },
  wheat: {
    left: 176,
    width: 94,
    fontFamily: FontFamily.interRegular,
  },
  tomatoes: {
    left: 309,
    width: 201,
    fontFamily: FontFamily.interThin,
    fontWeight: "100",
    top: 201,
  },
  wheatIsThe: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
  },
  areaOfCultivation: {
    fontFamily: FontFamily.interRegular,
  },
  soilRequirements: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  wheatIsTheContainer: {
    top: 247,
    left: 20,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    width: 325,
    color: Color.white,
    textAlign: "left",
  },
  notchIcon: {
    right: 0,
    maxWidth: "100%",
    height: 30,
    display: "none",
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
    marginTop: -742,
    marginLeft: -196,
    backgroundColor: Color.black,
    width: 376,
    height: 36,
    left: "50%",
    top: "50%",
  },
  groupIcon: {
    marginTop: -7,
    marginLeft: -180,
    height: 65,
    width: 360,
    position: "absolute",
  },
  resWheatIcon: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 1484,
    overflow: "hidden",
  },
});

export default RESWHEATIcon;
