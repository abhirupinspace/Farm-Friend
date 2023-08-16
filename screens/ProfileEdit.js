import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ProfileEdit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileEdit}>
      <Image
        style={styles.profileEditChild}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <View style={[styles.profileEditItem, styles.profileLayout]} />
      <View style={[styles.profileEditInner, styles.profileLayout]} />
      <View style={[styles.rectangleView, styles.profileLayout]} />
      <View style={[styles.profileEditChild1, styles.profileLayout]} />
      <Text style={[styles.username, styles.phoneTypo]}>Username</Text>
      <Text style={[styles.phoneNumber, styles.phoneTypo]}>Phone Number</Text>
      <Text style={[styles.emailId, styles.phoneTypo]}>Email I’d</Text>
      <Text style={[styles.phoneNumber1, styles.phoneTypo]}>Phone Number</Text>
      <Text style={[styles.password, styles.phoneTypo]}>Password</Text>
      <View style={[styles.profileEditChild2, styles.profileChildBg]} />
      <Text style={[styles.update, styles.updateClr]}>Update</Text>
      <Text style={[styles.usersName, styles.usersNameTypo]}>User’s Name</Text>
      <Text style={[styles.emailaddressgmailcom, styles.usersNameTypo]}>
        emailaddress@gmail.com
      </Text>
      <Text style={[styles.xxxxxxxxxx, styles.usersNameTypo]}>
        +91XXXXXXXXXX
      </Text>
      <Text style={styles.text}>*************</Text>
      <Image
        style={styles.ushareAltIcon}
        resizeMode="cover"
        source={require("../assets/usharealt.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/group-72.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-45.png")}
      />
      <Image
        style={styles.unsplashjmurdhtm7ngIcon}
        resizeMode="cover"
        source={require("../assets/unsplashjmurdhtm7ng.png")}
      />
      <View style={[styles.profileEditChild3, styles.profileChildBg]} />
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("Profile1")}
      >
        <Text style={styles.back1}>Back</Text>
      </Pressable>
      <Text style={[styles.editProfile, styles.updateClr]}>EDIT PROFILE</Text>
      <View style={[styles.statusBar, styles.timeDarkLayout]}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  profileLayout: {
    height: 40,
    width: 330,
    borderWidth: 1,
    borderColor: "#a9a9a9",
    borderStyle: "solid",
    backgroundColor: Color.silver,
    borderRadius: Border.br_5xs,
    left: 20,
    position: "absolute",
  },
  phoneTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  profileChildBg: {
    backgroundColor: Color.gray_200,
    position: "absolute",
  },
  updateClr: {
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  usersNameTypo: {
    height: 18,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    left: 32,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  timeDarkLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  profileEditChild: {
    top: 719,
    left: 42,
    width: 67,
    height: 67,
    position: "absolute",
  },
  profileEditItem: {
    top: 321,
  },
  profileEditInner: {
    top: 403,
  },
  rectangleView: {
    top: 485,
  },
  profileEditChild1: {
    top: 567,
  },
  username: {
    top: 298,
    width: 76,
    height: 21,
    left: 20,
    color: Color.black,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  phoneNumber: {
    top: 462,
    left: 36,
    display: "none",
  },
  emailId: {
    top: 380,
    width: 61,
    height: 21,
    left: 20,
    color: Color.black,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  phoneNumber1: {
    top: 459,
    width: 109,
    height: 21,
    left: 20,
    color: Color.black,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  password: {
    top: 544,
    width: 72,
    height: 21,
    left: 20,
    color: Color.black,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  profileEditChild2: {
    top: 661,
    borderRadius: Border.br_3xs,
    width: 290,
    left: 32,
    backgroundColor: Color.gray_200,
    height: 40,
  },
  update: {
    top: 670,
    left: 148,
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 59,
  },
  usersName: {
    top: 332,
    width: 78,
  },
  emailaddressgmailcom: {
    top: 413,
    width: 166,
  },
  xxxxxxxxxx: {
    top: 496,
    width: 99,
  },
  text: {
    top: 578,
    fontSize: FontSize.size_base,
    width: 106,
    height: 24,
    fontFamily: FontFamily.poppinsRegular,
    left: 32,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  ushareAltIcon: {
    top: 47,
    left: 350,
    width: 21,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    top: 728,
    width: 360,
    height: 79,
  },
  rectangleIcon: {
    top: 18,
    width: 390,
    height: 188,
  },
  unsplashjmurdhtm7ngIcon: {
    top: 99,
    left: 122,
    width: 122,
    height: 122,
    position: "absolute",
  },
  profileEditChild3: {
    top: 225,
    left: 130,
    borderRadius: Border.br_8xs,
    width: 105,
    height: 29,
  },
  back1: {
    fontSize: FontSize.size_xs,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  back: {
    left: 168,
    top: 231,
    position: "absolute",
  },
  editProfile: {
    top: 57,
    left: 128,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 130,
    height: 31,
  },
  notchIcon: {
    top: 0,
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
    marginLeft: -188,
    top: "50%",
    left: "50%",
    backgroundColor: Color.black,
    width: 376,
    height: 36,
  },
  profileEdit: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default ProfileEdit;
