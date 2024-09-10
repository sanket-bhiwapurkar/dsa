/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let l = 0
    let res = 0
    for (i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[l])
            l++
        }
        set.add(s[i])
        const len = i - l + 1
        res = Math.max(res, len)
    }
    return res
};

