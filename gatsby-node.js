const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      agents: allAgentsJson {
        edges {
          node {
            slug
          }
        }
      }
      services: allServicesJson {
        edges {
          node {
            slug
          }
        }
      }
      products: allProductsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.agents.edges.forEach(({ node }) => {
    createPage({
      path: `agent/${node.slug}`,
      component: path.resolve("./src/templates/post-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.services.edges.forEach(({ node }) => {
    createPage({
      path: `service/${node.slug}`,
      component: path.resolve("./src/templates/service-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.products.edges.forEach(({ node }) => {
    createPage({
      path: `product/${node.slug}`,
      component: path.resolve("./src/templates/product-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
