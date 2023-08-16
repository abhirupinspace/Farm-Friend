import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontFamily, FontSize } from "../GlobalStyles";

const ToDoIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.toDoIcon}
      resizeMode="cover"
      source={require("../assets/todo.png")}
    >
      <View style={[styles.toDoChild, styles.toDoItemBg]} />
      <View style={[styles.toDoItem, styles.toDoItemBg]} />
      <Text style={styles.farmFriend}>FARM FRIEND</Text>
      <Text style={[styles.toDoList, styles.toDoListLayout]}>To-Do List</Text>
      <Pressable
        style={styles.weatherUpdates}
        onPress={() => navigation.navigate("WeatherUpdates")}
      >
        <Text style={[styles.weatherUpdates1, styles.toDoListLayout]}>
          Weather Updates
        </Text>
      </Pressable>
      <View style={styles.thingsToDoParent}>
        <View style={[styles.thingsToDo, styles.thingsPosition]}>
          <View style={styles.textWrapper}>
            <Text style={[styles.text, styles.textTypo1]}>Things to do</Text>
          </View>
          <View style={[styles.checkbox, styles.checkboxFlexBox]}>
            <Image
              style={styles.checkboxDefault}
              resizeMode="cover"
              source={require("../assets/checkbox--default.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>{`Water  the tomatoes 
by noon`}</Text>
          </View>
          <View style={[styles.checkbox, styles.checkboxFlexBox]}>
            <Image
              style={styles.checkboxDefault}
              resizeMode="cover"
              source={require("../assets/checkbox--default.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>
              Use fertilizers in Field 1
            </Text>
          </View>
          <View style={[styles.checkbox2, styles.checkboxFlexBox]}>
            <Image
              style={styles.checkboxDefault}
              resizeMode="cover"
              source={require("../assets/checkbox--default.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>
              Use pesticide in Field 4
            </Text>
          </View>
          <View style={[styles.checkbox, styles.checkboxFlexBox]}>
            <Image
              style={styles.checkboxDefault}
              resizeMode="cover"
              source={require("../assets/checkbox--default.png")}
            />
            <Text
              style={[styles.text1, styles.textTypo]}
            >{`Remove the rotten potatoes
from field 1`}</Text>
          </View>
        </View>
        <View style={[styles.thingsToDo1, styles.thingsPosition]}>
          <View style={styles.textWrapper}>
            <Text style={[styles.text5, styles.textTypo1]}>Things to do</Text>
          </View>
          <View style={[styles.checkbox, styles.checkboxFlexBox]}>
            <Image
              style={styles.checkboxDefault}
              resizeMode="cover"
              source={require("../assets/checkbox--default.png")}
            />
            <Text style={[styles.text6, styles.textTypo]}>{`Water  the tomatoes 
by noon`}</Text>
          </View>
          <View style={[styles.checkbox, styles.checkboxFlexBox]}>
            <Image
              style={styles.checkboxDefault}
              resizeMode="cover"
              source={require("../assets/checkbox--default.png")}
            />
            <Text style={[styles.text6, styles.textTypo]}>
              Use fertilizers in Field 1
            </Text>
          </View>
          <View style={[styles.checkbox2, styles.checkboxFlexBox]}>
            <Image
              style={styles.checkboxDefault}
              resizeMode="cover"
              source={require("../assets/checkbox--default.png")}
            />
            <Text style={[styles.text6, styles.textTypo]}>
              Use pesticide in Field 4
            </Text>
          </View>
          <View style={[styles.checkbox, styles.checkboxFlexBox]}>
            <Image
              style={styles.checkboxDefault}
              resizeMode="cover"
              source={require("../assets/checkbox--default.png")}
            />
            <Text
              style={[styles.text6, styles.textTypo]}
            >{`Remove the rotten potatoes
from field 1`}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.statusBar, styles.timeDarkLayout]}>
        <Image
          style={styles.notchIcon}
          resizeMode="cover"
          source={require("../assets/notch1.png")}
        />
        <View style={[styles.statusIcons, styles.checkboxFlexBox]}>
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
        style={[styles.toDoInner, styles.statusBarPosition]}
        resizeMode="cover"
        source={require("../assets/group-21.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  toDoItemBg: {
    backgroundColor: Color.gray_600,
    borderRadius: Border.br_51xl,
    position: "absolute",
  },
  toDoListLayout: {
    height: 68,
    width: 261,
    color: Color.palegoldenrod,
    textAlign: "left",
  },
  thingsPosition: {
    padding: Padding.p_5xl,
    borderRadius: Border.br_5xs,
    left: 0,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  checkboxFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    marginLeft: 12,
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
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
  toDoChild: {
    top: 99,
    left: -78,
    width: 378,
    height: 97,
  },
  toDoItem: {
    top: 201,
    left: -60,
    width: 300,
    height: 49,
  },
  farmFriend: {
    top: 49,
    left: 19,
    fontSize: FontSize.size_17xl,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    width: 281,
    height: 58,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  toDoList: {
    top: 123,
    left: 13,
    fontSize: FontSize.size_21xl,
    letterSpacing: 6.8,
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    position: "absolute",
  },
  weatherUpdates1: {
    fontSize: FontSize.size_xl,
    letterSpacing: 3.4,
    fontWeight: "100",
    fontFamily: FontFamily.interThin,
  },
  weatherUpdates: {
    left: 15,
    top: 212,
    position: "absolute",
  },
  text: {
    color: Color.black90,
  },
  textWrapper: {
    height: 40,
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  checkboxDefault: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  text1: {
    color: Color.black90,
  },
  checkbox: {
    padding: Padding.p_5xs,
  },
  checkbox2: {
    paddingLeft: Padding.p_13xl,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
  },
  thingsToDo: {
    backgroundColor: Color.white,
    top: 0,
    padding: Padding.p_5xl,
    borderRadius: Border.br_5xs,
  },
  text5: {
    color: Color.white,
  },
  text6: {
    color: Color.white,
  },
  thingsToDo1: {
    top: 286,
    backgroundColor: Color.black,
  },
  thingsToDoParent: {
    top: 290,
    left: 25,
    width: 309,
    height: 562,
    position: "absolute",
  },
  notchIcon: {
    right: 0,
    maxWidth: "100%",
    height: 30,
    display: "none",
    left: 0,
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
    marginTop: -474,
    marginLeft: -195,
    width: 376,
    height: 36,
    left: "50%",
    top: "50%",
    backgroundColor: Color.black,
  },
  toDoInner: {
    marginTop: 261,
    marginLeft: -180,
    width: 360,
    height: 65,
    position: "absolute",
  },
  toDoIcon: {
    borderRadius: Border.br_6xl,
    flex: 1,
    width: "100%",
    height: 948,
    overflow: "hidden",
  },
});

export default ToDoIcon;
