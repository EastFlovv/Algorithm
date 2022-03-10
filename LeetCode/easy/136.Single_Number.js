/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  const hash = {};
  nums.forEach(el => {
    hash[el] = hash[el] === undefined ? true : false;
  });

  for(const el in hash){
    if(hash[el]) return el;
  }
};

// console.log(singleNumber([2,1,2,3,3]))