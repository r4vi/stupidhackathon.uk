import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import access from 'safe-access'
import include from 'underscore.string/include'

class BlogIndex extends React.Component {
  render () {
    const pageLinks = []
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()

    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md'
        && !include(page.path, '/404')
        && include(page.path, '/projects')) {
        const title = access(page, 'data.title') || page.path
        pageLinks.push(
          <li
            key={page.path}
            style={{
              marginBottom: rhythm(1/4),
            }}
          >
            <Link to={prefixLink(page.path)}>{title}</Link>
          </li>
        )
      }
    })
    return (
        <div>
          <ul>
            {pageLinks}
          </ul>
        </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
