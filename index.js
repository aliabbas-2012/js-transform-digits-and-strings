
const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string)

function transform(element, dataSet) {
    const dataSetKeys = Object.keys(dataSet)
    for(const i in dataSetKeys) {
        const elementKey = dataSetKeys[i];
        const replacedValue = dataSet[elementKey];
        element = element.replaceAll(elementKey, replacedValue)
    }
    return element;
}
function transformAlphabetToNumber(alphabet) {
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

    return transform(alphabet, dataSet);
}

function transformNumberToAlphabet(number) {
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
    return transform(number, dataSet);
}

function transformDigitsAndStrings(sample) {
    for (const i in sample) {
        const element = sample[i].toString();
        const elementArr = element.match(/\d+|\D+/g)

        for (const k in elementArr) {
            const value = elementArr[k]
            if (isNumeric(value)) {
                elementArr[k] = transformNumberToAlphabet(value);
            }
            else {
                elementArr[k] = transformAlphabetToNumber(value.toLowerCase());
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