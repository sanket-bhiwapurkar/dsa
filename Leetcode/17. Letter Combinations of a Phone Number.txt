/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const combinations = []
    lettersAtDigit = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }
    function combine(i, combination) {
        if (combination.length === digits.length) return combinations.push(combination)
        for (let c of lettersAtDigit[digits[i]]) {
            combine(i + 1, combination + c)
        }
    }
    if (digits) combine(0, '')
    return combinations
};