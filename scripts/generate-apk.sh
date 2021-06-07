#!/bin/bash
cd android

# Start Build Process
# echo "\n\n\nInstalling react-native CLI...\n"
# react-native bundle --platform android --dev true --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

#Start Build Process
echo "Cleaning..."
./gradlew clean

echo "cleanBuildCache..."
./gradlew cleanBuildCache

echo "assembleDebug..."
./gradlew assembleDebug
