# CountrySelect

The `CountrySelectComponent` is a reusable Angular component that provides an elegant way to select countries from a predefined list. It includes flag emojis, supports different sizes, and integrates seamlessly with Angular forms through the ControlValueAccessor interface.

## Features

- **Flag Support**: Display country flags alongside country names
- **Form Integration**: Implements ControlValueAccessor for seamless form integration
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Customizable**: Multiple size options and styling variants
- **Clear Functionality**: Optional clear button to reset selection
- **TypeScript**: Full TypeScript support with proper interfaces

## Basic Usage

```typescript
import { CountrySelectComponent } from './country-select/country-select.component';

@Component({
  template: `
    <app-country-select 
      placeholder="Select your country"
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

## Form Integration

```typescript
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form">
      <app-country-select formControlName="country"></app-country-select>
    </form>
  `
})
export class MyFormComponent {
  form = this.fb.group({
    country: new FormControl('')
  });
}
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `placeholder` | string | 'Select a country' | Placeholder text shown when no country is selected |
| `disabled` | boolean | false | Whether the select is disabled |
| `showFlags` | boolean | true | Whether to display country flags |
| `allowClear` | boolean | true | Whether to show a clear button |
| `size` | 'small' \| 'medium' \| 'large' | 'medium' | Size variant of the component |

## Events

| Event | Type | Description |
|-------|------|-------------|
| `countryChange` | EventEmitter<Country \| null> | Emitted when the selected country changes |

## Country Interface

```typescript
interface Country {
  code: string;    // ISO country code (e.g., 'US', 'CA')
  name: string;    // Full country name (e.g., 'United States')
  flag: string;    // Flag emoji (e.g., '🇺🇸')
}
```

## Supported Countries

The component includes 25 popular countries:
- United States 🇺🇸
- Canada 🇨🇦
- United Kingdom 🇬🇧
- Germany 🇩🇪
- France 🇫🇷
- Italy 🇮🇹
- Spain 🇪🇸
- Netherlands 🇳🇱
- Belgium 🇧🇪
- Switzerland 🇨🇭
- Austria 🇦🇹
- Sweden 🇸🇪
- Norway 🇳🇴
- Denmark 🇩🇰
- Finland 🇫🇮
- Japan 🇯🇵
- South Korea 🇰🇷
- China 🇨🇳
- India 🇮🇳
- Australia 🇦🇺
- New Zealand 🇳🇿
- Brazil 🇧🇷
- Mexico 🇲🇽
- Argentina 🇦🇷
- South Africa 🇿🇦

## Accessibility

The component follows accessibility best practices:

- Proper semantic HTML with `<select>` element
- ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- High contrast support

## Styling

The component uses CSS custom properties and can be easily themed:

```scss
app-country-select {
  --select-border-color: #e1e5e9;
  --select-focus-color: #3b82f6;
  --select-background: #ffffff;
  --select-text-color: #333;
}
```