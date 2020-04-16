import React from 'react'
import LayoutIdeias from '../../../components/LayoutIdeias'
import cover from './og-image.png'
import kit from './kit.jpeg'

const ProducaoMascarasCaseiras = () => {
  return (
    <LayoutIdeias title='Produção de Máscaras Caseiras - paro uso e combate à disseminaçã do Coronavírus' ogImage={cover}>
      <img src={cover} />
      <h1 className='font-bold text-2xl my-4'>Produção de Máscaras Caseiras - paro uso e combate à disseminaçã do Coronavírus</h1>
      <div>
        <h2 className='font-bold text-xl'>Sobre o projeto piloto na cidade de Pouso Alegre / MG</h2>
        <p className='my-6'>Em uma iniciativa que contou com o apoio de comerciantes, voluntários e artesãos locais, desenvolvemos um kit com 4 máscaras para serem distribuídas a trabalhadores que não possuem condições em adquiri-las.</p>
        <p className='my-6'>As máscaras de barreira caseiras devem ser utilizadas por no máximo 2 horas (adaptado ao clima e temperaturas do Brasil). Por esta razão, o kit é composto por 4 máscaras laváveis - para ser adequado a um dia de trabalho.</p>
        <p className='my-6 text-2xl'>Já distribuimos no primeiro lote 51 kits com 4 máscaras (totalizando 204 máscaras doadas).</p>
        <img src={kit} />
        <p className='my-6 font-bold italic'>Abaixo descrevemos sobre a especificação e também compartilhamos o manual de instruções que acompanha cada kit no projeto piloto que aconteceu na cidade de Pouso Alegre / MG.</p>
        <p className='my-6'>Estamos envolvidos em um projeto com um pequeno grupo de pessoas na nossa cidade para confeccionarmos e distribuirmos gratuitamente máscaras caseiras para trabalhadores que mais precisam e não têm acesso. Daí a ideia e objetivo do nosso projeto.</p>
        <p className='my-6'>No entanto, não encontramos adequadamente no Brasil concentrado em um documento de referência as normas técnicas mínimas ou que dessem uma orientação mínima tecnicamente para que se pudesse observar na confecção das máscaras, e assim garantir qualidade do produto finalizado. Afinal, por mais que nosso projeto seja voluntário visando a doação, é preciso focar na sua qualidade e eficácia.</p>
        <p className='my-6'>Vendo esta dificuldade, sabendo que na França houve orientação por parte do governo para que houvesse produção também de máscaras caseiras. Pesquisamos referências técnicas de como construir uma máscara de barreira de qualidade e eficiente naquele país.</p>
        <p className='my-6'>Encontramos a norma técnica AFNOR SPEC S76-001 da Association Française de Normalization - AFNOR, que é a associação de normas técnicas da França, equivalente à nossa ABNT.</p>
        <p className='my-6'>Este documento, que é o objeto de tradução, é um documento referencial técnico básico e de fácil apreensão para exatamente cumprir seu objetivo: que as pessoas possam de forma caseira confeccionar suas próprias máscaras.</p>
        <p className='my-6'>Diante da utilidade do documento, traduzimos para o português para orientarmos nossa equipe na produção e confecção das máscaras bem como compartilhar e poder replicar esta boa ideia. Nossa equipe não é do francês impecável. Por isso, se houver alguma impropriedade de tradução, encaminhe a sugestão.</p>
        <p className='my-6'>Vamos replicar.</p>
        <p className='my-6'>Tradução voluntária por: Fulvio Faria.</p>
        <p className='my-6'>Fonte: <a className='underline' target='_blank' rel='noopener noreferrer' href='https://www.afnor.org/actualites/coronavirus-telechargez-le-modele-de-masque-barriere/'>https://www.afnor.org/actualites/coronavirus-telechargez-le-modele-de-masque-barriere/</a></p>
        
        <p className='my-6'>
          <a className='bg-gray-100 hover:bg-gray-200 border-2 h-full block p-4' target='_blank' rel='noopener noreferrer' href='https://docs.google.com/document/d/1Y9Obzs9i8sMBLDlj7Zo38i45ioi0cbyYO2YqhWrAcv4'>Encontrou uma melhoria no documento, envie seu comentário aqui.</a>
        </p>

      </div>
      <iframe className='w-full' style={{height: '480px'}} src="https://docs.google.com/document/d/e/2PACX-1vQr14WghBr2V9gJlCSiVgebVw_7qGaRUZsKbcIq-l5q6U2rTQ0pmSJQ5otkA-zmhVVoeokyBZu3djJu/pub?embedded=true"></iframe>
      <h2 className='font-bold mt-12'>Manual para Manuseio da Máscara de Barreira</h2>
      <p>Este manual foi entregue juntamente com o Kit desenvolvido e entregue na cidade de Pouso Alegre / MG.</p>
      <p className='my-6'>
        <a className='bg-gray-100 hover:bg-gray-200 border-2 h-full block p-4' target='_blank' rel='noopener noreferrer' href='https://docs.google.com/drawings/d/1Bmj-JYqvdtXBcgQj4lchsLfj_MHn6eIa-fYYsdTMXs4/edit?usp=sharing'>Quer imprimir o manual em alta qualidade? Abra-o aqui (você pode também criar uma cópia para fazer na sua cidade).</a>
      </p>
      <img className='shadow mt-6' src="https://docs.google.com/drawings/d/e/2PACX-1vT2uxb15LUfIPvAqNVoA094hmILV60Ad8UrvaR8XFTBhdts6_m4qAbFqxx-X5LfYot2i_k2w5fdzlE4/pub?w=1191&amp;h=1644" />
    </LayoutIdeias>
  )
}

export default ProducaoMascarasCaseiras
