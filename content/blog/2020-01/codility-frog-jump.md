---
title: "Frog Jump"
date: "2020-01-16"
description: Count the minimal number of jumps that the small frog must perform to reach its target.
category: Codility
---

[Frog Jump](https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/start/)

Write a function:   
function solution(X, Y, D);   
that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.   
For example, given:   
X = 10 Y = 85 D = 30   
the function should return 3, because the frog will be positioned as follows:   
•	after the first jump, at position 10 + 30 = 40   
•	after the second jump, at position 10 + 30 + 30 = 70   
•	after the third jump, at position 10 + 30 + 30 + 30 = 100   
Write an efficient algorithm for the following assumptions:   
•	X, Y and D are integers within the range \[1..1,000,000,000\];   
•	X ≤ Y.   

Use [Math.ceil()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) which always rounds a number up to the **next largest whole number or integer**.

```js
function solution(X, Y, D) {
    return Math.ceil((Y - X)/ D);
}
console.log("solution(10, 85, 30) : ", solution(10, 85, 30))
// Math.ceil() function always rounds a number up to the next largest whole number or integer.
```