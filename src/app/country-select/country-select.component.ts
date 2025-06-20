import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Country {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-country-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountrySelectComponent),
      multi: true
    }
  ]
})
export class CountrySelectComponent implements ControlValueAccessor {
  @Input() placeholder: string = 'Select a country';
  @Input() disabled: boolean = false;
  @Input() showFlags: boolean = true;
  @Input() allowClear: boolean = true;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Output() countryChange = new EventEmitter<Country | null>();

  value: string | null = null;
  
  private onChange = (value: string | null) => {};
  private onTouched = () => {};

  countries: Country[] = [
    { code: 'US', name: 'United States', flag: '🇺🇸' },
    { code: 'CA', name: 'Canada', flag: '🇨🇦' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪' },
    { code: 'FR', name: 'France', flag: '🇫🇷' },
    { code: 'IT', name: 'Italy', flag: '🇮🇹' },
    { code: 'ES', name: 'Spain', flag: '🇪🇸' },
    { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
    { code: 'BE', name: 'Belgium', flag: '🇧🇪' },
    { code: 'CH', name: 'Switzerland', flag: '🇨🇭' },
    { code: 'AT', name: 'Austria', flag: '🇦🇹' },
    { code: 'SE', name: 'Sweden', flag: '🇸🇪' },
    { code: 'NO', name: 'Norway', flag: '🇳🇴' },
    { code: 'DK', name: 'Denmark', flag: '🇩🇰' },
    { code: 'FI', name: 'Finland', flag: '🇫🇮' },
    { code: 'JP', name: 'Japan', flag: '🇯🇵' },
    { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
    { code: 'CN', name: 'China', flag: '🇨🇳' },
    { code: 'IN', name: 'India', flag: '🇮🇳' },
    { code: 'AU', name: 'Australia', flag: '🇦🇺' },
    { code: 'NZ', name: 'New Zealand', flag: '🇳🇿' },
    { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
    { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
    { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
    { code: 'ZA', name: 'South Africa', flag: '🇿🇦' }
  ];

  get selectedCountry(): Country | null {
    return this.countries.find(country => country.code === this.value) || null;
  }

  onSelectionChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const newValue = target.value || null;
    
    this.value = newValue;
    this.onChange(newValue);
    this.onTouched();
    
    const selectedCountry = this.selectedCountry;
    this.countryChange.emit(selectedCountry);
  }

  clearSelection(): void {
    this.value = null;
    this.onChange(null);
    this.onTouched();
    this.countryChange.emit(null);
  }

  // ControlValueAccessor implementation
  writeValue(value: string | null): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}