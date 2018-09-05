import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './reset.scss'
import '../assets/stylesheets/base.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
    <title>{data.site.siteMetadata.title}</title>
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100,100i,400,400i,700,700i" rel="stylesheet" />
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
