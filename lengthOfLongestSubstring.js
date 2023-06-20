function lengthOfLongestSubstring(string) {
    let max = 0; // Variable to store the maximum length of the substring without repeating characters
    let start = 0; // Start index of the current substring
    let end = 0; // End index of the current substring
    const visited = new Set(); // Set to keep track of visited characters in the current substring

    while (end < string.length) {
        if (!visited.has(string[end])) { // If the current character is not visited
            visited.add(string[end]); // Add the current character to the visited set
            max = Math.max(max, visited.size); // Update max if the current substring length is greater
            end++; // Move the end index to the next character
        } else {
            visited.delete(string[start]); // Remove the character at the start index from the visited set
            start++; // Move the start index to the next character
        }
    }

    return max; // Return the maximum length of the substring without repeating characters
}

module.exports = lengthOfLongestSubstring;

