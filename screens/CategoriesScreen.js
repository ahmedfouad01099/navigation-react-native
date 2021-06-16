import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGirdTile from "../components/CategoryGritTile";

function CategoriesScreen(props) {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGirdTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            name: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    // <View style={styles.screen}>
    //   <Text>The Categories Screen!</Text>
    //   <Button
    //     title="Go to Meals"
    //     onPress={() => {
    //       props.navigation.navigate("CategoryMeals");
    //       // props.navigation.replace("CategoryMeals"); // this doesn't make you go back so you can just use it with register screen or login screen
    //     }}
    //   />
    // </View>

    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item, index) => item.id}
      renderItem={renderGridItem}
    />
  );
}

export const CategoriesScreenOptions = (navData) => {
  return {
    headerTitle: "Meal Categories",
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

export default CategoriesScreen;
