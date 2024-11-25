# BarCodeScanner App using React Native Expo 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Clone or Download the Respository to your local

2. Install dependencies

   ```bash
   npm install expo
   ```

3. Run the app in your device using Expo Go

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Project Description and Architecture

1. This project is about scanning bar code using phone camera capability in react native platform.
2. Once you open this app, there is a Start Scan button in home screen. After tap on start scan button, device camera opens up.
3. After placing camera near to any bar code, one alert with scanned data gets displayed.
4. Along with basic packages and node modules, there is expo-camera which has installed separately to enable camera and scanning feature.
5. Command used to install the library is $npx expo install expo-camera
6. This project logical division is mainly by view and controller.
7. index.tsx is working as a loading view and home screen coontaining button called Start Scan.
8. scanner.tsx is the controller part of barcodescanner where camera permissions are getting granted.
9. Then Camera View is showing up with red bounding box for designated scanning area.
10. Once BarCode gets detected, value is showing up in alert.
11. It also support QR code along with Bar Code.
12. This code is reusable by using scanner.tsx in any of the react native app by simply calling it through export function.

