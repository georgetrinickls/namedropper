# Topjaw Restaurants KML Data

## File: `topjaw-restaurants-london.kml`

**Source**: Topjaw - London Restaurants, Bakeries & Bars [August 25]
**Author**: @kryzig on Instagram
**Status**: Stored for future integration

### Description
A curated collection of restaurants in London (mostly within the North/South Circular) that might be worth your time.

### Price Guide (per person, excluding drinks)
- £ ~ £0 - £19.99
- ££ ~ £20 - £39.99  
- £££ ~ £40 - £69.99
- ££££ ~ £70+

### Data Format
- **Format**: KML (Keyhole Markup Language)
- **Size**: ~405KB
- **Content**: Restaurant locations with names, descriptions, coordinates, and price categories

### Usage Notes
- **Current Status**: Stored but not yet integrated into the main application
- **Future Integration**: Can be parsed and converted to JSON format for use in namedropper
- **Contains**: Restaurant names, locations (lat/lng), price categories, and descriptions

### Integration Plan
When ready to use:
1. Parse KML to extract Placemark data
2. Convert to JSON format matching current restaurant data structure
3. Merge with existing Off Menu podcast restaurant data
4. Add appropriate filtering and categorization

### Example Data Structure (from KML)
```xml
<Placemark>
  <name>Endo at the Rotunda - Sushi</name>
  <description>Sushi omakase ££££</description>
  <coordinates>-0.225993600000038,51.5102851,0</coordinates>
</Placemark>
```