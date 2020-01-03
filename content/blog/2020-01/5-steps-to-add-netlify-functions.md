---
title: "Five Steps to add Netlify Functions to Gatsby"
date: "2020-01-03"
description: Turning the Static Dynamic - Gatsby + Netlify Functions + Netlify Identity
category: Gatsby
---

[Turning the Static Dynamic - Gatsby + Netlify Functions + Netlify Identity](https://www.gatsbyjs.org/blog/2018-12-17-turning-the-static-dynamic/)

**Gatsby** can be used to build fully dynamic sites, which surprises some people because of it’s label as a “static site generator”. It’s fully equipped to be a powerful **alternative to create-react-app** and other similar solutions with the addition of easy pre-rendering and perf baked in.

### 5 Steps to add Netlify Functions to Gatsby

**Netlify Functions** are a great low configuration solution for adding serverless functionality to your Gatsby site. You get 125,000 free calls a month - that’s a function call every 20 seconds every day of the week, month, and year - and you can emulate them in local development with [netlify-lambda](https://github.com/netlify/netlify-lambda).

#### Step 1: Install dependencies
```bash
npm install -D http-proxy-middleware netlify-lambda npm-run-all
```

#### Step 2: Run function emulation alongside Gatsby

replace your scripts in **package.json**:
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

When deploying to Netlify, **gatsby build must be run before netlify-lambda build src/lambda** or else your Netlify function builds will fail. To avoid this, do not set your build script command to "build": "run-p build:**" when you replace scripts in package.json. Doing so will run all build scripts in parallel. This will make it possible for netlify-lambda build src/lambda to run before gatsby build.

#### Step 3: Configure your Netlify build

When serving your site on Netlify, netlify-lambda will now build each JavaScript/TypeScript file in your src/lambda folder as a standalone Netlify function (with a path corresponding to the filename). Make sure you have a Functions path in a **netlify.toml** file at root of your repository:

```
[build]
  command = "npm run build"
  functions = "lambda"
  publish = "public"
```

For more info or configuration options (e.g. in different branches and build environments), check the [Netlify.toml reference](https://docs.netlify.com/configure-builds/file-based-configuration/).

NOTE: the command specified in netlify.toml **overrides** the build command specified in your site’s Netlify UI Build settings.

#### Step 4: Proxy the emulated functions for local development

Head to **gatsby-config.js** and add this to your module.exports:
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

#### Step 5: Write your functions

Make a **src/lambda** folder and write as many functions as you need. The only requirement is that **each function must export a handler**, although netlify-lambda helps you use webpack to bundle modules or you can [zip the functions yourself](https://www.netlify.com/blog/2018/09/14/forms-and-functions/#optional-zip-the-function-to-manage-dependencies). For example you can write **src/lambda/hello.js**:
```js
// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
export function handler(event, context, callback) {
  console.log("queryStringParameters", event.queryStringParameters)
  callback(null, {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      msg: "Hello, World! " + Math.round(Math.random() * 10),
    }),
  })
}

```

Now you are ready to access this **API** from anywhere in your Gatsby app! For example, in any event handler or lifecycle method, insert:
```js
fetch("/.netlify/functions/hello")
  .then(response => response.json())
  .then(console.log)
```

The local proxying we are doing is only for local emulation, e.g. it is actually running from http://localhost:9000/hello despite you hitting /.netlify/functions/hello in your Gatsby app. When you deploy your site to Netlify (either by **hooking your site up through Git through our Web UI**, or our l33t [new CLI](https://docs.netlify.com/cli/get-started/) ), that falls away, and your functions -are- hosted on the same URL and “just works”. Pretty neat!

### That’s cool, but its not an app

So, yes, your site can now be more **dynamic** than any static site. **It can hit any database or API**. It runs rings around CORS (by the way, you can also use [Netlify Redirects](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file) for that). But its not an app app. Yet!

The key thing about web apps (and, let’s face it, the key thing users really pay for) is they all have some concept of user, and that brings with it all manner of complication from security to state management to [role-based access control](https://docs.netlify.com/visitor-access/role-based-access-control/). **Entire routes need to be guarded by authentication, and sensitive content shielded from Gatsby’s static generation**. Sometimes there are things you -don’t- want Google’s spiders to see!