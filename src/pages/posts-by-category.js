import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import NavLayout from '../components/NavLayout'

const getCategories = items => {
    let tempItems = items.map(items => { // populate all categories into an array
      return items.node.frontmatter.category;
    });
    let tempCategories = new Set(tempItems); // filter out duplicate categories into set {}
    let categories = Array.from(tempCategories);
    categories = ["All", ...categories];
  
    return categories;
  };

class BlogIndex extends React.Component {
  
constructor(props) {
    super(props);
    this.state = {
        items: [], // used for all categories
        postItems: [], // used for filtered category
        categories: []
    };
}

componentDidMount = () => {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    console.log("siteTitle : ", siteTitle)
    
    this.setState({
        items: posts,
        postItems: posts,
        categories: getCategories(posts)
    })
}

handleItems = category => {
    //console.log("Clicked : ", category)
    let tempItems = [...this.state.items];

    if (category === "All") {
      this.setState(() => {
        return { postItems: tempItems };
      });
    } else {

      let items = tempItems.filter(({ node }) => node.frontmatter.category === category);
      this.setState(() => {
        return { postItems: items };
      });
    }
  };

  render() {
    
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    //const posts = data.allMarkdownRemark.edges
    const posts = this.state.postItems    

    //console.log("postItems : ", this.state.postItems)
    //console.log("categories : ", this.state.categories)
    

    return (
      <NavLayout>
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      
                      onClick={() => {
                        this.handleItems(category);
                      }}
                      
                    >
                      {category}
                    </button>
                  );
                })}
        
        <h4>{posts.length} Posts ( Sorted by Date )</h4>
        {/* 
        <h4>{data.allMarkdownRemark.totalCount} Posts ( Sorted by Date )</h4>
        */}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
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