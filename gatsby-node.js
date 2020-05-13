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
}
