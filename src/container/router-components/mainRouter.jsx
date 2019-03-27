import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Person from './person';
import Home from './home';

class MainRouter extends Component {
	render() {
		return (
			<div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/person' component={Person}/>
                </Switch>
            </div>
		)
    }
}

export default MainRouter
