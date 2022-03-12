/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  const codes = {
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z'],
  }

  const arr = digits.split('').map(el => codes[el]);
  // 길이가 0이거나 1일때
  if(digits.length < 2) return arr.flat();

  // 그외의 경우
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if(i === 0) answer = arr[i];
    else 
      answer = answer.map(fixed => arr[i].map(el => fixed + el)).flat();
  }
  return answer;
};

// console.log(letterCombinations("23"));
// console.log(letterCombinations("2"));