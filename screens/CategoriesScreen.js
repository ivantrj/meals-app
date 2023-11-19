import { View, Text } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(item) {
  return <CategoryGridTile title={item.title} color={item.color} />;
}

export default function CategoriesScreen() {
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
