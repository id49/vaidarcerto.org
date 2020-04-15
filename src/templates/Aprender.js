import React from 'react'
import { graphql, Link } from 'gatsby'
import LayoutAprender from '../components/LayoutAprender'

const Aprender = ({ data }) => {
  return (
    <LayoutAprender title={data.learningPaths.title}>
    <span className='text-base text-purple-500 font-bold'>&laquo;</span> <Link to='/aprender' className='text-base md:text-sm text-purple-500 font-bold no-underline hover:underline'>Voltar</Link>
    
    <h1 className='font-sans break-normal text-gray-900 pt-6 pb-2 text-xl font-bold'>{data.learningPaths.title}</h1>
    
      {
        data.allLessons.edges.map(node => {
          return (
            <div>
              <div className='font-sans mb-4'>
                <h2 className='font-sans break-normal text-gray-900 pt-6 pb-2 text-xl'>{node.node.title}</h2>
              </div>
              <div className='mb-4'>
                <div className='relative overflow-hidden w-full h-auto' style={{paddingBottom: '56%'}}>
                  <iframe className='absolute pin-t pin-l w-full h-full' src={node.node.videoUrl} frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title={node.node.title}></iframe>
                </div>
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
    learningPaths(slug: {eq: $slug}) {
      title
      slug
    }
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
