// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0

function setZeros(matrix) {
    const m = matrix.length
    const n = matrix[0].length
    const horizontal = new Array(m)
    horizontal.fill(false)
    const vertical = new Array(n)
    vertical.fill(false)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                horizontal[j] = true
                vertical[i] = true
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (horizontal[j] || vertical[i]) {
                matrix[i][j] = 0
            }
        }
    }
    return matrix
}

console.log('expecting: [[1,0,1],[0,0,0],[1,0,1]]')
console.log(zeroMatrix([[1,1,1],[1,0,1],[1,1,1]]))
console.log('expecting: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]')
console.log(zeroMatrix([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))