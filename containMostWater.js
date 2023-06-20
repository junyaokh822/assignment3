function maxArea(heights) {
    let maxArea = 0; // Variable to store the maximum area
    let left = 0; // Pointer starting from the left end of the array
    let right = heights.length - 1; // Pointer starting from the right end of the array

    while (left < right) { // Continue until the two pointers meet
        const minHeight = Math.min(heights[left], heights[right]); // Determine the minimum height between the two pointers
        const currentArea = minHeight * (right - left); // Calculate the area formed by the current container
        maxArea = Math.max(maxArea, currentArea); // Update the maximum area if the current area is greater

        // Move the pointer with the smaller height inward,
        // as moving the pointer with the larger height will only decrease the area
        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea; // Return the maximum area
}

module.exports = maxArea;