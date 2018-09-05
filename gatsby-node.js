const path = require("path");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const categoryTemplate = path.resolve("src/templates/category.js");
    const postTemplate = path.resolve("src/templates/post.js");

    resolve(
      graphql(`
        {
          allContentfulCategory {
            edges {
              node {
                id
                slug
                posts {
                  ... on ContentfulPost {
                    id
                    slug
                  }
                }
              }
            }
          }
        }
      `)
        .then(result => {
          if (result.errors) {
            reject(result.errors);
          }
          result.data.allContentfulCategory.edges.forEach(edge => {
            createPage({
              path: `/${edge.node.slug}`,
              component: categoryTemplate,
              context: {
                slug: edge.node.slug
              }
            });
            {edge.node.posts.map((post, i) => {
              return (
                createPage({
                  path: `/${edge.node.slug}/${post.slug}`,
                  component: postTemplate,
                  context: {
                    slug: post.slug
                  }
                })
              );
            })}
            return;
          });
        })
    );
  });
};
