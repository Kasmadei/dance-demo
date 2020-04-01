import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Tab from "./components/Tab";
import { checkIfQCodeIsValid } from "./mock/validQrCodes";

let approved = [];

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const onScan = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const isValid = checkIfQCodeIsValid(data);
    if (isValid && !approved.includes(data)) {
      approved.push(data);
      Alert.alert("Yeah!", "Accepted");
    } else if (isValid) {
      Alert.alert("Oops!", "This QR-code already was accepted.");
    } else {
      Alert.alert("", "Wrong QR-code");
    }
  };

  if (hasPermission !== true) {
    return (
      <View style={styles.container}>
        <Tab numberOfHighlightedCells={approved.length} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => onScan()} style={styles.button}>
            <Text style={styles.buttonText}>Scan</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={styles.barCodeScannerContainer} />
      <View style={styles.buttonContainer}>
        {scanned && (
          <TouchableOpacity onPress={() => setScanned(false)} style={styles.button}>
            <Text style={styles.buttonText}>Tap to scan again</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => { setScanned(false); setHasPermission(false); }} style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  barCodeScannerContainer: {
    height: "81%", 
    width: "100%", 
    paddingTop: 28
  },
  buttonContainer: {
    height: 134,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffa3",
    height: 40,
    borderRadius: 6,
    marginBottom: 12
  },
  buttonText: {
    fontSize: 24,
    color: "#c7c7c7",
    marginLeft: 12,
    marginRight: 12
  }
});
