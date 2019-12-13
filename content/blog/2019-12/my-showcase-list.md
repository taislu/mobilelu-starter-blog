---
title: "My Showcase List"
date: "2019-12-13"
description: To track and demonstrate my beautiful websites
category: Showcase
---

All sites are getting built with Gatsby, React, JavaScript, CSS, Bootstrap, SASS and/or Styled Components etc. The content comes from the local markdown files, or external CMS (Content Management System). The sites are stored on netlify or surge **without actual server running**.

I deploy this site on both [Netlify](https://www.taislu.com/) and [Surge](http://taislu-blog.surge.sh/). On Netlify, I purchased a [DNS](https://www.cloudflare.com/learning/dns/what-is-dns/) to have a short url like a regular website. While building this site and adding new features, I'm also learning new skills in the meantime. Here is a summary of the list : 
- Lerned markdown syntax & the practice to write daily
- Added fitering by categories
- Added separate renderer for code block high lighting
- Added Navigation with additional pages
- Added Sticky Navbar which always shows on top while scrolling the content
- Added Dark Mode with the plugin gatsby-styled-components-dark-mode  

### A Tour Site

[Tour Site](http://taislu-tours.surge.sh/) : This site provides the tours exploration. Each tour has information populated in Contenful with images and description. Gatsby provides a [contentful plugin](https://www.gatsbyjs.org/packages/gatsby-source-contentful/) which can be used to retrieve data from Contenful via GraphQL. For demonstration, I uploaded some images and information into Contenful for touring national parks, and sight seeing from Vegas, Salt Lake City, and Los Angeles. 

Example to query contenful via graphql
```js
export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
```

### A Coffee Shop Site (in progress)

[coffee shop](https://mobilelu-coffee-shop.netlify.com/)

### A Restaurant Site (in progress)

[Restaurant Web](mobilelu-restaurant-web.netlify.com)

### A Portfolio Site (in progress)

[Portfolio Site](http://taislu.surge.sh/)

