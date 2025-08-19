# Assets Folder 📁

This folder contains all SVG assets used in the Namedropper app.

## 📂 Structure

```
assets/
└── svg/
    ├── nd-pin.svg          # Main restaurant pin marker
    └── [your-custom.svg]   # Add more SVGs here
```

## 🎨 Current SVGs

### `nd-pin.svg`
- **Purpose**: Restaurant pin markers on the map
- **Size**: 214×302px (responsive)
- **Colors**: Red (#ef4d47) and cream (#f9f8f5)
- **Usage**: Referenced in both desktop and mobile versions
- **Color variants**: Created using CSS `hue-rotate()` filters for different cuisines

## ➕ Adding New SVGs

To add more SVG assets:

1. **Drop your SVG files** into the `assets/svg/` folder
2. **Reference them in HTML** using relative paths:
   ```css
   background: url('./assets/svg/your-file.svg');
   ```
3. **Optimize SVGs** for web use (remove unnecessary metadata)
4. **Use consistent naming**: kebab-case (e.g., `station-icon.svg`, `user-marker.svg`)

## 🎯 SVG Optimization Tips

- **Clean code**: Remove editor-specific metadata
- **Minimize paths**: Simplify complex shapes
- **ViewBox**: Ensure proper viewBox for scaling
- **Colors**: Use CSS classes for dynamic theming when possible

## 🔄 Color Customization

The `nd-pin.svg` supports color customization through CSS filters:

```css
/* Different cuisine colors */
.cuisine-italian { filter: hue-rotate(120deg); }     /* Green */
.cuisine-british { filter: hue-rotate(220deg); }     /* Blue */
.cuisine-indian { filter: hue-rotate(50deg) saturate(1.5); }  /* Yellow */
```

## 📱 Usage Examples

### Restaurant Markers
```css
.marker-icon {
    background: url('./assets/svg/nd-pin.svg') no-repeat center;
    background-size: contain;
}
```

### Custom Icons
```css
.station-icon {
    background: url('./assets/svg/station-pin.svg') no-repeat center;
    background-size: contain;
}
```

---

*Drop any new SVG files in the `svg/` folder and reference them using relative paths in your CSS!*