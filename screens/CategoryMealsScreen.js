import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function CategoryMealScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <View style={styles.button}>
        <Button
          title="Go to Details"
          onPress={() => {
            props.navigation.navigate("MealDetail");
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go Back"
          onPress={() => {
            // the altrinative method is pop()
            props.navigation.goBack();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 5,
  },
});

export default CategoryMealScreen;
