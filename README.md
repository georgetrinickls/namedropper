# Namedropper 🍽️

An interactive restaurant discovery app featuring the complete Off Menu Podcast restaurant database with London transport integration.

## ✨ Features

### 🎯 **Complete Restaurant Database**
- **667 restaurants** from the official Off Menu Podcast map
- **Exact coordinates** sourced from official KML data
- **Celebrity recommendations** with guest attribution for each restaurant
- **Global coverage** across London, NYC, LA, Melbourne, Paris, Tokyo, and international locations

### 🗺️ **Interactive Map**
- **Custom markers** with cuisine-based color coding (Japanese, Italian, British, Indian, French, American, Thai, etc.)
- **Restaurant labels** that appear at higher zoom levels
- **Smart city filtering** with accurate restaurant counts
- **Search functionality** across restaurant names, cuisines, and guest recommendations

### 🚇 **London Transport Integration**
- **129 tube and train stations** across zones 1-3
- **Toggle control** to show/hide transport stations
- **Complete network coverage**: Underground, National Rail, Elizabeth Line, DLR
- **Station details** including zones, lines, and navigation

### 🎨 **User Interface**
- **Dropdown city selector** with real restaurant counts
- **Responsive design** that works on desktop and mobile
- **MapLibre GL** for smooth, fast mapping
- **Popup details** with restaurant information and navigation buttons

## 🏙️ **City Coverage**

| City | Restaurants | Features |
|------|-------------|----------|
| **London** | 276 | ✅ Tube/train stations |
| **NYC** | 55 | ✅ Restaurant markers |
| **LA** | 38 | ✅ Restaurant markers |
| **Melbourne** | 19 | ✅ Restaurant markers |
| **Paris** | 8 | ✅ Restaurant markers |
| **Tokyo** | 3 | ✅ Restaurant markers |
| **International** | 268 | ✅ Global locations |

## 🚀 **Getting Started**

1. Open `namedropper-official.html` in your web browser
2. Use the dropdown in the top-right to select a city
3. Search for specific restaurants using the search box
4. Click restaurant markers for details and navigation
5. In London: Toggle "🚇 Show Stations" to see transport options

## 📱 **Usage**

### **Restaurant Discovery**
- **Browse by city** using the dropdown selector
- **Search restaurants** by name, cuisine, or guest recommendation
- **Click markers** for detailed restaurant information
- **Navigate** directly to restaurants using integrated maps

### **London Transport** (London only)
- **Click "🚇 Show Stations"** to overlay transport stations
- **View station details** including tube lines and zones
- **Plan journeys** by seeing restaurants near transport links
- **Navigate to stations** for easy trip planning

## 🛠️ **Technical Details**

- **Frontend**: HTML5, CSS3, JavaScript
- **Mapping**: MapLibre GL JS
- **Data Sources**: Official Off Menu KML + London Transport API
- **No dependencies**: Self-contained single-file application
- **Performance**: Optimized for 667 restaurants + 129 stations

## Featured Restaurants (From Official Off Menu List)

**London:**
- **Shack-Fuyu** - Modern Japanese (Ed Gamble, James Acaster, Kumail Nanjiani, Celya AB)
- **Trullo** - Italian pasta (Grace Dent)
- **Kerridge's Bar & Grill** - British (Ed Gamble, James Acaster)
- **St. John** - Nose-to-tail (Fergus Henderson)
- **Dishoom** - Bombay café (Multiple guests)
- **Rules** - Historic British (Tom Kerridge)

**New York:**
- **Katz's Delicatessen** - Jewish deli (Jamie Demetriou, Ed Gamble, Sara Barron, Olga Koch)
- **The Dutch** - Modern American (Ed Gamble, James Acaster)

**Los Angeles:**
- **Jitlada** - Authentic Thai (Kumail Nanjiani, James Acaster)
- **Café Gratitude** - Plant-based (Aisling Bea, Sam Carter, Amy Hoggart, Simon Amstell)

## MapTiler + MapLibre Benefits

✅ **High-quality maps** - Professional MapTiler styling  
✅ **Reliable service** - Production-ready map tiles  
✅ **Open source** - MapLibre GL for rendering  
✅ **Fast performance** - Optimized vector tiles  
✅ **Custom styling** - Beautiful, modern map design  
✅ **Global coverage** - Works worldwide

## Adding Restaurants

Edit `src/data/sampleRestaurants.ts` to add new restaurants with the following structure:

```typescript
{
  id: 'unique-id',
  name: 'Restaurant Name',
  latitude: 40.7128,
  longitude: -74.0060,
  address: 'Full Address',
  cuisine: 'Cuisine Type',
  description: 'Why this restaurant is special',
  source: 'offmenu' | 'topjaw' | 'other',
  sourceDetails: {
    episodeTitle: 'Episode Title',
    guestName: 'Guest Name',
  },
  // ... other fields
}
```

## Quick Start

### For React Native CLI (Recommended)
```bash
npm install
npm start
```

Then in a new terminal:
```bash
# For iOS (requires Xcode)
npx react-native run-ios

# For Android (requires Android Studio)
npx react-native run-android
```

### iOS Setup (if needed)
```bash
cd ios && pod install && cd ..
npm run ios
```

Your restaurant discovery app will open in the simulator! 📱