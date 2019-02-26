import React, { Component } from "react";

class CategoryTemplate extends Component {
  render() {
    const category = this.props.data.contentfulCategory;
    const mousePage = category.slug === 'the-computer-mouse';
    const mouseClass = mousePage ? 'mouse-page' : '';

    return (
      <div className={`category ${mouseClass}`}>
        <a className="home" href="/">index</a>
        <h2>{category.name}</h2>
        {this.props.data.contentfulCategory.name === "veillance" &&
          <img className="cookie" src="http://142.93.196.175/image?source=blog" />
        }

        {!mousePage &&
          category.posts.map((post, i) => {
            return (
              <a className="post-item" href={`/${category.slug}/${post.slug}`} key={i}>
                <span className="date">{post.date}</span>
                <h3>{post.title}</h3>
              </a>
            );
          })
        }

        <div className="mouse-items">
          {mousePage &&
            category.posts.map((post, i) => {
              return (
                <div className="post-item" href={`/${category.slug}/${post.slug}`} key={i}>
                  <span className="date">{post.date}</span>
                  <h3>{post.title}</h3>
                  {post.image &&
                    <img alt={post.image.title} src={post.image.file.url} />
                  }
                  <div className='body-text' dangerouslySetInnerHTML={{__html: post.body.childMarkdownRemark.html}} />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default CategoryTemplate;

export const pageQuery = graphql`
  query categoryQuery($slug: String!) {
    contentfulCategory(slug: { eq: $slug }) {
      name
      slug
      posts {
        ... on ContentfulPost {
          date
          slug
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
`
