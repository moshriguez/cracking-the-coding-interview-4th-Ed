// Write a method to decide if two strings are anagrams or not

const anagrams = (str1, str2) => {
    const record = {}
    for (let i = 0; i < str1.length; i++) {
        if (record[str1[i]]) {
            record[str1[i]] += 1
        } else {
            record[str1[i]] = 1
        }
    }
    for (let j = 0; j < str2.length; j++) {
        if (record[str2[j]]) {
            // console.log(record[str2[j]])
            if (record[str2[j]] === 0) {
                return false
            }
            record[str2[j]] -= 1
        } else {
            return false
        }

    }
    console.log(record)
    return true
}

console.log(anagrams('jello', 'ojellf'))