---
title: "Add a SlideShow Component with Gatsby"
date: "2019-12-15"
description: Use graphQL to retrieve images from a subdirectory and run auto display in a SlideShow Component
category: Playground
---

### Create a new site using gatsby default starter
```
mkdir playground
cd playground
gatsby new play-slideshow
cd play-slideshow
gatsby develop
localhost:8000
```

Create a new directory at **src/images/slideshow**, copy some image files over.

### Add slideshow.js

**src/components/slideshow.js**
```
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
//import PropTypes from 'prop-types'

const SlideShow = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 8) { // total number of images minus 1
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000); //duration
    return () => clearInterval(timer); //cleanup
  }, [index]); //compare

  // filter by sub-directory name slideshow
  const allImagesQuery = graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "slideshow"}, 
            extension: {regex: "/(jpg)|(png)|(jpeg)/"}}) {
        totalCount
        edges {
            node {
            base
            childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
            }
            }
        }
        }
    }
  `
  const {
    allFile: { edges: images }, //destructuring
  } = useStaticQuery(allImagesQuery)
  

  return(
    <>
        <h1>Slides Auto Show</h1>
        <Img
            style={{width:"30%", height:"30"}}
            fluid={images[index].node.childImageSharp.fluid}
            alt={images[index].node.base.split(".")[0]}
            fadeIn="true"
        />
        <h3>Filename : {images[index].node.base.split(".")[0]}</h3>
    </>
  )
}

export default SlideShow
```

### Add SlideShow in src/pages/index.js

```
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import SlideShow from "../components/slideshow"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SlideShow />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
```