import React, { Component } from 'react'

class GA extends Component {
  componentDidMount () {
    (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,"script","https://www.google-analytics.com/analytics.js","ga")
    ga("create", "UA-46090922-5", "auto")
    ga("send", "pageview")
  }

  shouldComponentUpdate (nextProps, nextState) {
    return this.props.path != nextProps.path
  }
  componentDidUpdate (prevProps, prevState) {
    ga("send", "pageview")
  }
    
  render () {
    return (<script></script>)
  }

  should
}

export default GA
