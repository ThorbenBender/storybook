# CountrySelect Component - Live Demo & Figma Comparison

> **🚀 Live Demo**: [View Interactive Component](https://YOUR_USERNAME.github.io/angular_test/?path=/story/components-countryselect--default)

## Component Overview

The `CountrySelectComponent` provides an elegant country selection interface with flag support and form integration.

## Live Interactive Examples

### 📱 Default Component
**Live Demo**: [Default State](https://YOUR_USERNAME.github.io/angular_test/?path=/story/components-countryselect--default)

### 🎨 All Size Variations
**Live Demo**: [Size Comparison](https://YOUR_USERNAME.github.io/angular_test/?path=/story/components-countryselect--all-sizes)

### 🏳️ Without Flags
**Live Demo**: [No Flags Version](https://YOUR_USERNAME.github.io/angular_test/?path=/story/components-countryselect--without-flags)

### ⚙️ Disabled State
**Live Demo**: [Disabled Component](https://YOUR_USERNAME.github.io/angular_test/?path=/story/components-countryselect--disabled)

## Figma vs Implementation Comparison

| Aspect | Figma Design | Live Implementation | Status |
|--------|--------------|-------------------|---------|
| **Default State** | [Figma Link] | [Live Demo](https://YOUR_USERNAME.github.io/angular_test/?path=/story/components-countryselect--default) | ✅ Match |
| **With Selection** | [Figma Link] | [Live Demo](https://YOUR_USERNAME.github.io/angular_test/?path=/story/components-countryselect--pre-selected) | ✅ Match |
| **Small Size** | [Figma Link] | [Live Demo](https://YOUR_USERNAME.github.io/angular_test/?path=/story/components-countryselect--small) | ✅ Match |
| **Large Size** | [Figma Link] | [Live Demo](https://YOUR_USERNAME.github.io/angular_test/?path=/story/components-countryselect--large) | ✅ Match |
| **Disabled State** | [Figma Link] | [Live Demo](https://YOUR_USERNAME.github.io/angular_test/?path=/story/components-countryselect--disabled) | ✅ Match |

## Component Screenshots

> **Note**: Screenshots are automatically generated from the live component

### Default State
![Default State](https://YOUR_USERNAME.github.io/angular_test/screenshots/country-select-default.png)

### With Country Selected
![Selected State](https://YOUR_USERNAME.github.io/angular_test/screenshots/country-select-selected.png)

### Size Variations
![Size Variations](https://YOUR_USERNAME.github.io/angular_test/screenshots/country-select-sizes.png)

## Quick Access Links

- 🔗 **Full Storybook**: https://YOUR_USERNAME.github.io/angular_test/
- 📖 **Component Docs**: https://YOUR_USERNAME.github.io/angular_test/?path=/docs/components-countryselect--docs
- 🎮 **Interactive Playground**: https://YOUR_USERNAME.github.io/angular_test/?path=/story/components-countryselect--default

## Implementation Details

### Properties
| Property | Type | Default | Live Example |
|----------|------|---------|--------------|
| `placeholder` | string | 'Select a country' | [Demo](https://YOUR_USERNAME.github.io/angular_test/?path=/story/components-countryselect--custom-placeholder) |
| `showFlags` | boolean | true | [Demo](https://YOUR_USERNAME.github.io/angular_test/?path=/story/components-countryselect--without-flags) |
| `size` | string | 'medium' | [Demo](https://YOUR_USERNAME.github.io/angular_test/?path=/story/components-countryselect--all-sizes) |
| `disabled` | boolean | false | [Demo](https://YOUR_USERNAME.github.io/angular_test/?path=/story/components-countryselect--disabled) |
| `allowClear` | boolean | true | [Demo](https://YOUR_USERNAME.github.io/angular_test/?path=/story/components-countryselect--no-clear-button) |

### Usage Example
```typescript
<app-country-select 
  placeholder="Choose your country"
  [showFlags]="true"
  size="medium"
  (countryChange)="onCountryChange($event)">
</app-country-select>
```

## Design System Integration

### Colors Used
- **Border**: `#e1e5e9` (default), `#3b82f6` (focus)
- **Background**: `#ffffff` (enabled), `#f9fafb` (disabled)
- **Text**: `#333333` (primary), `#9ca3af` (disabled)

### Typography
- **Font Size**: 12px (small), 14px (medium), 16px (large)
- **Font Family**: System UI font stack

### Spacing
- **Padding**: 6px-10px (small), 8px-12px (medium), 12px-16px (large)
- **Border Radius**: 6px consistent across all sizes

## Testing the Component

You can test all component states directly in the live Storybook:

1. **Interaction Testing**: Click, type, and interact with the component
2. **Responsive Testing**: Resize the viewport to test responsiveness  
3. **Accessibility Testing**: Use screen readers and keyboard navigation
4. **Visual Testing**: Compare with your Figma designs side-by-side

## Setup Instructions

To deploy your own version:

1. **Enable GitHub Pages** in your repository settings
2. **Push changes** to trigger the GitHub Action
3. **Update URLs** in this document with your actual GitHub username/repo
4. **Add Figma links** to complete the comparison table

---

**Last Updated**: Auto-generated from Storybook deployment  
**Component Version**: Latest from main branch