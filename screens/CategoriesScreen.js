import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function CategoriesScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button
        title="Go to Meals"
        onPress={() => {
          props.navigation.navigate("CategoryMeals");
          // props.navigation.replace("CategoryMeals"); // this doesn't make you go back so you can just use it with register screen or login screen
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
