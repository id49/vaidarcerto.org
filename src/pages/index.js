import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import CardCity from '../components/CardCity'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { findCityByStr } from '../lib/city'

const Hero = () => {
  return(
    <div className="pt-24">
      <Seo title='Vamos ajudar o pequeno empresário a passar por essa turbulência' />
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full text-white">Uma iniciativa sem fins-lucrativos</p>
          <h1 className="my-4 text-3xl font-bold leading-tight text-white">Para ajudar pequenas empresas e profissionais liberais</h1>
          <p className="leading-normal text-1xl mb-8 text-white">a superarem este momento difícil com muito conhecimento e reconhecimento.</p>
        </div>
        <div className="md:w-2/5 pt-2 pb-4 text-center">
          <img className="w-auto z-50 h-48" src={require('../assets/hero.png')} alt='' />
        </div>
      </div>
    </div>
  )
}
const EndWave = () => {
  return (
    <div className="relative -mt-12 lg:-mt-22">
      <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
      <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
      <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
      <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
      </g>
      <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
      <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
      </g>
      </g>
      </svg>
    </div>
  )
}

const Callouts = () => {
  return(
    <div className='lg:container mx-4 lg:mx-auto'>
      <h3 className="w-full py-2 text-3xl font-bold leading-tight text-gray-800">Como podemos ajudar?</h3>
      <div className="md:flex flex-wrap ">
        <div className="flex flex-col md:w-1/3">
          <div className='shadow m-1 p-4 h-full'>
            <h3 className="text-xl text-gray-800 font-bold mb-2">Divulgação</h3>
            <p className="text-gray-600 mb-8">Para quem está com as atividades adaptadas ou intensificadas, provemos divulgação. Abaixo temos uma lista de cidades com empresas e profissionais que estão trabalhando em modo delivery ou adaptados. Crie sua conta e comece a cadastrar pequenos comerciantes e profissionais liberais da sua cidade.</p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/3">
          <div className='shadow m-1 p-4 h-full'>
            <h3 className="text-xl text-gray-800 font-bold mb-2">Educação direta ao ponto</h3>
            <p className="text-gray-600">Para quem está com as atividades adaptadas, provemos materiais educativos de como lidar com a adaptação (atender online, por exemplo). Já quem está com as atividades paradas, o objetivo é aprender novas habilidades que farão a diferença no momento de recuperação.</p>
            <Link to='/aprender' className='p-4 bg-blue-500 hover:bg-blue-300 rounded text-center block mt-2'>Acessar seção aprender</Link>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/3">
          <div className='shadow m-1 p-4 h-full'>
            <h3 className="text-xl text-gray-800 font-bold mb-2">Ideias replicáveis</h3>
            <p className="text-gray-600 mb-8">Projetos e ideias que você pode replicar na sua cidade ou comunidade. Já traduzimos o manual de fabricação baseado  em uma especificação francesa para construção de máscaras de barreira de tecido.</p>
            <Link to='/ideias/producao-de-mascaras-caseiras/'  className='p-4 bg-blue-500 hover:bg-blue-300 rounded text-center block mt-2'>Veja como fazer sua máscara</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const QUERY_CITIES = graphql`
  query {
    cities: allListings(filter: {status: { eq: "published" }}) {
      group(field: statecity) {
        totalCount
      }
      distinct(field: statecity)
    }
  }
`

const Index = () => {
  const cities = useStaticQuery(QUERY_CITIES)
  return (
    <Layout home>
      <Hero />
      <EndWave />
      <div className='bg-white'>
        <Callouts />
        <div className='container mx-auto mb-32'>
          <h2 className='py-4 text-4xl text-gray-800 font-bold leading-tight'>Empresas e profissionais liberais</h2>
          {
            cities
              .cities
              .distinct
              .map(findCityByStr)
              .map(city => {
                return <CardCity key={city.state+city.slug} city={city} />
              })
          }
        </div>
      </div>
    </Layout>
  )
}
export default Index
