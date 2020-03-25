import React from 'react'
import { graphql, Link } from 'gatsby'
import LayoutAprender from '../components/LayoutAprender'


const Aprender = ({ data }) => {
  return (
    <LayoutAprender>
    <span className='text-base text-purple-500 font-bold'>&laquo;</span> <Link to='/aprender' className='text-base md:text-sm text-purple-500 font-bold no-underline hover:underline'>Voltar</Link>
      {
        data.allLessons.edges.map(node => {
          return (
            <div>
              <div className='font-sans mb-4'>
                <h2 className='font-sans break-normal text-gray-900 pt-6 pb-2 text-xl'>{node.node.title}</h2>
              </div>
              <div className='mb-4'>
                <iframe width='560' height='315' src={node.node.videoUrl} frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
              </div>
              <div>
                {node.node.description}
              </div>
            </div>
          )
        })
      }
    </LayoutAprender>
  )
}
export const pageQuery = graphql`
  query ($slug: String!) {
    allLessons(filter: {learningPath: {eq: $slug }}, sort: {fields: position, order: ASC}) {
      edges {
        node {
          videoUrl
          title
          position
          description
        }
      }
    }
  }
`

export default Aprender
