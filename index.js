
const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string)

Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});

/**
 * Transformer works for both functions based element and dataSet provided
 * @param element
 * @param dataSet
 * @param needCapitalization
 * @returns {*}
 */
function transform(element, dataSet, needCapitalization = false) {
    const dataSetKeys = Object.keys(dataSet)
    for(const i in dataSetKeys) {
        const elementKey = dataSetKeys[i];
        let replacedValue = dataSet[elementKey];
        if (needCapitalization) {
            replacedValue = replacedValue.capitalize();
        }
        element = element.replaceAll(elementKey, replacedValue)
    }
    return element;
}

/**
 * functions transform alphabet to digit
 * @param alphabet
 * @returns {*}
 */
function transformAlphabetToDigit(alphabet) {
    const dataSet = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    }

    return transform(alphabet, dataSet)
}

/**
 * functions transform digit to alphabet
 * @param number
 * @returns {*}
 */
function transformDigitToAlphabet(number) {
    const dataSet = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }
    return transform(number, dataSet, true);
}

function transformDigitsAndStrings(sample) {
    for (const i in sample) {
        const element = sample[i].toString();
        const elementArr = element.match(/\d+|\D+/g)

        for (const k in elementArr) {
            const value = elementArr[k]
            if (isNumeric(value)) {
                elementArr[k] = transformDigitToAlphabet(value);
            }
            else {
                elementArr[k] = transformAlphabetToDigit(value.toLowerCase());
            }
        }

        sample[i] = elementArr.join('')
    }
    return sample;
}

const sample  = ['1one', 'twotwo', 222, 'threeFarther&&', 'trees44', '555Five'];
const output = transformDigitsAndStrings(sample);

console.log(output)
// Expected output = ['One1', '22', 'TwoTwoTwo’, '3Farther&&', 'treesFourFour' 'FiveFiveFive5'];
