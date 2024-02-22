import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#888",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBlockColor: "#57C4E5",
    borderBottomWidth: 2,
    padding: 6,
    margin: 4,
    marginHorizontal: 12,
    marginVertical: 8,
  },
});
