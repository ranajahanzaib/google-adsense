# Google AdSense

[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](./LICENSE) [![NPM Version](https://img.shields.io/npm/v/google-adsense.svg?style=flat-square)](https://www.npmjs.com/package/google-adsense) [![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square)](./CONTRIBUTING.md)

Easily integrate Google AdSense ads into your React applications with this lightweight and user-friendly component. Supports both automatic and manual ad placements.

## ✨ Features

- **Dynamic AdSense Script Loading:** Ensures the Google AdSense script is loaded only once per page, preventing conflicts and optimizing performance.
- **Comprehensive Ad Type Support:** Seamlessly integrates both manual ad placements and Google's Auto Ads, offering flexibility for various AdSense configurations.
- **Precise Ad Format Control (Manual Placements):** Provides the ability to specify ad formats (e.g., `horizontal`, `vertical`, `square`) for manual ad placements, allowing for fine-grained control over ad presentation.
- **Responsive Ad Design Capabilities:** Supports responsive ad layouts through `data-ad-layout`, `data-ad-layout-key`, and `data-ad-layout-density` attributes, ensuring ads adapt smoothly to different screen sizes and devices.
- **TypeScript-Ready:** Includes built-in TypeScript declarations, enabling a smooth and error-free development experience for TypeScript projects.
- **Robust Script Loading Management:** Handles script loading with `onload` and `onerror` callbacks, and prevents duplicate script loading.
- **Error Logging:** Provides console logging for script loading failures, aiding in debugging and troubleshooting.

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

#### Auto Ads (Recommended)

Let Google's Auto Ads intelligently place ads on your page. This is the easiest way to get started.

```jsx
import React from "react";
import AdSense from "google-adsense";

const App = () => {
  return (
    <div>
      {/* ... your other content ... */}
      <AdSense client="ca-pub-YOUR_PUBLISHER_ID" />
      {/* ... your other content ... */}
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
      {/* ... your other content ... */}
      <AdSense
        client="ca-pub-YOUR_PUBLISHER_ID"
        slot="YOUR_AD_SLOT_ID"
        format="horizontal" // Optional: Ad format (e.g., "horizontal", "vertical", "square")
        style={{ display: "block", width: "728px", height: "90px" }} // Optional: Custom styles
        layout="in-page" // Optional: Layout for responsive ads
        layoutKey="-dh-2j-49-" // Optional: Layout key for responsive ads
        layoutDensity="-72d" // Optional: Layout density for responsive ads
      />
      {/* ... your other content ... */}
    </div>
  );
};

export default App;
```

**Important:** Replace `ca-pub-YOUR_PUBLISHER_ID` and `YOUR_AD_SLOT_ID` with your actual AdSense Publisher ID and Ad Slot ID, respectively. You can find these in your Google AdSense account.

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
