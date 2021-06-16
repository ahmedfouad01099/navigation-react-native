import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function FilterScreen() {
  return (
    <View style={styles.screen}>
      <Text>The Filter Screen!</Text>
    </View>
  );
}

export const FilterScreenOptions = (navData) => {
  return {
    headerTitle: "Your Fiters",
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

export default FilterScreen;
