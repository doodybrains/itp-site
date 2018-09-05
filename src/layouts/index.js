import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './reset.scss'
import '../assets/stylesheets/base.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <html lang="en" />
      <title>{data.site.siteMetadata.title}</title>
      <link href="https://fonts.googleapis.com/css?family=Overpass|Overpass+Mono" rel="stylesheet"/>
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
