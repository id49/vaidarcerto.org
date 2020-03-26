import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Phone from '../components/Phone'
import firebase from '../components/firebase'

const Hero = () => {
  return(
    <div className="pt-24">
      <Seo title='Vamos ajudar o pequeno empresário a passar por essa turbulência' />
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full text-white">Uma iniciativa sem fins-lucrativos</p>
          <h1 className="my-4 text-5xl font-bold leading-tight text-white">Para ajudar pequenas empresas e profissionais liberais</h1>
          <p className="leading-normal text-2xl mb-8 text-white">a superarem este momento difícil com muito conhecimento e reconhecimento.</p>
        </div>
        <div className="w-full md:w-2/5 py-6 text-center">
          <img className="w-full md:w-4/5 z-50" src={require('../assets/hero.png')} />
        </div>
      </div>
    </div>
  )
}
const EndWave = () => {
  return (
    <div className="relative -mt-12 lg:-mt-24">
      <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
      <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
      <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
      <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
      </g>
      <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
      <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
      </g>
      </g>
      </svg>
    </div>
  )
}

const Card = ({ name, description, contacts }) => {
  return(
    <div className="w-full mt-4 mb-4">
      <div className="border border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-4">
          <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="flex items-center">
          {Object.keys(contacts).map(key => {
            if(key.indexOf('whatsapp') >=0){
              return <a title='Enviar mensagem no Whatsapp.' className='pr-4 hover:underline' target='_blank' href={'https://api.whatsapp.com/send?phone=+55'+contacts[key]+'&text=Vi seu telefone no VaiDarCerto.org. Gostaria de comprar de voce.'}>Whatsapp: <Phone number={contacts[key]} /></a>
            }
            if(key.indexOf('instagram') >=0){
              return <a title='Acessar perfil no instagram.' className='pr-4 hover:underline' target='_blank' href={'https://instagram.com/'+contacts[key]}>@{contacts[key]}</a>
            }
          })}
        </div>
      </div>
    </div>
  )
}
const Callouts = () => {
  return(
    <div className='container mx-auto'>
      <h3 class="w-full py-2 text-5xl font-bold leading-tight text-center text-gray-800">Como funciona?</h3>
      <p class="text-gray-600 mb-8">Acreditamos que o pequeno empresário ou profissional liberal pode estar em 3 situações: com atividades totalmente suspensas, atividades adaptadas (trabalhando somente com entregas ou com aulas online) ou trabalhando horas extras por se tratar de um serviço essencial.</p>
      <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 py-6">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">Divulgação</h3>
          <p class="text-gray-600 mb-8">Para quem está com as atividades adaptadas ou intensificadas, provemos divulgação. Abaixo temos uma lista de empresas e profissionais que estão trabalhando em modo delivery ou adaptados. Em breve poderá ser adicionado empresas/profissionais de outras cidades.</p>
        </div>
        <div class="w-full sm:w-1/2 p-6">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">Educação direta ao ponto</h3>
          <p class="text-gray-600 mb-8">Para quem está com as atividades adaptadas, provemos materiais educativos de como lidar com a adaptação (atender online, por exemplo). Já quem está com as atividades paradas, o objetivo é aprender novas habilidades que farão a diferença no momento de recuperação.</p>
        </div>
      </div>
    </div>
  )
}

const Index = () => {
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    firebase.firestore().collection('listings').get().then(snap => {
      const listings = snap.docs.map(doc => doc.data())
      setListings(listings)
      setLoading(false)
    })
  }, [])
  return (
    <Layout home>
      <Hero />
      <EndWave />
      <div className='bg-white'>
        <Callouts />
        <div className='container mx-auto'>
          <h2 className='py-4 text-4xl font-bold leading-tight'>Empresas e profissionais liberais</h2>
          <p>Pouso Alegre / MG (em breve mais cidades)</p>
          { !loading && listings.map( listing => <Card name={listing.name} description={listing.description} contacts={listing.contacts} />) }
          { loading && <p>Aguarde, carregando...</p>}
        </div>
      </div>
    </Layout>
  )
}
export default Index
