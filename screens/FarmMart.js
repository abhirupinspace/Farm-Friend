import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const FarmMart = () => {
  return (
    <View style={styles.farmMart}>
      <View style={styles.farmMartChild} />
      <Text style={styles.searchProducts}>Search Products</Text>
      <Text style={styles.farmMart1}>Farm Mart</Text>
      <View style={styles.farmMartItem} />
      <Text style={styles.deliverToUser}>Deliver to User - Location</Text>
      <Text style={[styles.productCategory, styles.superDealsTypo]}>
        Product Category
      </Text>
      <Text style={[styles.superDeals, styles.superDealsTypo]}>
        Super Deals!
      </Text>
      <View style={[styles.farmMartInner, styles.tractorLayout]}>
        <View style={[styles.frameParent, styles.tractorLayout]}>
          <View style={[styles.tractorWrapper, styles.tractorLayout]}>
            <View style={[styles.tractor, styles.tractorLayout]}>
              <Image
                style={[styles.tractorChild, styles.tractorLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-58.png")}
              />
              <Text style={[styles.tractors, styles.tractorsTypo]}>
                TRACTORS
              </Text>
              <Text style={[styles.upto22Off, styles.offTypo]}>
                UPTO 22% OFF!
              </Text>
            </View>
          </View>
          <View style={[styles.kit, styles.tractorLayout]}>
            <Image
              style={[styles.tractorChild, styles.tractorLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-581.png")}
            />
            <Text style={[styles.essentialKits, styles.tractorsTypo]}>
              ESSENTIALKITS
            </Text>
            <Text style={[styles.upto35Off, styles.offTypo]}>
              UPTO 35% OFF!
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-59.png")}
        />
        <Text style={[styles.seeds, styles.seedsTypo]}>Seeds</Text>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-60.png")}
        />
        <Text style={[styles.fertilizers, styles.seedsTypo]}>Fertilizers</Text>
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-61.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-62.png")}
        />
        <Text style={[styles.cropProtection, styles.seedsTypo]}>
          Crop Protection
        </Text>
        <Text style={[styles.farmingTools, styles.seedsTypo]}>
          Farming Tools
        </Text>
      </View>
      <Text style={[styles.comboOffers, styles.superDealsTypo]}>
        Combo Offers
      </Text>
      <View style={[styles.groupView, styles.groupFrameLayout]}>
        <View style={[styles.groupWrapper, styles.groupFrameLayout]}>
          <View style={[styles.frameGroup, styles.groupFrameLayout]}>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <Image
                style={[styles.frameChild1, styles.groupFrameLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-63.png")}
              />
              <Text style={[styles.books, styles.booksTypo]}>BOOKS</Text>
            </View>
            <View style={[styles.toolsParent, styles.groupFrameLayout]}>
              <Text style={[styles.tools, styles.booksTypo]}>TOOLS</Text>
              <Image
                style={styles.groupLayout}
                resizeMode="cover"
                source={require("../assets/rectangle-64.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.barIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/bar.png")}
      />
      <Image
        style={[styles.iconShoppingCartAdd, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-shopping-cart-add.png")}
      />
      <Image
        style={[styles.iconSearch, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-search.png")}
      />
      <Image
        style={[styles.iconLocation, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-location.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  superDealsTypo: {
    height: 25,
    width: 179,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    color: Color.chartreuse,
    textAlign: "left",
    position: "absolute",
  },
  tractorLayout: {
    height: 159,
    position: "absolute",
  },
  tractorsTypo: {
    height: 66,
    width: 277,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontSize: FontSize.size_29xl,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  offTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.red,
    fontSize: FontSize.size_xl,
    height: 25,
    width: 179,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    width: 150,
    borderRadius: Border.br_xl,
    height: 147,
    top: 0,
    position: "absolute",
  },
  seedsTypo: {
    height: 27,
    width: 170,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    fontSize: FontSize.size_base,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  groupFrameLayout: {
    height: 156,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_6xl,
    height: 156,
    top: 0,
    left: 0,
    width: 316,
    position: "absolute",
  },
  booksTypo: {
    height: 49,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.interBlack,
    fontWeight: "900",
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  farmMartChild: {
    top: 70,
    borderRadius: 9,
    backgroundColor: "#d9d9d9",
    height: 35,
    width: 316,
    left: 22,
    position: "absolute",
  },
  searchProducts: {
    top: 79,
    left: 63,
    fontSize: FontSize.size_xs,
    color: Color.black,
    height: 19,
    width: 140,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  farmMart1: {
    top: 27,
    left: 30,
    fontSize: FontSize.size_5xl,
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 173,
    height: 34,
    color: Color.chartreuse,
    textAlign: "left",
    position: "absolute",
  },
  farmMartItem: {
    top: 107,
    width: 360,
    height: 33,
    left: 0,
    position: "absolute",
    backgroundColor: Color.black,
  },
  deliverToUser: {
    left: 40,
    fontSize: FontSize.size_3xs,
    height: 15,
    color: Color.white,
    top: 116,
    width: 140,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  productCategory: {
    top: 346,
    left: 22,
  },
  superDeals: {
    top: 147,
    left: 27,
  },
  tractorChild: {
    borderRadius: Border.br_3xs,
    width: 297,
    top: 0,
    left: 0,
  },
  tractors: {
    top: 24,
    left: 10,
  },
  upto22Off: {
    left: 135,
    top: 116,
  },
  tractor: {
    top: 0,
    width: 314,
    height: 159,
    left: 0,
  },
  tractorWrapper: {
    width: 611,
    top: 0,
    left: 0,
  },
  essentialKits: {
    top: 22,
    left: 8,
  },
  upto35Off: {
    left: 133,
    top: 117,
  },
  kit: {
    left: 314,
    width: 312,
    top: 0,
  },
  frameParent: {
    width: 626,
    top: 0,
    left: 0,
  },
  farmMartInner: {
    top: 172,
    width: 314,
    height: 159,
    left: 24,
  },
  frameChild: {
    left: 0,
  },
  seeds: {
    left: 43,
    top: 117,
  },
  frameItem: {
    left: 170,
  },
  fertilizers: {
    left: 201,
    top: 116,
  },
  frameInner: {
    left: 341,
  },
  rectangleIcon: {
    left: 511,
  },
  cropProtection: {
    left: 349,
    top: 117,
  },
  farmingTools: {
    left: 528,
    top: 116,
  },
  rectangleParent: {
    top: 378,
    width: 320,
    height: 147,
    left: 22,
    position: "absolute",
  },
  comboOffers: {
    top: 540,
    left: 24,
  },
  frameChild1: {
    top: 0,
    left: 0,
    width: 316,
  },
  books: {
    top: 53,
    left: 85,
    width: 174,
  },
  rectangleGroup: {
    overflow: "hidden",
  },
  tools: {
    top: 48,
    left: 89,
    width: 148,
  },
  toolsParent: {
    left: 329,
    top: 0,
    width: 316,
  },
  frameGroup: {
    width: 645,
    top: 0,
    left: 0,
  },
  groupWrapper: {
    width: 324,
    height: 156,
    top: 0,
    left: 0,
  },
  groupView: {
    top: 572,
    width: 324,
    height: 156,
    left: 22,
  },
  barIcon: {
    height: "8.13%",
    top: "91.88%",
    right: "-0.83%",
    bottom: "0%",
    left: "0.83%",
    width: "100%",
  },
  iconShoppingCartAdd: {
    height: "3%",
    width: "6.94%",
    top: "3.38%",
    right: "7.78%",
    bottom: "93.62%",
    left: "85.28%",
  },
  iconSearch: {
    height: "1.69%",
    width: "3.77%",
    top: "10%",
    right: "87.07%",
    bottom: "88.31%",
    left: "9.17%",
  },
  iconLocation: {
    height: "1.85%",
    width: "3.29%",
    top: "14.38%",
    right: "90.04%",
    bottom: "83.77%",
    left: "6.67%",
  },
  farmMart: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.black,
  },
});

export default FarmMart;
