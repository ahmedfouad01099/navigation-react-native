import React, { useCallback, useEffect, useState } from "react";
import {
  Switch,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { LogBox } from "react-native";
import { setFilter } from "../sotre/ducks/meals";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        value={props.isGlutenFree}
        onValueChange={props.onChange}
        trackColor={{ true: Colors.primaryColor, false: "#ccc" }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
      />
    </View>
  );
};

function FilterScreen(props) {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactose, setIsLactose] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegitarian, setIsVegitarian] = useState(false);

  const dispatch = useDispatch();
  const { navigation } = props;

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactose,
      vegan: isVegan,
      vegitarian: isVegitarian,
    };
    console.log(appliedFilters);
    dispatch(setFilter(appliedFilters));
  }, [isGlutenFree, isLactose, isVegan, isVegitarian, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        onChange={(newValue) => setIsGlutenFree(newValue)}
        isGlutenFree={isGlutenFree}
      />

      <FilterSwitch
        label="Lactose-free"
        onChange={(newValue) => setIsLactose(newValue)}
        isGlutenFree={isLactose}
      />

      <FilterSwitch
        label="Vegan"
        onChange={(newValue) => setIsVegan(newValue)}
        isGlutenFree={isVegan}
      />

      <FilterSwitch
        label="Vegitarian"
        onChange={(newValue) => setIsVegitarian(newValue)}
        isGlutenFree={isVegitarian}
      />
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
    headerRight: () => (
      <TouchableOpacity>
        <Ionicons
          style={{ color: "#fff", marginRight: 10 }}
          name="ios-save"
          size={24}
          color="black"
          onPress={() => navData.route.params.save()}
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
});

export default FilterScreen;
