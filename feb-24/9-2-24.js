


//TODO: make a bfs solution


/**
 * 
 * @param {number[][]} matrix 
 * @param {Set<`${number}:${number}`>} visited 
 * @param {{i:number;j:number}} current 
 * @returns {number}
 */
function bfsRecursion(matrix, visited, current) {
    if (!current) {
        return 0
    }
    
    const {i ,j} = current
    if (
        i >= matrix.length || i < 0 ||
        j >= matrix[i].length || j < 0
    ) {
        return 0
    }
    if (visited.has(`${current.i}:${current.j}`)) {
        return 0
    }
    visited.add(`${i}:${j}`)
    if (matrix[i][j] === 1 ) {
        return 0
    }
    const top = {i:i-1, j:j}
    const bot = {i:i+1, j:j}
    const left = {i:i, j:j-1}
    const right = {i:i, j:j+1}
    return 1 + bfsRecursion(matrix, visited) + bfsRecursion(matrix, visited, top) + bfsRecursion(matrix, visited, bot) + bfsRecursion(matrix, visited, left) + bfsRecursion(matrix, visited, right)
}

/**
 * @param {number[][]} land
 * @returns {number}
 */
function getLargestPondSize(land) {
    let largestPondSize = 0;
    const visited = new Set();

    for (let i = 0; i < land.length; i++) {
        for (let j = 0; j < land[i].length; j++) {            
            if (land[i][j] === 1) {
                visited.add(`${i}:${j}`)
            }
            const pondSize = bfsRecursion(land, visited, {i,j})
            largestPondSize = Math.max(largestPondSize, pondSize)
        }
    }
    return largestPondSize
}

const t0 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];


const t = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 1, 1],
    [1, 1, 0, 0]
];

console.log(getLargestPondSize(t0)); // Output: 1

console.log(getLargestPondSize(t)); // Output: 4
