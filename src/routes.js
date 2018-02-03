import React, { Component } from 'react'
import { Switch, Route } from 'react-router'

//components
import NotFound from 'components/NotFound/NotFound'

const routes = (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='*' component={NotFound}/>
    </Switch>
)

class Home extends Component {
    render(){
        return (<h1>Hi</h1>);
    }
}

export default routes;