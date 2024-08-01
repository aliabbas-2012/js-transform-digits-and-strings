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

#### `transformDigitsAndStrings`

Convert the alphbet to number and vise versa

```javascript


const sample  = ['1one', 'twotwo', 222, 'threeFarther&&', 'trees44', '555Five'];
const output = transformDigitsAndStrings(sample);

console.log(output);
// Expected output: ['One1', '22', 'TwoTwoTwo', '3Farther&&', 'treesFourFour', 'FiveFiveFive5']

