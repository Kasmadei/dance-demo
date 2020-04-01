import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const defaultColor = "#fafafa";
const highlightedColor = "#d2f8d2";
const focusedColor = "#ffffa3";

const Tab: React.FC<{ numberOfHighlightedCells: number }> = ({ numberOfHighlightedCells }) => {
  const focused = numberOfHighlightedCells + 1;

  return (
    <View style={styles.tabContainer}>  
      <View style={styles.tabRow}>
        <View style={{ ...styles.tabCell, backgroundColor: focused === 1 ? focusedColor : numberOfHighlightedCells >= 1 ? highlightedColor : defaultColor }}></View>
        <View style={{ ...styles.tabCell, backgroundColor: focused === 2 ? focusedColor : numberOfHighlightedCells >= 2 ? highlightedColor : defaultColor }}></View>
        <View style={{ ...styles.tabCell, backgroundColor: focused === 3 ? focusedColor : numberOfHighlightedCells >= 3 ? highlightedColor : defaultColor }}></View>
      </View>
      <View style={styles.tabRow}>
      <View style={{ ...styles.tabCell, backgroundColor: focused === 4 ? focusedColor : numberOfHighlightedCells >= 4 ? highlightedColor : defaultColor }}></View>
      <View style={{ ...styles.tabCell, backgroundColor: focused === 5 ? focusedColor : numberOfHighlightedCells >= 5 ? highlightedColor : defaultColor }}></View>
      <View style={{ ...styles.tabCell, backgroundColor: focused === 6 ? focusedColor : numberOfHighlightedCells >= 6 ? highlightedColor : defaultColor }}></View>
      </View>
      <View style={styles.tabRow}>
      <View style={{ ...styles.tabCell, backgroundColor: focused === 7 ? focusedColor : numberOfHighlightedCells >= 7 ? highlightedColor : defaultColor }}></View>
      <View style={{ ...styles.tabCell, backgroundColor: focused === 8 ? focusedColor : numberOfHighlightedCells >= 8 ? highlightedColor : defaultColor }}></View>
      <View style={{ ...styles.tabCell, backgroundColor: focused === 9 ? focusedColor : numberOfHighlightedCells >= 9 ? highlightedColor : defaultColor }}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: 22,
   
  },
  tabRow: {
    flex: 1,
    height: 160,
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#e0e0e0",
    flexDirection: "row",
    borderRightWidth: 1,
    borderRightColor: "#e0e0e0",
    
  },
  tabCell: {
    borderLeftWidth: 1,
    borderLeftColor: "#e0e0e0",
    height: "100%",
    flex: 1,
  }
});

export default Tab;
