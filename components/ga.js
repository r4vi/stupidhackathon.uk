/* global ga */
import React, { Component } from 'react'
import { config } from 'config'

class GA extends Component {
  componentDidMount () {
    /* eslint-disable */
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js', 'ga')
    /* eslint-enable */
    ga('create', config.gaId, 'auto')
    ga('send', 'pageview')
  }

  shouldComponentUpdate (nextProps) {
    return this.props.path !== nextProps.path
  }
  componentDidUpdate () {
    ga('send', 'pageview', this.props.path)
  }
  render () {
    return (<script></script>)
  }
}
GA.propTypes = {
  path: React.PropTypes.string,
}

export default GA
