import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Feather, FontAwesome } from "@expo/vector-icons";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

export default function ShimmerOrphanageDetails() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagesContainer}>
        <ShimmerPlaceHolder
          style={styles.shimmerPlaceholderImage}
          visible={false}
        >
          <ScrollView horizontal pagingEnabled>
            <Image
              style={styles.image}
              source={{
                uri: "https://unsplash.it/1000/1000",
              }}
            />
          </ScrollView>
        </ShimmerPlaceHolder>
      </View>

      <View style={styles.detailsContainer}>
        <ShimmerPlaceHolder style={styles.title} visible={false}>
          <Text style={styles.title}></Text>
        </ShimmerPlaceHolder>

        <ShimmerPlaceHolder style={styles.description} visible={false}>
          <Text style={styles.description}></Text>
        </ShimmerPlaceHolder>

        <View style={styles.mapContainer}>
          <ShimmerPlaceHolder style={styles.mapStyle} visible={false}>
            <MapView
              initialRegion={{
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008,
              }}
              zoomEnabled={false}
              pitchEnabled={false}
              scrollEnabled={false}
              rotateEnabled={false}
              style={styles.mapStyle}
            ></MapView>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder style={styles.routesContainer}>
            <TouchableOpacity style={styles.routesContainer}>
              <ShimmerPlaceHolder style={styles.routesText}>
                <Text style={styles.routesText}></Text>
              </ShimmerPlaceHolder>
            </TouchableOpacity>
          </ShimmerPlaceHolder>
        </View>

        <View style={styles.separator} />

        <ShimmerPlaceHolder style={styles.title} visible={false}>
          <Text style={styles.title}>Instruções para a visita</Text>
        </ShimmerPlaceHolder>

        <ShimmerPlaceHolder style={styles.description} visible={false}>
          <Text style={styles.description}></Text>
        </ShimmerPlaceHolder>

        <View style={styles.scheduleContainer}>
          <View style={[styles.scheduleItem, styles.scheduleItemBlue]}>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <ShimmerPlaceHolder style={styles.scheduleText} visible={false}>
              <Text style={styles.scheduleText}>Segunda à Sexta</Text>
            </ShimmerPlaceHolder>
          </View>
          <View style={[styles.scheduleItem, styles.scheduleItemGreen]}>
            <Feather name="info" size={40} color="#39CC83" />
            <ShimmerPlaceHolder style={styles.scheduleText}>
              <Text style={[styles.scheduleText, styles.scheduleTextGreen]}>
                Atendemos fim de semana
              </Text>
            </ShimmerPlaceHolder>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagesContainer: {
    height: 240,
  },

  shimmerPlaceholderImage: {
    width: Dimensions.get("window").width,
    height: 240,
  },

  image: {
    width: Dimensions.get("window").width,
    height: 240,
    resizeMode: "cover",
  },

  detailsContainer: {
    padding: 24,
  },

  title: {
    color: "#4D6F80",
    fontSize: 30,
    fontFamily: "Nunito_700Bold",
    height: 36,
    width: Dimensions.get("window").width / 1.2,
  },

  description: {
    fontFamily: "Nunito_600SemiBold",
    color: "#5c8599",
    lineHeight: 24,
    marginTop: 16,
    height: 24,
    width: Dimensions.get("window").width / 1.2,
  },

  mapContainer: {
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1.2,
    borderColor: "#B3DAE2",
    marginTop: 40,
    backgroundColor: "#E6F7FB",
  },

  mapStyle: {
    width: "100%",
    height: 150,
  },

  routesContainer: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  routesText: {
    fontFamily: "Nunito_700Bold",
    color: "#0089a5",
  },

  separator: {
    height: 0.8,
    width: "100%",
    backgroundColor: "#D3E2E6",
    marginVertical: 40,
  },

  scheduleContainer: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  scheduleItem: {
    width: "48%",
    padding: 20,
  },

  scheduleItemBlue: {
    backgroundColor: "#E6F7FB",
    borderWidth: 1,
    borderColor: "#B3DAE2",
    borderRadius: 20,
  },

  scheduleItemGreen: {
    backgroundColor: "#EDFFF6",
    borderWidth: 1,
    borderColor: "#A1E9C5",
    borderRadius: 20,
  },

  scheduleItemRed: {
    backgroundColor: "#FEF6F9",
    borderWidth: 1,
    borderColor: "#ffbcd4",
    borderRadius: 20,
  },

  scheduleText: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
    width: "90%",
  },

  scheduleTextBlue: {
    color: "#5C8599",
  },

  scheduleTextGreen: {
    color: "#37C77F",
  },

  scheduleTextRed: {
    color: "#FF669D",
  },

  contactButton: {
    backgroundColor: "#3CDC8C",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    marginTop: 40,
  },

  contactButtonText: {
    fontFamily: "Nunito_800ExtraBold",
    color: "#FFF",
    fontSize: 16,
    marginLeft: 16,
  },

  shimmerPlaceHolder: {},
});
