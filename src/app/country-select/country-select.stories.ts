import type { Meta, StoryObj } from '@storybook/angular';
import { CountrySelectComponent } from './country-select.component';

const meta: Meta<CountrySelectComponent> = {
  title: 'Components/CountrySelect',
  component: CountrySelectComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable country selection component with flag support and form integration.'
      }
    }
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when no country is selected'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled'
    },
    showFlags: {
      control: 'boolean',
      description: 'Whether to show country flags'
    },
    allowClear: {
      control: 'boolean',
      description: 'Whether to show a clear button'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the select component'
    },
    countryChange: {
      action: 'countryChanged',
      description: 'Event emitted when country selection changes'
    }
  },
  args: {
    placeholder: 'Select a country',
    disabled: false,
    showFlags: true,
    allowClear: true,
    size: 'medium'
  }
};

export default meta;
type Story = StoryObj<CountrySelectComponent>;

export const Default: Story = {};

export const WithoutFlags: Story = {
  args: {
    showFlags: false
  }
};

export const Small: Story = {
  args: {
    size: 'small'
  }
};

export const Large: Story = {
  args: {
    size: 'large'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const NoClearButton: Story = {
  args: {
    allowClear: false
  }
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Choose your country...'
  }
};

export const PreSelected: Story = {
  render: (args) => ({
    props: {
      ...args,
      value: 'US'
    },
    template: `<app-country-select 
      [placeholder]="placeholder"
      [disabled]="disabled"
      [showFlags]="showFlags"
      [allowClear]="allowClear"
      [size]="size"
      [value]="value"
      (countryChange)="countryChange($event)">
    </app-country-select>`
  })
};

export const AllSizes: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; align-items: flex-start;">
        <div>
          <label style="display: block; margin-bottom: 8px; font-weight: bold;">Small</label>
          <app-country-select 
            [placeholder]="placeholder"
            [showFlags]="showFlags"
            [allowClear]="allowClear"
            size="small"
            (countryChange)="countryChange($event)">
          </app-country-select>
        </div>
        <div>
          <label style="display: block; margin-bottom: 8px; font-weight: bold;">Medium</label>
          <app-country-select 
            [placeholder]="placeholder"
            [showFlags]="showFlags"
            [allowClear]="allowClear"
            size="medium"
            (countryChange)="countryChange($event)">
          </app-country-select>
        </div>
        <div>
          <label style="display: block; margin-bottom: 8px; font-weight: bold;">Large</label>
          <app-country-select 
            [placeholder]="placeholder"
            [showFlags]="showFlags"
            [allowClear]="allowClear"
            size="large"
            (countryChange)="countryChange($event)">
          </app-country-select>
        </div>
      </div>
    `
  })
};