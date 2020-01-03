import React, { Component } from 'react'
//import { Section, Title } from '../utils'
import { Section, Title, SectionButton } from '../utils'
import styled from 'styled-components'
import { styles } from '../utils'
import { Link } from 'gatsby'

import imgPhotoSite from '../../content/assets/photo_site_screen_shot.jpg'
import imgTourSite from '../../content/assets/tour_site_screen_shot.jpg'

export default class OurShowcase extends Component {
  render() {
    return (
      <Section>
        <Title message="let me tell you" title="some showcases" />
        <QuickInfoWrapper>
         
          <p className="text">
          All sites are getting built with Gatsby, React, JavaScript, CSS, Bootstrap, SASS and/or Styled Components etc. The content is coming from the local markdown files, or external CMS (Content Management System such as Contentful, DatoCMS). Netlify Lambda Functions are being used for dynamic/external API calls such as Stripe payment checkout etc.    
          </p>
          <h2>A Photo Site</h2>
          <p className="text">
          <a href="https://taislu-trips.netlify.com/">[Trip's Photos]</a> : I built this site with a codebase from <a href="https://dev.to/mattrothenberg/recreating-pentagram-com-a-deep-dive-with-gatsby-js-h75">a gatsby tutorial for page transitions</a> which tried to recreate those beautiful page transitions in <a href="https://www.pentagram.com/">Pentagram website</a> with Gatsby as you navigating from project to project. The tutorial used <a href="https://www.datocms.com/">DatoCMS</a> to manage the remote data content for projects with text and photo fields. I added some animation using react-spring & react-gesture-gallery, modified some layout with styled components, and updated some page transitions. 
          </p>

          <img src={imgPhotoSite} alt="trips site screenshot" height="500" width="350"></img>

          <h3>Motivation</h3>
          <p className="text">
          I had several vacation trips to Taiwan, South Korea, and National Parks in US for 2019. When people wanted to see my trip's photos, I found it hard to show the photos from my iphone in an effective way in a short time. That's the motivation to build this website which can be shared with friends with populated/selected info & photos from an external CMS.   
          </p>

          <h2>A Tour Site</h2>

          <p className="text">
          <a href="http://taislu-tours.surge.sh/">Tour Site</a> : This site provides some tours for exploration. Each tour has information populated in <strong>Contenful</strong> with images and description data. Gatsby provides a <a href="https://www.gatsbyjs.org/packages/gatsby-source-contentful/">contentful plugin</a> which can be used to retrieve data from Contenful via <strong>GraphQL</strong>. For demonstration, I uploaded some images and information into Contenful for touring national parks, and sight seeing from Vegas, Salt Lake City, and Los Angeles. 
          </p>

          <img src={imgTourSite} alt="tour site screenshot" height="500" width="800"></img>

          <h2>A Blog Site</h2>
          
          <p className="text">
          I deployed <a href="https://www.taislu.com/">this blog site</a> on both <a href="https://www.netlify.com/">Netlify</a> and <a href="http://taislu-blog.surge.sh/">Surge</a>. On Netlify, I also purchased a <a href="https://www.cloudflare.com/learning/dns/what-is-dns/">DNS</a> in order to get a short url like a regular website. While building this site and adding new features, I'm also learning new skills in the meantime. 
          </p>
          
          <h3>Here is a summary of the list :</h3>
          
          <p>
          <ul>
            <li>Learned markdown syntax & the practice to write something everyday</li>
            <li>Added markdown filtering by categories</li>
            <li>Added separate renderer for code blocks/syntax high lighting</li>
            <li>Added Navigation with additional pages</li>
            <li>Added Sticky Navbar which always shows on top while scrolling the content</li>
            <li>Added Dark Mode with the plugin gatsby-styled-components-dark-mode</li>
            <li>Changed fonts using npm packages (such as typeface-lato) </li>
            <li>Added the ripple effects on button hovering</li>
            <li>Added contact form with a serverless backend <a href="https://formspree.io/">Formspree</a> </li>
          </ul>
          </p>
        
          <Link to="/" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>home</SectionButton>
          </Link>
          
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2em;
    /*color: ${styles.colors.mainGrey};*/
    word-spacing: 0.2rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`