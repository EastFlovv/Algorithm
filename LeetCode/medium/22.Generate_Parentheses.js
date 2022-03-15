// const getPermutations = function (arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map((el) => [el]); 
//   // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

//   arr.forEach((fixed, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
//     // 해당하는 fixed를 제외한 나머지 배열 
//     const permutations = getPermutations(rest, selectNumber - 1); 
//     // 나머지에 대해서 순열을 구한다.
//     const attached = permutations.map((el) => [fixed, ...el]); 
//     //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
//     results.push(...attached);
//     // 배열 spread syntax 로 모두다 push
//   });

//   return results; // 결과 담긴 results return
// }

// 올바른 괄호열 판별
const judge = str => {
  let val = 0;
  for (let i = 0; i < str.length; i++) {
    if(str[i] === '(') val++;
    else val--;

    if(val < 0) return val;
  }
  return val;
}

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// const generateParenthesis = function(n) {
//   const arrSet = ('('.repeat(n) + ')'.repeat(n)).split('');
//   // 재귀를 사용
//   // 전체 경우의 수를 고른 뒤 필터링?
//   const unique = [...new Set (getPermutations(arrSet, n*2).map(el => el.join('')))];
//   return unique.filter(el => judge(el) === 0);
// };
// // 메모리 초과
// console.log(generateParenthesis(3));


// backtracking으로 다시 풀이
// DFS로 풀어볼 것

const DFS = (str, leng) => {
  const answer = [];
  if(leng === 0) return str;
  const pos = DFS(str + '(', leng-1);
  const neg = DFS(str + ')', leng-1);
  answer.push(pos);
  answer.push(neg);
  return answer.flat();
}

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
  return DFS('', n*2).filter(el => judge(el) === 0);
};

console.log(generateParenthesis(2));