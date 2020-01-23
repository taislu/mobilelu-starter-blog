---
title: "Using JavaScript Fetch API"
date: "2020-01-04"
description: The Fetch API provides an interface for fetching resources (including across the network). 
category: JavaScript
---

[Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

At the heart of **Fetch** are the Interface abstractions of **HTTP Requests, Responses, Headers, and Body payloads**, along with a global fetch method for initiating **asynchronous** resource requests. Because the main components of HTTP are abstracted as JavaScript objects, it is easy for other APIs to make use of such functionality.

### Supplying request options

The fetch() method can optionally accept a second parameter, an init object that allows you to control a number of different settings:
```js
// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then((data) => {
    console.log(data); // JSON data parsed by `response.json()` call
  });
```

### Uploading JSON data

Use fetch() to POST JSON-encoded data.

```js
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then((response) => response.json())
.then((data) => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
```

### Uploading a file

Files can be uploaded using an HTML <input type="file" /\> input element, FormData() and fetch().

```js
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');
formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);
fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then((response) => response.json())
.then((result) => {
  console.log('Success:', result);
})
.catch((error) => {
  console.error('Error:', error);
});
```

### Response objects

**Response instances** are returned when fetch() **promises** are resolved.

The most common response properties you'll use are:

**Response.status** — An integer (default value 200) containing the response status code.  
**Response.statusText** — A string (default value "OK"), which corresponds to the HTTP status code message.  
**Response.ok** — seen in use above, this is a shorthand for checking that status is in the range 200-299 inclusive. This returns a Boolean.  
