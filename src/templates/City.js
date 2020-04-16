import React from 'react'
import { graphql, Link } from 'gatsby'
import LayoutCity from '../components/LayoutCity'
import Phone from '../components/Phone'
import { findCityByStr } from '../lib/city'
import whatsapp from './WhatsApp.png'

const City = ({ data, pageContext }) => {
  const city = findCityByStr(pageContext.state +'/'+ pageContext.slug)
  return (
    <LayoutCity title={`${city.name}-${city.state} - Empresas`} description={`Lista de empresas e profissionais liberais de ${city.name}-${city.state}`}>
    <span className='text-base text-purple-500 font-bold'>&laquo;</span> <Link to='/' className='text-base md:text-sm text-purple-500 font-bold no-underline hover:underline'>Voltar</Link>
    
    <h1 className='font-sans break-normal text-gray-900 pt-6 pb-2 text-xl font-bold'>{`${city.name} - ${city.state}`}</h1>
    <p className='block'>
      <a className='bg-green-600 p-2 rounded font-bold inline-flex items-center' href={`whatsapp://send?text=Veja esta lista de empresas/profissionais liberais de ${city.name} - ${city.state}\n Acesse em: https://vaidarcerto.org/empresas/${pageContext.state.toLowerCase()}/${pageContext.slug}`} data-action='share/whatsapp/share'>
        <img className='fill-current w-4 h-4 mr-2' src={whatsapp} style={{width: '30px', height: '30px'}} />
        <span>Compartilhe esta lista no WhatsApp</span>
      </a>
    </p>

    <div className='rounded shadow flex items-center bg-blue-200 mt-2 text-sm font-bold px-4 py-3' role='alert'>
      <svg className='fill-current w-4 h-4 mr-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z' /></svg>
      <p>Dica: você pode sugerir novas empresas criando uma conta no menu principal.</p>
    </div>

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
