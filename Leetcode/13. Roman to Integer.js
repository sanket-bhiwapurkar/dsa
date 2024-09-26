/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romans = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    }
    let res = 0
    for (i = 0; i < s.length; i++) {
        if (i === s.length - 1) {
            return res += romans[s[i]]
        }
        if (s[i + 1] && romans[s[i]] < romans[s[i + 1]]) {
            res -= romans[s[i]]
        } else {
            res += romans[s[i]]
        }
    }
    return res
};