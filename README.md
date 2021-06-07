# SwipeGuide Technical Test

This is the project for SwipeGuide's technical test: mobile app (iOS and Android).
Made with React Native + TypeScript

- Retrieves guide info from a couple of given urls
- Displays the retrieved info
- Allows the user to see and like guides
- Persists the info on the device

## Example of some functionalities

![alt text](https://github.com/samcampisi/SwipeGuide/raw/master/example.gif 'Example')

## How to install

- Clone the repo
- Go to the project directory in your console terminal: `cd SwipeGuide`
- `npm install`
- Go to ios folder and install pod dependencies `cd ios && pod install` (If you don't have `Cocoapods` installed you can do so by running `sudo gem install cocoapods`)
- Go back to the root directory `cd ..`

  - The android APK is available in `android/app/build/outputs/apk/debug`. You can run `npm run generate-apk` from your root folder to generate it.

- DEV MODE ONLY: Start the metro bundler for the app to load the resources: `npm start` (or `npm start -- --reset-cache` if you want to reset cache)

## Running on dev mode on Android

### Before running on Android

It's important that if you run this on a real device, you have the **Debug USB** and **Install via USB** options enabled (it's part of the **Developer Options** in your device.)
If you don't have the **Developer Options** enabled in your device, follow the instructions for your specific model (you can easily find them on Google)

- Start an emulator (e.g., using Android Studio -> Tools -> AVD Manager -> start one) or connect a real android device to your computer.
- `react-native run-android` OR
- Click on "RUN" right in Android Studio (recommended)
- If you connected a real android device, shake the device and on the pop-up menu select Settings -> Debug server host & port for device -> enter your IP with the port 8081 (example: 192.168.1.222:8081) and select OK. Then you can reload the app.
- To look for your ip address, in a terminal run: `ifconfig` and look for the `en0` section. It's the value right next to `inet`.
- If the screen is blank after reloading, this is normal on the first install in debug mode. Just close the app on the device and open it again.

## Running on iOS

- Start an emulator (e.g. using XCode -> Select a device such as iPhone 12 -> Run) or connect a real iOS device to your computer and select it from that same dropdown in XCode.

## Troubleshooting

- First time on XCode or Android Studio? -> Maybe you need to download the SDK 29. You can check this on the upper menu: Android Studio -> Preferences -> Appearance & Behavior -> System Settings -> Android SDK

From there, you can download any SDK version you like.

- Have NPM 7 or newer? -> If you're getting an error on `npm install`, try running `npm install --legacy-peer-deps`

- Are you getting a crash right after installing the app on Android? -> Maybe you're working with more than 1 app and there's something cached. Try running this in a terminal in the base folder of your project: `cd android && ./gradlew clean`. Then you can try rebuilding from Android Studio.

- If things don't work, clean up all your build and node_modules folders, npm install and rebuild
