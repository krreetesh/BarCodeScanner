import { CameraView, CameraType, useCameraPermissions, BarcodeScanningResult } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [isScanning, setIsScanning] = useState(true);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handleBarCodeScanned = (scanResult: BarcodeScanningResult) => {
    console.log({ scanResult });
    const { type, data } = scanResult;
    if (isScanning) {
      setIsScanning(false);
      console.log('Scanned data:', data);
      alert(data)
    }
  };

  return (
    <View style={styles.container}>
      {isScanning && (
      <CameraView facing={facing} barcodeScannerSettings={{barcodeTypes: ["qr","ean13","ean8","aztec","pdf417","upc_e","datamatrix","code39","code93","itf14","codabar","code128","upc_a"],}} 
      onBarcodeScanned={handleBarCodeScanned} style={{ width: '100%', height: 500 }}>
        <View style={styles.boundary} />
      </CameraView>
      )}
      <Button title="Start Scanning" onPress={() => setIsScanning(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  boundary: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'red',
    width: 200,
    height: 200,
    top: '40%',
    left: '50%',
    marginLeft: -100,
    marginTop: -100,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
