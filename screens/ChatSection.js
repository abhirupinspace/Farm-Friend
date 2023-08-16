import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const ChatSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatSection}>
      <View style={styles.chatSectionChild} />
      <Text style={[styles.search, styles.searchTypo]}>{`Search `}</Text>
      <Image
        style={[styles.chatSectionItem, styles.chatChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-91.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("ChatSection")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/ellipse-92.png")}
        />
      </Pressable>
      <Image
        style={[styles.chatSectionInner, styles.chatChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-93.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.chatChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-94.png")}
      />
      <Image
        style={[styles.chatSectionChild1, styles.chatChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.chatSectionChild2, styles.chatChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={[styles.chatSectionChild3, styles.chatChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Text style={[styles.message, styles.messageLayout]}>Message</Text>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("Profile1")}
      >
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </Pressable>
      <View style={[styles.lineView, styles.chatChildLayout]} />
      <View style={[styles.chatSectionChild4, styles.chatChildLayout]} />
      <View style={[styles.chatSectionChild5, styles.chatChildLayout]} />
      <View style={[styles.chatSectionChild6, styles.chatChildLayout]} />
      <View style={[styles.chatSectionChild7, styles.chatChildLayout]} />
      <View style={[styles.chatSectionChild8, styles.chatChildLayout]} />
      <View style={[styles.chatSectionChild9, styles.chatChildLayout]} />
      <Text style={[styles.rajuRao, styles.rajuRaoTypo]}>Raju Rao</Text>
      <Text style={[styles.fardinAhmed, styles.rajuRaoTypo]}>Fardin Ahmed</Text>
      <Text style={[styles.tanujOm, styles.tanujOmTypo]}>Tanuj Om</Text>
      <Text style={[styles.debojyotiPal, styles.tanujOmTypo]}>
        Debojyoti Pal
      </Text>
      <Text style={[styles.jishnuBaruah, styles.tanujOmTypo]}>
        Jishnu Baruah
      </Text>
      <Text style={[styles.sumantaGhosh, styles.tanujOmTypo]}>
        Sumanta Ghosh
      </Text>
      <Text style={[styles.ramuMahajan, styles.rajuRaoTypo]}>Ramu Mahajan</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("AgriConnect")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector5.png")}
        />
      </Pressable>
      <View style={[styles.statusBar, styles.timeDarkLayout]}>
        <Image
          style={[styles.notchIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/notch3.png")}
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
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontStyle: "italic",
  },
  chatChildLayout1: {
    height: 40,
    width: 40,
    left: 26,
    position: "absolute",
  },
  messageLayout: {
    height: 30,
    position: "absolute",
  },
  chatChildLayout: {
    height: 1,
    width: 334,
    borderTopWidth: 1,
    borderColor: "#151515",
    borderStyle: "solid",
    left: 13,
    position: "absolute",
  },
  rajuRaoTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.white,
    letterSpacing: 1,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  tanujOmTypo: {
    left: 82,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.white,
    letterSpacing: 1,
    fontSize: FontSize.size_xs,
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
  chatSectionChild: {
    top: 79,
    borderRadius: Border.br_5xs,
    backgroundColor: "#868585",
    width: 308,
    height: 23,
    left: 26,
    position: "absolute",
  },
  search: {
    top: 83,
    left: 58,
    width: 87,
    height: 19,
    color: Color.white,
    letterSpacing: 1,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontStyle: "italic",
    position: "absolute",
  },
  chatSectionItem: {
    top: 132,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 215,
    height: 37,
    width: 40,
    left: 26,
    position: "absolute",
  },
  chatSectionInner: {
    top: 295,
  },
  ellipseIcon: {
    top: 378,
  },
  chatSectionChild1: {
    top: 461,
  },
  chatSectionChild2: {
    top: 544,
  },
  chatSectionChild3: {
    top: 627,
  },
  message: {
    top: 41,
    left: 46,
    fontSize: FontSize.size_5xl,
    letterSpacing: 1.9,
    color: Color.greenyellow,
    width: 130,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontStyle: "italic",
    height: 30,
  },
  container: {
    left: 299,
    top: 37,
    width: 33,
    height: 32,
    position: "absolute",
  },
  lineView: {
    top: 189,
  },
  chatSectionChild4: {
    top: 275,
  },
  chatSectionChild5: {
    top: 356,
  },
  chatSectionChild6: {
    top: 440,
  },
  chatSectionChild7: {
    top: 518,
  },
  chatSectionChild8: {
    top: 608,
  },
  chatSectionChild9: {
    top: 692,
  },
  rajuRao: {
    top: 144,
    left: 83,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  fardinAhmed: {
    top: 226,
    left: 80,
  },
  tanujOm: {
    top: 308,
  },
  debojyotiPal: {
    top: 392,
  },
  jishnuBaruah: {
    top: 473,
  },
  sumantaGhosh: {
    top: 556,
  },
  ramuMahajan: {
    top: 638,
    left: 83,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  icon2: {
    maxHeight: "100%",
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "5.28%",
    top: "5.63%",
    right: "90.83%",
    bottom: "91.63%",
    width: "3.89%",
    height: "2.75%",
    position: "absolute",
  },
  notchIcon: {
    top: 0,
    right: 0,
    left: 0,
    display: "none",
    height: 30,
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
    left: 2,
    width: 356,
    height: 31,
    backgroundColor: Color.black,
    borderRadius: Border.br_xl,
  },
  groupIcon: {
    marginLeft: -180,
    bottom: 0,
    left: "50%",
    width: 360,
    height: 66,
    position: "absolute",
  },
  chatSection: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.black,
  },
});

export default ChatSection;
