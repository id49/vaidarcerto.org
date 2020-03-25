const path = require('path')

module.exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data }  = await graphql(`
    query {
      allLearningPaths {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)
  const template = path.resolve('src/templates/Aprender.js')
  const { allLearningPaths } = data
  allLearningPaths.edges.forEach(node => {
    createPage({
      path: '/aprender/' + node.node.slug,
      component: template,
      context: {
        slug: node.node.slug
      }
    })
  })

}