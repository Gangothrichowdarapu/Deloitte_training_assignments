 let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


let oddSum = 0;
let evenSum = 0;

for (let i = 0; i < arr.length; i++) {
   if (i % 2 === 0) {
      // Even-indexed element
      evenSum += arr[i];
   } else {
      // Odd-indexed element
      oddSum += arr[i];
   }
}
xsddckmnknskjk,mjjjjjjkdn
console.log(evenSum)
console.log(oddSum)
let totalsum=evenSum+oddSum
console.log("totalsum="+totalsum)