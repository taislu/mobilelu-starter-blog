---
title: "My Showcase List"
date: "2019-12-26"
description: Track, update and demonstrate my beautiful websites
category: Showcase
---

All sites are getting built with Gatsby, React, JavaScript, CSS, Bootstrap, SASS and/or Styled Components etc. The content is coming from the local markdown files, or external CMS (Content Management System such as Contentful, DatoCMS). Netlify Lambda Functions are being used for dynamic/external API calls such as Stripe payment checkout etc.    

### My First Gatsby Site

I deployed [this blog site](https://www.taislu.com/) on both [Netlify](https://www.taislu.com/) and [Surge](http://taislu-blog.surge.sh/). On Netlify, I purchased a [DNS](https://www.cloudflare.com/learning/dns/what-is-dns/) to get a short url like a regular website. While building this site and adding new features, I'm also learning new skills in the meantime. 

Here is a summary of the list : 
- Lerned markdown syntax & the practice to write something everyday
- Added markdown filtering by categories
- Added separate renderer for code blocks/syntax high lighting
- Added Navigation with additional pages
- Added Sticky Navbar which always shows on top while scrolling the content
- Added Dark Mode with the plugin gatsby-styled-components-dark-mode
- Changed fonts using npm packages (such as typeface-lato)    

### A Photo Site

[Trip's Photos](https://taislu-trips.netlify.com/) : I built this site with a codebase from  [a gatsby tutorial for page transitions](https://dev.to/mattrothenberg/recreating-pentagram-com-a-deep-dive-with-gatsby-js-h75) which tried to recreate those beautiful page transitions in [Pentagram website](https://www.pentagram.com/) with Gatsby as you navigate from project to project. The tutorial used [DatoCMS](https://www.datocms.com/) to manage the remote data content for projects with text and photo fields. I added some animation using react-spring & react-gesture-gallery, modified some layout with styled components, and updated some page transitions. 

I had several vacation trips to Taiwan, South Korea, and National Parks in US for 2019. When people wanted to see my trip's photos, I found it hard to show the photos from my iphone in an effective way in a short time. That's the motivation to build this website which can be shared with friends with populated info & photos from an external CMS.  

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

