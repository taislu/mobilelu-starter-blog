---
title: "Gatsby with Tailwind CSS"
date: "2020-02-24"
description: The right way to add Tailwind CSS to a Gatsby.js React Application, using Post CSS and Purge CSS.
category: Gatsby
---

[Gatsby.js with Tailwind CSS and PurgeCSS (Oct 2019)](https://www.youtube.com/watch?v=d0v_ouu5mqU)

The right way to add Tailwind CSS to a **Gatsby.js** React Application, using **Post CSS and Purge CSS**. We'll also look at how to make use of the Tailwind CSS utility classes with a re-useable React Button component with different size variations.

### Install

```bash
gatsby new play-tailwind https://github.com/gatsbyjs/gatsby-starter-hello-world
cd play-tailwind

npm install tailwindcss gatsby-plugin-postcss
```

#### gatsby-config.js
```
    plugins: [`gatsby-plugin-postcss`],
```
Create **tailwind.config.js**
```bash
npx tailwindcss init 
```

### Add Tailwind to your CSS (by postcss)

#### src/styles/tailwind.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Create a postcss.config.js in your project’s root folder with the following contents.
#### postcss.config.js
```
module.exports = () => ({
 	plugins: [require("tailwindcss")],
})
```

#### gatsby-browser.js
```
import "./src/styles/tailwind.css"
```
gatsby develop

#### src/components/Button.js
```
import React from 'react'

const sizes = {
    default: `py-4 px-4`,
    lg: `py-6 px-6`,
    xl: `py-8 px-8 text-xl`
}

const Button = ( {children, size} ) => {
    // size = "lg"
    // sizes.lg = `py-6 px-6`
    return(
        <button className={`
            ${sizes[size] || sizes.default } 
            bg-green-600 hover:bg-green-700 rounded text-white
        `}>
            {children}
        </button>    
    )
}

export default Button
```
#### src/pages/index.js
```
import React from "react"
import Button from '../components/Button'

export default () => 
    <div className="p-8">
        <button className="py-4 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white">
            Button One
        </button>
        <p className="mt-8">
            <Button>Default Button</Button>
        </p>
        <p className="mt-8">
            <Button size="lg">Large Button</Button>
        </p>
        <p className="mt-8">
            <Button size="xl">XL Button</Button>
        </p>
    </div>
```

gatsby build   
gatsby serve   
localhost:9000 -> right click -> view page source   

[Strip out unused tailwind classes](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/)

npm install **gatsby-plugin-purgecss**

Add gatsby-plugin-purgecss at the end of **gatsby-config.js**
