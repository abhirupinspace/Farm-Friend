import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const AgriConnect = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.agriconnect}>
      <Image
        style={[styles.agriconnectChild, styles.agriconnectChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.agriconnectItem, styles.agriconnectChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Image
        style={[styles.agriconnectInner, styles.agriconnectChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-13.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.agriconnectChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Image
        style={[styles.agriconnectChild1, styles.agriconnectChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Image
        style={[styles.agriconnectChild2, styles.agriconnectChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.frameIcon, styles.agriconnectChildPosition]}
        resizeMode="cover"
        source={require("../assets/frame-2.png")}
      />
      <Text style={styles.agriConnect}>AGRI CONNECT</Text>
      <Image
        style={[styles.iconThumbsUp, styles.iconLayout3]}
        resizeMode="cover"
        source={require("../assets/-icon-thumbsup.png")}
      />
      <Image
        style={[styles.iconThumbsUp1, styles.iconPosition3]}
        resizeMode="cover"
        source={require("../assets/-icon-thumbsup.png")}
      />
      <Image
        style={[styles.iconThumbsUp2, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/-icon-thumbsup.png")}
      />
      <Image
        style={[styles.iconThumbsUp3, styles.iconPosition2]}
        resizeMode="cover"
        source={require("../assets/-icon-thumbsup.png")}
      />
      <Image
        style={[styles.iconThumbsUp4, styles.iconPosition1]}
        resizeMode="cover"
        source={require("../assets/-icon-thumbsup.png")}
      />
      <Image
        style={[styles.iconThumbsUp5, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/-icon-thumbsup.png")}
      />
      <Image
        style={[styles.iconComment, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/-icon-comment.png")}
      />
      <Image
        style={[styles.iconComment1, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/-icon-comment.png")}
      />
      <Image
        style={[styles.iconComment2, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/-icon-comment.png")}
      />
      <Image
        style={[styles.iconComment3, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/-icon-comment.png")}
      />
      <Image
        style={[styles.iconComment4, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/-icon-comment.png")}
      />
      <Image
        style={[styles.iconComment5, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/-icon-comment.png")}
      />
      <Image
        style={[styles.iconShareBoxed, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-share-boxed.png")}
      />
      <Image
        style={styles.iconShareBoxed1}
        resizeMode="cover"
        source={require("../assets/-icon-share-boxed.png")}
      />
      <Image
        style={[styles.iconShareBoxed2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-share-boxed.png")}
      />
      <Image
        style={[styles.iconShareBoxed3, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-share-boxed.png")}
      />
      <Image
        style={[styles.iconShareBoxed4, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-share-boxed.png")}
      />
      <Image
        style={[styles.iconShareBoxed5, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-share-boxed.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("ChatSection1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/vector6.png")}
        />
      </Pressable>
      <Text style={[styles.rishavKhanna, styles.devikaPatelTypo]}>
        Rishav Khanna
      </Text>
      <Text style={[styles.devikaPatel, styles.devikaPatelTypo]}>
        Devika Patel
      </Text>
      <Text style={[styles.laldeepSingh, styles.devikaPatelTypo]}>
        Laldeep Singh
      </Text>
      <Text style={[styles.lokkhonPramanik, styles.devikaPatelTypo]}>
        Lokkhon Pramanik
      </Text>
      <Text style={[styles.tinuRani, styles.tinuRaniTypo]}>Tinu Rani</Text>
      <Text style={[styles.vishwasAhuja, styles.tinuRaniTypo]}>
        Vishwas Ahuja
      </Text>
      <Text style={[styles.text, styles.textTypo2]}>6</Text>
      <Text style={[styles.text1, styles.textTypo2]}>11</Text>
      <Text style={[styles.text2, styles.textTypo1]}>1</Text>
      <Text style={[styles.text3, styles.textTypo1]}>10</Text>
      <Text style={[styles.text4, styles.textTypo2]}>4</Text>
      <Text style={[styles.text5, styles.textTypo]}>3</Text>
      <Text style={[styles.text6, styles.textTypo]}>2</Text>
      <Text style={[styles.text7, styles.textTypo]}>3</Text>
      <Text style={[styles.text8, styles.textTypo2]}>1</Text>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-5.png")}
      />
      <View style={[styles.statusBar, styles.timeDarkLayout]}>
        <Image
          style={styles.notchIcon}
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
    </View>
  );
};

const styles = StyleSheet.create({
  agriconnectChildLayout: {
    height: 127,
    borderRadius: Border.br_mini,
  },
  agriconnectChildPosition: {
    left: 23,
    width: 305,
    position: "absolute",
  },
  iconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition3: {
    bottom: "62.81%",
    top: "35.86%",
  },
  iconLayout2: {
    bottom: "48.67%",
    top: "50%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.36%",
    height: "1.33%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition2: {
    bottom: "34.53%",
    top: "64.14%",
  },
  iconPosition1: {
    bottom: "20.05%",
    top: "78.62%",
  },
  iconPosition: {
    bottom: "5.57%",
    top: "93.1%",
  },
  iconLayout1: {
    left: "18.89%",
    right: "75.76%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.36%",
    height: "1.33%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    left: "28.33%",
    right: "66.31%",
    height: "1.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.36%",
    position: "absolute",
    overflow: "hidden",
  },
  devikaPatelTypo: {
    color: Color.white,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  tinuRaniTypo: {
    left: 33,
    color: Color.white,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.greenyellow,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  textTypo1: {
    left: 39,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.greenyellow,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  textTypo: {
    left: 74,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.greenyellow,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    position: "absolute",
  },
  timeDarkLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  agriconnectChild: {
    top: 593,
    left: 27,
    width: 305,
    height: 127,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  agriconnectItem: {
    top: 798,
    left: 28,
    width: 305,
    height: 127,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  agriconnectInner: {
    top: 1008,
    left: 28,
    width: 305,
    height: 127,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  rectangleIcon: {
    top: 1218,
    left: 28,
    width: 305,
    height: 127,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  agriconnectChild1: {
    top: 188,
    height: 127,
    borderRadius: Border.br_mini,
    left: 23,
  },
  agriconnectChild2: {
    top: 388,
    height: 127,
    borderRadius: Border.br_mini,
    left: 23,
  },
  frameIcon: {
    top: 95,
    height: 53,
  },
  agriConnect: {
    top: 43,
    fontSize: FontSize.size_xl,
    letterSpacing: 1.6,
    fontStyle: "italic",
    width: 171,
    height: 25,
    textAlign: "left",
    color: Color.greenyellow,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 28,
    position: "absolute",
  },
  iconThumbsUp: {
    left: "9.44%",
    right: "85.2%",
    width: "5.36%",
    height: "1.33%",
    maxHeight: "100%",
    position: "absolute",
    bottom: "76.6%",
    top: "22.07%",
  },
  iconThumbsUp1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "9.44%",
    right: "85.2%",
    width: "5.36%",
    height: "1.33%",
    position: "absolute",
  },
  iconThumbsUp2: {
    right: "85.48%",
    left: "9.17%",
  },
  iconThumbsUp3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "9.44%",
    right: "85.2%",
    width: "5.36%",
    height: "1.33%",
    position: "absolute",
  },
  iconThumbsUp4: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "9.44%",
    right: "85.2%",
    width: "5.36%",
    height: "1.33%",
    position: "absolute",
  },
  iconThumbsUp5: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "9.44%",
    right: "85.2%",
    width: "5.36%",
    height: "1.33%",
    position: "absolute",
  },
  iconComment: {
    bottom: "76.6%",
    top: "22.07%",
  },
  iconComment1: {
    bottom: "62.81%",
    top: "35.86%",
  },
  iconComment2: {
    right: "76.03%",
    left: "18.61%",
  },
  iconComment3: {
    bottom: "34.53%",
    top: "64.14%",
  },
  iconComment4: {
    bottom: "20.05%",
    top: "78.62%",
  },
  iconComment5: {
    bottom: "5.57%",
    top: "93.1%",
  },
  iconShareBoxed: {
    top: "36%",
    bottom: "62.84%",
  },
  iconShareBoxed1: {
    top: "50.14%",
    right: "66.59%",
    bottom: "48.7%",
    left: "28.06%",
    height: "1.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.36%",
    position: "absolute",
    overflow: "hidden",
  },
  iconShareBoxed2: {
    top: "64.28%",
    bottom: "34.56%",
  },
  iconShareBoxed3: {
    top: "78.76%",
    bottom: "20.08%",
  },
  iconShareBoxed4: {
    top: "93.24%",
    bottom: "5.6%",
  },
  iconShareBoxed5: {
    top: "22.21%",
    bottom: "76.63%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "82.78%",
    top: "2.9%",
    right: "10%",
    bottom: "95.31%",
    width: "7.22%",
    height: "1.79%",
    position: "absolute",
  },
  rishavKhanna: {
    top: 165,
    left: 28,
  },
  devikaPatel: {
    top: 363,
    left: 32,
  },
  laldeepSingh: {
    top: 568,
    left: 28,
  },
  lokkhonPramanik: {
    top: 773,
    left: 28,
  },
  tinuRani: {
    top: 983,
  },
  vishwasAhuja: {
    top: 1195,
  },
  text: {
    left: 42,
    fontSize: FontSize.size_2xs,
    top: 339,
  },
  text1: {
    top: 539,
    left: 42,
    fontSize: FontSize.size_2xs,
  },
  text2: {
    top: 749,
  },
  text3: {
    top: 951,
  },
  text4: {
    left: 41,
    top: 1161,
  },
  text5: {
    top: 1161,
  },
  text6: {
    top: 951,
  },
  text7: {
    top: 539,
  },
  text8: {
    left: 76,
    top: 339,
  },
  groupIcon: {
    marginLeft: -180,
    bottom: 0,
    left: "50%",
    width: 360,
    height: 65,
    position: "absolute",
  },
  notchIcon: {
    top: 0,
    right: 0,
    height: 30,
    display: "none",
    left: 0,
    maxWidth: "100%",
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
    left: 21,
    width: 54,
    height: 21,
    overflow: "hidden",
  },
  statusBar: {
    top: -7,
    width: 356,
    height: 31,
    left: 0,
    backgroundColor: Color.black,
  },
  agriconnect: {
    flex: 1,
    height: 1450,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.black,
  },
});

export default AgriConnect;
