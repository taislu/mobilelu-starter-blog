---
title: "Gatsby design demo with tailwind css"
date: "2020-02-27"
description: Mobile first using block and flex display with tailwind 
category: Gatsby
---

[Web Design with Tailwind CSS](https://www.youtube.com/watch?v=8k165Y0qBN0)

1.Follow [these steps](https://www.taislu.com/2020-02/gatsby-tailwind-css/) to add Tailwind CSS into a Gatsby project

2.Follow [these instructions](https://www.taislu.com/2020-02/gatsby-tailwind-add-fonts/) to add Lato font 

3.Add a **WindowSize** component to display window width and height

**src/components/WindowSize.js**
```
import React, { useState, useEffect } from "react"

export default () => {
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)

        return function cleanup() {
            window.removeEventListener('resize', handleResize)
        }
    }, []) // Empty array ensures that effect is only run on mount and unmount
    return(
        <div>
            <p>Window width: {dimensions.width}, height: {dimensions.height}</p>
        </div>
    )
}
```

4.Add a new page with tailwind styling

#### Mobile first design
- when the width is smaller than 768 pixels, it displays an element as a block element (like <p\>) which **starts on a new line, and takes up the whole width**.   
- when the width is bigger than 768 pixels, it displays an element as a flexible structure.

**src/pages/design-demo.js**
```
import React from "react"
import WindowSize from '../components/WindowSize'

export default () => 
<div>
    <p className="font-lato text-xs text-green-700 text-center bg-gray-100">
        <WindowSize />
    </p>
    <div className="bg-gray-100">
        {/** mobile first design */}
        {/** sm: 640px, md: 768px, lg: 1024px, xl:1280px */}
        {/** Use h-screen to make an element span the entire height of the viewport */}
        {/** Use flex-1 to allow a flex item to grow and shrink as needed, ignoring its initial size */}
        {/** Use flex-col to position flex items vertically */}
        {/** Use items-stretch to stretch items to fill the flex container's cross axis */}
        <div className="block md:flex items-stretch">
            {/* Up/Left Part */}
            <div className="bg-blue-800 py-24 px-8 md:flex-1 md:h-screen md:p-12 md:justify-center lg:p-16 xl:p-24 flex flex-col">
                <h1 className="text-blue-400 text-3xl font-bold text-center md:text-left xl:text-5xl">
                    The TailwindCSS Tutorial
                </h1>
                <p className="text-white text-center mt-3 sm:text-lg md:text-left md:text-xl xl:text-3xl">
                    Design Demo with Gatsby
                </p>
            </div>
            {/* Down/Right Part */}
            {/** Use flex-col to position flex items vertically */}
            <div class="py-12 px-8 flex-1 flex-col flex justify-center md:h-screen">
                <div class="bg-white inline-flex p-6 rounded-lg items-center shadow-md md:-ml-16">
                    <div className="bg-blue-500 rounded-full w-12 h-12"></div>
                    <p className="ml-4 lg:text-2xl">
                        Tailwind css is awesome
                    </p>
                </div>
                <div class="bg-white inline-flex p-6 rounded-lg mt-8 items-center shadow-md md:ml-8">
                    <div className="bg-blue-500 rounded-full w-12 h-12"></div>
                    <p className="ml-4 lg:text-2xl">
                        Tailwind css is awesome
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
```

gatsby develop

http://localhost:8000/design-demo