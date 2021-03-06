import React from 'react'

const IndexPage = ({data}) => (
  <div className="main-wrapper">
    <div className="all-categories">
      {data.allContentfulCategory.edges.map((cat, i) => {
        if (cat.node.tag === "2019") {
          return (
            <div key={i} className="category-link nineteen">
              <a href={`/${cat.node.slug}`}>{cat.node.name}</a>
            </div>
          )
        }
        if (cat.node.tag === "2020") {
          return (
            <div key={i} className="category-link twenty">
              <a href={`/${cat.node.slug}`}>{cat.node.name}</a>
            </div>
          )
        }
        if (cat.node.tag === "2018") {
          return (
            <div key={i} className="category-link eighteen">
              <a href={`/${cat.node.slug}`}>{cat.node.name}</a>
            </div>
          )
        }
      })}

      <h3>~</h3>
      <div className="category-link"><a target="_blank" href="http://marceldochamp.net">personal site</a></div>
      <div className="category-link"><a target="_blank" href="https://github.com/doodybrains">github</a></div>
      <div className="category-link"><a target="_blank" href="https://are.na/emma-rae-norton">are.na</a></div>
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
          tag
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
