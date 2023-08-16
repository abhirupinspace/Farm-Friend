import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile1}>
      <Image
        style={styles.profile1Child}
        resizeMode="cover"
        source={require("../assets/rectangle-45.png")}
      />
      <View style={[styles.profile1Item, styles.profile1Layout]} />
      <View style={[styles.profile1Inner, styles.profile1Layout]} />
      <Image
        style={styles.unsplashjmurdhtm7ngIcon}
        resizeMode="cover"
        source={require("../assets/unsplashjmurdhtm7ng.png")}
      />
      <Text style={[styles.popular, styles.todayFlexBox]}>Popular</Text>
      <Text style={[styles.favorites, styles.todayFlexBox]}>Favorites</Text>
      <Text style={[styles.mimiHeadline, styles.contentTypo]}>
        Mimi Headline
      </Text>
      <Text style={[styles.content, styles.contentTypo]}>Content</Text>
      <Text style={[styles.treading, styles.todayFlexBox]}>Treading</Text>
      <Text style={[styles.download, styles.downloadTypo]}>Download</Text>
      <Text style={[styles.favourite, styles.downloadTypo]}>Favourite</Text>
      <Text style={[styles.today, styles.todayFlexBox]}>Today</Text>
      <View style={[styles.rectangle36Copy5Parent, styles.groupParentLayout]}>
        <View style={[styles.rectangle36Copy5, styles.notchIconPosition]} />
        <Image
          style={[styles.rightIcon, styles.rightIconLayout]}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
      </View>
      <View style={[styles.rectangle36Copy5Group, styles.groupParentLayout]}>
        <View style={[styles.rectangle36Copy5, styles.notchIconPosition]} />
        <Image
          style={[styles.rightIcon1, styles.rightIconLayout]}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
      </View>
      <View
        style={[styles.rectangle36Copy5Container, styles.groupParentLayout]}
      >
        <View style={[styles.rectangle36Copy5, styles.notchIconPosition]} />
        <Image
          style={[styles.rightIcon2, styles.rightIconLayout]}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={[styles.rectangle36Copy5, styles.notchIconPosition]} />
        <Image
          style={[styles.rightIcon3, styles.rightIconLayout]}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
      </View>
      <View style={[styles.rectangle36Copy5Parent1, styles.groupParentLayout]}>
        <View style={[styles.rectangle36Copy5, styles.notchIconPosition]} />
        <Image
          style={[styles.rightIcon4, styles.rightIconLayout]}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
      </View>
      <View style={[styles.rectangle36Copy5Parent2, styles.groupParentLayout]}>
        <View style={[styles.rectangle36Copy5, styles.notchIconPosition]} />
        <Image
          style={[styles.rightIcon5, styles.rightIconLayout]}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
      </View>
      <View style={[styles.rectangle36Copy5Parent3, styles.groupParentLayout]}>
        <View style={[styles.rectangle36Copy5, styles.notchIconPosition]} />
        <Image
          style={[styles.rightIcon6, styles.rightIconLayout]}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
      </View>
      <View style={[styles.rectangle36Copy5Parent4, styles.groupParentLayout]}>
        <View style={[styles.rectangle36Copy5, styles.notchIconPosition]} />
        <Image
          style={[styles.rightIcon7, styles.rightIconLayout]}
          resizeMode="cover"
          source={require("../assets/right.png")}
        />
      </View>
      <Pressable
        style={[styles.rectanglePressable, styles.profile1Layout]}
        onPress={() => navigation.navigate("ProfileEdit")}
      />
      <Pressable
        style={styles.editProfile}
        onPress={() => navigation.navigate("ProfileEdit")}
      >
        <Text style={[styles.editProfile1, styles.profileClr]}>
          Edit Profile
        </Text>
      </Pressable>
      <Image
        style={styles.heartIcon}
        resizeMode="cover"
        source={require("../assets/heart.png")}
      />
      <Image
        style={styles.iconoutlinedapplicationdown}
        resizeMode="cover"
        source={require("../assets/iconoutlinedapplicationdownload.png")}
      />
      <Text style={[styles.profile, styles.profileClr]}>PROFILE</Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <View style={[styles.statusBar, styles.timeDarkLayout]}>
        <Image
          style={[styles.notchIcon, styles.notchIconPosition]}
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
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-721.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profile1Layout: {
    height: 29,
    position: "absolute",
  },
  todayFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  contentTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  downloadTypo: {
    left: 45,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupParentLayout: {
    opacity: 0.65,
    height: 14,
    width: 14,
    position: "absolute",
  },
  notchIconPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  rightIconLayout: {
    height: 10,
    width: 7,
    position: "absolute",
  },
  profileClr: {
    color: Color.white,
    textAlign: "left",
  },
  timeDarkLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  profile1Child: {
    top: 18,
    height: 188,
    width: 390,
    left: 0,
    position: "absolute",
  },
  profile1Item: {
    top: 291,
    backgroundColor: Color.whitesmoke,
    left: -15,
    height: 29,
    width: 390,
  },
  profile1Inner: {
    top: 427,
    backgroundColor: Color.whitesmoke,
    left: -15,
    height: 29,
    width: 390,
  },
  unsplashjmurdhtm7ngIcon: {
    top: 99,
    left: 118,
    width: 122,
    height: 122,
    position: "absolute",
  },
  popular: {
    top: 327,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    color: Color.black,
    position: "absolute",
    left: 11,
  },
  favorites: {
    top: 464,
    left: 60,
    display: "none",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    color: Color.black,
    position: "absolute",
  },
  mimiHeadline: {
    top: 296,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.black,
    left: 11,
  },
  content: {
    top: 432,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.black,
    left: 11,
  },
  treading: {
    top: 359,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    color: Color.black,
    position: "absolute",
    left: 11,
  },
  download: {
    top: 498,
  },
  favourite: {
    top: 465,
  },
  today: {
    top: 389,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    color: Color.black,
    position: "absolute",
    left: 11,
  },
  rectangle36Copy5: {
    height: 14,
    width: 14,
    top: 0,
  },
  rightIcon: {
    top: 340,
    left: 364,
    height: 10,
    width: 7,
  },
  rectangle36Copy5Parent: {
    top: 338,
    left: 360,
    opacity: 0.65,
  },
  rightIcon1: {
    top: 598,
    left: 364,
    height: 10,
    width: 7,
  },
  rectangle36Copy5Group: {
    top: 596,
    left: 360,
    opacity: 0.65,
  },
  rightIcon2: {
    top: 471,
    left: 364,
    height: 10,
    width: 7,
  },
  rectangle36Copy5Container: {
    top: 469,
    left: 360,
    opacity: 0.65,
  },
  rightIcon3: {
    top: 367,
    left: 364,
    height: 10,
    width: 7,
  },
  groupView: {
    top: 365,
    left: 360,
    opacity: 0.65,
  },
  rightIcon4: {
    top: 639,
    left: 364,
    height: 10,
    width: 7,
  },
  rectangle36Copy5Parent1: {
    top: 637,
    left: 360,
    opacity: 0.65,
  },
  rightIcon5: {
    top: 505,
    left: 364,
    height: 10,
    width: 7,
  },
  rectangle36Copy5Parent2: {
    top: 503,
    left: 360,
    opacity: 0.65,
  },
  rightIcon6: {
    top: 395,
    left: 364,
    height: 10,
    width: 7,
  },
  rectangle36Copy5Parent3: {
    top: 393,
    left: 360,
    opacity: 0.65,
  },
  rightIcon7: {
    top: 676,
    left: 363,
  },
  rectangle36Copy5Parent4: {
    top: 674,
    left: 359,
  },
  rectanglePressable: {
    top: 225,
    left: 126,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gray_200,
    width: 105,
  },
  editProfile1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  editProfile: {
    left: 147,
    top: 230,
    position: "absolute",
  },
  heartIcon: {
    top: 468,
    width: 19,
    height: 19,
    left: 11,
    position: "absolute",
    overflow: "hidden",
  },
  iconoutlinedapplicationdown: {
    top: 497,
    left: 10,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  profile: {
    top: 59,
    left: 144,
    fontSize: FontSize.size_xl,
    width: 81,
    height: 31,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  ellipseIcon: {
    top: 719,
    left: 42,
    width: 67,
    height: 67,
    position: "absolute",
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
    marginTop: -407,
    marginLeft: -192,
    top: "50%",
    left: "50%",
    backgroundColor: Color.black,
    width: 376,
    height: 36,
  },
  groupIcon: {
    top: 728,
    width: 361,
    height: 79,
    left: 0,
    position: "absolute",
  },
  profile1: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Profile1;
