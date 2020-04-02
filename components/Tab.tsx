import React from "react";
import { View, StyleSheet } from "react-native";

const defaultColor = "#fafafa";
const highlightedColor = "#d2f8d2";
const focusedColor = "#ffffa3";

const cards = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 }
];

const Tab: React.FC<{ numberOfHighlightedCells: number }> = ({ numberOfHighlightedCells }) => {
  const focused = numberOfHighlightedCells + 1;
  return (
    <View style={styles.cardsContainer}>
      {cards.map(card => {
        const bgColor = focused === card.id ? focusedColor : numberOfHighlightedCells >= card.id ? highlightedColor : defaultColor;
        return (
          <View style={{ ...styles.card, backgroundColor: bgColor }} key={`${card.id}-card`} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderColor: "#A0A0A0",
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  card: {
    height: 204,
    width: "33.333%",
    borderWidth: 1,
    borderColor: "#A0A0A0"
  }
});

export default Tab;
