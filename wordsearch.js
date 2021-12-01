
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    
    return false;
}


const transpose = function (matrix) {
    let transposedMatrix = [];
    for (let j = 0; j < matrix[0].length; j++) {
        let row = [];
        for (let i = 0; i < matrix.length; i++){
            row.push(matrix[i][j]);
        }
        transposedMatrix.push(row);
    }
    return transposedMatrix;
};

// function recieves a 2d array of letters and a word
// function already searches through horizontally
// challenge is to loop through and assert that word can be found vertically

        // a) make test for vertical
        // b) add vertical loop to function
        // c) one vertical test, one if empty array is passed through
// loop through again to check for vertical word


// for (l of horizontalJoin) {
    //     for (v of horizontalJoin) {
    //         if (l.includes(word)) 
    //         return true;
    //     }
    // }

module.exports = wordSearch