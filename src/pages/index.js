import React from 'react'
import Link from 'gatsby-link'
import '../assets/stylesheets/base.scss'

const IndexPage = ({data}) => (
  <div className="main-wrapper">
    {data.allContentfulPost.edges.map((post, i) => {
      return (
        <div key={i}className="container">
          <span className="date">{post.node.date}</span>
          <h2>{post.node.title}</h2>
          <img src={post.node.image.file.url} />
          <div className='body-text' dangerouslySetInnerHTML={{__html: post.node.body.childMarkdownRemark.html}} />
        </div>
      )
    })}
  </div>
)

export const query = graphql`
  query PostQuery {
    allContentfulPost {
      edges {
        node {
          date
          title
          image {
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
`;

export default IndexPage
