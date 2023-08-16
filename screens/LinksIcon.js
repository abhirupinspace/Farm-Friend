import * as React from "react";
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const LinksIcon = () => {
  return (
    <ImageBackground
      style={styles.linksIcon}
      resizeMode="cover"
      source={require("../assets/links.png")}
    >
      <Text style={[styles.farmFriend, styles.farmFriendFlexBox]}>
        FARM FRIEND
      </Text>
      <Text
        style={[styles.linksAndReferences, styles.farmFriendFlexBox]}
      >{`Links and
References`}</Text>
      <View style={styles.linksChild} />
      <Text
        style={[styles.theIndianGovernmentContainer, styles.farmFriendFlexBox]}
      >
        <Text
          style={styles.theIndianGovernment}
        >{`The Indian government has several websites related to agriculture and farmers. These include:

`}</Text>
        <Text
          style={styles.departmentOfAgriculture}
        >{`Department of Agriculture & Farmers Welfare:`}</Text>
        <Text
          style={styles.theIndianGovernment}
        >{` This website is managed by the Ministry of Agriculture & Farmers Welfare and provides information on agriculture reforms, farming agreements, and other related topics.
`}</Text>
        <Text style={styles.departmentOfAgriculture}>
          Farmer Friendly Handbook
        </Text>
        <Text
          style={styles.theIndianGovernment}
        >{`: This handbook provides information on various schemes and programs related to agriculture and farmers in India. It is available on the website of the Department of Agriculture, Cooperation and Farmers Welfare
`}</Text>
        <Text style={styles.departmentOfAgriculture}>
          National Portal of India - Agriculture
        </Text>
        <Text
          style={styles.theIndianGovernment}
        >{`: This section of the National Portal of India provides detailed information on government policies, schemes, agriculture loans, market prices, animal husbandry, fisheries, horticulture, loans & credit, sericulture, and more.
`}</Text>
        <Text style={styles.departmentOfAgriculture}>
          National Portal of India:
        </Text>
        <Text
          style={styles.theIndianGovernment}
        >{` This website provides a single-window access to information and services that are electronically delivered from all Government Departments. It also has a directory of all Indian Government Websites at all levels and from all sectors.

It is important to note that the USDA website
and the USDA.gov website
are not Indian government websites, but they do provide information on India's agricultural economy and resources for farmers and ranchers in the United States.`}</Text>
      </Text>
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
    top: 62,
    fontSize: FontSize.size_17xl,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    width: 281,
    height: 58,
    color: Color.white,
    textAlign: "left",
    left: 17,
  },
  linksAndReferences: {
    top: 120,
    fontSize: FontSize.size_13xl,
    letterSpacing: 3.2,
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.palegoldenrod,
    left: 17,
  },
  linksChild: {
    top: 210,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.gray_800,
    width: 360,
    height: 1266,
    left: 0,
    position: "absolute",
  },
  theIndianGovernment: {
    fontFamily: FontFamily.interRegular,
  },
  departmentOfAgriculture: {
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
  },
  theIndianGovernmentContainer: {
    top: 223,
    left: 14,
    fontSize: 17,
    width: 334,
    height: 882,
    color: Color.white,
    textAlign: "left",
  },
  barIcon: {
    height: "5.23%",
    top: "59.86%",
    right: "-0.28%",
    bottom: "34.92%",
    left: "0.28%",
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
  linksIcon: {
    borderRadius: Border.br_6xl,
    flex: 1,
    height: 1243,
    overflow: "hidden",
    width: "100%",
  },
});

export default LinksIcon;
