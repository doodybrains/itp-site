import React, { Component } from "react";

class CategoryTemplate extends Component {
  render() {
    const category = this.props.data.contentfulCategory;

    return (
      <div className="category">
        <h2>{category.name}</h2>
        {category.posts.map((post, i) => {
          return (
            <a href={`/${category.slug}/${post.slug}`}key={i}>
              <span className="date">{post.date}</span>
              <h3>{post.title}</h3>
            </a>
          );
        })}
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
        }
      }
    }
  }
`
