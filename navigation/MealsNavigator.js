import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";

import CategoriesScreen, {
  CategoriesScreenOptions,
} from "../screens/CategoriesScreen";
import CategoryMealsScreen, {
  CategoryMealsScreenOptions,
} from "../screens/CategoryMealsScreen";
import MealDetailScreen, {
  MealDetailScreenOptions,
} from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Platform } from "react-native";

const Stack = createStackNavigator();
const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const MealsNavigatorScreens = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavigationOptions}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={CategoriesScreenOptions}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={CategoryMealsScreenOptions}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={MealDetailScreenOptions}
      />
    </Stack.Navigator>
  );
};
const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{ activeTintColor: Colors.accentColor }}
        activeColor={Colors.accentColor}
        shifting={true}
        tabBarColor={Colors.primaryColor}
        // inactiveColor={Colors.accentColor}
        // barStyle={{ margin: 20 }}
      >
        <Tab.Screen
          name="Meal Navigator"
          component={MealsNavigatorScreens}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="ios-restaurant"
                  size={25}
                  color={tabInfo.color}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="Favorites!"
          component={FavoritesScreen}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons name="ios-star" size={25} color={tabInfo.color} />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
