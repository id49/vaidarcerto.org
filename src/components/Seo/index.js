import React from 'react'
import { Helmet } from 'react-helmet'

const Seo = ({ title = '', description, ogImage='/og-fb.jpg', ogTitle ='Vamos ajudar o pequeno empresário a passar por este momento', ogDescription='Materiais educativos e divulgação para pequenos negócios que ainda estão funcionando de maneira completa ou adaptados.' }) => {
  return (
    <Helmet title={title + ' | VaiDarCerto.org'}>
      { description && <meta name='description' content={description} />}
      <meta property='og:image' content={ogImage} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={ogDescription} />
    </Helmet>
  )
}
export default Seo
