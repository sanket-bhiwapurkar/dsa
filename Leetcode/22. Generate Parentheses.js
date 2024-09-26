/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let comb = []
    let res = []
    function recursive(open, close) { 
        if (open === close && close === n) {
            return res.push(comb.join(''))
            
        }

        if (open < n) {
            comb.push('(')
            recursive(open+1, close)
            comb.pop()
        }
        if (open > close) {
            comb.push(')')
            recursive(open, close+1)
            comb.pop()
        }
    }
    recursive(0,0)
    return res
};