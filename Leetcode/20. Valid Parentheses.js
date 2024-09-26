/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    brackets = {
        ')':'(',
        '}': '{',
        ']': '['
    }
    s_arr = [s[0]]
    for (i = 1; i < s.length; i++){
        if (s_arr.length && s_arr[s_arr.length - 1] === brackets[s[i]]) s_arr.pop()
        else s_arr.push(s[i])
    }
    console.log(s_arr)
    if (s_arr.length === 0) return true
    return false
    
};