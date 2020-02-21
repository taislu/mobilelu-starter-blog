---
title: "npm dotenv"
date: "2020-02-21"
description: Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
category: Node
---

[npm dotenv](https://www.npmjs.com/package/dotenv)

Dotenv is a zero-dependency module that loads environment variables from a .env file into [process.env](https://nodejs.org/docs/latest/api/process.html#process_process_env). Storing configuration in the environment separate from code is based on The [Twelve-Factor App](https://12factor.net/config) methodology.

### Install
```bash
# with npm 
npm install dotenv
 
# or with Yarn 
yarn add dotenv
```

### Usage
As early as possible in your application, require and configure dotenv.
```
require('dotenv').config()
```
Create a **.env** file in the **root directory** of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. For example:  

DB_HOST=localhost   
DB_USER=root   
DB_PASS=s1mpl3   

**process.env** now has the keys and values you defined in your .env file.
```
const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
```

### Options

#### Path
Default: path.resolve(process.cwd(), '.env')

You may specify a **custom path** if your file containing environment variables is located elsewhere.
```
require('dotenv').config({ path: '/full/custom/path/to/your/env/vars' })
```

#### Encoding
Default: utf8

You may specify the encoding of your file containing environment variables.
```
require('dotenv').config({ encoding: 'latin1' })
```