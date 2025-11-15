# assert-is-equal-date-object

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg) ![Downloads](https://img.shields.io/badge/downloads-1000%2B-yellow.svg) ![GitHub Releases](https://img.shields.io/badge/releases-latest-orange.svg)

Test if two values are both Date objects corresponding to the same date and time.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Introduction

In JavaScript, comparing two Date objects can be tricky. This repository provides a simple utility to check if two Date objects represent the same date and time. It helps avoid common pitfalls in date comparisons, ensuring that your applications handle dates correctly.

You can find the latest releases [here](https://github.com/xAbakush/assert-is-equal-date-object/releases).

## Features

- Simple and straightforward API.
- Works with both JavaScript and Node.js.
- Handles edge cases in date comparisons.
- Lightweight and easy to integrate into your projects.

## Installation

You can install the package using npm. Run the following command in your terminal:

```bash
npm install assert-is-equal-date-object
```

Alternatively, you can clone the repository directly:

```bash
git clone https://github.com/xAbakush/assert-is-equal-date-object.git
cd assert-is-equal-date-object
npm install
```

## Usage

To use the utility, first import it into your JavaScript file:

```javascript
const assertIsEqualDateObject = require('assert-is-equal-date-object');
```

Then, you can call the function to compare two Date objects:

```javascript
const date1 = new Date('2023-10-01T12:00:00Z');
const date2 = new Date('2023-10-01T12:00:00Z');

const isEqual = assertIsEqualDateObject(date1, date2);
console.log(isEqual); // true
```

## API

### `assertIsEqualDateObject(date1, date2)`

- **Parameters**
  - `date1` (Date): The first Date object to compare.
  - `date2` (Date): The second Date object to compare.

- **Returns**
  - `boolean`: Returns `true` if both Date objects represent the same date and time, otherwise returns `false`.

## Examples

### Basic Comparison

```javascript
const date1 = new Date('2023-10-01T12:00:00Z');
const date2 = new Date('2023-10-01T12:00:00Z');

console.log(assertIsEqualDateObject(date1, date2)); // true
```

### Different Times

```javascript
const date1 = new Date('2023-10-01T12:00:00Z');
const date2 = new Date('2023-10-01T12:30:00Z');

console.log(assertIsEqualDateObject(date1, date2)); // false
```

### Different Dates

```javascript
const date1 = new Date('2023-10-01T12:00:00Z');
const date2 = new Date('2023-10-02T12:00:00Z');

console.log(assertIsEqualDateObject(date1, date2)); // false
```

## Contributing

We welcome contributions to improve this utility. If you have suggestions or improvements, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Write tests for your changes.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

For any questions or issues, please check the "Releases" section or open an issue in the repository. You can also find the latest releases [here](https://github.com/xAbakush/assert-is-equal-date-object/releases).

## Conclusion

The `assert-is-equal-date-object` utility provides a simple way to compare Date objects in JavaScript. By using this tool, you can avoid common mistakes in date comparisons and ensure your applications handle dates accurately. 

Explore the features, try it out, and contribute to make it even better. Thank you for your interest!