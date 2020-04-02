import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { BarCodeScanner } from "expo-barcode-scanner";

const QrReader: React.FC<{ setHasPermission: (p: boolean) => void; onScan: (type: string, data: string) => void; }> = ({ setHasPermission, onScan }) => {
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    onScan(type, data)
  };

  return (
    <View style={globalStyles.container}>
      <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={styles.barCodeScannerContainer} />
      <View style={styles.buttonContainer}>
        {scanned && (
          <TouchableOpacity onPress={() => setScanned(false)} style={globalStyles.button}>
            <Text style={styles.buttonText}>Tap to scan again</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => { setScanned(false); setHasPermission(false); }} style={globalStyles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  buttonText: {
    fontSize: 24,
    color: "#c7c7c7",
    marginLeft: 12,
    marginRight: 12
  }
});

export default QrReader;
