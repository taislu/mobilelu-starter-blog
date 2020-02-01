---
title: "Stone Wall"
date: "2020-02-01"
description: Cover “Manhattan skyline” using the minimum number of rectangles
category: Codility
---

[Stone Wall](https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/)

You are going to build a stone wall. The wall should be straight and N meters long, and its thickness should be constant; however, it should have different heights in different places. **The height of the wall is specified by an array H of N positive integers**. H\[I\] is the height of the wall from I to I+1 meters to the right of its left end. In particular, H\[0\] is the height of the wall's left end and H\[N−1\] is the height of the wall's right end.

The wall should be built of cuboid stone blocks (that is, all sides of such blocks are rectangular). Your task is to compute the minimum number of blocks needed to build the wall.

**Write a function:**    
function solution(H);    
that, given an array H of N positive integers specifying the height of the wall, returns **the minimum number of blocks needed** to build it.

For example, given array H containing N = 9 integers:   
H\[0\] = 8 H\[1\] = 8 H\[2\] = 5    
H\[3\] = 7 H\[4\] = 9 H\[5\] = 8    
H\[6\] = 7 H\[7\] = 4 H\[8\] = 8     
the function should return 7. The figure shows one possible arrangement of seven blocks.   
 
Write an efficient algorithm for the following assumptions:   
•	N is an integer within the range \[1..100,000\];    
•	each element of array H is an integer within the range \[1..1,000,000,000\].   

```js
function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(H.length<1) return 0 
    
    let stack = [H[0]] // initial height
    let nb = 1 // number of blocks
    
    for(let i=1; i<H.length; i++){
        //console.log("number of blocks: ", nb)
        //console.log("H[i]: ", H[i])
        while(stack.length && stack[stack.length-1] >= H[i]){
            //console.log("stack1: ", stack)
            if( stack[stack.length-1] == H[i]) nb --
            stack.pop()  // remove bigger stack heights
        }  // until stack last height < current height
        //console.log("stack2: ", stack)
        stack.push(H[i]) // add current height
        nb ++
    }
 
    return nb   
}
```
