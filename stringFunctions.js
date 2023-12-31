function reverseString(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(string) { 
        const len = string.length;
        for (let i = 0; i < len / 2; i++) {
            if (string[i] !== string[len - 1 - i]) {
                return false;
            }
        }
        return true;
}

module.exports = {reverseString, isPalindrome};