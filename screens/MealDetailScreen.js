import React, { useCallback, useEffect } from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import HeaderButton from "../components/HeaderButton";
import { MEALS } from "../data/dummy-data";
import { toggleFavorite } from "../sotre/ducks/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.mealFont}>{props.children}</Text>
    </View>
  );
};

function MealDetail(props) {
  const mealId = props.route.params.mealId;

  const availableMeals = useSelector((state) => state.meals.meals);

  const currentMealsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    // props.navigation.setParams({ mealTitle: selectedMeal.title });
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  // useEffect(() => {
  //   props.navigation.setParams({ isFav: currentMealsFavorite });
  // }, [currentMealsFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => {
        return <ListItem key={ingredient}>{ingredient}</ListItem>;
      })}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => {
        return <ListItem key={step}>{step}</ListItem>;
      })}
    </ScrollView>
  );
}

export const MealDetailScreenOptions = (navigationData) => {
  // const mealId = navigationData.route.params.mealId;

  // const mealTitle = navigationData.navigation.params.mealTitle;
  const mealTitle = navigationData.route.params.mealTitle;

  const toggleFavorite = navigationData.route.params.toggleFav;

  const isFavorite = navigationData.route.params.isFav;
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star-outline" : "ios-star"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 22,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  mealFont: {
    fontSize: 18,
    fontFamily: "open-sans",
  },
});

export default MealDetail;
