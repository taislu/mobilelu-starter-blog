import React, { Component } from 'react'
//import { Section, Title } from '../utils'
import { Section, Title, SectionButton } from '../utils'
import styled from 'styled-components'
import { styles } from '../utils'
import { Link } from 'gatsby'
import imgAudit from '../../content/assets/lighthouse_audit_taislu_com.jpg'

export default class OurStory extends Component {
  render() {
    return (
      <Section>
        <Title message="let me tell you" title="the story" />
        <QuickInfoWrapper>
          <p className="text">
            I was inspired by <a href="https://www.taislu.com/2019-12/build-portfolio-with-gatsby/">Building your portfolio site with Gatsby</a> webinar. The wonderful things about gatsby sites are that you don't need to worry about choosing a hosting vendor, and managing a real server for software or security updates or concern regularly. Most importantly, you don't need to pay monthly expense for hosting if you use netlify or surge like I did. 
          </p>
          <p className="text">
            Gatsby has very good step-by-step <a href="https://www.gatsbyjs.org/tutorial/">tutorials</a>. Following the steps from "0. Set Up Your Development Environment" to "7. Programmatically Create Pages from Data", you'll have a site ready for deployment.  As described in step <a href="https://www.gatsbyjs.org/tutorial/part-eight/">"8. Preparing a Site to Go Live"</a>, you should run an audit using <a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> ( which is included in Chrome DevTools ). As you can see, Gatsby’s performance is excellent out of the box but you’re missing some things for PWA, Accessibility, Best Practices, and SEO that will improve your scores. 
          </p>
          <p className="text">
            This site was started by using <a href="https://github.com/gatsbyjs/gatsby-starter-blog">Gatsby's blog starter</a> which has the code in place for all audit improvement. The initial website looks like <a href="https://gatsby-starter-blog-demo.netlify.com/">this</a>.
          </p>
          <img src={imgAudit} alt="lighthouse audit" height="450" width="600"></img>
          <p className="text">
            In the past, I used text editors (ex: ms-word on computer, notes on iphone) often to store the article, youtube links, study notes etc. Now I'm writing the markdown files and publish them to <a href="github">github</a> (which will trigger a rebuild on netlify to refresh the site live) on a daily basis . So I can look for the information I need anytime online.
          </p>
          <p className="text">
            To make improvement on the site, I have added several new features (so far) including <a href="https://www.taislu.com/posts-by-category">markdown display by categories</a>, Navigation bar with addition pages, and markdown renderers for codeblock etc. You may find something interesting posted on <a href="https://www.taislu.com/">my site</a> one day !.
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
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2em;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`