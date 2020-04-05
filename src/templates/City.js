import React from 'react'
import { graphql, Link } from 'gatsby'
import LayoutCity from '../components/LayoutCity'
import Phone from '../components/Phone'
import { findCityByStr } from '../lib/city'

const City = ({ data, pageContext }) => {
  const city = findCityByStr(pageContext.state +'/'+ pageContext.slug)
  return (
    <LayoutCity title={`${city.name}-${city.state} - Empresas`}>
    <span className='text-base text-purple-500 font-bold'>&laquo;</span> <Link to='/' className='text-base md:text-sm text-purple-500 font-bold no-underline hover:underline'>Voltar</Link>
    
    <h1 className='font-sans break-normal text-gray-900 pt-6 pb-2 text-xl font-bold'>{`${city.name} - ${city.state}`}</h1>
    
      {
        data.allListings.edges.map(node => {
          return (
            <div className='border-2 p-4 my-2 rounded hover:bg-gray-100'>
              <h2 className='font-sans break-normal text-gray-900 pb-1 text-xl'>{node.node.name}</h2>
              <div>
                {node.node.description}
              </div>
              <div>
                {node.node.contacts.map((contact,i) => {
                  if(contact.type === 'whatsapp'){
                    return <a key={i.toString()} title='Enviar mensagem no Whatsapp.' className='pr-4 hover:underline' target='_blank' rel='noopener noreferrer' href={'https://api.whatsapp.com/send?phone=+55'+contact.value+'&text=Vi seu telefone no VaiDarCerto.org. Gostaria de comprar de voce.'}>Whatsapp: <Phone number={contact.value} /></a>
                  }
                  return <Phone number={contact.value} />
                })}
              </div>
            </div>
          )
        })
      }
    </LayoutCity>
  )
}

export const pageQuery = graphql`
  query ($state: String!, $slug: String!) {
    allListings(filter: {status: {eq: "published"}, state: {eq: $state}, city: {eq: $slug}}, sort: {fields: name, order: ASC}) {
      edges {
        node {
          name
          description
          contacts {
            type
            value
          }
          city
          state
          status
        }
      }
    }
  }
`

export default City
