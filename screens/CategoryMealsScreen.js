import React from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";

function CategoryMealScreen(props) {
  const catId = props.route.params.categoryId;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
}

export const CategoryMealsScreenOptions = (navigationData) => {
  const catId = navigationData.route.params.categoryId;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealScreen;
