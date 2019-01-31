import React, { Component } from "react";

class PostTemplate extends Component {
  render() {
    const post = this.props.data.contentfulPost;
    console.log(post);
    
    return (
      <div className="post-wrapper">
        <a className="home" href="/">index</a>
        <span className="date">{post.date}</span>
        <h2>{post.title}</h2>
        {post.image &&
          <img alt={post.image.title} src={post.image.file.url} />
        }
        <div className='body-text' dangerouslySetInnerHTML={{__html: post.body.childMarkdownRemark.html}} />
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
