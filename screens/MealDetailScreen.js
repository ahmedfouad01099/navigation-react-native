import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function MealDetail(props) {
  return (
    <View style={styles.screen}>
      <Text>The Meal Detaill Screen!</Text>
      <Button
        title="Go Back to Catigories"
        onPress={() => {
          props.navigation.popToTop();
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

export default MealDetail;
