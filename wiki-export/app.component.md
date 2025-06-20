# AppComponent

The `AppComponent` is the root component of the Angular application. It initializes the application and provides the main structure.

## Overview

This component:
- Sets the application title
- Implements OnInit lifecycle hook for initialization
- Provides a test method for debugging purposes
- Uses RouterOutlet for navigation

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| title | string | 'angular_test' | The application title |

## Methods

### ngOnInit()
Called after the component is initialized. Currently logs 'test' to the console.

### test()
A utility method that logs 'test' to the console for debugging purposes.

## Usage

```typescript

// The component is automatically bootstrapped as the root component
```