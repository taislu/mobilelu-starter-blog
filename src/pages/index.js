import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import NavLayout from '../components/NavLayout'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <NavLayout>
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
      
        <h3>
          <Link to="/posts-by-category">By Category</Link>
          {/* 
          {data.allMarkdownRemark.totalCount} Posts ( Sorted by Date )
          */}
        </h3>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          // skip private content 
          if(node.frontmatter.category === "Private"){
            return null
          }
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
                
              </article>
            )
          
          
        })}
      </Layout>
      </NavLayout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
          }
        }
      }
    }
  }
`

// Inspiration/Reference site https://www.taniarascia.com/