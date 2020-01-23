---
title: "TypeScript Course for Beginners 2020"
date: "2020-01-23"
description: Get Started with TypeScript, learn the Basics, its Features, Workflows and how to use it!
category: TypeScript
---

<iframe width="100%" src="https://www.youtube.com/embed/BwuLxPH8IDs" frameborder="0" allowfullscreen></iframe>

### Install TypeScript

```bash
npm install -g typescript
```

### Compile TypeScript into JavaScript

```bash
tsc filename.ts
```

### Examples
```js
// JavaScript
const input1 = document.getElementById("num1")
const input2 = document.getElementById("num2")
// TypeScript
const input1 = document.getElementById("num1")! as HTNLInputElement
const input2 = document.getElementById("num2")! as HTNLInputElement
```

```js
// JavaScript
function add(num1, num2){
    return num1 + num2
}
// TypeScript
function add(num1: number, num2: number){
    return num1 + num2
}
```

```js
// JavaScript
button.addEventListener("click", function(){
    console.log( add(input1.value, input2.value))
})
// TypeScript : add + before string to become number
button.addEventListener("click", function(){
    console.log( add(+input1.value, +input2.value))
})
```
**TypeScript** adds : Types!, Next-gen JavaScript Features (compiled down for older browsers), Non-JavaScript Features like Interfaces or Generics, Meta-Programming Features like **Decorators**, Rich Configuration Options, Modern Tooling that helps even in non-TypeScript Projects  

### Timestamps      
Getting Started (00:00)    
What is TypeScript: (01:57)    
Installing & Using TypeScript (06:31)    
**The Advantages of TypeScript** (19:53)   
Course Outline (22:59)   
How to Get the Most out of This Course (27:16)   
Setting Up our Development Environment (30:29)    
The Course Project Setup (33:36)   
Module Introduction (40:56)   
Using Types (41:23)   
TypeScript Types vs JavaScript Types (51:43)   
Numbers, Strings and Booleans (56:37)   
Type Assignment and Type Inference (01:02:20)   
Object Types (01:07:59)      
Array Types (01:15:31)     
Tuples (01:21:01)    
Enums (01:27:21)     
The Any Type (01:34:26)     
Union Types (01:36:30)     
Literal Types (01:43:01)    
Type Aliases (01:50:55)    
Function Return Types and Void (01:53:55)     
Function Types (02:01:21)    
Function Types and Callbacks (02:06:55)    
The Unknown Type (02:11:18)    
The Never Type (02:15:02)    
Wrap Up (02:19:12)    
Module Introduction (02:21:04)    
Watch Node (02:21:50)    
Compiling the Entire Project (02:23:55)    
Include and Exclude Files (02:27:42)    
Setting a Compilation Target (02:33:55)    
Understanding TypeScript Libs (02:37:59)     
More Options (02:43:31)     
Source Maps (02:45:12)    
Rootdir and Outdir (02:47:12)    
noemit on Error (02:52:43)    
Strict Compilation Options (02:55:35)     
Code Quality Options (03:06:39)   
Debugging with Visual Studio Code (03:11:02)    
Wrap Up (03:15:22)    