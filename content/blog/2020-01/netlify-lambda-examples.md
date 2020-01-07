---
title: "Netlify Lambda Functions Examples"
date: "2020-01-07"
description: Netlify Functions Examples with Gatsby
category: Netlify
---

[Netlify Functions Examples](https://functions-playground.netlify.com/)

[Function Tutorials](https://functions.netlify.com/tutorials/)

#### Installation & Setup
```bash
npm install netlify-cli -g
npm install netlify-lambda -g
npm install -D http-proxy-middleware netlify-lambda npm-run-all
```

replace the scripts in **package.json**:
```
"scripts": {
    "develop": "gatsby develop",
    "start": "run-p start:**",
    "start:app": "npm run develop",
    "start:lambda": "netlify-lambda serve src/lambda",
    "build": "gatsby build && netlify-lambda build src/lambda",
    "build:app": "gatsby build",
    "build:lambda": "netlify-lambda build src/lambda",
  },
```

Head to **gatsby-config.js** and add developMiddleware in module.exports:
```js
var proxy = require("http-proxy-middleware")
module.exports = {
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  // ...
}
```

#### Create netlify.toml file

Settings in netlify.toml override settings in the web interface.
```
[build]  
  functions = "functions"  
  command = "npm run build"  
  publish = "public"  
```
Source directory : src/lambda  
Build directory : functions  

Add skipping .env lambda-config.js & functions in **.gitignore** 

#### Write functions in src/lambda

**hello-world-basic.js**
```js
// Basic handler with callback
exports.handler = function(event, context, callback) {
    callback(null, {
      statusCode: 200,
      body: "Hello, World"
    });
  };
```

**hello-world-async.js**
```js
// With async, we can return the response instead of dealing with callbacks.
require('dotenv').config()
//import { API_TOKEN } from "../../lambda-config"
exports.handler = async (event, context) => {
    //console.log("token : ", API_TOKEN)
    console.log("process.env.API_TOKEN : ", process.env.API_TOKEN)
    return {
      statusCode: 200,
      body: "Hello, World"
    };
  };
```

**hello-post.js**
```js
// postman : method POST : localhost:9000/hello-post
// Body : x-www-form-urlencoded key-value
import querystring from "querystring";
exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string
  const params = querystring.parse(event.body);
  const name = params.name || "World";
  console.log("name : ", name)
  return {
    statusCode: 200,
    body: `Hello, ${name}`
  };
};
```

**hello-param.js**
```js
// Customize the greeting calling the Lambda endpoint with an optional name parameter.
exports.handler = async (event, context) => {
    const name = event.queryStringParameters.name || "World";
    console.log("name : ", name)
    return {
      statusCode: 200,
      body: `Hello, ${name}`
    };
  };
```

**fetch.js**
```js
import axios from "axios"
exports.handler = function(event, context, callback) {
  const apiRoot = "https://api.unsplash.com"
  const accessKey = process.env.Unsplash_Access_Key
  const url = `${apiRoot}/photos/random?client_id=${accessKey}&count=${10}&collections='3816141,1154337,1254279'`
  axios.get(url).then(res => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        images: res.data,
      }),
    })
  })
}
```

#### Test functions

Tais-MBP:taislu-lambda tailu$ **netlify-lambda serve src/lambda**  
netlify-lambda: Starting server  
Hash: 07f9f0851bc13b1d3fcf  
Version: webpack 4.41.5  
Time: 416ms  
Built at: 01/06/2020 11:15:46 PM  
               Asset      Size  Chunks             Chunk Names  
            fetch.js  32.6 KiB       0  [emitted]  fetch  
      hello-param.js   1.1 KiB       1  [emitted]  hello-param  
       hello-post.js  1.26 KiB       2  [emitted]  hello-post  
hello-world-async.js  2.17 KiB       3  [emitted]  hello-world-async  
hello-world-basic.js  1.04 KiB       4  [emitted]  hello-world-basic  
Entrypoint fetch = fetch.js  
Entrypoint hello-param = hello-param.js  
Entrypoint hello-post = hello-post.js  
Entrypoint hello-world-async = hello-world-async.js  
Entrypoint hello-world-basic = hello-world-basic.js  
........
    + 39 hidden modules  
**Lambda server is listening on 9000**  
