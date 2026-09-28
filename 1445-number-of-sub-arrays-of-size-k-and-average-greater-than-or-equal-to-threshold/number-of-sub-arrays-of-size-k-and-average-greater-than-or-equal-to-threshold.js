/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    // Step 1 - Initialize the sum of the first window
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    // Step 2 - Check the first window against the threshold
    let count = 0;
    if (windowSum >= threshold * k) {
        count++;
    }

    // Step 3 - Slide the window across the array
    for (let i = k; i < arr.length; i++) {
        // Add the new element and remove the old one
        windowSum += arr[i] - arr[i - k];

        // Check if the current window meets the threshold
        if (windowSum >= threshold * k) {
            count++;
        }
    }

    // Step 4 - Return the total count
    return count;
};