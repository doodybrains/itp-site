import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './reset.scss'
import '../assets/stylesheets/base.scss'
import favicon from '../assets/favicon.ico'

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <html lang="en" />
      <title>{data.site.siteMetadata.title}</title>
      <link rel="icon" href={favicon} />
      <link href="https://fonts.googleapis.com/css?family=Overpass|Overpass+Mono|IBM+Plex+Mono:400,400i" rel="stylesheet"/>
    </Helmet>

    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
