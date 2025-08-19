# Namedropper Setup Guide

## 🔑 Google Maps API Key Setup

### Step 1: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Click "APIs & Services" → "Credentials"
4. Click "Create Credentials" → "API Key"
5. Copy your API key (starts with `AIza...`)

### Step 2: Enable Required APIs
1. Go to "APIs & Services" → "Library"
2. Search and enable:
   - **Maps SDK for iOS**
   - **Maps SDK for Android**
   - **Maps JavaScript API** (for web testing)

### Step 3: Configure API Key Restrictions (Important!)
1. In Credentials, click on your API key
2. Under "Application restrictions":
   - Choose "HTTP referents" for web
   - Choose "Android apps" and add your package name
   - Choose "iOS apps" and add your bundle ID

## 📱 Add API Key to Your App

Replace `YOUR_GOOGLE_MAPS_API_KEY_HERE` in these files:

### Android: 
`android/app/src/main/AndroidManifest.xml`
```xml
<meta-data
  android:name="com.google.android.geo.API_KEY"
  android:value="YOUR_ACTUAL_API_KEY_HERE" />
```

### iOS: 
`ios/namedropper/Info.plist` - Add before `</dict>`:
```xml
<key>GMSApiKey</key>
<string>YOUR_ACTUAL_API_KEY_HERE</string>
```

### Expo: 
`app.json` - Replace both instances:
```json
"googleMapsApiKey": "YOUR_ACTUAL_API_KEY_HERE"
```

## 🚀 Development Environment Setup

### Option 1: Expo (Easiest)
```bash
npm install -g @expo/cli
npx expo start
```
Then scan QR code with Expo Go app on your phone.

### Option 2: iOS Development (Mac only)
1. Install Xcode from App Store
2. Install CocoaPods: `sudo gem install cocoapods`
3. Run: `cd ios && pod install && cd ..`
4. Run: `npm run ios`

### Option 3: Android Development
1. Install [Android Studio](https://developer.android.com/studio)
2. Set up Android SDK and emulator
3. Run: `npm run android`

## 🧪 Quick Test

After adding your API key, run:
```bash
npx expo start
```

You should see:
- 🗺️ Map centered on London
- 🔴 Red markers for Off Menu restaurants
- 🟢 Teal marker for Topjaw restaurant
- 📱 Tap markers for restaurant details

## 🆘 Troubleshooting

- **Blank map**: Check API key and enabled APIs
- **iOS build errors**: Run `pod install` in ios folder
- **Android build errors**: Clean and rebuild project
- **Location not working**: Enable location permissions in device settings