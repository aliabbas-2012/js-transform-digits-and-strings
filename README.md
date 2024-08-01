# Transform Digits and Strings

This JavaScript project provides functionality to transform elements in an array by converting digits to their word equivalents and vice versa. The transformations are done based on specific rules for both numbers and strings.

## Features

- Converts numbers to their word equivalents (e.g., `1` to `one`).
- Converts words representing numbers to their digit equivalents (e.g., `one` to `1`).
- Processes mixed strings and numbers in an array.

## Usage

### Installation

No installation is required. Simply include the script in your project.

### Functions

#### `isNumeric`

Checks if a string is a numeric value.

```javascript
const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string);
