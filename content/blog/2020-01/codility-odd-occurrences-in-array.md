---
title: "Odd Occurrences In Array"
date: "2020-01-16"
description: find value that occurs in odd number of elements
category: Codility
---

[Odd Occurrences In Array](https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/)

Write a function:  
function solution(A);   
that, given an array A consisting of N integers, returns the value of the **unpaired** element.   
For example, given array A such that:  
A\[0\] = 9 A\[1\] = 3 A\[2\] = 9 A\[3\] = 3 A\[4\] = 9 A\[5\] = 7 A\[6\] = 9  
the function should return 7.  
Write an efficient algorithm for the following assumptions:  
•	N is an odd integer within the range \[1..1,000,000\];  
•	each element of array A is an integer within the range \[1..1,000,000,000\];  
•	all but one of the values in A occur an even number of times.  

```js
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort()
    for(let i=0; i<A.length; i+=2){
        if(A[i]!=A[i+1]) return A[i]
    }
    return A[A.length-1]
}
console.log("solution([9,3,9,3,9,7,9]): ", solution([9,3,9,3,9,7,9]))
```