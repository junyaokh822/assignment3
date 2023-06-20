function lengthOfLongestSubstring(string){
    let max = 0;
    let start = 0;
    let end = 0;

    while(end < string.length){
        if(string[end]!== string[start]){
            max = Math.max(max, end - start + 1);
            start++;
        }
        end++;
    }

    return max;
}