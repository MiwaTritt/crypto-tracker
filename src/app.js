import React, { Component } from 'react'
import { Switch, Route, Link, IndexRoute } from 'react-router'

//components
import Header from 'components/NavHeader/NavHeader'
import NotFound from 'components/NotFound/NotFound'

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Main />
        </div>  
    )
  }
}

//setup routes
const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='*' component={NotFound}/>
    </Switch>
  </main>
)

class Home extends Component {
    render(){
        return (<h1>Hi</h1>);
    }
}

export default App