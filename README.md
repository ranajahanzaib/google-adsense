# Google AdSense

[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](./LICENSE) [![NPM Version](https://img.shields.io/npm/v/google-adsense.svg?style=flat-square)](https://www.npmjs.com/package/google-adsense) [![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square)](./CONTRIBUTING.md)

Add Google AdSense to your React project instantly. This simple component handles both auto and manual ad setup.

```jsx
import AdSense from "google-adsense";

export const HomePage = () => (
  <>
    <AdSense client="ca-1234567890123456" /> {/* Auto Ad */}
    {/* Manual Ad */}
    <AdSense client="ca-1234567890123456" slot="1234567890" />
  </>
);
```

## ✨ Features

|     | Feature                         | Description                                                                   |
| --- | ------------------------------- | ----------------------------------------------------------------------------- |
| ✅  | **Easy AdSense Integration**    | Seamlessly integrate Google AdSense into your React applications.             |
| ✅  | **Manual/Auto Ads Support**     | Use specific ad slots or let AdSense automatically place ads.                 |
| ✅  | **Responsive Ad Customization** | Control ad layouts, layout keys, and densities for optimal responsiveness.    |
| ✅  | **Flexible Styling**            | Customize ad container and `ins` tag with class names and inline styles.      |
| ✅  | **Error Handling**              | Detects and handles unfilled ads, preventing layout issues.                   |
| ✅  | **Dynamic Script Loading**      | Efficiently loads the AdSense script only when needed, preventing duplicates. |
| ✅  | **TypeScript Support**          | Fully typed for a smooth development experience.                              |
| ✅  | **No Configs required**         | Simple and intuitive API, reducing setup time.                                |

## 🚀 Getting Started

### Installation

```bash
npm i google-adsense
```

or

```bash
yarn add google-adsense
```

### Usage

#### Auto Ads

Let Google's Auto Ads intelligently place ads on your page. This is the easiest way to get started.

```jsx
import React from "react";
import AdSense from "google-adsense";

const App = () => {
  return (
    <div>
      <AdSense client="ca-pub-1234567890123456" />
    </div>
  );
};

export default App;
```

#### Manual Ad Placement

For more control, you can specify the exact placement of your ads using ad slots.

```jsx
import React from "react";
import AdSense from "google-adsense";

const App = () => {
  return (
    <div>
      <AdSense client="ca-pub-1234567890123456" slot="YOUR_AD_SLOT_ID" />
    </div>
  );
};

export default App;
```

**Important:** Replace `ca-pub-1234567890123456` and `YOUR_AD_SLOT_ID` with your actual AdSense Publisher and Slot IDs found in your AdSense account.

#### Simplified AdSense Integration

This AdSense component provides a straightforward way to integrate Google AdSense into your web applications. It supports both automatic and manual ad placements. For automatic ads, provide your AdSense Publisher ID, and the component will leverage Google's Auto Ads. For manual placement, you can specify an ad slot ID and _optionally_ customize ad format, layout, and styling.

#### Robust and Efficient

The component dynamically loads the AdSense script to ensure optimal performance and prevent redundant inclusions. It also includes error handling with `MutationObserver` to detect and address unfilled ad slots, preventing layout issues. Responsive design is supported through options for controlling ad layouts, densities, and full-width responsiveness.

#### Enhanced Developer Experience

Built with TypeScript, this component provides type safety and clear interfaces. The intuitive API minimizes configuration overhead, allowing for quick AdSense integration. By encapsulating the complexities of AdSense, this component enables developers to focus on building their applications while seamlessly monetizing their content.

### Props

| Prop                  | Type    | Description                                                                               | Required |
| --------------------- | ------- | ----------------------------------------------------------------------------------------- | -------- |
| `client`              | string  | Your Google AdSense Publisher ID (e.g., "ca-pub-1234567890123456").                       | Yes      |
| `slot`                | string  | The Ad Slot ID (e.g., "1234567890"). Required for manual ad placement. Omit for Auto Ads. | No       |
| `format`              | string  | The ad format (e.g., "horizontal", "vertical", "square", "auto"). Defaults to "auto".     | No       |
| `className`           | string  | Custom class name for the ad element <ins> tags.                                          | No       |
| `containerClass`      | string  | Custom container class name for the ad container.                                         | No       |
| `style`               | object  | Inline styles for the ad container element. Defaults to `{ display: 'block' }`.           | No       |
| `layout`              | string  | Ad layout. For responsive ads. Consult AdSense documentation for valid values.            | No       |
| `layoutKey`           | string  | Ad layout key. For responsive ads. Consult AdSense documentation for valid values.        | No       |
| `layoutDensity`       | string  | Ad layout density. For responsive ads. Consult AdSense documentation for valid values.    | No       |
| `fullWidthResponsive` | boolean | Enables full-width responsive ads. Defaults to `false`.                                   | No       |
| `width`               | string  | Width of the ad container. Defaults to `100%`.                                            | No       |
| `height`              | string  | Height of the ad container. Defaults to `auto`.                                           | No       |

## 🤝 Contributing

Contributions are welcome! Kindly see the [Contributing Guide](./CONTRIBUTING.md) for details on how to contribute to this project.

## 📝 License

[MIT](./LICENSE)

## 📚 Related

- [Google AdSense Documentation](https://support.google.com/adsense?sjid=12746306205683557304-EU#topic=3373519)

## 🐛 Issues

Kindly report any bugs or issues on the [Issues page](https://github.com/ranajahanzaib/google-adsense/issues).
