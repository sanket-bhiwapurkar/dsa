class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        res = True
        str_x = str(x)
        print(str_x)
        rev_x = str_x[::-1]
        print(rev_x)

        if str_x == rev_x and x >= 0:
            res = True
        else:
            res = False
        return res