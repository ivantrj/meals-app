import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#57C4E5",
  },
  itemText: {
    // color: "white",
    textAlign: "center",
  },
});
