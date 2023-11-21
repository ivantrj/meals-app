import { View, Text } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(item) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    }

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderCategoryItem(item)}
        numColumns={2}
      />
    </View>
  );
}
