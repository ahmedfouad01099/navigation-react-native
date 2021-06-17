import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";

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
import FavoritesScreen, {
  FavoritesScreenOptions,
} from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Platform } from "react-native";
import FilterScreen, { FilterScreenOptions } from "../screens/FiltersScreen";

const Stack = createStackNavigator();
const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const Drawer = createDrawerNavigator();
const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTintStyle: "open-sans",
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

const FavNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavigationOptions}>
      <Stack.Screen
        name="favorites"
        options={FavoritesScreenOptions}
        component={FavoritesScreen}
      />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};
const MealsNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ activeTintColor: Colors.accentColor }}
      activeColor={Colors.accentColor}
      shifting={true}
      tabBarColor={Colors.primaryColor}
    >
      <Tab.Screen
        name="Meal Navigator"
        component={MealsNavigatorScreens}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Favorites!"
        component={FavNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const FilterNavigatorStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavigationOptions}>
      <Stack.Screen
        name="filters"
        options={FilterScreenOptions}
        component={FilterScreen}
      />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: Colors.accentColor,
          labelStyle: {
            // fontFamily: "open-sans-bold ",
          },
        }}
      >
        <Drawer.Screen name="Meals" component={MealsNavigator} />
        <Drawer.Screen name="filters" component={FilterNavigatorStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
