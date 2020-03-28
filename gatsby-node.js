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

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/restrito/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/restrito/*"
    // Update the page.
    createPage(page)
  }
}