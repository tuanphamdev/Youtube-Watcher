import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button } from "react-native-elements";
import { firebaseApp } from "../dataRealtime/FirebaseConfig";
import TabNavigation from "./ConfigTabNavigationScreen";
const accessFirebase = firebaseApp.database();
export default class ScanQrCode extends Component {
  state = {
    hasCameraPermission: null,
    scanned: false
  };
  async componentDidMount() {
    this.getPermissionsAsync();
  }
  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permissions</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          padding: 10,
          flexDirection:'column'
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        >
          {scanned && (
            <Button

              style={{marginTop: 30}}
              title={"Tab to Scan Again"}
              onPress={() => this.setState({ scanned: false })}
            ></Button>
          )}
        </BarCodeScanner>
      </View>
    );
  }
  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    accessFirebase.ref('User/' + data + '/VideoId').set({
        VideoId: '',
        status: "1"
    })
    this.props.navigation.replace("TabNavigationScreen", {
      UserId: data
    });
  };
}
