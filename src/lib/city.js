import cities from '../lib/cities.json'

export const findCityBySlug = (uf, slug) => {
  return cities.find(city => city.state === uf && city.slug === slug)
}
export const findCityByStr = str => {
  const [uf, city] = str.split('/')
  return findCityBySlug(uf, city)
}