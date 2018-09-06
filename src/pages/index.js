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
    {data.allContentfulPost.edges.map((post, i) => {
      return (
        <div key={i}className="container">
          <span className="date">{post.node.date}</span>
          <h2>{post.node.title}</h2>
          {post.node.image &&
            <img className="some-image" alt={post.node.image.title} src={post.node.image.file.url} />
          }

          <div className='body-text' dangerouslySetInnerHTML={{__html: post.node.body.childMarkdownRemark.html}} />
        </div>
      )
    })}
  </div>
)

export const query = graphql`
  query IndexQuery {
    allContentfulPost {
      edges {
        node {
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
    allContentfulCategory {
      edges {
        node {
          slug
          name
        }
      }
    }
  }
`;

export default IndexPage
