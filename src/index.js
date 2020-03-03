module.exports = function toReadable(number) {
    const numbers = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
    }

    let hundred = Math.floor(number / 100);
    let tens = (Math.floor((number - (hundred * 100)) / 10)) * 10;
    let small = (number - (hundred * 100)) - tens;
    let remainder = tens + small;

    let humanReadable = [];

    if (numbers.hasOwnProperty(number)) {
        return numbers[number];
    }

    if (number / 100 >= 1) {
        humanReadable.push(numbers[hundred] + ' hundred');
    }

    if (remainder > 20) {
        humanReadable.push(((hundred === 0) ? '' : ' ') + numbers[tens]);
        if (small > 0) {
            humanReadable.push(' ' + numbers[small]);
        }
    } else if ((remainder <= 20) && (remainder > 0)) {
        humanReadable.push(((humanReadable.length === 0) ? '' : ' ') + numbers[remainder]);
    }

    return humanReadable.join('');
}
