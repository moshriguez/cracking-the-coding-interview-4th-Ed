// Write a method to replace all spaces in a string with ‘%20’

function replaceSpaces(str) {
    const array = str.split('')
    let collector = ''
    for (let char of array) {
        if (char === ' ') {
            collector += '%20'
        } else {
            collector += char
        }
    }
    return collector
}

console.log(replaceSpaces('  he llo    world '))
console.log(replaceSpaces(''))