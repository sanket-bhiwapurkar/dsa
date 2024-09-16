/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0]
    }
    let result = ''
    let i = 0
    while (true) {
        let isSame = true
        for (j= 1; j < strs.length; j++) {
            if (strs[j][i] && strs[j][i] === strs[j - 1][i]) {
                isSame = true
            } else {
                isSame = false
                break
            }
        }
        if (isSame) {
            result += strs[0][i]
        } else {
            break
        }
        i++
    }
    return result
};