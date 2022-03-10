/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {

  let maxLength = 0;

  for (let start = 0; start < s.length; start++) {
    let str = s.substring(start, start+1);
    
    for (let i = start+1; i < s.length; i++) {
      if(str.includes(s[i])) {
        break;
      }else str = s.substring(start, i+1);
    }
    maxLength = Math.max(maxLength, str.length);
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("pwwkewp"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("abcabcbb"));