import React from 'react'
import { Helmet } from 'react-helmet'

const Seo = ({ title = '', description }) => {
  return (
    <Helmet title={title + '| VaiDarCerto.org'}>
      { description && <meta name='description' content={description} />}
    </Helmet>
  )
}
export default Seo
