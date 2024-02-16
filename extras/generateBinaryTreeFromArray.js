class btNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function generateBinaryTreeFromArray(arr, index = 0) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Invalid input: Please provide a non-empty array.');
    }

    if (index >= arr.length || arr[index] === null) {
        return null;
    }

    const node = new btNode(arr[index]);

    try {
        node.left = generateBinaryTreeFromArray(arr, 2 * index + 1);
        node.right = generateBinaryTreeFromArray(arr, 2 * index + 2);
    } catch (error) {
        throw new Error('Invalid input: Unable to create a binary tree from the provided array.');
    }

    return node;
}

// Example usage:
try {
    const array1 = [1, 2, 3, 4, 5, 6, null, null, null, 7, 8];
    const tree1 = generateBinaryTreeFromArray(array1);
    console.log(tree1);

    const array2 = [2, 1, 3, null, null, null, null];
    const tree2 = generateBinaryTreeFromArray(array2);
    console.log(tree2);
} catch (error) {
    console.error(error.message);
}
