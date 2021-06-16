import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { Ionicons } from "@expo/vector-icons";

function FavoritesScreen(props) {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");

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
});

export default FavoritesScreen;
