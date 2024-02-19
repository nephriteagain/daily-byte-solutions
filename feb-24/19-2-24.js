/**
Given a list of points, return the k closest points to the origin (0, 0).

Ex: Given the following points and value of k…

points = [[1,1],[-2,-2]], k = 1, return [[1, 1,]].
 */


/**
 * @param {number[][]} points
 * @param {number} k
 * @returns {number[][]}
 */
function closestPoints(points, k) {
    if (points.length < k) {
        throw new Error('not enought points for k!')
    }
    const sortedFromClosest = points.map(p => p).sort(closestPointSortCallback)
    return sortedFromClosest.slice(0,k)
}

/**
 * 
 * @param {number[]} a 
 * @param {number[]} b 
 * @returns {boolean}
 */
function closestPointSortCallback(a,b) {
    return (getDistanceToOrigin(a) > getDistanceToOrigin(b))
}

/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {number}
 */
function getDistanceToOrigin(x,y) {
    return Math.sqrt(
        (Math.pow(x-0,2)) +
        (Math.pow(y-0,2))
    )
}

console.log(closestPoints([[1,1],[-2,-2]], k = 1))

console.log(closestPoints([[1, 1], [-2, -2], [3, 3], [-1, 0], [0, 2]], 3));
// Expected output: [[0, 2], [1, 1], [-1, 0]]

console.log(closestPoints([[5, 5], [10, 10], [2, 2], [8, 8]], 2));
// Expected output: [[2, 2], [5, 5]]

console.log(closestPoints([[0, 0], [7, 1], [8, 1], [4, 3], [1, 9]], 4));
// Expected output: [[0, 0], [4, 3], [7, 1], [8, 1]]