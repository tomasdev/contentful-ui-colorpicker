[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)


# Contentful UI Color Picker
Custom Contentful UI Extension for fields of type "Short Text" (a.k.a. Symbol)

It uses the native OS color picker, and includes a polyfill for older browsers (thanks to [nativeColorPicker](https://github.com/dciccale/nativeColorPicker))

### Installation and Usage

Requirements: [node](https://nodejs.org/en/), [contentful-extension](https://github.com/contentful/contentful-extension-cli)

Clone or download this repository, and then execute the following commands in your Terminal:

To create it: `CONTENTFUL_MANAGEMENT_ACCESS_TOKEN=<your-token-goes-here> contentful-extension create --space-id <your-space-id-goes-here>`

You should see a successful message and then be able to select "Color Picker" for any Short Text field in your CMS instance.

### Development / Contributions

Requirements: python (self-signed certificate is in the repo to prevent Chrome enforcing of https)

To update it: `CONTENTFUL_MANAGEMENT_ACCESS_TOKEN=<your-token-goes-here> contentful-extension update --space-id <your-space-id-goes-here> --force`

To use local: `CONTENTFUL_MANAGEMENT_ACCESS_TOKEN=<your-token-goes-here> contentful-extension update --space-id <your-space-id-goes-here> --force --src https://localhost:3000 && python https`