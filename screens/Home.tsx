import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { globalStyles } from "../styles/global";
import Tab from "../components/Tab";
import { BarCodeScanner } from "expo-barcode-scanner";
import QrReader from "./QrReader";
import { setQrCode } from "../services/actions";
import { checkIfQrCodeIsValid } from "../api/MockDb";
import { SafeAreaView } from 'react-native';


const Home: React.FC<{}> = ({}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const dispatch = useDispatch();
  const acceptedQrCodes = useSelector(state => state.acceptedQrCodes);

  const onGetPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };

  const onScan = async (type: string, data: string) => {
    if (acceptedQrCodes.hasOwnProperty(`${data}`)) {
      Alert.alert("Oops!", "This qr-code already was used");
      return;
    } else if (checkIfQrCodeIsValid(data)) {
      Alert.alert("Success!", "Accepted");
      await dispatch(setQrCode({ [data]: type }));
      return;
    } else {
      Alert.alert("Oops", "Wrong qr-code");
    }
  };

  if (hasPermission !== true) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <Tab numberOfHighlightedCells={Object.keys(acceptedQrCodes).length} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => onGetPermission()} style={globalStyles.button}>
            <Text style={styles.buttonText}>Scan</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

    );
  } else {
    return (
      <QrReader setHasPermission={boolean => setHasPermission(boolean)} onScan={(type, data) => onScan(type, data)} />
    );
  }
};

const styles = StyleSheet.create({
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
  },
  safeAreaViewContainer: {
    flex: 1
  }
});

export default Home;
