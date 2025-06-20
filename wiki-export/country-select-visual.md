# CountrySelect Component - Visual Documentation

The `CountrySelectComponent` is a reusable Angular component that provides an elegant way to select countries from a predefined list. It includes flag emojis, supports different sizes, and integrates seamlessly with Angular forms.

## Component Preview

### Default State
```html
<!-- This is how the component appears by default -->
<div style="border: 2px solid #e1e5e9; border-radius: 6px; padding: 8px 12px; background: white; font-family: system-ui; position: relative; width: 300px; margin: 10px 0;">
  <select style="width: 100%; border: none; background: none; font-size: 14px; outline: none; appearance: none;">
    <option>Select a country</option>
  </select>
  <span style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); pointer-events: none;">▼</span>
</div>
```

**Rendered appearance:**
<div style="border: 2px solid #e1e5e9; border-radius: 6px; padding: 8px 12px; background: white; font-family: system-ui; position: relative; width: 300px; margin: 10px 0;">
  <select style="width: 100%; border: none; background: none; font-size: 14px; outline: none; appearance: none;">
    <option>Select a country</option>
  </select>
  <span style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); pointer-events: none;">▼</span>
</div>

### With Country Selected
```html
<!-- Component with a country selected -->
<div style="border: 2px solid #3b82f6; border-radius: 6px; padding: 8px 12px; background: white; font-family: system-ui; position: relative; width: 300px; margin: 10px 0;">
  <span style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); font-size: 16px;">🇺🇸</span>
  <select style="width: 100%; border: none; background: none; font-size: 14px; outline: none; appearance: none; padding-left: 30px;">
    <option>United States</option>
  </select>
  <button style="position: absolute; right: 28px; top: 50%; transform: translateY(-50%); background: none; border: none; font-size: 18px; color: #6b7280; cursor: pointer;">×</button>
  <span style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); pointer-events: none;">▼</span>
</div>
```

**Rendered appearance:**
<div style="border: 2px solid #3b82f6; border-radius: 6px; padding: 8px 12px; background: white; font-family: system-ui; position: relative; width: 300px; margin: 10px 0;">
  <span style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); font-size: 16px;">🇺🇸</span>
  <select style="width: 100%; border: none; background: none; font-size: 14px; outline: none; appearance: none; padding-left: 30px;">
    <option>United States</option>
  </select>
  <button style="position: absolute; right: 28px; top: 50%; transform: translateY(-50%); background: none; border: none; font-size: 18px; color: #6b7280; cursor: pointer;">×</button>
  <span style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); pointer-events: none;">▼</span>
</div>

### Size Variations

#### Small Size
<div style="border: 2px solid #e1e5e9; border-radius: 6px; padding: 6px 10px; background: white; font-family: system-ui; position: relative; width: 250px; margin: 10px 0;">
  <span style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); font-size: 14px;">🇨🇦</span>
  <select style="width: 100%; border: none; background: none; font-size: 12px; outline: none; appearance: none; padding-left: 25px;">
    <option>Canada</option>
  </select>
  <span style="position: absolute; right: 6px; top: 50%; transform: translateY(-50%); pointer-events: none; font-size: 12px;">▼</span>
</div>

#### Medium Size (Default)
<div style="border: 2px solid #e1e5e9; border-radius: 6px; padding: 8px 12px; background: white; font-family: system-ui; position: relative; width: 300px; margin: 10px 0;">
  <span style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); font-size: 16px;">🇬🇧</span>
  <select style="width: 100%; border: none; background: none; font-size: 14px; outline: none; appearance: none; padding-left: 30px;">
    <option>United Kingdom</option>
  </select>
  <span style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); pointer-events: none;">▼</span>
</div>

#### Large Size
<div style="border: 2px solid #e1e5e9; border-radius: 6px; padding: 12px 16px; background: white; font-family: system-ui; position: relative; width: 350px; margin: 10px 0;">
  <span style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); font-size: 18px;">🇩🇪</span>
  <select style="width: 100%; border: none; background: none; font-size: 16px; outline: none; appearance: none; padding-left: 35px;">
    <option>Germany</option>
  </select>
  <span style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); pointer-events: none; font-size: 16px;">▼</span>
</div>

### Without Flags
<div style="border: 2px solid #e1e5e9; border-radius: 6px; padding: 8px 12px; background: white; font-family: system-ui; position: relative; width: 300px; margin: 10px 0;">
  <select style="width: 100%; border: none; background: none; font-size: 14px; outline: none; appearance: none;">
    <option>France</option>
  </select>
  <span style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); pointer-events: none;">▼</span>
</div>

### Disabled State
<div style="border: 2px solid #e1e5e9; border-radius: 6px; padding: 8px 12px; background: #f9fafb; font-family: system-ui; position: relative; width: 300px; margin: 10px 0; opacity: 0.6;">
  <select style="width: 100%; border: none; background: none; font-size: 14px; outline: none; appearance: none; color: #9ca3af;" disabled>
    <option>Select a country</option>
  </select>
  <span style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); pointer-events: none; color: #9ca3af;">▼</span>
</div>

### Dropdown Options Preview

When clicked, the dropdown shows all available countries:

<div style="border: 2px solid #3b82f6; border-radius: 6px; background: white; font-family: system-ui; width: 300px; margin: 10px 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <div style="padding: 8px 12px; border-bottom: 1px solid #e1e5e9; color: #9ca3af;">Select a country</div>
  <div style="max-height: 200px; overflow-y: auto;">
    <div style="padding: 8px 12px; cursor: pointer; hover: background-color: #f3f4f6;">🇺🇸 United States</div>
    <div style="padding: 8px 12px; cursor: pointer; background-color: #f3f4f6;">🇨🇦 Canada</div>
    <div style="padding: 8px 12px; cursor: pointer;">🇬🇧 United Kingdom</div>
    <div style="padding: 8px 12px; cursor: pointer;">🇩🇪 Germany</div>
    <div style="padding: 8px 12px; cursor: pointer;">🇫🇷 France</div>
    <div style="padding: 8px 12px; cursor: pointer;">🇮🇹 Italy</div>
    <div style="padding: 8px 12px; cursor: pointer;">🇪🇸 Spain</div>
    <div style="padding: 8px 12px; cursor: pointer;">🇳🇱 Netherlands</div>
    <div style="padding: 8px 12px; cursor: pointer;">🇧🇪 Belgium</div>
    <div style="padding: 8px 12px; cursor: pointer;">🇨🇭 Switzerland</div>
    <div style="color: #9ca3af; padding: 8px 12px; font-style: italic;">... and 15 more countries</div>
  </div>
</div>

## Features Demonstrated

✅ **Flag Display**: Country flags are shown next to country names  
✅ **Clear Button**: × button appears when a country is selected  
✅ **Size Variants**: Small, medium, and large sizes available  
✅ **Disabled State**: Component can be disabled with visual feedback  
✅ **Focus State**: Blue border indicates focus/active state  
✅ **Responsive**: Component adapts to different container widths  

## Usage in Angular

```typescript
import { CountrySelectComponent } from './country-select/country-select.component';

@Component({
  template: `
    <app-country-select 
      placeholder="Select your country"
      [showFlags]="true"
      [allowClear]="true"
      size="medium"
      (countryChange)="onCountryChange($event)">
    </app-country-select>
  `
})
export class MyComponent {
  onCountryChange(country: Country | null) {
    console.log('Selected country:', country);
  }
}
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `placeholder` | string | 'Select a country' | Placeholder text |
| `disabled` | boolean | false | Disable the component |
| `showFlags` | boolean | true | Show country flags |
| `allowClear` | boolean | true | Show clear button |
| `size` | 'small' \| 'medium' \| 'large' | 'medium' | Component size |

## Supported Countries

🇺🇸 United States • 🇨🇦 Canada • 🇬🇧 United Kingdom • 🇩🇪 Germany • 🇫🇷 France • 🇮🇹 Italy • 🇪🇸 Spain • 🇳🇱 Netherlands • 🇧🇪 Belgium • 🇨🇭 Switzerland • 🇦🇹 Austria • 🇸🇪 Sweden • 🇳🇴 Norway • 🇩🇰 Denmark • 🇫🇮 Finland • 🇯🇵 Japan • 🇰🇷 South Korea • 🇨🇳 China • 🇮🇳 India • 🇦🇺 Australia • 🇳🇿 New Zealand • 🇧🇷 Brazil • 🇲🇽 Mexico • 🇦🇷 Argentina • 🇿🇦 South Africa