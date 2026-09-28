/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    // Step 1 - Start with the word itself
    let repeated = word;
    let count = 0;

    // Step 2 - Keep adding word while it remains a substring
    while (sequence.includes(repeated)) {
        count++;
        repeated += word;
    }

    // Step 3 - Return the maximum count
    return count;
};