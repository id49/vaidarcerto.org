const path = require('path')
const cities = require('./src/lib/cities.json')

const findCityBySlug = (uf, slug) => {
  return cities.find(city => city.state === uf && city.slug === slug)
}
const findCityByStr = str => {
  const [uf, city] = str.split('/')
  return findCityBySlug(uf, city)
}

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
      cities: allListings(filter: {status: { eq: "published" }}) {
        group(field: statecity) {
          totalCount
        }
        distinct(field: statecity)
      }
    }
  `)
  const template = path.resolve('src/templates/Aprender.js')
  const { allLearningPaths, cities } = data
  allLearningPaths.edges.forEach(node => {
    createPage({
      path: '/aprender/' + node.node.slug,
      component: template,
      context: {
        slug: node.node.slug
      }
    })
  })

  const cityTemplate = path.resolve('src/templates/City.js')
  cities.distinct.forEach(cityStr => {
    const city = findCityByStr(cityStr)
    createPage({
      path: '/empresas/' + city.state.toLowerCase() + '/' + city.slug,
      component: cityTemplate,
      context: {
        slug: city.slug,
        state: city.state
      }
    })
    console.log(city)
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