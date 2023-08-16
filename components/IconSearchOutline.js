import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const IconSearchOutline = () => {
  return (
    <View style={styles.iconSearchOutline}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon: {
    height: "100%",
    width: "100%",
    top: "16017.65%",
    right: "-13858.82%",
    bottom: "-16017.65%",
    left: "13858.82%",
    opacity: 0,
  },
  vectorIcon1: {
    height: "75.02%",
    width: "75.02%",
    top: "12.5%",
    right: "12.48%",
    bottom: "12.48%",
    left: "12.5%",
  },
  iconSearchOutline: {
    width: 17,
    height: 17,
  },
});

export default IconSearchOutline;
