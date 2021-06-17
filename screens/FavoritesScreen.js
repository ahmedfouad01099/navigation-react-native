import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default function FavoritesScreen(props) {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text style={styles.favText}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
}

export const FavoritesScreenOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <TouchableOpacity>
        <Ionicons
          name="menu"
          style={{ marginLeft: 10, color: "#fff" }}
          size={24}
          color="black"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  favText: {
    fontSize: 18,
    fontFamily: "open-sans",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
