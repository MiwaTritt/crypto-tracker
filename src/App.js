import React, { Component } from 'react'
import { Switch, Route, Link, IndexRoute } from 'react-router'

import Header from 'components/NavHeader/NavHeader'
import routes from 'routes'

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            { routes }
        </div>  
    )
  }
}

export default App