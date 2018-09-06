import React from 'react'
import Link from 'gatsby-link'


const IndexPage = ({data}) => (
  <div className="main-wrapper">
    <div className="all-categories">
      {data.allContentfulCategory.edges.map((cat, i) => {
        return (
          <div key={i} className="category-link">
            <a href={`/${cat.node.slug}`}>{cat.node.name}</a>
          </div>
        )
      })}
    </div>
    <div className="misc-posts">
      {data.allContentfulCategory.edges.map((cat, i) => {
        return (
          cat.node.posts.map((post, i)=> {
            if (cat.node.slug === 'thoughtz') {
              return (
                <div key={i} className="container">
                  <a href={`/${cat.node.slug}/${post.slug}`}className="read-more">read more</a>
                  <span className="date">{post.date}</span>
                  <span className="tag">{cat.node.name}</span>
                  <h2>{post.title}</h2>
                  {post.image &&
                    <img className="some-image" alt={post.image.title} src={post.image.file.url} />
                  }
                  <div className='body-text' dangerouslySetInnerHTML={{__html: post.body.childMarkdownRemark.html}} />
                </div>
              )
            }
          })
        )
      })}
    </div>
  </div>
)

export const query = graphql`
  query IndexQuery {
    allContentfulCategory {
      edges {
        node {
          slug
          name
          posts {
            ... on ContentfulPost {
              slug
              date
              title
              image {
                title
                file {
                  url
                }
              }
              body {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage
