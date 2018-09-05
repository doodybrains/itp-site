import React, { Component } from "react";

class PostTemplate extends Component {
  render() {
    const post = this.props.data.contentfulPost;
    return (
      <div>
        <div className="container">
          <span className="date">{post.date}</span>
          <h2>{post.title}</h2>
          {post.image &&
            <img alt={post.image.title} src={post.image.file.url} />
          }
          <div className='body-text' dangerouslySetInnerHTML={{__html: post.body.childMarkdownRemark.html}} />
        </div>
      </div>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query postQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
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
`
