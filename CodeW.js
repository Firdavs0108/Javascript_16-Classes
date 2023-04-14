


///Build a function that returns an array of integers from n to 1 where n>0.

//Example : n=5 --> [5,4,3,2,1]


// const reverseSeq = n => {
// let arr = []

// while(n>0){
//   arr.push(n)
//   n=n-1
// }
//   console.log(arr);
// }


// reverseSeq(5)



const reverseSeq = n => {
  let arr = []
  
for (let index = n; index > 0; index--) {
 
      arr.push(index)
}
console.log(arr);
  
}
  

  reverseSeq(5)
  
