// Implement an algorithm to determine if a string has all unique characters What if you can not use additional data structures?

function allUniqChars(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i + 1).includes(str[i])) {
            return false
        }
    }
    return true
}

console.log(allUniqChars('its cold. something like a pair of tongs at the saladbar'))