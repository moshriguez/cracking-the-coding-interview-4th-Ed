// Assume you have a method isSubstring which checks if one word is a substring of another Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (i e , “waterbottle” is a rotation of “erbottlewat”)

function isRotation(str1, str2) {
    // str.includes() is a built in method in JS for isSubstring
    let str1pointer = 0
    let startIndex = -1
    for (let i = 0; i < str1.length; i++) {
        console.log(str1[i], str2[str1pointer])
        if (str1[i] === str2[str1pointer]) {
            if (startIndex === -1) {
                startIndex = i
            }
            str1pointer++
        } else {
            startIndex = -1
        }
    }
    if (startIndex === -1) {
        return false
    } else {
        return str2.includes(str1.slice(0, startIndex))
    }
}

console.log('Expecting "true":')
console.log(isRotation('eedme', 'eeedm'))
// console.log('Expecting "true":')
// console.log(isRotation('waterbottle', 'erbottlewat'))
// console.log('Expecting "false":')
// console.log(isRotation('hello', 'world'))