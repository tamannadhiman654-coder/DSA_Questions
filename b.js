// how to find largest odd no in a String


// let str="12345678"
// let arr = str.split('')
// let max=arr[0]
// for(let i=0;i<=arr.length;i++){
//    if(arr[i]%2!=0){
//     if(arr[i]>max){
//         max=arr[i]
//     }
//    }
// }
// console.log(max)


// second largest element in a array

// let arr=[23,84,45,67,76,98]
// let max=arr[0]
// let secmax=arr[0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i] 
//     }
// }
// for(let i=0;i<arr.length;i++){
        
// if(arr[i]>secmax && arr[i]!=max){
//     secmax=arr[i]
// }
// }
// console.log(max,secmax)


//  minimum element in array


// let arr=[23,84,45]
// let min=arr[0]
// let secmin=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<min){
//         min=arr[i] 
//     }
// }

// console.log(min)


// to find lcm of  two numbers

// const gcd = (a, b) => {
//     while (b > 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// };
// const a = 42;
// const b = 35;
// const lcm = (a * b) / gcd(a, b);
// console.log( gcd(a, b)); // gcd 7
// console.log(lcm); //lcm 210


// ROTATE A STRING BY K( K IS ANY VALUE) TO LEFT


// function rotatestring(str,k){
//     let ans=""
//     for(let i=str.length-k;i<str.length;i++){
//         ans+=str[i]//it gets last two character -na and  shift it on left side front of taman by swapping
//     }
//     for(i=0;i<str.length-k;i++){
//         ans+=str[i]
//     }
//     return ans
// }
// console.log(rotatestring("Tamanna",2))