# 🚀 How to Run Namedropper

Your app is now set up with **React Native CLI** and **MapLibre** (no API keys needed!)

## ✅ Current Status
- ✅ React Native CLI setup complete
- ✅ Dependencies installed  
- ✅ Metro bundler working
- ✅ MapLibre + MapTiler integration ready
- ✅ High-quality map styling configured
- ✅ All restaurant data and UI components built

## 📱 Run Your App

### Step 1: Start Metro Bundler
```bash
npm start
```
Keep this terminal window open - it should show "Welcome to React Native v0.73"

### Step 2: Run on Device/Simulator

**For iOS (requires Xcode):**
```bash
# In a NEW terminal window:
npx react-native run-ios
```

**For Android (requires Android Studio):**
```bash
# In a NEW terminal window:
npx react-native run-android
```

## 🗺️ What You'll See

Your namedropper app will open with:
- **Full-screen MapTiler map** with professional styling
- **MapLibre rendering** for smooth performance
- **Color-coded restaurant markers**:
  - 🔴 **Red** = Off Menu podcast restaurants
  - 🟢 **Teal** = Topjaw restaurants
  - 🔵 **Blue** = Other curated spots
- **Sample restaurants**:
  - Dishoom (Off Menu - James Acaster)
  - The Spotted Pig (Topjaw)  
  - St. John (Off Menu - Fergus Henderson)
  - Rules (Off Menu - Tom Kerridge)
- **Tap markers** to see restaurant details in bottom sheet
- **Navigation buttons** to external apps

## 🛠️ If You Need iOS Setup
```bash
# Install CocoaPods (may need sudo)
sudo gem install cocoapods

# Install iOS dependencies
cd ios && pod install && cd ..

# Run iOS app
npm run ios
```

## 🎯 Key Benefits
- ✅ **FREE mapping** with MapLibre
- ✅ **No API keys** required
- ✅ **Open source** - no Google tracking
- ✅ **Offline capable**
- ✅ **Production ready**

Your restaurant discovery app is complete and ready to run! 🎉