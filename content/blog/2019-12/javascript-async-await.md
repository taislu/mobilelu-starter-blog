---
title: "JavaScript Async and Await"
date: "2019-12-11"
description: There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”.
category: JavaScript
---

[Async/await](https://javascript.info/async-await)

### Async functions

The word “**async**” before a function means one simple thing: a function always returns a **promise**. Other values are wrapped in a resolved promise automatically.

For instance, this function returns a resolved promise with the result of 1, let’s test it:
```
 async function f() {
  return 1;
}
f().then(alert); // 1
```
We could explicitly return a promise, that would be the same:
```
 async function f() {
  return Promise.resolve(1);
}
f().then(alert); // 1
```
So, async ensures that the function returns a promise, and wraps non-promises in it. 

### Await

The keyword **await** makes JavaScript wait until that promise settles and returns its result.

Here’s an example with a promise that resolves in 1 second:
```
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });
  let result = await promise; // wait until the promise resolves (*)
  alert(result); // "done!"
}
f();
```
The function execution “pauses” at the line (*) and resumes when the promise settles, with result becoming its result. So the code above shows “done!” in one second.

Let’s emphasize: await literally makes JavaScript wait until the promise settles, and then go on with the result. That doesn’t cost any CPU resources, because the engine can do other jobs meanwhile: execute other scripts, handle events etc.

It’s just a more elegant syntax of getting the promise result than promise.then, easier to read and write.

### Can’t use await in regular functions

If we try to use await in non-async function, there would be a syntax error:
```
function f() {
  let promise = Promise.resolve(1);
  let result = await promise; // Syntax error
}
```
We will get this error if we do not put async before a function. As said, **await only works inside an async function**.

### Promises chaining
```
fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise(function(resolve, reject) { // (*)
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser); // (**)
    }, 3000);
  }))
  // triggers after 3 seconds
  .then(githubUser => alert(`Finished showing ${githubUser.name}`));
  ```
  ### Rewrite using async/await

We’ll need to replace .then calls with await. Also we should make the function async for them to work.
```
 async function showAvatar() {
  // read our JSON
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();
  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  img.remove();

  return githubUser;
}

showAvatar();
```

<iframe width="100%" src="https://www.youtube.com/embed/qK_bbtD5eXk" frameborder="0" allowfullscreen></iframe>

0:0:42 An example of Asynchronous JavaScript
0:7:06 Understanding Asynchronous JavaScript : The Event Loop
0:15:50 The old way : JavaScript with Callbacks
0:25:12 From Callback hell to Promises
