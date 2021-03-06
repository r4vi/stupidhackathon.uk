import React from 'react'
import DocumentTitle from 'react-document-title'

import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle } from 'utils/typography'
import { colors } from 'utils/colors'

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  render () {
    const title = DocumentTitle.rewind()

    let cssLink
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={prefixLink('/styles.css')} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=5.0"
          />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@stupidhackuk" />
            <meta name="twitter:title" content="Stupid Hackathon London" />
            <meta name="twitter:description" content="Come, build something useless." />

            <meta property="og:url" content="https://www.stupidhackathon.uk/" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Stupid Hackathon London" />
            <meta property="og:description" content="Come, build something useless." />
            <title>{title}</title>
          <TypographyStyle />
            {cssLink}
          <link rel="stylesheet" type="text/css" href="https://css.tito.io/v1.1" />
          <style
            dangerouslySetInnerHTML={{
              __html:
                `
                  a {
                    color: ${colors.bg};
                  }
                `,
            }}
          />
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink('/bundle.js')} />
          <script src="https://js.tito.io/v1" defer></script>
         </body>
      </html>
    )
  },
})
