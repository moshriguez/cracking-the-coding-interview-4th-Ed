// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees Can you do this in place?

function rotateMatrix(matrix) {
    const n = matrix.length
    for (let j = 0; j < n; j++) {
        for (let i = n - 1; i > -1; i--) {
            matrix[j].push(matrix[i].shift())
        }
    }
    return matrix
}

// Tests:
console.log('expecting: [[7,4,1],[8,5,2],[9,6,3]]')
console.log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]))

console.log('expecting: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]')
console.log(rotateMatrix([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))

console.log('expecting: [[1]]')
console.log(rotateMatrix([[1]]))

console.log('expecting: [[3,1],[4,2]]')
console.log(rotateMatrix([[1,2],[3,4]]))