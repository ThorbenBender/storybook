# Storybook + MDX Setup for GitHub Wiki

This project is configured with Storybook and MDX support for component documentation that can be exported to GitHub wiki.

## Quick Start

1. **Run Storybook**: `npm run storybook`
2. **Build Storybook**: `npm run build-storybook`
3. **Export to Wiki**: `npm run export-wiki`

## Creating Component Documentation

Create `.mdx` files alongside your components with this structure:

```mdx
import { Meta, Story, Canvas, ArgsTable } from '@storybook/blocks';
import { YourComponent } from './your-component';

<Meta 
  title="Components/YourComponent" 
  component={YourComponent}
/>

# YourComponent

Description of your component...

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| prop1 | string | 'default' | Description |

## Usage

```typescript
import { YourComponent } from './your-component';
```

## Stories

<Canvas>
  <Story name="Default">
    {{
      component: YourComponent,
      props: {}
    }}
  </Story>
</Canvas>
```

## GitHub Wiki Export

The `npm run export-wiki` command will:

1. Find all `.mdx` files in your project
2. Strip Storybook-specific imports and components
3. Generate clean markdown files in `wiki-export/`
4. These files can be copied directly to your GitHub wiki

## File Structure

```
src/
├── app/
│   ├── app.component.ts
│   ├── app.component.mdx          # Component documentation
│   └── ...
├── stories/
│   └── *.mdx                      # General documentation
└── ...
wiki-export/                       # Generated wiki files
├── app.component.md
└── ...
```

## Tips

- Keep documentation focused on component usage and API
- Use tables for property documentation
- Include usage examples
- The export script automatically removes Storybook-specific content
- Generated wiki files are ready for GitHub wiki without modification